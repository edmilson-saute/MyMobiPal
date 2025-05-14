import Header from "../layouts/Header";
import MainContent from '../layouts/MainContent';

export default function HomePage(){
    return(
        <div className="w-full h-auto flex flex-col">
            <Header/>
            <MainContent/>
        </div>
    )
}