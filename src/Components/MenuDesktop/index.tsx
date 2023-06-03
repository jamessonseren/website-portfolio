import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./index.css";
import { useEffect, useState } from "react";


export function MenuDesktop() {
  const [projectPage, setProjectPage] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;
  useEffect(() => {
    if (pathname === "/projects") {
      setProjectPage(true);
    } else setProjectPage(false);
  }, []);

  const HandleScrollLinkClick = (to: string) => {
    if (pathname.startsWith("/projects")) {
      navigate("/");

      setTimeout(()=>{

          const element = document.getElementById(to);
          if (element) {
            const offsetTop = element.offsetTop;
            window.scrollTo({
              top: offsetTop - 100,
              behavior: "smooth",
            });
          }
      }, 1000)
    }
  };
  useEffect(()=>{
    
  },[HandleScrollLinkClick])

  return (
    <nav className='menu-desktop'>
      <Link className="projects" to="/projects">
        Projects
      </Link>
      {projectPage ? (
        <Link to="/">About</Link>
      ) : (
        <ScrollLink
          className="about"
          to="about"
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => HandleScrollLinkClick("about")}
        >
          About
        </ScrollLink>
      )}
      {projectPage ? (
        <Link to="/">Skills</Link>
      ) : (
        <ScrollLink
        className="skills"
        to="skills"
        smooth={true}
        offset={-100}
        duration={500}
        onClick={() => HandleScrollLinkClick("skills")}
      >
        Skills
      </ScrollLink>
      )}
       {projectPage ? (
        <Link to="/">Contact</Link>
      ) : (
        
      <ScrollLink
      className="contact"
      to="contact"
      smooth={true}
      offset={-100}
      duration={500}
      onClick={() => HandleScrollLinkClick("contact")}
    >
      Contact
    </ScrollLink>
      )}

 
    </nav>
  );
}
