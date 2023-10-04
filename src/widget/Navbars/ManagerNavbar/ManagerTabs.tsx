import { Tab } from "../Tabs/Tab";
import { TabsWrap } from "../Tabs/Tabs.styled";
import userImg from "shared/assets/img/user.png";
import efficientImg from "shared/assets/img/Vector-1.png";
import walletImg from "shared/assets/img/wallet.png";

export const ManagerTabs = () => {
  return (
    <TabsWrap>
      <Tab text="Панель" imgSrc={userImg} to="/" />
      <Tab text="Витрати" imgSrc={walletImg} to="/" />
      <Tab text="Ефективність компаній" imgSrc={efficientImg} to="/" />
      <Tab text="Порівняння крі" imgSrc={userImg} to="/" />
      <Tab text="Курси та тренінги" imgSrc={walletImg} to="/" />
    </TabsWrap>
  )
}
