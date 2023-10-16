import { useState } from "react";
import { Tab } from "../Tabs/Tab";
import { TabsWrap } from "../Tabs/Tabs.styled";
import arrowIcon from 'shared/assets/img/arrowdown.png'
import userImg from 'shared/assets/img/user.png'
import teamImg from 'shared/assets/img/team.png'
import lockImg from 'shared/assets/img/lock.png'
import repoImg from 'shared/assets/img/repo.svg'

export const PersonalTabs = () => {
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
        <Tab text="портфоліо" to='/' />
        <Tab rightIcon={arrowIcon} onClick={togglePersonalDataDropdown} text="Персональні дані" />
        {isPersonalDataDropdownOpen && <>
          <Tab text="Навички" to="/" />
          <Tab text="спеціалізація" to="/" />
        </>}
       
      </>
      }

      <Tab text="команда" leftIcon={teamImg} to="/" />
      <Tab text="проєкти" leftIcon={lockImg} to="/" />
      <Tab text="репозиторій" leftIcon={repoImg}  to="/" />
    </TabsWrap>
  )
}
