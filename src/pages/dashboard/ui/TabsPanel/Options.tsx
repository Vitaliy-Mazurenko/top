import { Tab } from "./Tab";
import { OptionsWrap } from "./TabsPanel.styled";
import userImg from "../../../../shared/assets/img/user.png"
import settingsImg from "../../../../shared/assets/img/Settings.png"
import helpImg from "../../../../shared/assets/img/help-img.png"

export const Options: React.FC = () => {
  return (
    <OptionsWrap>
      <Tab text="Допомога" imgSrc={helpImg} />
      <Tab text="Налаштування" imgSrc={settingsImg}/>
      <Tab text="Вийти" imgSrc={userImg} />
    </OptionsWrap>
  );
};
