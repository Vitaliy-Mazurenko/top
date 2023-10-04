import { Tab } from "./Tabs/Tab";
import { OptionsWrap } from "./Tabs/TabsPanel.styled";
import userImg from "shared/assets/img/user.png"
import settingsImg from "shared/assets/img/Settings.png"
import helpImg from "shared/assets/img/help-img.png"

export const PublicOptions: React.FC = () => {
  return (
    <OptionsWrap>
      <Tab to="/" text="Допомога" imgSrc={helpImg} />
      <Tab to="/" text="Налаштування" imgSrc={settingsImg} />
      <Tab to="/" text="Вийти" imgSrc={userImg} />
    </OptionsWrap>
  );
};
