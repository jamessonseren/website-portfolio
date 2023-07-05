import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectsList from "../../Services";
import './index.css';

export default function ProjectDetails() {

  interface ProjectProps {
    id: string,
    name: string,
    image: string,
    video: string,
    description: string,
    access:string
  }
  const [project, setProject] = useState<ProjectProps>()
  const { id } = useParams();
  const navigation = useNavigate();


  useEffect(() => {

    function getProjectDetails() {
      
      const findProject = projectsList().find((item) => item.id === id)
      console.log("find project: ", findProject)

      if (!findProject) {
        navigation('*', {replace:true})
        
      }

      setProject(findProject)
      
     
    }
    getProjectDetails()

  }, [id, navigation])


  return (
    <section className="projectDetails">
      <div className="project-detail">
        <h1>{project?.name}</h1>
        <iframe src={project?.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <p>{project?.description}</p>
        <a href={project?.access} target="_blank" rel="noreferrer">See more...</a>
      </div>

    </section>
  );
}


