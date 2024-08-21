import { useEffect, useState } from "react";
import { WindowDimensions } from "@/types/index";

/**
 * A hook that returns the current window dimensions.
 *
 * It listens to the window "resize" event and updates the
 * state whenever the window is resized.
 *
 * The hook returns an object with two properties:
 * - `windowWidth`: the current width of the window
 * - `windowHeight`: the current height of the window
 */
const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    windowWidth: 0,
    windowHeight: 0,
  });

  useEffect(() => {
    // The hook only works in the browser, so we check if the window
    // object is defined before running the effect.
    if (typeof window !== "undefined") {
      // The event handler that gets called when the window is resized.
      const handleResize = () => {
        setWindowDimensions({
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
        });
      };

      handleResize();

      // Add the event handler to the window "resize" event.
      window.addEventListener("resize", handleResize);

      // Return a cleanup function that removes the event handler when the
      // component is unmounted.
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
