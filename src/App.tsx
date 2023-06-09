import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";

const App = () => {

    let [valueRating, setValueRating] = useState<RatingValueType>(0);
    const [toggleAccordion, setToggleAccordion] = useState<boolean>(true);
    const [on, setOn] = useState( false);

    return (

        <div className='App'>
            <OnOff
                on={on}
                setOn={setOn}
            />

            {/*<PageTitle title={"This is App component"} />*/}
            {/*<PageTitle title={"My Friends"} />*/}

            {/*Article 1*/}
            {/*<UncontrolledRating value={3} />*/}
            {/*<UncontrolledRating value={1} />*/}

            <Accordion
                titleValue={"Меню"}
                toggleAccordion={toggleAccordion}
                setToggleAccordion={()=>setToggleAccordion(!toggleAccordion)}

            />
            {/*<Accordion titleValue={"Барная карта"} /> */}

            Article 2
            <Rating
                setValueRating={setValueRating}
                value={valueRating}
            />
            {/*<UncontrolledRating  />*/}

            {/*<UncontrolledAccordion titleValue={"Меню"} />*/}
            {/*<UncontrolledAccordion titleValue={"Барная карта"} />*/}

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
