import {
  PageSwitcherContainer,
  PageSwitchMain,
  ExtraText,
  PageSwitchLink,
  ActiveLink,
} from './PageSwitcherStyles';
import ClientMenu from '../clientmenu/ClientMenu';
import { useLocation } from 'react-router-dom';
import { capitalizeFirstLetter } from 'shared/helpers/capitalizeFirstLetter';

export const PagePath = () => {
  const path = useLocation()
  console.log(path)
  const segments = path.pathname
    .split('/') //разделить на сегменты
    .filter(Boolean) // убрать пустой элемент в начале
    .map(segment => ({
      label: capitalizeFirstLetter(segment),
      url: segment
    })) // заменить каждую строку той же строкой с большой буквой

  return (
    <PageSwitcherContainer>
      <div>
        <PageSwitchMain>
          {
            segments.map((pathSegment, index) => <>

              {
                index !== segments.length - 1 && <>
                  <PageSwitchLink to={pathSegment.url}>
                    {pathSegment.label}
                  </PageSwitchLink>
                  <ExtraText> / </ExtraText>
                </>
              }
              {
                index === segments.length - 1 &&
                <ActiveLink to={pathSegment.url}>{pathSegment.label}</ActiveLink>
              }
            </>)
          }
        </PageSwitchMain>
      </div>
      <ClientMenu />
    </PageSwitcherContainer>
  );
};
