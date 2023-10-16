import { useState, RefObject } from "react";
import { useEffectOnce, useMediaQuery } from "usehooks-ts";

interface IUseMobileMenuProps {
  buttonElementRef: RefObject<HTMLButtonElement>;
  mobileMenuElementRef: RefObject<HTMLElement>;
}

export const useMobileMenu = ({
  buttonElementRef,
  mobileMenuElementRef,
}: IUseMobileMenuProps) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const isPCScreenSize = useMediaQuery("(min-width: 1080px)");

  useEffectOnce(() => {
    const onClick = (e: MouseEvent) => {
      const buttonContainer = buttonElementRef.current;
      const mobileMenuContainer = mobileMenuElementRef.current;

      if (
        buttonContainer &&
        mobileMenuContainer &&
        !buttonContainer.contains(e.target as Node) &&
        !mobileMenuContainer.contains(e.target as Node)
      ) {
        setIsMenuShown(false);
      }
    };

    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  });

  return isPCScreenSize
    ? {
        isMenuShown: true,
        setIsMenuShown: () => {
          setIsMenuShown(true);
        },
      }
    : { isMenuShown, setIsMenuShown };
};
