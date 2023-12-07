<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\CategoryController; 
use App\Http\Controllers\API\ProductController; 
use App\Http\Controllers\API\FrontEndController; 
use App\Http\Controllers\API\CartController; 
use App\Http\Controllers\API\CheckoutController; 
use App\Http\Controllers\API\OrderController; 

Route::post('/register', [RegisteredUserController::class, 'store'])
                ->middleware('guest')
                ->name('register');

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
                ->middleware('guest')
                ->name('login');

Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
                ->middleware('guest')
                ->name('password.email');

Route::post('/reset-password', [NewPasswordController::class, 'store'])
                ->middleware('guest')
                ->name('password.store');

Route::get('/verify-email/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['auth', 'signed', 'throttle:6,1'])
                ->name('verification.verify');

Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware(['auth', 'throttle:6,1'])
                ->name('verification.send');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
                ->middleware('auth')
                ->name('logout');
Route::post('/store-category', [CategoryController::class, 'store'])
                ->middleware('guest')
                ->name('store-category');
Route::get('/view-category', [CategoryController::class, 'index'])
                ->middleware('guest')
                ->name('view-category');
Route::get('/view-category/edit-category/{id}', [CategoryController::class, 'edit'])
                ->middleware('guest')
                ->name('edit-category');
Route::post('/view-category/update-category/{id}', [CategoryController::class, 'update'])
                ->middleware('guest')
                ->name('update-category');
Route::delete('/delete-category/{id}', [CategoryController::class, 'destroy'])
                ->middleware('guest')
                ->name('delete-category');
Route::get('/all-category', [CategoryController::class, 'allcategories'])
                ->middleware('guest')
                ->name('all-category');
Route::post('/store-product', [ProductController::class, 'store'])
                ->middleware('guest')
                ->name('store-product');
Route::get('/view-product', [ProductController::class, 'index'])
                ->middleware('guest')
                ->name('view-product');
Route::get('/edit-product/{id}', [ProductController::class, 'edit'])
                ->middleware('guest')
                ->name('edit-product');
Route::post('/update-product/{id}', [ProductController::class, 'update'])
                ->middleware('guest')
                ->name('update-product');
Route::get('/get-category', [FrontEndController::class, 'category'])
                ->middleware('guest')
                ->name('get-category');
Route::get('/fetch-products/{slug}', [FrontEndController::class, 'product'])
                ->middleware('guest')
                ->name('fetch-products');
Route::get('/product-details/{category_slug}/{product_slug}', [FrontEndController::class, 'productDetails'])
                ->middleware('guest')
                ->name('product-details');
Route::post('/add-to-cart', [CartController::class, 'addtocart'])
                ->middleware('guest')
                ->name('add-to-cart');
Route::get('/cart', [CartController::class, 'viewCart'])
                ->middleware('guest')
                ->name('cart');
Route::put('/cart-update-quantity/{card_id}/{scope}', [CartController::class, 'updateQuantity'])
                ->middleware('guest')
                ->name('cart-update-quantity');
Route::delete('/delete-cartitem/{card_id}', [CartController::class, 'removeCartItem'])
                ->middleware('guest')
                ->name('delete-cartitem');
Route::post('/place-order', [CheckoutController::class, 'placeOrder'])
                ->middleware('guest')
                ->name('place-order');
Route::get('/view-order', [OrderController::class, 'index'])
                ->middleware('guest')
                ->name('view-order');