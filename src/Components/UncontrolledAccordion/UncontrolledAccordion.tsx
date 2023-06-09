import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    const [toggle, setToggle] = useState<boolean>(true)
    const setToggleHandler = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <UncontrolledAccordionTitle title={props.titleValue} onClick={setToggleHandler}/>
            {toggle && <UncontrolledAccordionBody/>}
        </div>
    )
}

type UncontrolledAccordionTitlePropsType = {
    title: string
    onClick: ()=>void
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={ props.onClick } >{props.title}</h3>
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