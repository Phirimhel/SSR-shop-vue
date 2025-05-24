<?php

// Database configuration
$host = "localhost";
$db = "philirium_bd";
$user = "philirium_lord";
$pass = "12345";

// Create connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die(json_encode([
        "error" => "Database connection failed: " . $conn->connect_error
    ]));
}

// Set charset to utf8mb4
$conn->set_charset("utf8mb4"); 