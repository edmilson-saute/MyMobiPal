import { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import logo from '../../assets/logo.png';
import MenuModal from '../Header/MenuModal';

export default function NavBar(){
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div>
            <div className="w-full h-[70px] mt-5 bg-white flex flex-row justify-between items-center">
                <img src={logo} alt="" className='w-[50%] h-[50%] object-cover ml-2' />
                <select className="w-[120px] h-[30px] pl-2 rounded-sm mr-2 bg-white text-blue-400 border-2 border-blue-400" name="" id="">
                    <option value="">Portuguese</option>
                    <option value="">English</option>
                </select>
                <FiAlignRight onClick={() => setOpenMenu(!openMenu)} style={{ fontSize: '1.8rem' }} className='text-black mr-4' />
            </div>
            {openMenu == false ? (<></>) : (<MenuModal/>)}
        </div>


    )
}