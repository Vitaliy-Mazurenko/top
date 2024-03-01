import { Tab } from "./TabsTemp/Tab";
import { OptionsWrap } from "./TabsTemp/TabsPanel.styled";
import { IOptionLink } from "./ManagerNavbarTemp/ManagerNavbar";

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
