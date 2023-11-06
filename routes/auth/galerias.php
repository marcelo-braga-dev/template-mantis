<?php

use App\Http\Controllers\Admin\Galerias\GaleriasController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')
    ->name('admin.')
    ->prefix('admin')
    ->group(function () {
        Route::resource('galerias', GaleriasController::class);

        Route::put('galeria/upload/{id}', [GaleriasController::class, 'upload'])
            ->name('galerias.upload');
    });
