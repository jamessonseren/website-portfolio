import './index.css'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export default function BannerHome() {
    function handleDownloadClick() {
        return toast.success('Download completed',
            {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                closeButton: false,

            });
    }

    return (
        <section className="main-banner">
            <div className="left-content">
                <h1>Welcome to my Website</h1>
                <p>Please, feel free to take a look at my website. You can watch my video to understand more about me
                    and my projects. <br></br>
                    Below there is a button where you can download my CV.
                </p>
                <div className='tech-icons'>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJsSquare />
                    <FaReact />
                    <SiTypescript />
                    <FaNodeJs />
                    <FaDatabase />
                </div>
                <a href="./cv_Jamesson_seren.pdf" download onClick={handleDownloadClick}>Download CV
                    
                </a>


            </div>
            
            <div className='video'>
                <iframe src="https://www.youtube.com/embed/pT2YI9m2n9E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
            </div>
            <div className='mobile-content'>
                <p>Please, feel free to take a look at my website. You can watch my video to understand more about me
                    and my projects.
                    Below there is a button where you can download my CV.
                </p>
                <div className='tech-icons-mobile'>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJsSquare />
                    <FaReact />
                    <FaNodeJs />
                    <FaDatabase />
                </div>
                <a href="./cv_Jamesson_seren.pdf" download onClick={handleDownloadClick}>Download CV
                    
                </a>
            </div>
        </section>
    )
}