import React from "react";
import { StoryObj, Meta } from '@storybook/react';

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

export default {
    title: 'Accordion',
    component: Accordion,
} as Meta;

export const Default: StoryObj<AccordionPropsType> = (args: any) => <Accordion {...args} />;

Default.args = {
    titleValue: 'Accordion Title',
    isOpen: false,
};
