import { forwardRef } from 'react';

interface CardSkillProps {
  title: string;
  image: string;
}

interface CardSkillRefProps {
  ref?: React.RefObject<HTMLDivElement>;
}

const CardSkill = forwardRef<HTMLDivElement, CardSkillProps & CardSkillRefProps>((props, ref) => {
  return (
    <div className="card" ref={ref}>
      <h3>{props.title}</h3>
      <img src={props.image} alt={props.title} />
      
    </div>
  );
});

export default CardSkill;

