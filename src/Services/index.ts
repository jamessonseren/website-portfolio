
const projectsList = () => {
    return [
        {
            id: "1",
            name: "Chef's Digital",
            shortDescription: "Fullstack project with React, NodeJS, TypeScript PostgreSQL, and React Native.",
            image: "/Assets/Images/chefsdigital.png",
            video: "https://www.youtube.com/embed/YnBsZ9L7uWQ",
            description:"This is an Web Application e-commerce for restaurants. All products from the menu displayed for users to select and complete the order. It is integrated with Credit Card Validation!",
            access:"https://chefsdigital.netlify.app/"
        },
        {
            id: "2",
            name: "Chef's Pizza",
            shortDescription: "Fullstack project with NextJS, NodeJS, TypeScript PostgreSQL, and React Native.",
            image: "/Assets/Images/chefspizza.png",
            video: "https://www.youtube.com/embed/pO0u8b03d9Q",
            description:"Access: 'admin@admin.com' - Password: '1234'  - This is a FullStack project designed for restaurant pizza! With this application, Waiters will be able to take orders directly from the client spot in the restaurant, without needing to go back to the kitchen to request the order. The order will arrive automatically through a computer screen in the kitchen, allowing the waiter to stay in the customer service area. To ensure efficiency and security for the users, I have implemented cutting-edge technologies in our project, including NextJS, NodeJS, TypeScript, PostgreSQL, and React Native. Additionally, our passwords are encrypted to protect our users' sensitive information. I use PrismaClient to make the database process simpler and more efficient. And, as we know that mobility is important in a restaurant environment, our project is fully responsive, adapting perfectly to any device.",
            access:"https://chefs-pizza.netlify.app/"
        },
        {
            id: "3",
            name: "Portfolio Website",
            shortDescription: "Porfotlio website using a variety of technologies including ReactJS.",
            image: "/Assets/Images/porfolio.png",
            video: "https://www.youtube.com/embed/r2syI9b2pp4",
            description:"This portfolio website was built using a variety of technologies and tools to provide an exceptional experience for users. The foundation of the application is built with HTML and CSS, which are responsible for defining the structure and style of the site. Additionally, React, a popular JavaScript library, was used to create reusable components and manage the application state. To manage the building and packaging of the project's source code, Webpack was used. RoutesApp is responsible for creating routes for each page of the site, allowing for smooth user navigation. Toastify is a library that allows notifications to be displayed to the user in specific cases. The application state is managed by useState. Error 404 was implemented to handle errors that may occur when accessing the site. To handle smooth scrolling and references functionality, useRef was used. The site's responsiveness was ensured for a pleasant user experience on different devices and screens. Additionally, TypeScript was used to ensure the safety and ease of maintenance of the code. Overall, the technologies used in my portfolio website were chosen to create a modern, responsive, and attractive site. The combination of these technologies and tools allows for efficient development and an exceptional user experience.",
            access:"https://jamessonseren.netlify.app/"
        },
        {
            id: "4",
            name: "PrimeFlix",
            shortDescription:"Web Application using ReactJs and TMDB API",
            image: "/Assets/Images/primeflix.png",
            video: "https://www.youtube.com/embed/NdXgXhVD0z4",
            description: "I present to you my movie display project! Based on the TMDB API, I present updated information on the 10 most popular movies at the moment. This project was developed using ReactJS as the main frontend technology to create a fast and fluid user experience. By clicking on a movie, you can see more details about the cast, synopsis and much more! In addition, you can save your favorite movies for easy and quick viewing later, thanks to local storage. To get the movie information, we consume the TMDB API, allowing the information to be automatically updated to reflect the latest trends. We also use the Toastify library to display elegant notifications easily and efficiently. Together, these features ensure that the project is modern, responsive and easy to use! Don't miss the opportunity to stay on top of movie news with this incredible project!",
            access:"https://jamessonseren.github.io/flix_project/"
        },
        
    ];
}
export default projectsList

