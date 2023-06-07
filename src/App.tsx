import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";

const App = () => {
    return (

        <div className='App'>
            <OnOff />

            <PageTitle title={"This is App component"} />
            <PageTitle title={"My Friends"} />

            {/*Article 1*/}
            {/*<UncontrolledRating value={3} />*/}
            {/*<UncontrolledRating value={1} />*/}

            {/*<Accordion titleValue={"Меню"} />*/}
            {/*<Accordion titleValue={"Барная карта"} /> */}

            Article 2
            {/*<Rating value={4} />*/}
            <UncontrolledRating  />

            <UncontrolledAccordion titleValue={"Меню"} />
            <UncontrolledAccordion titleValue={"Барная карта"} />

        </div>

    );
}

type PagePropsTitle = {
    title: string
}
function PageTitle(props: PagePropsTitle) {
    return (
        <h1>{props.title}</h1>
    )
    
}

export default App;
