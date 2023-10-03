import { Tab } from "./Tab";
import { TabsWrap } from "./Tabs.styled";
import userImg from "../../../../shared/assets/img/user.png";
import efficientImg from "../../../../shared/assets/img/Vector-1.png";
import walletImg from "../../../../shared/assets/img/wallet.png";

export const Tabs = () => {
  return (
    <TabsWrap>
      <Tab text="Панель" imgSrc={userImg} />
      <Tab text="Витрати" imgSrc={walletImg} />
      <Tab text="Ефективність компаній" imgSrc={efficientImg} />
      <Tab text="Порівняння крі" imgSrc={userImg} />
      <Tab text="Курси та тренінги" imgSrc={walletImg} />
    </TabsWrap>
  );
};
