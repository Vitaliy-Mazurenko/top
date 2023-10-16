import { Tab } from "./Tabs/Tab";
import { OptionsWrap } from "./Tabs/TabsPanel.styled";
import settingsImg from "shared/assets/icons/settings.svg"

export const PersonalOptions: React.FC = () => {
  return (
    <OptionsWrap>
      <Tab to="/" text="Налаштування" leftIcon={settingsImg} />
    </OptionsWrap>
  );
};
