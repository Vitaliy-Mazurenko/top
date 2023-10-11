import { Tab } from "widget/DashboardFooter/Tabs/Tab";
import { IOptionLink } from "./ManagerNavbar/ManagerNavbar";

interface IPublicOptionsProps {
  optionsData: IOptionLink[];
}

export const PublicOptions: React.FC<IPublicOptionsProps> = ({
  optionsData,
}) => {
  return (
    <div>
      {optionsData.map(({ to, text, icon }) => (
        <Tab to={to} text={text} leftIcon={icon} />
      ))}
    </div>
  );
};
