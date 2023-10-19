import { FC, useState } from "react";

import {
  StyledButton,
  StyledImage,
  StyledTabList,
} from "./DropdownButton.styled";

import { ITabInfo } from "shared/ui/Tabs/types/Tab";

import arrowDown from "shared/assets/img/arrowdown.png";

interface IDropdownButtonProps {
  className?: string;
  content?: ITabInfo[];
}

export const DropdownButton: FC<IDropdownButtonProps> = ({
  className,
  content,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible((v) => !v);
  };

  return (
    <StyledButton onClick={toggleVisible} className={className}>
      <StyledImage $visible={isVisible} src={arrowDown} alt="arrowImg" />
      {isVisible && content && <StyledTabList tabsInfo={content} />}
    </StyledButton>
  );
};
