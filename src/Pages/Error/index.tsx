import './index.css'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <section className='error'>
            <div>
                <h1>Error 404: Page not found</h1>
                <p> But don't get discouraged, the path to success is full of obstacles. Keep exploring our site and you will surely find something worthwhile</p>
                <Link className='link' to="/">Click here to go back to the beginning and explore more!</Link>

            </div>
        </section>

    )
}