import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";

const App = () => {
    return (

        <div>
            <PageTitle title={"This is App component"} />
            <PageTitle title={"My Friends"} />
            Article 1
            <Rating value={3} />
            <Rating value={1} />
            <Accordion titleValue={"Меню"} />
            <Accordion titleValue={"Барная карта"} />
            Article 2
            <Rating value={4} />
            <Rating value={5} />
            <Rating value={2} />
        </div>

    );
}

function PageTitle(props: any) {
    return (
        <h1>{props.title}</h1>
    )
    
}

export default App;
