import { useState } from 'react';
import {
  MainPageContainer,
  MainPageInfo,
  MainPageHeader,
} from './MainPageStyles';

import { Navbar } from '../navbar/Navbar';
import { NavbarMainPage } from '../navlink/NavbarMainPage';
import RegistrationPage from '../registrationform/RegistrationPage';
import PageSwitcher from '../pageswitcher/PageSwitcher';
import ModalForm from '../modal/modalform';
import WarningPageBlue from 'shared/ui/ReusableWarningTableBlue/WarningPageBlue';
import WarningPageGreen from 'shared/ui/ReusableWarningTableGreen/WarningPageGreen';

const MainPage = () => {
  const [showWarningPageGreen, setShowWarningPageGreen] = useState(false);
  const handleSaveButtonClick = () => {
    setShowWarningPageGreen(true);
    // Другие действия после сохранения
  };
  return (
    <MainPageContainer>
      <Navbar />

      <div>
        <PageSwitcher />
        <MainPageHeader>Профіль</MainPageHeader>
        <NavbarMainPage />
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

export default MainPage;