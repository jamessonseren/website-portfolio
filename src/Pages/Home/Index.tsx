import BannerHome from "../../Components/BannerHome";
import BannerSkills from "../../Components/BannerSkills";
import {  ToastContainer } from "react-toastify";

export default function Home() {
    return (
        <>
            <BannerHome />
            <BannerSkills />
            <ToastContainer style={{ height: "auto" }}/>
        </>

    )
}