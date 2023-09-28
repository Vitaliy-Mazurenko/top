import logoQuestion from '../../assets/img/question-circle.svg'
import logoNotifications from '../../assets/img/Notification.png'
import clientImg from './../../assets/img/custom.png'
import arrowDown from '../../assets/img/arrowdown.png'
import './clientmenu.css'

 function ClientMenu () {
  return (
    <div className='clientmenu'>
          <a className='cursor'><img src={logoQuestion} className='smallLogos' alt='question'/></a>
          <a className='cursor'><img src={logoNotifications} className='smallLogos notification' alt='notification'/></a>
          <div className='notification-badge'>1</div>
          <img src={clientImg} className='clientimage' alt='clientimage'/>
          <p className='clientName'>User</p>
          <a className='cursor'><img src={arrowDown} className='smallLogos' alt='arrowImg'/></a> 
    </div>
  )
}

export default ClientMenu;
