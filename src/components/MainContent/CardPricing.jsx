import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";

export default function CardPricing({titulo}){
    return(
        <div className="w-[85%] h-auto bg-white shadow-black mx-auto drop-shadow-lg rounded-sm mt-4 flex flex-col md:w-[40%] lg:w-[30%]">
            <h3 className="text-center title text-black pt-4">{titulo}</h3>
            <div className="w-[50%] h-auto mx-auto flex flex-row justify-evenly mt-2">
                <FaCcVisa className="text-[2rem] text-blue-500"/>
                <FaCcPaypal className="text-[2rem] text-blue-500"/>
                <FaCcMastercard className="text-[2rem] text-blue-500"/>
            </div>
            <h3 className="text-center title text-black pt-8">Comissão</h3>
            <p className="paragraph text-center text-[0.8rem] pb-4">3.5% + MZN 1.00</p>
        </div>
    )
}