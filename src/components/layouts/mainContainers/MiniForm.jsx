import { IoIosAddCircleOutline } from "react-icons/io";
import { LuHandshake } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function MiniForm() {
    return (
        <section className="w-full h-auto bg-blue-950 flex flex-col">
            <div className="max-w-lg text-center font-inter mb-6  md:mx-auto  lg:max-w-5xl ">
                <h1 className="text-white font-semibold p-4 text-lg lg:text-4xl lg:pt-14 ">Melhor Plataforma Online de Pagamentos de Produtos e Serviços</h1>
                <p className="px-10 text-white text-sm font-light lg:text-[1.3rem] lg:pb-10">Transacione com segurança com nossa plataforma de pagamento ponto a ponto</p>
                <form className="w-11/12 mx-auto h-auto shadow mt-4 bg-white rounded-lg pt-5" >
                    <div className="w-11/12 mx-auto mt-4 h-auto border-[1px] border-gray-500 rounded-lg grid grid-cols-3">
                        <div className="p-4 text-gray-500 flex justify-evenly items-center hover:rounded-l-lg hover:bg-blue-500 hover:text-white text-sm cursor-pointer font-semibold lg:justify-center lg:p-2">
                            <MdOutlineShoppingCart className="text-md lg:text-[1.3rem]" />
                            <span className="text-[0.6rem] lg:text-[0.8rem] lg:ml-3  ">Comprar</span>
                        </div>
                        <div className="p-4 text-gray-500 flex justify-evenly items-center hover:bg-blue-500 hover:text-white text-sm font-semibold cursor-pointer lg:justify-center lg:p-2">
                            <LuHandshake className="text-md lg:text-[1.3rem]" />
                            <span className="text-[0.6rem] lg:text-[0.8rem] lg:ml-3 ">Vender</span>
                        </div>
                        <div className="p-4 text-gray-500 flex justify-evenly items-center hover:rounded-r-lg hover:bg-blue-500 hover:text-white text-sm font-semibold cursor-pointer lg:justify-center lg:p-2">
                            <IoIosAddCircleOutline className="text-md lg:text-[1.3rem]" />
                            <span className="text-[0.6rem] lg:text-[0.8rem] lg:ml-3">Solicitar</span>
                        </div>
                    </div>
                    <div className="w-11/12 mx-auto mt-4 flex flex-col lg:grid lg:grid-cols-3 lg:gap-2 lg:items-center  ">
                       
                            <select name="" id="" className="p-2 h-16 border-[1px] border-gray-400 rounded-lg text-gray-500 text-[0.7rem]">
                                <option value="">Selecione o serviço ou produto</option>
                                <option value="Serviço">Serviço</option>
                                <option value="Software/Script">Software/Script</option>
                                 <option value="Freelancer">Freelancer</option>
                                 <option value="Assistente Virtual">Assistente Virtual</option>
                                 <option value="Dominio e Hospedagem">Dominio e Hospedagem</option>
                                 <option value="Contabilista/Gestor Financeiro">Contabilista/Gestor Financeiro</option>
                                 <option value="Produtor de Conteudo">Produtor de Conteudo</option>
                                 <option value="Serviços Bilingues">Serviços Bilingues</option>
                                 <option value="Especialista em Redes Sociais">Especialista em Redes Sociais</option>
                                 <option value="Desenvolvedor de App">Desenvolvedor de App</option>
                                 <option value="Designer Gráfico">Designer Gráfico</option>
                                 <option value="Empréstimo">Empréstimo</option>
                                 <option value="Outro">Outro</option>
                            </select>
                       
                        <div className="flex flex-row border-[1px] mt-4 border-gray-400 rounded-lg items-center lg:h-16 lg:mt-0">
                            <span className="p-3 border-r-[1px] border-gray-400">MZN</span>
                            <input type="text" name="" id="" className="pl-2" placeholder="1.00"/>
                        </div>
                        <button className="w-11/12 mx-auto bg-blue-500 rounded-lg text-white font-semibold p-3 mt-4 mb-4 lg:h-16">Prosseguir</button>
                    </div>
                </form>
            </div>
        </section>
    )
}