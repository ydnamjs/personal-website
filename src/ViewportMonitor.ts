import {useEffect} from "react";

/**
 * Updates the viewport width and height whenever it changes using event listening
 * @param {Function} setViewportWidth - A function to set the value of viewport width it is typically the setter from a useState
 * @param {Function} setViewportHeight - A function to set the value of viewport height it is typically the setter from a useState
 */
export function useViewportMonitor(
	setViewportWidth: (newViewportWidth: number) => void,
	setViewportHeight: (newViewportWidth: number) => void,
) {
	useEffect(() => {
		const handleResize = () => {
			setViewportWidth(window.innerWidth || document.documentElement.clientWidth);
			setViewportHeight(window.innerHeight || document.documentElement.clientHeight);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [setViewportHeight, setViewportWidth]);
}
