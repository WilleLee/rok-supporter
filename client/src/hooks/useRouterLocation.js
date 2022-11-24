import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * listens to router path changes and triggers event with options that are given
 * @param {function} event
 * @param {*} opt
 */
const useRouterLocation = (event, opt) => {
  let location = useLocation();
  useEffect(() => {
    const onEvent = () => {
      if (typeof event !== "function") return;
      event(opt);
    };
    onEvent();
  }, [location, event, opt]);
};

export default useRouterLocation;
