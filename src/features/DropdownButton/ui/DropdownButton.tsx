import { FC } from "react";

import arrowDown from "shared/assets/img/arrowdown.png";
import { CSSProperties } from "styled-components";

interface IDropdownButtonProps {
  style?: CSSProperties;
}

export const DropdownButton: FC<IDropdownButtonProps> = ({ style }) => {
  return (
    <button style={style}>
      <img src={arrowDown} alt="arrowImg" />
    </button>
  );
};
