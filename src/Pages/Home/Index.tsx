import BannerHome from "../../Components/BannerHome";
import BannerSkills from "../../Components/BannerSkills";
import About from "../../Components/About";
import Contact from "../../Components/Contact";

export default function Home() {
    
    return (
        <>
            <BannerHome />
            <About id="about"/>
            <BannerSkills id="skills"/>
            <Contact id="contact"/>
        </>

    )
}