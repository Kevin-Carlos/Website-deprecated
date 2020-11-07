import {useEffect} from "../../../web_modules/react.js";
export const useClickOutside = (ref, funcHandler) => {
  useEffect(() => {
    const clickHandler = (ev) => {
      if (!ref.current || ref.current.contains(ev.target)) {
        return;
      }
      funcHandler();
    };
    document.addEventListener("mousedown", clickHandler);
    return () => document.removeEventListener("mousedown", clickHandler);
  }, [ref, funcHandler]);
};
//# sourceMappingURL=click-outside.js.map
