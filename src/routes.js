import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Index";
import Header from "./Components/Header";
import Projects from "./Pages/Projects";
import ProjectDetails from "./Pages/ProjectDetails";
import Error from "./Pages/Error";

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={ <Home /> } /> 
                    <Route path="/projects" element={ <Projects /> } />
                    <Route path="/projects/:id" element={ <ProjectDetails /> } />

                    <Route path="*" element={ <Error /> } />             
                </Routes>
        </BrowserRouter>
    )
}