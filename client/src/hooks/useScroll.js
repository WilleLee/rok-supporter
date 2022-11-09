import { useEffect, useState } from "react";

/**
 * receives an id of a HTML tag as string argument and if the scroll reaches the position of that HTML tag, returns true, before that, false
 * @param {string} idTagName
 */
const useScroll = (idTagName) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (typeof idTagName !== "string") return;
      const target = document.getElementById(idTagName);
      let position = 0;
      if (!target) {
        return;
      }
      position = target.offsetTop;
      if (window.scrollY + window.innerHeight >= position) {
        setState(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [idTagName]);
  return state;
};

export default useScroll;
