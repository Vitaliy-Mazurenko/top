import { Tab } from "./Tabs/Tab";
import { OptionsWrap } from "./Tabs/TabsPanel.styled";
import { IOptionLink } from "./ManagerNavbar/ManagerNavbar";

interface IPublicOptionsProps {
  optionsData: IOptionLink[];
}

export const PublicOptions: React.FC<IPublicOptionsProps> = ({
  optionsData,
}) => {
  return (
    <OptionsWrap>
      {optionsData.map(({ to, text, icon }) => (
        <Tab to={to} text={text} leftIcon={icon} />
      ))}
    </OptionsWrap>
  );
};
