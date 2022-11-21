import { useEffect, useRef, useState } from "react";

/**
 * This functions returns an object of a boolean state created by useState() and a reference created by useRef().
 * Once a tag of the component is marked with the reference, the state turns into true when the mouse is over the HTML tag,
 * otherwise, the state goes false.
 * @returns {object}
 */
const useMouseover = () => {
  const [state, setState] = useState(false);
  const mouseoverRef = useRef();
  useEffect(() => {
    const { current } = mouseoverRef;
    if (!current) return;
    const onMouseover = () => {
      setState(true);
    };
    const onMouseleave = () => {
      setState(false);
    };
    current.addEventListener("mouseover", onMouseover);
    current.addEventListener("mouseleave", onMouseleave);
    return () => {
      current.removeEventListener("mouseover", onMouseover);
      current.removeEventListener("mouseleave", onMouseleave);
    };
  }, []);
  return { state, mouseoverRef };
};

export default useMouseover;
