import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import "../Styles/Home.css"


const Home = () => {
    return ( <div className="home">
        <div className="about">
            <h2>Hello, My Name is Mercy</h2> <br />
            <div className="prompt">
                <p> A software developer, in the making. Student at Moringa School</p>
                <LinkedIn/>
                <Email/>
                <GitHub/>
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
                    <span>Python</span>
                </li>
                <li className="item">
                    <h2> Languages </h2>
                    <span> JavaScript, Python </span>
                </li>
            </ol>
        </div>
    </div> );
}
 
export default Home;