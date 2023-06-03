import "./index.css";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { MenuMobile } from "../MenuMobile";
import { MenuDesktop } from "../MenuDesktop";

export default function Header() {
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);

  const toggleMenu = () => {
    return setShowMenuMobile(!showMenuMobile);
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
        <MenuMobile showMenuMobile={showMenuMobile} setShowMenuMobile={setShowMenuMobile} />
        <MenuDesktop /> 
      </div>
    </header>
  );
}
