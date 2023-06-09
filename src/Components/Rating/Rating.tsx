import React from "react";


export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    setValueRating: (value: RatingValueType)=>void

}
export function Rating(props: RatingPropsType) {


    return (
        <div>
            <Star selected={props.value > 0} onClick={props.setValueRating} value={1}/>

            <Star selected={props.value > 1} onClick={props.setValueRating} value={2}/>

            <Star selected={props.value > 2} onClick={props.setValueRating} value={3}/>

            <Star selected={props.value > 3} onClick={props.setValueRating} value={4}/>

            <Star selected={props.value > 4} onClick={props.setValueRating} value={5}/>

        </div>
    );

    type StarPropsType = {
        selected: boolean
        onClick: (value: RatingValueType)=>void
        value: RatingValueType
    }

    function Star(props: StarPropsType) {
            return <span onClick={()=>{props.onClick(props.value)}} > {props.selected ? <b>star </b> : "star "} </span>
    }
}
