

export default function Pricing(){
    return(
        <section>
            <div className="w-full h-auto flex flex-col mt-4">
                <h2 className="title pt-10 text-center pl-4 text-[1.8rem]">Preços e Taxas</h2>
                <p className="paragraph text-center text-gray-500 pt-2">Os melhores preços e taxas do mercado só aqui!</p>
                <div className="w-[70%] h-[30x] mx-auto mt-2 rounded-sm bg-orange-100">
                    <p className="paragraph text-center text-orange-600 pt-2 text-[0.7rem]" >
                        As comissões são cobradas por transacções, nenhuma comissão é cobrada para registar ou fazer manutenção da conta
                    </p>
                </div>
            </div>
        </section>
    )
}