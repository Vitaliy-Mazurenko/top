import { Tab } from "../Tabs/Tab";
import { TabsWrap } from "../Tabs/Tabs.styled";
import home from "shared/assets/icons/octicon_home.svg";
import efficientImg from "shared/assets/icons/arrow-up.svg";
import walletImg from "shared/assets/icons/wallet.svg";
import coursesImg from "shared/assets/icons/courses.svg"
import notification from "shared/assets/icons/notification-bell.svg"


export const FooterTabs = () => {
  return (
    <TabsWrap>
      <Tab text="ГОЛОВНА" leftIcon={home} to="/" />
      <Tab text="Ефективність" leftIcon={walletImg} to="/" />
      <Tab text="Витрати" leftIcon={efficientImg} to="/" />
      <Tab text="Курси" leftIcon={coursesImg} to="/" />
      <Tab text="Звістка" leftIcon={notification} to="/" />
    </TabsWrap>
  );
};
