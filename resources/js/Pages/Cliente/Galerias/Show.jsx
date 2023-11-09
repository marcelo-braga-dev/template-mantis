import LayoutCliente from "@/Layouts/ClienteLayout/LayoutCliente.jsx";
import Galeria from "@/Pages/Cliente/Galerias/Show/Galeria.jsx";
import Pastas from "@/Pages/Cliente/Galerias/Show/Pastas.jsx";

export default function ({arquivos, pastas, galeria}) {
    return (
        <LayoutCliente titlePage="Galeria" voltar={route('home')}>
            <Pastas pastas={pastas} galeria={galeria}/>
            <Galeria arquivos={arquivos}/>
        </LayoutCliente>
    )
}
