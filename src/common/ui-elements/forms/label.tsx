import React, { FC } from "react";

interface LabelProps {
  className?: string;
  label: string;
};

export const Label: FC<LabelProps> = ({
  className,
  label,
  children,
}) => {
  return (
    <div style={{ margin: "0 1rem" }}>
      <label className={className}>
        {label}
        <div>{children}</div>
      </label>
    </div>
  )
}