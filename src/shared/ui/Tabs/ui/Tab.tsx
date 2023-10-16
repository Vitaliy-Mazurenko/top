import { FC } from "react";

import { TabLink, TabTextWrap, TabIcon } from "./Tab.styled";

import { ITabInfo } from "../types/Tab";

export const Tab: FC<ITabInfo> = ({
  to = "",
  text,
  onClick,
  leftIcon,
  rightIcon,
}) => {
  return (
    <TabLink to={to} onClick={onClick}>
      {leftIcon &&
        (typeof leftIcon === "string" ? (
          <div>
            <TabIcon src={leftIcon} />
          </div>
        ) : (
          <div>{leftIcon}</div>
        ))}
      <TabTextWrap>{text}</TabTextWrap>
      {rightIcon &&
        (typeof rightIcon === "string" ? (
          <div style={{ marginLeft: "auto" }}>
            <TabIcon src={rightIcon} />
          </div>
        ) : (
          <div>{rightIcon}</div>
        ))}
    </TabLink>
  );
};
