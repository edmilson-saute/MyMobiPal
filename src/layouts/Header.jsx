import womanPhoto from '../assets/woman.png';
import MiniForm from '../components/Header/MiniForm';
import NavBar from '../components/Header/NavBar';
import '../layouts/styles/Header.css';

export default function Header(){
    return(
        <header className='container max-w-full'>
            <nav className='w-full h-auto'>
                <NavBar/>
                <div className='flex flex-col lg:flex-row'>
                    <MiniForm/>
                    <img src={womanPhoto} alt="" className='mx-auto w-[60%] h-[60%] object-cover mt-3 lg:w-[45%] lg:h-[45%]'  />
                </div>
                
            </nav>
        </header>
    );
}