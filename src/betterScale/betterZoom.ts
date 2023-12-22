import {useEffect} from 'react';

/* CONSTANTS */
const MIN_ZOOM_LEVEL = 1;
const MAX_ZOOM_LEVEL = 5;
const ZOOM_INCREMENT = .25;

/**
 * Updates the zoom level by listening for ctrl + scroll wheel or 
 * @param {number} zoomLevel - the current value of the zoom level typically the variable from a useState
 * @param {Function} setZoomLevel - A function to set the value of the zoom level it is typically the setter from a useState
 */
export function useCustomZoom(zoomLevel: number, setZoomLevel: Function) {
/* 
The reason this is so ugly is because it kind of has to be to prevent it from being even uglier.

TLDR: Moving the functions used in the listeners out of the useEffect makes you have to do a bunch of even uglier stuff for it to not leak.

TSND: For reasons I do not know, if the function used by the listener (ex: handleResize) is defined outside the useEffect,
it does not get removed when the component is rerendered. The reason for this has something to do with memoization.
From what I've gathered, when the component gets rerendered, the instance of handleResize that is supposed to be removed from the listeners is lost
if it isn't memoized, and defining it inside the useEffect makes it memoized. If we want to define it outside of the useEffect, 
we'd have to memoize it ourselves, which public opinion seems to think is a pretty ugly thing to do.
*/

    useEffect(
        () => {

            const handleMouseZoom = (event: WheelEvent) => {

                if (event.ctrlKey) {
        
                event.preventDefault();
        
                const newZoomLevel = event.deltaY > 0 ? zoomLevel - ZOOM_INCREMENT : zoomLevel + ZOOM_INCREMENT;
                const clampedZoomLevel = Math.min(Math.max(newZoomLevel, MIN_ZOOM_LEVEL), MAX_ZOOM_LEVEL);
        
                setZoomLevel(clampedZoomLevel);
                }
            };
        
            const handleButtonZoom = (event: KeyboardEvent) => {
        
                if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key==='=')) {
        
                    event.preventDefault();
        
                    const newZoomLevel = zoomLevel + ZOOM_INCREMENT;
                    const clampedZoomLevel = Math.min(Math.max(newZoomLevel, MIN_ZOOM_LEVEL), MAX_ZOOM_LEVEL);
        
                    setZoomLevel(clampedZoomLevel);
                }
        
                if ((event.ctrlKey || event.metaKey) && (event.key === '-')) {
        
                    event.preventDefault();
        
                    const newZoomLevel = zoomLevel - ZOOM_INCREMENT;
                    const clampedZoomLevel = Math.min(Math.max(newZoomLevel, MIN_ZOOM_LEVEL), MAX_ZOOM_LEVEL);
        
                    setZoomLevel(clampedZoomLevel);
                }
            }
        
            window.addEventListener('wheel', handleMouseZoom, {passive: false});
            window.addEventListener('keydown', handleButtonZoom, {passive: false});
        
            return () => {
                window.removeEventListener('wheel', handleMouseZoom);
                window.removeEventListener('keydown', handleButtonZoom);
            };
        }, 
        [setZoomLevel, zoomLevel]
    );
}