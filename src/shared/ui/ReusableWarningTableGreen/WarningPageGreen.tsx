import {
    WarningTable,
    WarningTableImage,
    WarningTableText
} from './WarningPageGreenStyles';

import checkCircle from 'shared/assets/img/check.png'


function WarningPageGreen () {
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

export default WarningPageGreen;