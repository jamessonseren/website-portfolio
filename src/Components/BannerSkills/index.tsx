import { createRef, useEffect } from 'react'
import CardSkill from '../CardSkills';
import { DiHtml5, DiCss3, DiJavascript1 } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { GrReactjs } from 'react-icons/gr';
import { AiFillDatabase } from 'react-icons/ai';

import './index.css'

type BannerSkillsProps = {
  id: string
}

export default function BannerSkills({id}:BannerSkillsProps) {

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

  // useEffect(()=>{
  //   function handleScroll() {
  //     const trigger = window.innerHeight / 5 * 4
  
  //     const cardTop = cardRefs.map((cardRef) =>
  //       Number(cardRef.current?.getBoundingClientRect().top))
  
  //     cardTop.forEach((cardTop, index) => {
  //       if (cardTop < trigger) {
  //         cardRefs[index].current?.classList.add('showCard');
  //       } else {
  //         cardRefs[index].current?.classList.remove('showCard');
  //       }
  //     });

  //   }
  //   window.addEventListener('scroll', handleScroll);


  // }) 
  


  return (
    <div id={id} className='banner-skills'>
      <h1>Skills</h1>
      <p>Please, take a look at my skills and see how I can help you!</p>
      <section className="skill-cards">

        <CardSkill
          ref={cardRefs[0]}
          title="HTML"
          text="I've been working with HTML for years and I can provide assist for you!"
          icon=<DiHtml5 />
        />
        <CardSkill
          ref={cardRefs[1]}
          title="CSS"
          text="Let's create a beautiful design with CSS and its properties."
          icon=<DiCss3 />
          />
        <CardSkill
          ref={cardRefs[2]}
          title="JavaScript"
          text="testing"
          icon=<DiJavascript1 />
          />
        <CardSkill
          ref={cardRefs[3]}
          title="ReactJs"
          text="testing"
          icon=<FaReact />
          />
        <CardSkill
          ref={cardRefs[4]}
          title="React Native"
          text="testing"
          icon=<GrReactjs/>


        />
        <CardSkill
          ref={cardRefs[5]}
          title="TypeScript"
          text="testing"
          icon=<SiTypescript />
          />
        <CardSkill
          ref={cardRefs[6]}
          title="NodeJs"
          text="testing"
          icon=<IoLogoNodejs />
          />
        <CardSkill
          ref={cardRefs[7]}
          title="SQL & NoSQL"
          text="testing"
          icon=<AiFillDatabase />
          />
      </section>
    </div>
  );

}

