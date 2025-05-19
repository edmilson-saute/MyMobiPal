import MiniForm from "./mainContainers/MiniForm";
import ServicesProduts from "./mainContainers/ServicesProduts";

export default function Main(){
    return(
        <main className="flex flex-col mt-14">
            <MiniForm/>
            <ServicesProduts/>
        </main>
    )
}