

export default function Card({ icon, title, text }){
    return(
        <div className="w-[90%] mx-auto  rounded-sm bg-white drop-shadow-lg shadow-black p-4 flex flex-col items-left mt-6 md:w-[45%] lg:w-[30%]">
            <div className="text-[2.4rem] mb-3 text-blue-500">{icon}</div>
            <h3 style={{fontSize:'1.1rem'}} className="font-semibold mb-2 paragraph">{title}</h3>
            <p style={{fontSize:'0.9rem'}} className="mb-4  paragraph text-gray-400 ">{text}</p>
            <a href="#" className="text-blue-500 font-semibold paragraph cursor-pointer hover:underline">
                Saiba Mais &gt;
            </a>
        </div>
    )
}