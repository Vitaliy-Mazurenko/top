import { FC } from "react";

import arrowDown from "shared/assets/img/arrowdown.png";

interface IDropdownButtonProps {
  className?: string;
}

export const DropdownButton: FC<IDropdownButtonProps> = ({ className }) => {
  return (
    <button className={className}>
      <img src={arrowDown} alt="arrowImg" />
    </button>
  );
};
