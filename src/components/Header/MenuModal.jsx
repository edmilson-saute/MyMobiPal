import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import '../../components/Header/styles/NavBar.css';

export default function MenuModal() {
    const [arrow, setArrow] = useState(false);
    return (
        <div>
            <div className="w-full h-auto  bg-white mt-0 fixed top-24 left-0 z-50">
                <ul className="space-y-3 border-b-2 border-black">
                    <li className="text-black pl-3 mt-2">Home</li>
                    <li onClick={() => setArrow(!arrow)} className="text-black pl-3 mt-2 flex flex-row">Serviços e Produtos 
                        {arrow == false ? (<FaChevronDown style={{}} className="ml-2 mt-2"/>) : (<FaChevronUp style={{}} className="ml-2 mt-2"/>)}
                    </li>
                    <li className="text-black pl-3 mt-2">Preços</li>
                    <li className="text-black pl-3 mt-2 mb-4">FAQ's</li>
                    <div className="w-full h-auto mb-2 mt-4 flex flex-row">
                    <button className="w-[125px] h-[40px] ml-2 rounded-sm mr-2 bg-white text-blue-400 border-2 border-blue-400">Entrar na Conta</button>
                    <button className="w-[125px] h-[40px] ml-2 rounded-sm mr-2 bg-blue-400 text-white border-2 border-blue-400">Criar Conta</button>
                </div>
                </ul>
                
            </div>
            
        </div>
        
    )
}