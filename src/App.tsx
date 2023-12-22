import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { HeaderBar } from './HeaderBar';
import { useCustomZoom } from './betterScale/betterZoom';
import { useViewportMonitor } from './betterScale/monitorViewport';

/*
interface sizeParams {
    parentWidth: number,
    parentHeight: number,
    scaleFactor: number
}
*/

function App() {
    
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth || document.documentElement.clientWidth);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight || document.documentElement.clientHeight);
  
    const [zoomLevel, setZoomLevel] = useState(1);

    useViewportMonitor(setViewportWidth, setViewportHeight);
    useCustomZoom(zoomLevel, setZoomLevel);
    
    return (
    <div 
        style={{width: zoomLevel * viewportWidth + "px", height: zoomLevel * viewportHeight + "px"}} 
        className="App"
    >
    <HeaderBar parentHeight={zoomLevel * viewportHeight} parentWidth={zoomLevel * viewportWidth}></HeaderBar>
    </div>
  );
}

export default App;