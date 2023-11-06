<?php

namespace App\Models;

use App\Services\Files\UploadFilesService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Galerias extends Model
{
    use HasFactory;

    private int $tamanho = 0;

    protected $fillable = [
        'titulo',
        'data',
        'eventos_id',
        'capa',
        'status',
        'descricao',
    ];

    public function create($dados)
    {
        $url = (new UploadFilesService())->armazenarMultiplos($dados['capa'], "galerias/capas");

        $this->newQuery()
            ->create([
                'titulo' => $dados->titulo,
                'data' => $dados->data,
                'eventos_id' => $dados->evento,
                'descricao' => $dados->descricao,
                'capa' => $url,
                'status' => 'aberto',
            ]);
    }

    public function get()
    {
        $eventos = (new Eventos())->getNomes();

        return $this->newQuery()
            ->orderByDesc('id')
            ->get()
            ->transform(function ($item) use ($eventos) {
                return $this->dados($item, $eventos);
            });
    }

    public function find($id)
    {
        $eventos = (new Eventos())->getNomes();

        $dados = $this->newQuery()
            ->find($id);

        return $this->dados($dados, $eventos);
    }

    public function evento($id)
    {
        $eventos = (new Eventos())->getNomes();

        return $this->newQuery()
            ->where('eventos_id', $id)
            ->get()
            ->transform(function ($item) use ($eventos) {
                return $this->dados($item, $eventos);
            });
    }

    private function dados($item, $evento): array
    {
        return [
            'id' => $item->id,
            'titulo' => $item->titulo,
            'data' => convert_data($item->data),
            'descricao' => $item->descricao,
            'status_nome' => $item->status,
            'status' => $item->status,
            'capa' => asset('storage/' . $item->capa),
            'ultima_atualizacao' => date('d/m/y H:i:s', strtotime($item->updated_at)),
            'evento' => [
                'id' => $evento[$item->eventos_id]['id'] ?? '',
                'nome' => $evento[$item->eventos_id]['nome'] ?? '',
                'localidade' => $evento[$item->eventos_id]['localidade'] ?? '',
            ]
        ];
    }
}
