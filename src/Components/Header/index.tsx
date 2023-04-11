import './index.css';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {BiMenu} from "react-icons/bi"
import { MenuMobile } from '../MenuMobile';

export default function Header() {

    
    const [showMenu, setShowMenu] = useState<boolean>(false)

    const toggleMenu = () => {
        return (
            setShowMenu(!showMenu)
        )
        
    }

    
    const logoRef = useRef<HTMLAnchorElement>(null);

    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
   
    return (
        <header>
            <Link ref={logoRef} onClick={handleClick} className='logo' to="/">
                <span>Jamesson</span> <span className='seren'>Seren</span>
                <p>FullStack Engineer</p>
            </Link>
            <BiMenu  className='menu-icon' onClick={toggleMenu} />
            <MenuMobile showMenuMobile={showMenu} setShowMenuMobile={setShowMenu}/>
            <nav className='menu'>
                <Link className='projects' to="/projects">Projects</Link>
                <Link className='about' to="/about">About</Link>
                <Link className='contact' to="/contact">Contact</Link>
            </nav>
        </header>

    )
}