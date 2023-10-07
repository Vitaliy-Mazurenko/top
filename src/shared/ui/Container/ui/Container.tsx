import { FC } from "react";

import { Wrapper } from "./Container.styled";

interface IContainerProps {
  children: React.ReactNode;
}

export const Container: FC<IContainerProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
