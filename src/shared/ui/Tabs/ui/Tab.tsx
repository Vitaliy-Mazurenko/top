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
      {leftIcon && (
        <div>
          <TabIcon src={leftIcon} />
        </div>
      )}
      <TabTextWrap>{text}</TabTextWrap>
      {rightIcon && (
        <div style={{ marginLeft: "auto" }}>
          <TabIcon src={rightIcon} />
        </div>
      )}
    </TabLink>
  );
};
