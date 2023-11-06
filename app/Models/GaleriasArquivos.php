<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GaleriasArquivos extends Model
{
    use HasFactory;

    protected $fillable = [
        'galerias_id',
        'url',
        'tipo',
        'tamanho',
    ];

    public function create($idGaleria, $url, $tipo, $tamanho)
    {
        $this->newQuery()
            ->create([
                'galerias_id' => $idGaleria,
                'url' => $url,
                'tipo' => $tipo,
                'tamanho' => $tamanho,
            ]);
    }

    public function galeria($id)
    {
        return $this->newQuery()
            ->where('galerias_id', $id)
            ->get()
            ->transform(function ($item) {
                return [
                    'id' => $item->id,
                    'url' => asset('storage/' . $item->url),
                ];
            });
    }
}
