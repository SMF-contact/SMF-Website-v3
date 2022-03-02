import React from "react"; 
import "./style.css"
function ContentBlock({children,title,img,classNames }) {
    return (
        <div className={classNames ? "content-block "+classNames : "content-block"}>
            {title ? <h5>{title}</h5> : ""}
            { children }
            {img ? <img src={img} alt="" /> : ""} 
        </div>
    );
}

export default ContentBlock;