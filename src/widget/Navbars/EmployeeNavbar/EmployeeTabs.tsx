import { useState } from "react";
import arrowIcon from "shared/assets/img/arrowdown.png";
import userImg from "shared/assets/img/user.png";
import teamImg from "shared/assets/img/team.png";
import lockImg from "shared/assets/img/lock.png";
import repoImg from "shared/assets/img/repo.svg";
import { ITabInfo } from "shared/ui/Tabs/types/Tab";
import { TabList } from "shared/ui/Tabs";

export const EmployeeTabs = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isPersonalDataDropdownOpen, setIsPersonalDataDropdownOpen] =
    useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const togglePersonalDataDropdown = () => {
    setIsPersonalDataDropdownOpen(!isPersonalDataDropdownOpen);
  };

  const employeeTabsData: ITabInfo[] = [
    {
      rightIcon: arrowIcon,
      onClick: toggleProfileDropdown,
      text: "профіль",
      leftIcon: userImg,
    },
    {
      text: "портфоліо",
      to: "/",
    },
    {
      rightIcon: arrowIcon,
      onClick: togglePersonalDataDropdown,
      text: "Персональні дані",
    },
    {
      text: "Навички",
      to: "/",
    },
    {
      text: "спеціалізація",
      to: "/",
    },
    {
      text: "команда",
      leftIcon: teamImg,
      to: "/",
    },
    {
      text: "проєкти",
      leftIcon: lockImg,
      to: "/",
    },
    {
      text: "репозиторій",
      leftIcon: repoImg,
      to: "/",
    },
  ];

  const checkIsPersonalDataDropdownOpen = (data: ITabInfo[]) => {
    if (isPersonalDataDropdownOpen) {
      return data;
    }

    return data.filter(
      (i) => i.text !== "Навички" && i.text !== "спеціалізація"
    );
  };

  const checkIsProfileDropdownOpen = (data: ITabInfo[]) => {
    if (isProfileDropdownOpen) {
      return checkIsPersonalDataDropdownOpen(data);
    }

    return data.filter(
      (i) =>
        i.text !== "портфоліо" &&
        i.text !== "Персональні дані" &&
        i.text !== "Навички" &&
        i.text !== "спеціалізація"
    );
  };

  const visibleTabsData = checkIsProfileDropdownOpen(employeeTabsData);

  return <TabList tabsInfo={visibleTabsData} />;
};
