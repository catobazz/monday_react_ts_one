import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Star} from "./Components/Star/Star";


const App = () => {
    console.log("App rendering")
    return (

        <> This is App component
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Accordion/>
        </>

    );
}





export default App;
