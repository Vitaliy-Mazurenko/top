import { useState } from "react";

import { ITabInfo } from "shared/ui/Tabs/types/Tab";
import { TabList } from "shared/ui/Tabs";

import arrowIcon from "shared/assets/img/arrowdown.png";
import userImg from "shared/assets/img/user.png";
import teamImg from "shared/assets/img/team.png";
import lockImg from "shared/assets/img/lock.png";
import repoImg from "shared/assets/img/repo.svg";

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

  const checkIsPersonalDataDropdownOpen = (data: ITabInfo[]) => {
    if (isPersonalDataDropdownOpen) {
      return data;
    }

    return data.filter((i) => {
      const loweredText = i.text.toLowerCase();

      return loweredText !== "навички" && loweredText !== "спеціалізація";
    });
  };

  const checkIsProfileDropdownOpen = (data: ITabInfo[]) => {
    if (isProfileDropdownOpen) {
      return checkIsPersonalDataDropdownOpen(data);
    }

    return data.filter((i) => {
      const loweredText = i.text.toLowerCase();

      return (
        loweredText !== "портфоліо" &&
        loweredText !== "персональні дані" &&
        loweredText !== "навички" &&
        loweredText !== "спеціалізація"
      );
    });
  };

  const employeeTabsData: ITabInfo[] = [
    {
      rightIcon: arrowIcon,
      onClick: toggleProfileDropdown,
      text: "профіль",
      leftIcon: userImg,
      to: "/profile",
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
      to: "/team",
    },
    {
      text: "проєкти",
      leftIcon: lockImg,
      to: "/projects",
    },
    {
      text: "репозиторій",
      leftIcon: repoImg,
      to: "/",
    },
  ];

  const visibleTabsData = checkIsProfileDropdownOpen(employeeTabsData);

  return <TabList tabsInfo={visibleTabsData} />;
};
