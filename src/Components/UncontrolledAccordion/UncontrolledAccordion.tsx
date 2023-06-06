import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    const [toggle, setToggle] = useState<boolean>(true)
    console.log(toggle)
    const setToggleHandler = () => {
        let res =  toggle ? false : true
        setToggle(res)
    }
    return (
        <div>
            <UncontrolledAccordionTitle title={props.titleValue}/>
            <button onClick={setToggleHandler}>toggle</button>
            {!toggle && <UncontrolledAccordionBody/>}
        </div>
    )
}

type UncontrolledAccordionTitlePropsType = {
    title: string
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}

function UncontrolledAccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default UncontrolledAccordion;