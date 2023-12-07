<?php

namespace App\Http\Middleware;

use Closure;

class CorsMiddleware
{
    public function handle($request, Closure $next)
    {
        // Handle preflight OPTIONS request
        if ($request->isMethod('OPTIONS')) {
            return response('')
                ->header('Access-Control-Allow-Origin', 'http://localhost:5173')
                ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
                ->header('Access-Control-Allow-Headers', 'Content-Type,  X-CSRF-TOKEN')
                ->header('Access-Control-Allow-Credentials', 'true'); // Set to true for credentials
        }

        // Continue with the actual request
        $response = $next($request);

        // Set CORS headers
        $response->headers->set('Access-Control-Allow-Origin', 'http://localhost:5173');
        $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-TOKEN');
        $response->headers->set('Access-Control-Allow-Credentials', 'true'); // Set to true for credentials

        return $response;
    }
}
