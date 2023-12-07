<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\CategoryController; 
use App\Http\Controllers\API\ProductController; 
use App\Http\Controllers\API\FrontEndController; 
use App\Http\Controllers\API\CartController; 
use App\Http\Controllers\API\CheckoutController; 


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/register', [RegisteredUserController::class, 'store']);
Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/forgot-password', [PasswordResetLinkController::class, 'store']);
Route::get('/get-category', [FrontEndController::class, 'category']);
Route::get('/fetch-products/{slug}', [FrontEndController::class, 'product']);
Route::get('/product-details/{category_slug}/{product_slug}', [FrontEndController::class, 'productDetails']);
Route::post('/add-to-cart', [CartController::class, 'addtocart']);
Route::get('/cart', [CartController::class, 'viewCart']);
Route::put('/cart-update-quantity/{card_id}/{scope}', [CartController::class, 'updateQuantity']);
Route::delete('/delete-cartitem/{cart_id}', [CartController::class, 'removeCartItem']);
Route::post('/place-order', [CheckoutController::class, 'placeOrder']);

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
    Route::post('/logout', [AuthController::class, 'destroy']);
    //category
    Route::get('/view-category', [CategoryController::class, 'index']);
    Route::post('/store-category', [CategoryController::class, 'store']);
    Route::get('/view-category/edit-category/{id}', [CategoryController::class, 'edit']);
    Route::post('/view-category/update-category/{id}', [CategoryController::class, 'update']);
    Route::delete('/delete-category/{id}', [CategoryController::class, 'destroy']);
    Route::get('/all-category', [CategoryController::class, 'allcategories']);

    //product
    Route::post('/store-product', [ProductController::class, 'store']);
    Route::get('/view-product', [ProductController::class, 'index']);
    Route::get('/edit-product/{id}', [ProductController::class, 'edit']);
    Route::post('/update-product/{id}', [ProductController::class, 'update']);

    //order
    Route::get('/view-order', [OrderController::class, 'index']);
});