import NavBar from '../components/Header/NavBar';
import '../layouts/styles/Header.css';

export default function Header(){
    return(
        <header className='container'>
            <nav className='w-full h-auto'>
                <NavBar/>
                <h1 className='text-black font-title'>Hello, i love coding</h1>
                
            </nav>
        </header>
    );
}