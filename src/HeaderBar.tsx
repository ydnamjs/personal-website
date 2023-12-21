import React from "react";
import './App.css';

const HeaderBarOptions = ["about", "education", "work experience", "links"];

export function HeaderBar({
    parentHeight,
    parentWidth
}:{
    parentHeight: number,
    parentWidth: number,
    }): JSX.Element {
    return (
        <div className = "header-bar" style={{width: .8 * parentWidth + "px", height: .05 * parentHeight + "px"}}>
            
            {HeaderBarOptions.map((option, _) => (
                <div className ="header-button"> {option} </div>
            ))}
        </div>
    )
}