import { useState } from "react";
import { useEffectOnce, useMediaQuery } from "usehooks-ts";

interface IUseMobileMenuProps {
  buttonId: string;
  mobileMenuId: string;
}

export const useMobileMenu = ({
  buttonId,
  mobileMenuId,
}: IUseMobileMenuProps) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const isPCScreenSize = useMediaQuery("(min-width: 1080px)");

  useEffectOnce(() => {
    const onClick = (e: MouseEvent) => {
      const element = e.target as HTMLElement;

      if (element.closest(buttonId) || element.closest(mobileMenuId)) {
        return;
      } else {
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
