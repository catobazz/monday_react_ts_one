import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating from "./Components/Rating/Rating";

const App = () => {
    console.log("App rendering")
    return (

        <>
            <AppTitle />
            <Rating />
            <Accordion/>
            <Rating />
        </>

    );
}

function AppTitle() {
    return (
        <>This is App component</>
    )
    
}



export default App;
