import React from "react";

export interface TitleProps {
  title_string?: string;
  size?: number;
}

const Title = ({ title_string, size = 28 }: TitleProps) => {
  return (
    <div style={{ fontSize: `${size}px` }}>
      {title_string ? title_string : ""}
    </div>
  );
};

export default Title;
