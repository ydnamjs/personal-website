import {useEffect} from 'react';

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

const setupZoomBlockListeners = () => {

    window.addEventListener('wheel', blockWheelZoom, {passive: false});
    window.addEventListener('keydown', blockCtrlZoom, {passive: false});
    
    return () => {
        window.removeEventListener('wheel', blockWheelZoom);
        window.removeEventListener('keydown', blockCtrlZoom);
    };
}

function useBlockDefaultZoom() {
    
    useEffect(setupZoomBlockListeners, []);
}

export default useBlockDefaultZoom;