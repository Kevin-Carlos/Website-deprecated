import {useEffect} from "../../../../web_modules/react.js";
import {createPortal} from "../../../../web_modules/react-dom.js";
export const Portal = ({
  children,
  className
}) => {
  const el = document.createElement("div");
  el.className = className || "";
  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);
  return createPortal(children, el);
};
