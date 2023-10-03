import { FC } from "react";

import arrowDown from "shared/assets/img/arrowdown.png";

interface IDropdownButtonProps {
  style?: object;
}

export const DropdownButton: FC<IDropdownButtonProps> = ({ style }) => {
  return (
    <button style={style}>
      <img src={arrowDown} alt="arrowImg" />
    </button>
  );
};
