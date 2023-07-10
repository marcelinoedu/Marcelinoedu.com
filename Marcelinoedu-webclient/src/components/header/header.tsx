import logo from '../../assets/logo.png';
import './Header.css';

function Header(){
    return (
    <header id='header'>
        <a href="#" id='left-side'>
            <img src={logo} alt="Personal logo" />
            <p>Eduardo Marcelino</p>
        </a>
       <div id='right-side'>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
       </div>
    </header>
    )
}

export default Header