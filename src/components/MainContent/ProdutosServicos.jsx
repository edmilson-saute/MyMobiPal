import { CiBookmarkCheck } from "react-icons/ci";
import { FiTruck } from "react-icons/fi";
import { GoLaw } from "react-icons/go";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdConnectedTv, MdOutlineLocalGroceryStore, MdOutlinePayment } from "react-icons/md";
import { SiNetflix } from "react-icons/si";
import Card from '../MainContent/Card';

export default function ProdutosServicos() {
    return (
        <section>
            <div className="w-full h-auto flex flex-col">
                <h2 className="title text-[1.8rem] pt-10 text-center md:text-[2.8rem] ">Produtos e Serviços</h2>
                <p className="paragraph text-center text-gray-500 pl-4 pr-4 md:text-[1.4rem]">Compre, Venda e Pague com Segurança na MyMobiPal</p>
                <div className="flex flex-col md:flex-row md:flex-wrap">
                    <Card
                        icon={<IoStorefrontOutline />}
                        title={"Serviços Freelancers"}
                        text={"Uma variedade de serviços informais"}
                    />
                    <Card
                        icon={<MdOutlinePayment />}
                        title={"Mensalidade Escolar"}
                        text={"Pague as suas propinas de forma rápida e fácil"}
                    />
                    <Card
                        icon={<MdOutlineLocalGroceryStore />}
                        title={"Compra de Produtos"}
                        text={"Compre o produto que deseja"}
                    />
                    <Card
                        icon={<CiBookmarkCheck />}
                        title={"Bookings/Reservas"}
                        text={"Garanta sua hospedagem com eficiência"}
                    />
                    <Card
                        icon={<SiNetflix />}
                        title={"Netflix"}
                        text={"Pague a sua Netflix com flexibilidade"}
                    />
                    <Card
                        icon={<MdConnectedTv />}
                        title={"TV a Cabo"}
                        text={"Pague a sua TV a Cabo favorita"}
                    />
                    <Card
                        icon={<GoLaw />}
                        title={"Seguros"}
                        text={"Facilidades de pagamentos de seguros"}
                    />
                    <Card
                        icon={<FiTruck />}
                        title={"Fornecedores"}
                        text={"Pague aos seus fornecedores de forma segura"}
                    />
                    <div className="w-[90%] h-[10%] mx-auto  rounded-sm bg-white p-4 flex flex-col items-left mt-6 md:w-[45%] lg:w-[30%]">

                    </div>
                </div>

            </div>
        </section>
    )
}