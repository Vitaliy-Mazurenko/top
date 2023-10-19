import { TabList } from "shared/ui/Tabs";
import styled from "styled-components";

export const StyledButton = styled.button`
  position: relative;
`;

export const StyledImage = styled.img<{ $visible: boolean }>`
  transform: ${(props) => props.$visible && "rotate(180deg)"};
`;

export const StyledTabList = styled(TabList)`
  position: absolute;
  width: 170px;
  transform: translateX(-50%);
  border: 1px gray solid;
  background-color: white;

  & a {
    height: 30px;
  }

  & img {
    height: 12px;
    width: 12px;
  }
`;
