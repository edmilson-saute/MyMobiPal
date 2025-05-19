import List from "./List"

export default function NavMenuModal() {
    return (
        <div className="hidden  h-20 mt-14  fixed top-0 left-0 z-10 lg:w-full lg:block">
            <div className="max-w-5xl h-40 mx-auto bg-white rounded-sm grid grid-cols-4 gap-3 shadow">
                <List title={"Pagamentos"} items={['Cartão de Crédito e Débito', 'Pagamentos Móveis', 'Pagamentos Recorrentes']} />
                <List title={"Segurança"} items={['Proteção contra fraudes', 'Proteção contra ChargesBacks', 'Encriptação']} />
                <List title={"Ferramentas de Negócios"} items={['Análise e Relatórios', 'Sistemas POS', 'APIs de Integração']} />
                <List title={"Mais Serviços"} items={['Consultoria', 'Suporte', 'Soluções Personalizadas']} />
            </div>
        </div>
    )
}