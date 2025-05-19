

export default function Card({ icon, title, text }){
    return(
        <div className="w-11/12 mx-auto  rounded-sm bg-white shadow p-4 flex flex-col items-left mt-6">
            <div className="text-[2.4rem] mb-3 text-blue-500">{icon}</div>
            <h3 style={{fontSize:'1.1rem'}} className="font-semibold mb-2 font-inter">{title}</h3>
            <p style={{fontSize:'0.9rem'}} className="mb-4  font-inter text-gray-400 ">{text}</p>
            <a href="#" className="text-blue-500 font-semibold paragraph cursor-pointer hover:underline">
                Saiba Mais &gt;
            </a>
        </div>
    )
}