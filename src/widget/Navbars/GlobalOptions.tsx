import { Tab } from "./Tabs/Tab";
import { OptionsWrap } from "./Tabs/TabsPanel.styled";
import userImg from "shared/assets/img/user.png"
import settingsImg from "shared/assets/img/Settings.png"
import helpImg from "shared/assets/img/help-img.png"

export const PublicOptions: React.FC = () => {
  return (
    <OptionsWrap>
      <Tab to="/" text="Допомога" leftIcon={helpImg} />
      <Tab to="/" text="Налаштування" leftIcon={settingsImg} />
      <Tab to="/" text="Вийти" leftIcon={userImg} />
    </OptionsWrap>
  );
};
