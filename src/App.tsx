import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './navigationBar/navigationBar';
import { useCustomZoom } from './betterScale/betterZoom';
import { useViewportMonitor } from './betterScale/monitorViewport';

/* CONSTANTS */
const NAV_BAR_WIDTH_RATION = .8;
const NAV_BAR_HEIGHT_RATIO = .05;


function App() {
    
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth || document.documentElement.clientWidth);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight || document.documentElement.clientHeight);
  
    const [zoomLevel, setZoomLevel] = useState(1);

    useViewportMonitor(setViewportWidth, setViewportHeight);
    useCustomZoom(zoomLevel, setZoomLevel);
    

    //const [activeSection, setActiveSection] = useState<>

    const navBarWidth = NAV_BAR_WIDTH_RATION * zoomLevel * viewportWidth;
    const navBarHeight = NAV_BAR_HEIGHT_RATIO * zoomLevel * viewportHeight;

    return (
    <div 
        style={{width: zoomLevel * viewportWidth + "px", height: zoomLevel * viewportHeight + "px"}} 
        className="App"
    >
    <NavigationBar style={ {width: navBarWidth + "px", height: navBarHeight + "px"}}></NavigationBar>
    </div>
  );
}

export default App;