import { Link } from "react-router-dom"
import './index.css'

interface MenuMobileProps{
    showMenuMobile:boolean;
    setShowMenuMobile:(show:boolean) => void
}
export function MenuMobile(props: MenuMobileProps){
    return(
        <nav className={`menu-mobile ${props.showMenuMobile ? 'show' : ''}`}>
                <Link className='projects-mobile' to="/projects">Projects</Link>
                <Link className='about-mobile' to="/about">About</Link>
                <Link className='contact-mobile' to="/contact">Contact</Link>
        </nav>
    )
}