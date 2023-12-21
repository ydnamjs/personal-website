import {useEffect} from 'react';

/* CONSTANTS */
const MIN_ZOOM_LEVEL = 1;
const MAX_ZOOM_LEVEL = 5;
const ZOOM_INCREMENT = .25;

function blockWheelZoom(event: WheelEvent) {

    // metaKey is command on mac
    if (event.ctrlKey || event.metaKey) {
    event.preventDefault();
    }
};

function blockCtrlZoom(event: KeyboardEvent) {

    // metaKey is command on mac
    if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-'|| event.key==='=')) {
        event.preventDefault();
    }
};

function setupZoomBlockListeners() {

    window.addEventListener('wheel', blockWheelZoom, {passive: false});
    window.addEventListener('keydown', blockCtrlZoom, {passive: false});
    
    return () => {
        window.removeEventListener('wheel', blockWheelZoom);
        window.removeEventListener('keydown', blockCtrlZoom);
    };
}

function handleResize(setViewportHeight: Function, setViewportWidth: Function) {
    setViewportWidth(window.innerWidth || document.documentElement.clientWidth);
    setViewportHeight(window.innerHeight || document.documentElement.clientHeight);
};

function setupResizeListener(setViewportHeight: Function, setViewportWidth: Function) {
    
    const handleResizeCallback = () => {
        handleResize(setViewportHeight, setViewportWidth)
    }
    
    window.addEventListener('resize', handleResizeCallback);

    return () => {
      window.removeEventListener('resize', handleResizeCallback);
    };
}

function setupZoomListeners(zoomLevel: number, setZoomLevel: Function) {
    
    const handleMouseZoom = (event: { ctrlKey: any; deltaY: number; }) => {
        if (event.ctrlKey) {

        const newZoomLevel = event.deltaY > 0 ? zoomLevel - ZOOM_INCREMENT : zoomLevel + ZOOM_INCREMENT;

        const clampedZoomLevel = Math.min(Math.max(newZoomLevel, MIN_ZOOM_LEVEL), MAX_ZOOM_LEVEL);

        setZoomLevel(clampedZoomLevel);
        }
    };

    const handleButtonZoom = (event: KeyboardEvent) => {

        if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key==='=')) {
            const newZoomLevel = zoomLevel + ZOOM_INCREMENT;
            const clampedZoomLevel = Math.min(Math.max(newZoomLevel, MIN_ZOOM_LEVEL), MAX_ZOOM_LEVEL);
            console.log(typeof setZoomLevel);
            setZoomLevel(clampedZoomLevel);
        }

        if ((event.ctrlKey || event.metaKey) && (event.key === '-')) {
            const newZoomLevel = zoomLevel - ZOOM_INCREMENT;
            const clampedZoomLevel = Math.min(Math.max(newZoomLevel, MIN_ZOOM_LEVEL), MAX_ZOOM_LEVEL);
            setZoomLevel(clampedZoomLevel);
        }
    }

    window.addEventListener('wheel', handleMouseZoom);
    window.addEventListener('keydown', handleButtonZoom);

    return () => {
        window.removeEventListener('wheel', handleMouseZoom);
        window.removeEventListener('keydown', handleButtonZoom);
    };
}

interface CustomZoomParams {
    setViewportHeight: Function,
    setViewportWidth: Function,
    zoomLevel: number,
    setZoomLevel: Function,
}

function useCustomZoom(zoomParams: CustomZoomParams) {
    
    useEffect(setupZoomBlockListeners, []);
    
    // the setters for the viewport height shouldn't be able to change if they can they need to be added to the dependencies array (currently empty)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {setupResizeListener(zoomParams.setViewportHeight, zoomParams.setViewportWidth)}, [])

    // similarly to the useEffect for the resize listening, setZoomLevel shouldn't be able to change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {setupZoomListeners(zoomParams.zoomLevel, zoomParams.setZoomLevel)}, [zoomParams.zoomLevel]);
}

export default useCustomZoom;