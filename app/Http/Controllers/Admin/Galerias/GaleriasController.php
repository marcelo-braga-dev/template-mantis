<?php

namespace App\Http\Controllers\Admin\Galerias;

use App\Http\Controllers\Controller;
use App\Models\Eventos;
use App\Models\Galerias;
use App\Models\GaleriasArquivos;
use App\Models\GaleriasConteudos;
use App\Services\Files\UploadFilesService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GaleriasController extends Controller
{
    public function index()
    {
        $galerias = (new Galerias())->get();

        return Inertia::render('Admin/Galerias/Index', compact('galerias'));
    }

    public function create()
    {
        $eventos = (new Eventos())->getNomes();

        return Inertia::render('Admin/Galerias/Create', compact('eventos'));
    }

    public function show($id)
    {
        $galeria = (new Galerias())->find($id);
        $conteudos = (new GaleriasArquivos())->galeria($id);

        return Inertia::render('Admin/Galerias/Show',
            compact('galeria', 'conteudos'));
    }

    public function store(Request $request)
    {
        (new Galerias())->create($request);

        modalSucesso('Galeria criada com sucesso!');
        return redirect()->route('admin.galerias.index');
    }

    public function edit($id)
    {
        $galeria = (new Galerias())->find($id);

        return Inertia::render('Admin/Galerias/Edit', compact('galeria'));
    }

    public function upload($id, Request $request)
    {
        if ($request['arquivos']) {
            foreach ($request['arquivos'] as $file) {
                $url = (new UploadFilesService())->armazenarMultiplos($file, "galerias/$id");
                (new GaleriasArquivos())->create($id, $url, $file->getClientMimeType(), $file->getSize());
            }
        }

        modalSucesso('Arquivos armazenados com sucesso!');
        return redirect()->route('admin.galerias.show', $id);
    }
}
