import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import logo from '../../../assets/logo.png';
import MobileMenu from '../headerContainers/MobileMenu';
import BtnLang from "./BtnLang";
import ServicosProdutosModal from "./ServicosProdutosModal";

export default function NavBar() {
    const [clicked, setClicked] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleClicked = () => {
        setClicked(!clicked);
        setShowMenu(!showMenu);
    }

    const handleClickHamburguerMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    }
    return (
        <nav className="w-full h-auto bg-white fixed top-0 left-0 z-10 shadow">
            <div className='w-full  p-2 flex justify-between items-center lg:max-w-5xl lg:mx-auto '>
                <img
                    src={logo}
                    alt=""
                    className='flex-shrink-0 object-contain w-40 h-10 '
                />
                <ul className="hidden font-semibold  lg:list-none lg:font-inter lg:flex lg:justify-evenly lg:space-x-8 lg:text-sm">
                    <li className="hover:text-blue-500 cursor-pointer">Home</li>
                    <li onClick={handleClicked} className="hover:text-blue-500 cursor-pointer flex flex-row items-center space-x-1"><span>Serviços e Produtos</span>
                        {clicked == false ? <IoIosArrowDown className="mt-1" /> : <IoIosArrowUp className="mt-1" />}
                    </li>
                    <li className="hover:text-blue-500 cursor-pointer">Preços</li>
                    <li className="hover:text-blue-500 cursor-pointer">Sobre Nós</li>
                    <li className="hover:text-blue-500 cursor-pointer">FAQ's</li>
                    <li className="hover:text-blue-500 cursor-pointer">Contactos</li>
                </ul>
                <div className="mr-2 flex flex-row items-center lg:space-x-2">
                    <BtnLang />
                    <button className={`hidden p-2 px-2  bg-blue-500 outline-none rounded-sm text-white font-inter text-center items-center cursor-pointer lg:block lg:text-sm`} >Entrar</button>
                    <button className={`hidden p-2 px-2  bg-blue-500 outline-none rounded-sm text-white font-inter text-center items-center cursor-pointer lg:block lg:text-sm`} >Criar Conta</button>

                    <HiBars3 onClick={handleClickHamburguerMenu} className='text-blue-700 ml-4 text-2xl mr-2 lg:hidden' />
                </div>
            </div>
            {showMobileMenu == false ? <></> : <MobileMenu />}
            {showMenu == false ? <></> : <ServicosProdutosModal />}
        </nav>
    );
}