import Funcionalidades from '../components/MainContent/Funcionalidades';
import Pricing from '../components/MainContent/Pricing';
import ProdutosServicos from '../components/MainContent/ProdutosServicos';

export default function MainContent(){
    return(
        <main>
            <ProdutosServicos/>
            <Funcionalidades/>
            <Pricing/>
        </main>
    )
}