import { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import logo from '../../assets/logo.png';
import MenuModal from '../Header/MenuModal';

export default function NavBar() {
    const [openMenu, setOpenMenu] = useState(false);
    //const [arrow, setArrow] = useState(false);
    return (
        <div>
            <div className="w-full h-[70px] mt-5 bg-white flex flex-row justify-between items-center lg:w-[85%] lg:mx-auto">
                <img src={logo} alt="" className='w-[50%] h-[50%] object-cover ml-2 md:w-[35%] md:h-[40%] lg:w-[20%] lg:h-[40%]' />
                
                <select className="w-[120px] paragraph h-[30px] pl-2 rounded-sm mr-2 bg-white text-blue-400 border-2 border-blue-400 md:ml-[270px] lg:ml-[130px]" style={{ fontSize: '0.7rem' }} name="" id="">
                    <option value="Portuguese">Portuguese</option>
                    <option value="English">English</option>
                </select>
                <div className="hidden lg:w-full lg:h-auto lg:mb-2 lg:mt-4 lg:flex flex-row justify-end">
                        <button className="w-[125px] h-[40px] ml-2 rounded-sm mr-2 bg-white text-blue-400 border-2 border-blue-400">Entrar na Conta</button>
                        <button className="w-[125px] h-[40px] ml-2 rounded-sm mr-2 bg-blue-400 text-white border-2 border-blue-400">Criar Conta</button>
                </div>
                <FiAlignRight onClick={() => setOpenMenu(!openMenu)} style={{ fontSize: '1.8rem' }} className='text-black mr-4 md:mr-10 lg:hidden' />
            </div>
            {openMenu == false ? (<></>) : (<MenuModal />)}
        </div>


    )
}