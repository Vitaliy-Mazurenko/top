import { useState } from 'react';
import {
  MainPageContainer,
  MainPageInfo,
  MainPageHeader,
} from './MainPageStyles';

import { Navbar } from '../navbar/Navbar';
import { NavbarMainPage } from '../navlink/NavbarMainPage';
import RegistrationPage from '../registrationform/RegistrationPage';
import { PagePath } from '../pageswitcher/PageSwitcher';
import ModalForm from '../modal/modalform';
import WarningPageBlue from 'shared/ui/ReusableWarningTableBlue/WarningPageBlue';
import WarningPageGreen from 'shared/ui/ReusableWarningTableGreen/WarningPageGreen';

export const ProfileSettingsPage = () => {
  const [showWarningPageGreen, setShowWarningPageGreen] = useState(false);
  const handleSaveButtonClick = () => {
    setShowWarningPageGreen(true);
    // Другие действия после сохранения
  };
  return (
    <MainPageContainer>
      <Navbar />

      <div style={{marginLeft: '22px'}}>
        <PagePath />
        <MainPageHeader>Профіль</MainPageHeader>
        <NavbarMainPage sublinks={[
          {label: 'Налаштування', url: ''},
          {label: 'Сповіщення', url: ''},
          {label: 'Проєкти', url: ''},
          {label: 'Команда', url: ''},
        ]}/>
        <MainPageInfo>
          <div>
            <div>
              {showWarningPageGreen ? (
                <WarningPageGreen />
              ) : (
                <WarningPageBlue />
              )}
              <RegistrationPage onSave={handleSaveButtonClick} />
            </div>
          </div>
          <ModalForm />
        </MainPageInfo>
      </div>
    </MainPageContainer>
  );
};
