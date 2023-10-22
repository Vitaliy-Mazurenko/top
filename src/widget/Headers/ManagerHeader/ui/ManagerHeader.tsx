import { PageSwitcher } from "features/Pageswitcher";

import {
  DesktopHeaderWrapper,
  MobileHeaderWrapper,
} from "widget/Headers/HeaderWrapper";

export const ManagerHeader = () => {
  return (
    <>
      <DesktopHeaderWrapper>
        <PageSwitcher />
      </DesktopHeaderWrapper>
      <MobileHeaderWrapper>
        <div></div>
      </MobileHeaderWrapper>
    </>
  );
};
