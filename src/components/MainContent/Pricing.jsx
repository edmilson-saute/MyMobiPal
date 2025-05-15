import CardPricing from "./CardPricing"

export default function Pricing() {
    return (
        <section>
            <div className="w-[90%] h-auto flex flex-col mt-4 mx-auto">
                <h2 className="title pt-10 text-center pl-4 text-[1.8rem]">Preços e Taxas</h2>
                <p className="paragraph text-center text-gray-500 pt-2">Os melhores preços e taxas do mercado só aqui!</p>
                <div className="w-[70%] h-[30x] mx-auto mt-2 rounded-sm bg-orange-100 ">
                    <p className="paragraph text-center text-orange-600 pt-2 text-[0.7rem] lg:text-[0.9rem] lg:px-4" >
                        As comissões são cobradas por transacções, nenhuma comissão é cobrada para registar ou fazer manutenção da conta
                    </p>
                </div>
                <div className="md:flex md:flex-row md:flex-wrap md:space-y-2 md:mt-5">
                    <CardPricing titulo={"Transferência Bancaria"} />
                    <CardPricing titulo={"Pagamentos móveis"} />
                    <CardPricing titulo={"Cartão de Crédito e Débito"} />
                    <CardPricing titulo={"Pagamento de Serviços e Produtos"} />
                    <div className="hidden lg:block lg:w-[40%] h-[10px]"></div>
                    <div className="hidden lg:block lg:w-[40%] h-[10px]"></div>
                </div>

            </div>
        </section>
    )
}