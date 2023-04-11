import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectsList from "../../Services";
import './index.css';

export default function ProjectDetails() {

  interface ProjectProps {
    id: string,
    name: string,
    image: string,
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
        <img src={project?.image} alt="" />
        <p>{project?.description}</p>
        <a href={project?.access} target="_blank">See more...</a>
      </div>

    </section>
  );
}


