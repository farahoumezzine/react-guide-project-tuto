import react from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

function Home(){
    const navigate= useNavigate()
    const handleclick = () => {
        navigate('/about');
    };
    return(
        <>
        <h1>Home page</h1>
        <Button variant="contained" onClick={handleclick}>click Me to go to about !</Button>
        </>

    );
}
 export default Home;