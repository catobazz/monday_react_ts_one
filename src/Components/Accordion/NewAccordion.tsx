import React from "react";

type AccordionPropsType = {
    titleValue: string;
    isOpen: boolean;
    onToggle: () => void;
};

const Accordion: React.FC<AccordionPropsType> = ({
                                                     titleValue,
                                                     isOpen,
                                                     onToggle,
                                                 }) => {
    return (
        <div>
            <AccordionTitle title={titleValue} onToggle={onToggle} />
            {isOpen && <AccordionBody />}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string;
    onToggle: () => void;
};

const AccordionTitle: React.FC<AccordionTitlePropsType> = ({
                                                               title,
                                                               onToggle,
                                                           }) => {
    return (
        <div>
            <h3 onClick={onToggle}>{title}</h3>
        </div>
    );
};

const AccordionBody: React.FC = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
};

export default Accordion;
