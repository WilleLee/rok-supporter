import { useEffect, useState } from "react";

/**
 * window resize event에 반응하여 x, y 값 반환
 * @returns {object}
 */
const useWindowSize = () => {
  const [state, setState] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  });
  const onResize = () => {
    setState({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return state;
};

export default useWindowSize;
