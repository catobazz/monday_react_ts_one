import React, { useState} from 'react';

type PropsType = {
    // on: boolean
}

const OnOff = (props: PropsType) => {

    const [on, setOn] = useState( false)
    console.log(on)
    const onStyle = {
        width: "30px",
        height: "30px",
        display: "inline-block",
        border: "1px solid black",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "30px",
        display: "inline-block",
        border: "1px solid black",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        display: "inline-block",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div>
            <div onClick={()=> {setOn(true)}} style={onStyle}>On</div>
            <div onClick={()=> {setOn(false)}} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;