# SSR-shop-vue

Structure of project:

src/
│
├── assets/ # Статичные ресурсы (иконки, изображения, шрифты и т.д.)
│
├── components/ # Универсальные переиспользуемые компоненты
│ ├── Header.vue
│ ├── Footer.vue
│ └── ProductCard.vue
│
├── layouts/ # Основные шаблоны (например, главный layout)
│ └── MainLayout.vue
│
├── pages/ # Страницы (одна папка — одна страница маршрута)
│ ├── ProductsPage.vue # /products
│ ├── CartPage.vue # /cart
│ ├── WishlistPage.vue # /wishlist
│ ├── CheckoutPage.vue # /checkout
│ └── ResultPage.vue # /result
│
├── router/ # Конфигурация маршрутов
│ └── index.ts
│
├── stores/ # Pinia Stores (состояния приложения)
│ ├── cartStore.ts
│ ├── wishlistStore.ts
│ ├── productStore.ts
│ └── formStore.ts
│
├── services/ # API-запросы (axios и т.д.)
│ ├── productService.ts
│ └── orderService.ts
│
├── types/ # Общие интерфейсы и типы (Product, CartItem и т.д.)
│ └── index.ts
│
├── utils/ # Утилиты (например, formatPrice, validateInput и т.д.)
│ └── validators.ts
│
├── App.vue # Главный корневой компонент
└── main.ts # Точка входа в приложение
