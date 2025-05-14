import '../Header/styles/MiniForm.css';

export default function MiniForm() {
    return (
        <div className='w-full h-auto flex flex-col mt-5 lg:mt-16 lg:ml-16 lg:mb-5'>
            <h1 className='title text-[1.8rem] pl-4 pr-4 break-words md:text-[2.3rem] md:pr-56 md:pl-9 lg:text-[2.8rem] lg:pr-2 '>
                Melhor Plataforma Online de <span className='text-blue-400'>Pagamentos</span> de Serviços e Produtos
            </h1>
            <p className='paragraph pl-4 pr-4 text-gray-500 break-words pt-4 md:pl-9'>
                Faça as suas compras e vendas de forma segura com a MyMobiPal
            </p>

            <div className="mt-6 px-4 space-y-4 md:ml-5">

                <form className='flex flex-col space-y-4' >
                    <div className='w-85% h-[50px] bg-white rounded-sm flex flex-row paragraph md:w-[65%] lg:w-[95%]'>
                        <select style={{fontSize:'0.8rem'}} className='w-[45%] h-full border-r-[1px] border-gray-300 pl-3 ' name="" id="">
                            <option value="Comprar">Comprar</option>
                            <option value="Vender">Vender</option>
                            <option value="Solicitar">Solicitar</option>
                        </select>
                        <input className='pl-3 w-full' style={{fontSize:'0.8rem'}} type="text" name="" id="" placeholder='Selecione o serviço ou produto' />
                    </div>
                    <div className='w-85% h-[50px] bg-white rounded-sm flex flex-row paragraph md:w-[65%] lg:w-[95%] '>
                        <div className='w-[36%] h-full border-r-[1px] border-gray-300 md:w-[36%] lg:w-[36%]'>
                            <p style={{fontSize:'0.7rem'}} className='pl-2 pt-4'>pelo valor total</p>
                        </div>
                        <div className='w-[40%] h-full border-r-[1px] border-gray-300'>
                            <input style={{fontSize:'0.8rem'}} type="text" className='pl-2 pt-3 h-full w-full pb-2' />
                        </div>
                        <div className='w-[40%] h-full'>
                            <p style={{fontSize:'0.8rem'}} className='text-center pt-4'>Metical</p>
                        </div>
                    </div>
                </form>
                
                
                <button style={{fontSize:'0.8rem'}} className='w-[120px] paragraph h-[40px] bg-blue-500 text-white rounded-sm outline-none border-none'>Continuar</button>
            </div>
        </div>
    );
}
