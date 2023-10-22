import { FC } from "react";

import { Container } from "shared/ui/Container";

import { DesktopHeader } from "./HeaderWrapper.styled";

import { IHeaderWrapperProps } from "../types/HeaderWrapper";

export const DesktopHeaderWrapper: FC<IHeaderWrapperProps> = ({ children }) => {
  return (
    <DesktopHeader>
      <Container>{children}</Container>
    </DesktopHeader>
  );
};
