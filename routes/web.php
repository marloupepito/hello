<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CartProductsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
    // return Inertia::render('Index/Layout');
// });

Route::get('/', [CartProductsController::class, 'index'])->name('Index');

Route::get('/place_order', function () {
    return Inertia::render('PlaceOrder/Layout');
})->name('place_order');

Route::get('/order_completed', function () {
    return Inertia::render('OrderCompleted/Layout');
})->name('order_completed');

Route::get('/search_tickets', function () {
    return Inertia::render('SearchTickets/Layout');
})->name('search_tickets');

Route::get('/upgrade_orders', function () {
    return Inertia::render('UpgradeOrders/Layout');
})->name('upgrade_orders');


Route::get('/upgrade_place_order', function () {
    return Inertia::render('UpgradePlaceOrder/Layout');
})->name('upgrade_place_order');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');






Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
