import './index.css'

export default function About(){
    return(
        <section className="about-section">
            <h1>About me</h1>
            <div className='author-info'>
                <p>Hello, my name is Jamesson Seren, a 30-year-old Brazilian Fullstack developer. <br/><br/>
                    I have a degree from the Merchant Marine Officers School and worked as a Nautical Officer on a gas tanker for four years. 
                    In this role, I worked with mixed crews from all over the world, developing my communication and teamwork skills. 
                    This experience also taught me to think quickly in high-stress situations and make important decisions efficiently.<br/><br/>
                    Currently, I am attending Computer Science Bachelor's Degree at PUC Minas University and work with various technologies such as ReactJS, NextJS, NodeJS, and relational and non-relational databases, among others.
                    I am always looking to improve and advance my knowledge in technology, which allows me to be efficient and effective in any project.
                    I am open to new opportunities! If you have any questions, please do not hesitate to contact me.</p>
                <img src="/Assets/Images/author-about.jpg" alt="author image" />
            </div>
        </section>
    )
}