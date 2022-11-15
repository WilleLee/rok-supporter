import { useEffect, useRef, useState } from "react";

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
