import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import List from "./List";

export default function ServicosProdutosModal() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false); 
    };

    if (!isOpen) return null; 

    return (
        <div className="w-full h-auto mt-14 fixed top-0 left-0 z-50 bg-white lg:z-10 lg:h-0">
            <div className="max-w-2xl pl-5 overflow-auto h-auto mx-auto bg-white rounded-sm grid grid-cols-1 gap-3 shadow lg:max-w-5xl lg:grid-cols-4 lg:h-40 lg:overflow-hidden lg:pl-0">
                <IoMdClose 
                    className="pl-5 pt-2 text-blue-950 text-5xl lg:hidden cursor-pointer" 
                    onClick={handleClose} 
                />
                <List title={"Pagamentos"} items={['Cartão de Crédito e Débito', 'Pagamentos Móveis', 'Pagamentos Recorrentes']} />
                <List title={"Segurança"} items={['Proteção contra fraudes', 'Proteção contra ChargesBacks', 'Encriptação']} />
                <List title={"Ferramentas de Negócios"} items={['Análise e Relatórios', 'Sistemas POS', 'APIs de Integração']} />
                <List title={"Mais Serviços"} items={['Consultoria', 'Suporte', 'Soluções Personalizadas']} />
            </div>
        </div>
    );
}
