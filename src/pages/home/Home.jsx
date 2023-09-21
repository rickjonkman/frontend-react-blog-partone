import logo from "../../assets/logo.png";
import {Route, Routes} from "react-router-dom";

function Home() {

    return (
        <>
            <div className="page-container">
                <img src={logo} alt="Company logo"/>
                <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
            </div>
        </>
    )
}

export default Home;