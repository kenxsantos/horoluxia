To run this file:

1. Clone this repository
2. Open VSCode
3. Run composer install and npm install
4. Run npm run dev
5. Open new terminal ->  cd laravel
6. Run cp .env.example .env and php artisan key:generate
7. Set
      APP_URL=hhttp://localhost:8000
      FRONTEND_URL=https://horoluxia.vercel.app
      SESSION_DOMAIN=localhost
      SANCTUM_STATEFUL_DOMAINS=http://localhost:8000
    
      DB_CONNECTION=mysql
      DB_HOST=127.0.0.1
      DB_PORT=3306
      DB_DATABASE=horoluxiadb
      DB_USERNAME=root
      DB_PASSWORD=
   
8. Run php artisan migrate
9. Run php artisan serve
