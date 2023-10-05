import {
  WarningTable,
  WarningTableImage,
  WarningTableText
} from './MissingDataWarning.styled';

import warningImg from 'shared/assets/img/warningcircle.png'


export function MissingDataWarning() {
  return (
    <div>
      <WarningTable className='warningtable'>
        <WarningTableImage src={warningImg} />
        <WarningTableText>
          Для продовження  вкажіть відсутні дані
        </WarningTableText>
      </WarningTable>
    </div>
  )
}
