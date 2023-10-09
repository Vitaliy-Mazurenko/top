import { useMediaQuery } from "usehooks-ts";

import userImg from "shared/assets/icons/user.svg";
import settingsImg from "shared/assets/icons/settings.svg";
import helpImg from "shared/assets/icons/orange-question-mark.svg";

import { Tab } from "./Tabs/Tab";
import { OptionsWrap } from "./Tabs/TabsPanel.styled";

export const PublicOptions: React.FC = () => {
  const isSmallPhone = useMediaQuery("(max-width: 480px)");

  return (
    <OptionsWrap>
      <Tab to="/" text="Допомога" leftIcon={helpImg} />
      <Tab
        to="/"
        text={isSmallPhone ? "Налаштунок" : "Налаштування"}
        leftIcon={settingsImg}
      />
      <Tab to="/" text="Вийти" leftIcon={userImg} />
    </OptionsWrap>
  );
};
