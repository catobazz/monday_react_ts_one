import React from "react";

function Rating()   {
    return(
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
        </div>
    )
}

export const Star = (props: any) => {
    if (props.selected === true) {
        return (<span><b>star </b></span>)
    } else {
        return (<span>star </span>)
    }
}

export default Rating;