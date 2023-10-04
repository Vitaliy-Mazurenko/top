import { useState } from "react";
import { Tab } from "../Tabs/Tab";
import { TabsWrap } from "../Tabs/Tabs.styled";
import userImg from "shared/assets/img/user.png";
import efficientImg from "shared/assets/img/Vector-1.png";
import walletImg from "shared/assets/img/wallet.png";
import arrowIcon from 'shared/assets/img/arrowdown.png'

export const EmployeeTabs = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isPersonalDataDropdownOpen, setIsPersonalDataDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const togglePersonalDataDropdown = () => {
    setIsPersonalDataDropdownOpen(!isPersonalDataDropdownOpen);
  };

  return (
    <TabsWrap>
      <Tab rightIcon={arrowIcon} onClick={toggleProfileDropdown} text="профіль" leftIcon={userImg} />
      {isProfileDropdownOpen && <>
        <Tab rightIcon={arrowIcon} onClick={togglePersonalDataDropdown} text="Персональні дані" />
        {isPersonalDataDropdownOpen && <>
          <Tab text="Навички" to="/" />
          <Tab text="спеціалізація" to="/" />
        </>}
        <Tab text="портфоліо" to='/' />
      </>
      }

      <Tab text="команда" leftIcon={walletImg} to="/" />
      <Tab text="проекти" leftIcon={efficientImg} to="/" />
      <Tab text="репозиторій" leftIcon={userImg}  to="/" />
    </TabsWrap>
  )
}
