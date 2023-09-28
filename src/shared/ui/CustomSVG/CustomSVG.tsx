import React from "react";

const CustomSVG: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <circle cx="7.5" cy="8" r="7.5" fill="#FF8C33" />
    </svg>
  );
};

export default CustomSVG;
