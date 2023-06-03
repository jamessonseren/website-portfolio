import "./index.css";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { MenuMobile } from "../MenuMobile";

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    return setShowMenu(!showMenu);
  };

  const logoRef = useRef<HTMLAnchorElement>(null);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <div className="header-content">
        <Link ref={logoRef} onClick={handleClick} className="logo" to="/">
          <img src="Assets/Images//logo.png" alt="Logo" />
        </Link>
        <BiMenu className="menu-icon" onClick={toggleMenu} />
        <MenuMobile showMenuMobile={showMenu} setShowMenuMobile={setShowMenu} />
        <nav className="menu">
          <Link className="projects" to="/projects">
            Projects
          </Link>
          <ScrollLink className="about" to="about" smooth={true} offset={-100} duration={500}>
            About
          </ScrollLink>
          <ScrollLink className="skills" to="skills" smooth={true} offset={-100} duration={500}>
            Skills
          </ScrollLink>
          <ScrollLink className="contact" to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
}
