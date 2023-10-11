import { Tab } from "../../../shared/ui/Tabs/Tab";
import { TabsWrap } from "../../../shared/ui/Tabs/ui/TabList.styled";
import userImg from "shared/assets/icons/user.svg";
import efficientImg from "shared/assets/icons/arrow-up.svg";
import walletImg from "shared/assets/icons/wallet.svg";
import coursesImg from "shared/assets/icons/courses.svg";

export const ManagerTabs = () => {
  return (
    <TabsWrap>
      <Tab text="Панель" leftIcon={userImg} to="/" />
      <Tab text="Витрати" leftIcon={walletImg} to="/" />
      <Tab text="Ефективність компаній" leftIcon={efficientImg} to="/" />
      <Tab text="Порівняння крі" leftIcon={userImg} to="/" />
      <Tab text="Курси та тренінги" leftIcon={coursesImg} to="/" />
    </TabsWrap>
  );
};
