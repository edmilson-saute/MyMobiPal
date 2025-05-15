import CheckCircleIcon from '../../assets/CheckCircleIcon.png';
import Phone from '../../assets/PhonePng1.png';
import '../../layouts/styles/Header.css';

export default function Functionalities() {
    return (
        <section>
            <div className="container-2 w-full h-auto flex flex-col lg:mt-10 lg:flex-row ">
                <img src={Phone} className='w-[70%] h-[70%] object-cover mt-4 mx-auto lg:w-[50%] lg:h-[50%] xl:w-[70%] xl:h-[70%] xl:mt-10' alt="" />
                <div className='md:ml-10 lg:ml-0 xl:mt-4'>
                    <h2 style={{ fontSize: '1.8rem' }} className="title pt-10 text-left pl-4 ">Funcionalidades</h2>
                    <p className="paragraph text-left pl-4 text-gray-500  pr-2">A MyMobiPal foi feita para ti e possui o melhor para ti</p>
                    <ul className='list-none mt-4 space-y-4'>
                        <li className='flex flex-row'>
                            <img src={CheckCircleIcon} alt="" className="ml-4 w-[8%] h-[8%] object-cover md:w-[6%] md:h-[6%] xl:w-[4%] xl:h-[4%]" />
                            <p className='paragraph text-black pt-1 pl-4 pr-6 font-bold text-[0.7rem] md:text-[1rem] md:pr-32 lg:pr-28 lg:pt-0.5'>Adequado para todo tipo de pagamento de serviços, produtos fisicos e digitais</p>
                        </li>
                        <li className='flex flex-row'>
                            <img src={CheckCircleIcon} alt="" className="ml-4 w-[8%] h-[8%] object-cover md:w-[6%] md:h-[6%] xl:w-[4%] xl:h-[4%]" />
                            <p className='paragraph text-black pt-1 pl-4 pr-6 font-bold text-[0.7rem] md:text-[1rem] md:pr-32 lg:pr-28 lg:pt-0.5'>Garantia de qualidade e satisfação para todos clientes e fornecedores</p>
                        </li>
                        <li className='flex flex-row'>
                            <img src={CheckCircleIcon} alt="" className="ml-4 w-[8%] h-[8%] object-cover md:w-[6%] md:h-[6%] xl:w-[4%] xl:h-[4%]" />
                            <p className='paragraph text-black pt-1 pl-4 pr-6 font-bold text-[0.7rem] md:text-[1rem] md:pr-32 lg:pr-28 lg:pt-0.5'>Facilidade no processo de pagamentos disponibilizando apenas um canal para todo tipo de pagamentos</p>
                        </li>
                        <li>
                            <button style={{ fontSize: '0.8rem' }} className='w-[120px] h-[40px]  ml-4 rounded-sm bg-blue-500 text-white paragraph mb-4 lg:mb-8 '>Criar Conta</button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}