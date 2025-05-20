import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ServicosProdutosModal from "./ServicosProdutosModal";

export default function MobileMenu() {
    const [clicked, setClicked] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleClicked = () => {
        setClicked(!clicked);
        setShowMenu(!showMenu);
    }
    return (
        <div className="w-full h-auto lg:hidden">
            <div className="max-w-lg mx-auto flex flex-col p-2 pl-10 md:pl-5 md:max-w-3xl">
                <ul className="list-none font-inter space-y-2">
                    <li className="border-b-[0.5px] border-gray-300">Home</li>
                    <li  onClick={handleClicked} className=" border-b-[0.5px] border-gray-300 flex flex-row items-center space-x-1"><span>Serviços e Produtos</span>
                        {clicked == false ? <IoIosArrowDown className="mt-1" /> : <IoIosArrowUp className="mt-1" />}
                    </li>
                    <li className="border-b-[0.5px] border-gray-300">Preços</li>
                    <li className="border-b-[0.5px] border-gray-300">Sobre Nós</li>
                    <li className="border-b-[0.5px] border-gray-300">FAQ's</li>
                    <li className="border-b-[0.5px] border-gray-300">Contactos</li>
                </ul>
                <div className="flex items-center space-x-2 mt-2 mb-2">
                     <button className={`p-2 px-2  bg-blue-500 outline-none rounded-sm text-white font-inter text-center items-center`} >Entrar</button>
                    <button className={`p-2 px-2  bg-blue-500 outline-none rounded-sm text-white font-inter text-center items-center`} >Criar Conta</button>
                </div>
            </div>
            {showMenu == false ? <></> : <ServicosProdutosModal/>}
        </div>
    )
}