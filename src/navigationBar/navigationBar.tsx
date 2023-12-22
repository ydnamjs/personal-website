import React from "react";
import './navigationBar.css';
import { SectionButton } from "./navigationButton";
import { NAV_OPTIONS } from "./navigationOptions";

interface RequiredStyle {
    width: string;
    height: string;
}

interface NavigationBarStyle extends RequiredStyle, Omit<React.CSSProperties, 'width' | 'height'> {}

export function NavigationBar({style}: {style: NavigationBarStyle}): JSX.Element {

    return (
        <div className = "navigation-bar" style={style}>
            
            {NAV_OPTIONS.map((option, _) => (
                <SectionButton labelText={option} ></SectionButton>
            ))}

        </div>
    )
}