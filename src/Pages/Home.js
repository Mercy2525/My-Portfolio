import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import "../Styles/Home.css"
import { Link } from "react-router-dom";


const Home = () => {
    return ( <div className="home">
        <div className="about">
            <h2>Hi, My Name is Mercy Muriithi. </h2><br />
            <div className="prompt">
                <p> I am a Full-Stack Developer,passionate about turning ideas into robust, user-friendly applications.
                Let's create something amazing together!</p><br/>
                <Link to='https://ke.linkedin.com/in/mercy-w-muriithi-060658165'><LinkedIn/></Link>
                <Link to='https://github.com/Mercy2525'><GitHub/></Link>
                <Link to='mailto:mercywmuriithi.mm@gmail.com'><Email/></Link>
                
            </div>
        </div>
        <div className="skills">
            <h1> Skills </h1>
            <ol className="list">
                <li className="item">
                    <h2> Front-End </h2>
                    <span> JavaScript, ReactJS, HTML, CSS, Bootstrap, TailwindCSS, MaterialUI, NPM, React-Icons</span>
                </li>
                <li className="item">
                    <h2> Back-End </h2>
                    <span>Python, Flask, SQL, SQLAlchemy</span>
                </li>
                <li className="item">
                    <h2> Languages </h2>
                    <span> JavaScript, Python, SQL, HTML, CSS </span>
                </li>
            </ol>
        </div>
    </div> );
}
 
export default Home;