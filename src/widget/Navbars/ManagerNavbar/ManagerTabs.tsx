import { Tab } from "../Tabs/Tab";
import { TabsWrap } from "../Tabs/Tabs.styled";
import userImg from "shared/assets/img/user.png";
import efficientImg from "shared/assets/img/Vector-1.png";
import walletImg from "shared/assets/icons/wallet.svg";

export const ManagerTabs = () => {
  return (
    <TabsWrap>
      <Tab text="Панель" leftIcon={userImg} to="/" />
      <Tab text="Витрати" leftIcon={walletImg} to="/" />
      <Tab text="Ефективність компаній" leftIcon={efficientImg} to="/" />
      <Tab text="Порівняння крі" leftIcon={userImg} to="/" />
      <Tab text="Курси та тренінги" leftIcon={walletImg} to="/" />
    </TabsWrap>
  );
};
