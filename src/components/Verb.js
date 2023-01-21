import react from "react";
import {ReactComponent as HeartIcon} from "../assets/heart.svg"

export default function Verb(props){
    
    return(
        <div className="verb">
            <span>{props.value}</span>
            {props.hasIcon && <HeartIcon fill={false ? 'red' : 'grey'} />}
        </div>
    )
}