import {
  MainPageContainer,
  MainPageInfo,
  MainPageHeader,
  WarningTable,
  WarningTableImage,
  WarningTableText,
} from './MainPageStyles';

import warningImg from '../../../../shared/assets/img/warningcircle.png';
import Navbar from '../navbar/Navbar';
import NavbarMainPage from '../navlink/NavbarMainPage';
import RegistrationPage from '../registrationform/RegistrationPage';
import PageSwitcher from '../pageswitcher/PageSwitcher';
import ModalForm from '../modal/modalform';

const MainPage = () => {
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
              <WarningTable className='warningtable'>
                <WarningTableImage src={warningImg} />
                <WarningTableText>
                  To continue work add the missing data
                </WarningTableText>
              </WarningTable>
              <RegistrationPage />
            </div>
          </div>
          <ModalForm />
        </MainPageInfo>
      </div>
    </MainPageContainer>
  );
};

export default MainPage;
