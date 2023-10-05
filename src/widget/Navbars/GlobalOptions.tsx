import { Tab } from "./Tabs/Tab";
import { OptionsWrap } from "./Tabs/TabsPanel.styled";
import userImg from "shared/assets/icons/user.svg"
import settingsImg from "shared/assets/icons/settings.svg"
import helpImg from "shared/assets/icons/orange-question-mark.svg"

export const PublicOptions: React.FC = () => {
  return (
    <OptionsWrap>
      <Tab to="/" text="Допомога" leftIcon={helpImg} />
      <Tab to="/" text="Налаштування" leftIcon={settingsImg} />
      <Tab to="/" text="Вийти" leftIcon={userImg} />
    </OptionsWrap>
  );
};
