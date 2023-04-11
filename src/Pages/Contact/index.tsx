import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';


import './index.css'

export default function Contact(){
    return(
        <section className='contact-section'>
            <h1>Contact</h1>
            <div className='social-media'>
                <div className="linkedin">
                <a href="https://www.linkedin.com/in/jamesson-seren/" target='_blank'><FaLinkedin className="react-icons" color="#0077B5"/></a>
                <span>https://www.linkedin.com/in/jamesson-seren/</span>
                </div>
                <div className="github">
                <a href="https://github.com/jamessonseren"><FaGithub className="react-icons" color="#FFFFFF"/></a>
                <span>https://github.com/jamessonseren</span>
                </div>
                <div className="youtube">
                <a href='https://www.youtube.com/@Tech_JS'><FaYoutube className="react-icons" color="#FF0000"/></a>
                <span>https://www.youtube.com/@Tech_JS</span>
                </div>
                <div className="email">
                <IoMdMail  className="react-icons" color="#FFFFFF"/>
                <span>jamesson_seren@hotmail.com</span>

                </div>
                
            </div>
        </section>
    )
}