import { FC } from "react";

import { Container } from "shared/ui/Container";

import { MobileHeader } from "./HeaderWrapper.styled";

import { IHeaderWrapperProps } from "../types/HeaderWrapper";

export const MobileHeaderWrapper: FC<IHeaderWrapperProps> = ({ children }) => {
  return (
    <MobileHeader>
      <Container>{children}</Container>
    </MobileHeader>
  );
};
