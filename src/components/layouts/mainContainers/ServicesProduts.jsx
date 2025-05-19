import { BsTruck } from "react-icons/bs";
import { CiBookmarkCheck } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { GoLaw } from "react-icons/go";
import { IoIosCard } from "react-icons/io";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdConnectedTv } from "react-icons/md";
import { SiNetflix } from "react-icons/si";
import Card from "./Card";

export default function ServicesProduts(){
    return(
        <section className="w-full h-auto">
            <div>
                <h1 className="text-blue-950 font-bold font-inter p-4 text-center text-lg lg:text-4xl lg:pt-14 ">Produtos e Serviços</h1>
                <p className="text-blue-500 font-semibold font-inter text-center text-sm">Compre, Venda e Pague com Segurança na MyMobiPal</p>
            </div>
            <div className="max-w-lg mx-auto grid grid-cols-1 lg:max-w-5xl lg:grid-cols-3">
                
                <Card icon={<IoStorefrontOutline/>} title={"Serviços Freelancers"} text={"Uma variedade de serviços informais"}/>
                <Card icon={<IoIosCard/>} title={"Mensalidade Escolar"} text={"Pague as suas propinas de forma rápida e fácil"}/>
                <Card icon={<FiShoppingCart/>} title={"Compra de Produtos"} text={"Compre o produto que deseja"}/>
                <Card icon={<CiBookmarkCheck/>} title={"Bookings/Reservas"} text={"Garanta sua hospedagem com eficiência"}/>
                <Card icon={<SiNetflix/>} title={"Netflix"} text={"Pague a sua Netflix com flexibilidade"}/>
                <Card icon={<MdConnectedTv/>} title={"Tv a Cabo"} text={"Pague a sua TV a cabo favorita"}/>
                 <Card icon={<GoLaw/>} title={"Seguros"} text={"Facilidade de pagamentos de seguros"}/>
                 <Card icon={<BsTruck/>} title={"Fornecedores"} text={"Pague aos seus fornecedores de forma segura"}/>
            </div>
        </section>
    )
}