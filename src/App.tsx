import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { HeaderBar } from './HeaderBar';
import useBlockDefaultZoom from './usePreventZoom'

function App() {
    
    const [viewportWidth, setViewportWidth] = useState(
        window.innerWidth || document.documentElement.clientWidth
    );
    const [viewportHeight, setViewportHeight] = useState(
        window.innerHeight || document.documentElement.clientHeight
    );
    
    useEffect(() => {
        
        const handleResize = () => {
          setViewportWidth(window.innerWidth || document.documentElement.clientWidth);
          setViewportHeight(window.innerHeight || document.documentElement.clientHeight);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, [viewportWidth, viewportHeight]); 
  
    const zoomLevels = [.25, .33, .5, .67, .75, .80, .90, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5];
    const [zoomLevel, setZoomLevel] = useState(7);
  
    useEffect(() => {
        const handleWheel = (event: { ctrlKey: any; deltaY: number; }) => {
            if (event.ctrlKey) {

            const newZoomLevel = event.deltaY > 0 ? zoomLevel - 1 : zoomLevel + 1;
    

            const clampedZoomLevel = Math.min(Math.max(newZoomLevel, 0), zoomLevels.length);
    
            setZoomLevel(clampedZoomLevel);
            }
        };
    
        window.addEventListener('wheel', handleWheel);
    
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [zoomLevel, zoomLevels.length]);

    useBlockDefaultZoom();
    return (
    <div 
        style={{width: zoomLevels[zoomLevel] * viewportWidth + "px", height: zoomLevels[zoomLevel] * viewportHeight + "px"}} 
        className="App"
    >
    <HeaderBar parentHeight={zoomLevels[zoomLevel] * viewportWidth} parentWidth={zoomLevels[zoomLevel] * viewportHeight}></HeaderBar>
    </div>
  );
}

export default App;