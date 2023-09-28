import React from "react";

const CustomSVG3: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <circle
        cx="20"
        cy="20"
        r="13"
        stroke="#FF8C33"
        strokeWidth="4"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 25.1429C19 25.6229 19.44 26 20 26C20.56 26 21 25.6229 21 25.1429V21H25.1429C25.6229 21 26 20.56 26 20C26 19.44 25.6229 19 25.1429 19H21V14.8571C21 14.3771 20.56 14 20 14C19.44 14 19 14.3771 19 14.8571V19H14.8571C14.3771 19 14 19.44 14 20C14 20.56 14.3771 21 14.8571 21H19V25.1429Z"
        fill="#FF8C33"
      />
    </svg>
  );
};

export default CustomSVG3;
