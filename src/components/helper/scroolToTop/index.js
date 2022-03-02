import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "./style.css"

function ScrollTop() {
 
    return (
        <ScrollToTop className={"scrollToUp"} smooth top={100}/>
    )
}

export default ScrollTop;