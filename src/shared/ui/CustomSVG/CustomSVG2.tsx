import React from "react";

const CustomSVG2: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 40 40"
      fill="none"
    >
      <circle cx="20" cy="20" r="18" fill="#34C759" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8952 25.7869C18.7994 25.8625 18.6908 25.9341 18.5715 25.9986C18 26.3075 17.4272 26.3214 17.2698 26.0301L13.8963 19.7889C13.7389 19.4976 14.0642 19.0261 14.6357 18.7172C15.2072 18.4082 15.78 18.3944 15.9374 18.6856L18.2543 22.9721L24.0614 14.1732C24.3681 13.7085 25.0351 13.6245 25.5773 13.9823C26.1196 14.3402 26.3046 14.9865 25.9978 15.4513L19.4251 25.4103C19.2985 25.6022 19.1105 25.7291 18.8952 25.7869Z"
        fill="#F8F8F8"
      />
    </svg>
  );
};

export default CustomSVG2;
