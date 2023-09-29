import {
    WarningTable,
    WarningTableImage,
    WarningTableText
} from './WarningPageBlueStyles';

import warningImg from 'shared/assets/img/warningcircle.png'


function WarningPageBlue () {
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

export default WarningPageBlue;