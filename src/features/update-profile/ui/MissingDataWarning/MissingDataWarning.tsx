import {
    WarningTable,
    WarningTableImage,
    WarningTableText
} from './MissingDataWarning.styled';

import warningImg from 'shared/assets/img/warningcircle.png'


export function MissingDataWarning () {
  return (
    <div>
        <WarningTable className='warningtable'>
        <WarningTableImage src={warningImg} />
        <WarningTableText>
        To continue work add the missing data
        </WarningTableText>
        </WarningTable>
    </div>
  )
}
