import {
    WarningTable,
    WarningTableImage,
    WarningTableText
} from './SuccessWarning.styled';

import checkCircle from 'shared/assets/img/check.png'


export function SuccessWarning () {
  return (
    <div>
        <WarningTable className='warningtable'>
        <WarningTableImage src={checkCircle} />
        <WarningTableText>
        Ваш профіль успішно оновлено
        </WarningTableText>
        </WarningTable>
    </div>
  )
}
