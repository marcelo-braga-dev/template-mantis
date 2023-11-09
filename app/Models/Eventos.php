<?php

namespace App\Models;

use App\Services\Files\UploadFilesService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eventos extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'descricao',
        'cidade',
        'estado',
        'logo'
    ];

    public function get()
    {
        return $this->newQuery()
            ->get()
            ->transform(function ($item) {
                return $this->dados($item);
            });
    }

    public function create($dados)
    {
        $url = (new UploadFilesService())->armazenarMultiplos($dados->logo, 'eventos/logos');

        $this->newQuery()
            ->create([
                'nome' => $dados->nome,
                'descricao' => $dados->descricao,
                'cidade' => $dados->cidade,
                'estado' => $dados->estado,
                'logo' => $url
            ]);
    }

    public function find($id)
    {
        $dados = $this->newQuery()
            ->find($id);

        return $this->dados($dados);
    }

    private function dados($item): array
    {
        return [
            'id' => $item->id ?? null,
            'nome' => $item->nome ?? null,
            'descricao' => $item->descricao ?? null,
            'cidade' => $item->cidade ?? null,
            'estado' => $item->estado ?? null,
            'localidade' => ($item->cidade ?? null) . '/' . ($item->estado ?? null),
            'logo' => asset('storage/' . $item->logo)
        ];
    }

    public function getNomes()
    {
        $dados = $this->newQuery()
            ->get();

        $res = [];
        foreach ($dados as $item) {
            $res[$item->id] = $this->dados($item);
        }
        return $res;
    }
}
