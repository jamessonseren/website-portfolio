import { forwardRef } from 'react';
import './index.css'

interface ProjectCardsProps {
  title: string;
  image: string;
  projectDetails: string
}

interface ProjectCardsRefProps {
  ref?: React.RefObject<HTMLDivElement>;
}

const ProjectCards = forwardRef<HTMLDivElement, ProjectCardsProps & ProjectCardsRefProps>((props, ref) => {
  return (
    <div className="card-projects" ref={ref}>
      <h3>{props.title}</h3>
      <img src={props.image} alt={props.title} />
      <a href={props.projectDetails} target='_blank'>Take a look!</a>
      
    </div>
  );
});

export default ProjectCards;

