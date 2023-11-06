<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('galerias_arquivos', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('galerias_id');
            $table->string('url');
            $table->string('tipo', 32);
            $table->bigInteger('tamanho');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('galerias_arquivos');
    }
};
