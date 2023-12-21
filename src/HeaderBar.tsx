import React from "react";
import './App.css';

const HeaderBarOptions = ["test1", "test2", "test3", "test4"];

export function HeaderBar(): JSX.Element {
    return (
        <div className = "header-bar">
            
            {HeaderBarOptions.map((option, _) => (
                <div className ="header-button"> {option} </div>
            ))}
        </div>
    )
}