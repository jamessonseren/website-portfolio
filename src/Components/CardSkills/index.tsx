import { forwardRef, ReactNode } from "react";
import "./index.css";

interface CardSkillProps {
  title: string;
  text: string;
  icon: ReactNode;
}

interface CardSkillRefProps {
  ref?: React.RefObject<HTMLDivElement>;
}

const CardSkill = forwardRef<
  HTMLDivElement,
  CardSkillProps & CardSkillRefProps
>((props, ref) => {
  return (
    <div className="card" ref={ref}>
      <div className="top-box">
        <div>
          <p className="icon">{props.icon}</p>
          <h1>{props.title}</h1>
        </div>

      </div>
    </div>
  );
});

export default CardSkill;
