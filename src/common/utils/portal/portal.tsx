import { FC, useEffect } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  className?: string;
}

export const Portal: FC<PortalProps> = ({
  children,
  className,
}) => {
  const el = document.createElement("div");
  el.className = className || "";

  useEffect(() => {
    document.body.appendChild(el);

    return () => { document.body.removeChild(el); };
  }, []);

  return createPortal(children, el);
}
