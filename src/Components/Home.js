import react from "react";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate= useNavigate()
    const handleclick = () => {
        navigate('/about');
    };
    return(
        <>
        <h1>Home page</h1>
        <button onClick={handleclick}>click Me to go to about !</button>
        </>

    );
}
 export default Home;