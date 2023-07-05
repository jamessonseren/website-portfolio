import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import projectsList from '../../Services'
import './index.css'

export default function Projects() {
    
   interface ProjectProps{
    id: string,
    name: string,
    image: string,
    shortDescription: string,
   }
    const [elProjects, setProjects] = useState<ProjectProps[]>()

    useEffect(() => {
        async function GetProjects(){
            setProjects(projectsList())
        }
        GetProjects()
    }, [])

    return (
        <section className="project-banner">
           <div className="project-box">
                {elProjects?.map((project) => {
                    return(
                        <article key={project.id}>
                            <h1>{project.name}</h1>
                            <img src={project.image} alt={project.name}></img>
                            <p>{project.shortDescription}</p>
                            <Link to={`/projects/${project.id}`}>Check it out</Link>
                            
                        </article>
                    )
                })}
           </div>

        </section>
    )
}