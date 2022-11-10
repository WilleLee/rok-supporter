import { useEffect, useRef, useState } from "react";

const useMouseover = () => {
  const [state, setState] = useState(false);
  const mouseoverRef = useRef();
  const { current } = mouseoverRef;
  useEffect(() => {
    const onMouseover = () => {
      if (!current) return;
      setState(true);
    };
    const onMouseleave = () => {
      if (!current) return;
      setState(false);
    };
    current.addEventListener("mouseover", onMouseover);
    current.addEventListener("mouseleave", onMouseleave);
    return () => {
      current.removeEventListener("mouseover", onMouseover);
      current.removeEventListener("mouseleave", onMouseleave);
    };
  }, [current]);
  return { state, mouseoverRef };
};

export default useMouseover;
