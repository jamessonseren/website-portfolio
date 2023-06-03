import { Link } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll";
import './index.css'

interface MenuMobileProps{
    showMenuMobile:boolean;
    setShowMenuMobile:(show:boolean) => void
}
export function MenuMobile(props: MenuMobileProps){
    return(
        <nav className={`menu-mobile ${props.showMenuMobile ? 'show' : ''}`}>
                <Link className='projects' to="/projects">Projects</Link>
                <ScrollLink className='about' to="about" smooth={true} offset={-100} duration={500}>About</ScrollLink>
                <ScrollLink className='skills' to="skills" smooth={true} offset={-100} duration={500}>Skills</ScrollLink>
                <ScrollLink className='contact-mobile' to="contact" smooth={true} offset={-100} duration={500}>Contact</ScrollLink>
        </nav>
    )
}