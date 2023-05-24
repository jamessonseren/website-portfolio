import { createRef, useEffect } from 'react'
import CardSkill from '../CardSkills';
import './index.css'

export default function BannerSkills() {

  const cardRefs = [
    createRef<HTMLDivElement>(),
    createRef<HTMLDivElement>(),
    createRef<HTMLDivElement>(),
    createRef<HTMLDivElement>(),
    createRef<HTMLDivElement>(),
    createRef<HTMLDivElement>(),
    createRef<HTMLDivElement>(),
    createRef<HTMLDivElement>(),
  ];

  useEffect(()=>{
    function handleScroll() {
      const trigger = window.innerHeight / 5 * 4
  
      const cardTop = cardRefs.map((cardRef) =>
        Number(cardRef.current?.getBoundingClientRect().top))
  
      cardTop.forEach((cardTop, index) => {
        if (cardTop < trigger) {
          cardRefs[index].current?.classList.add('showCard');
        } else {
          cardRefs[index].current?.classList.remove('showCard');
        }
      });

    }
    window.addEventListener('scroll', handleScroll);


  }) 
  
 


  return (
    <div className='banner-skills'>
      <h1>Skills</h1>
      <section className="skill-cards">

        <CardSkill
          ref={cardRefs[0]}
          title="HTML"
          image="Assets/Images/html.png"
        />
        <CardSkill
          ref={cardRefs[1]}
          title="CSS"
          image="Assets/Images/css.png"

        />
        <CardSkill
          ref={cardRefs[2]}
          title="JavaScript"
          image="Assets/Images/javascript.png"

        />
        <CardSkill
          ref={cardRefs[3]}
          title="ReactJs"
          image="Assets/Images/react.png"

        />
        <CardSkill
          ref={cardRefs[4]}
          title="React Native"
          image="Assets/Images/react_native.png"

        />
        <CardSkill
          ref={cardRefs[5]}
          title="TypeScript"
          image="Assets/Images/typescript.png"

        />
        <CardSkill
          ref={cardRefs[6]}
          title="NodeJs"
          image="Assets/Images/node.png"

        />
        <CardSkill
          ref={cardRefs[7]}
          title="SQL & NoSQL"
          image="Assets/Images/database.png"

        />
      </section>
    </div>
  );

}

