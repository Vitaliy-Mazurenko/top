import { FC } from "react";

import { Wrapper } from "./Container.styled";

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: FC<IContainerProps> = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};
