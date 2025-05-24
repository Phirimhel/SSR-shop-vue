<?php

// Error reporting for development
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS and content type headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Database configuration
require_once 'config/database.php';

class ProductAPI {
    private $conn;
    private $apiUrl = 'https://fakestoreapi.com/products';

    public function __construct($conn) {
        $this->conn = $conn;
    }

    private function sendResponse($data, $statusCode = 200) {
        http_response_code($statusCode);
        echo json_encode($data);
        exit;
    }

    private function handleError($message, $statusCode = 400) {
        $this->sendResponse(['error' => $message], $statusCode);
    }

    private function sanitizeInput($input) {
        return $this->conn->real_escape_string($input);
    }

    private function formatProduct($row) {
        return [
            'id' => intval($row['id']),
            'title' => $row['title'],
            'price' => floatval($row['price']),
            'description' => $row['description'],
            'category' => $row['category'],
            'image' => $row['image'],
            'quantity' => intval($row['quantity']),
            'rating' => [
                'rate' => floatval($row['rating_rate']),
                'count' => intval($row['rating_count'])
            ]
        ];
    }

    public function getProduct($id) {
        $id = intval($id);
        $sql = "SELECT * FROM products WHERE id = ?";
        $stmt = $this->conn->prepare($sql);
        
        if (!$stmt) {
            $this->handleError("Database error: " . $this->conn->error, 500);
        }

        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 0) {
            $this->handleError("Product not found", 404);
        }

        $product = $result->fetch_assoc();
        $stmt->close();

        $this->sendResponse($this->formatProduct($product));
    }

    public function getAllProducts() {
        $sql = "SELECT * FROM products";
        $result = $this->conn->query($sql);

        if (!$result) {
            $this->handleError("Database error: " . $this->conn->error, 500);
        }

        $products = [];
        while ($row = $result->fetch_assoc()) {
            $products[] = $this->formatProduct($row);
        }

        $this->sendResponse($products);
    }

    public function syncProducts() {
        // Check if products table is empty
        $countCheck = $this->conn->query("SELECT COUNT(*) as total FROM products");
        $total = $countCheck->fetch_assoc()['total'];

        if ($total > 0) {
            return; // Don't sync if products exist
        }

        // Fetch products from API
        $json = @file_get_contents($this->apiUrl);
        if ($json === false) {
            $this->handleError("Failed to fetch products from API", 500);
        }

        $products = json_decode($json, true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            $this->handleError("Invalid JSON response from API", 500);
        }

        // Begin transaction
        $this->conn->begin_transaction();

        try {
            $stmt = $this->conn->prepare("
                INSERT INTO products (
                    id, title, price, description, category, 
                    image, quantity, rating_rate, rating_count
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            ");

            foreach ($products as $product) {
                $quantity = rand(1, 100);
                $rate = isset($product['rating']['rate']) ? floatval($product['rating']['rate']) : 0;
                $count = isset($product['rating']['count']) ? intval($product['rating']['count']) : 0;

                $stmt->bind_param(
                    "isdsssidi",
                    $product['id'],
                    $product['title'],
                    $product['price'],
                    $product['description'],
                    $product['category'],
                    $product['image'],
                    $quantity,
                    $rate,
                    $count
                );

                if (!$stmt->execute()) {
                    throw new Exception("Failed to insert product: " . $stmt->error);
                }
            }

            $this->conn->commit();
            $stmt->close();
        } catch (Exception $e) {
            $this->conn->rollback();
            $this->handleError($e->getMessage(), 500);
        }
    }
}

// Initialize API
try {
    $api = new ProductAPI($conn);

    // Handle single product request
    if (isset($_GET['id'])) {
        $api->getProduct($_GET['id']);
    }

    // Sync products if needed
    $api->syncProducts();

    // Get all products
    $api->getAllProducts();

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Internal server error']);
} finally {
    if (isset($conn)) {
        $conn->close();
    }
}
?>
