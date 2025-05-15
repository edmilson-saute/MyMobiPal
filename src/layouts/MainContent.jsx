import Functionalities from '../components/MainContent/Functionalities';
import Pricing from '../components/MainContent/Pricing';
import ProductsServices from '../components/MainContent/ProductsServices';

export default function MainContent(){
    return(
        <main>
            <ProductsServices/>
            <Functionalities/>
            <Pricing/>
        </main>
    )
}