import React from "react";
import "./style.css"
function Button({text,classes,onClicks}) {
    return(
        <>
        {onClicks ? <button onClick={onClicks} type="button" className={classes}>{text}</button> : <button type="button" className={classes}>{text}</button>}
        </> 
    )
}

export default Button;