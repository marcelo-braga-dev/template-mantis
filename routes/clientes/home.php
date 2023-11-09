<?php

use App\Http\Controllers\Clientes\HomeController;
use Illuminate\Support\Facades\Rout;

Route::get('home', [HomeController::class, 'index'])->name('home');

include __DIR__ . '/galerias.php';

