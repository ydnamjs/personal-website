import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { HeaderBar } from './HeaderBar';
import useCustomZoom from './customZoom'

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

    useCustomZoom({setViewportHeight, setViewportWidth, zoomLevel, setZoomLevel});
    
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