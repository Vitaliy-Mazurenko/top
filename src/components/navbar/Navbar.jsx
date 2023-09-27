import React from 'react'
import logoImg from '../../assets/img/logo.png'
import userImg from '../../assets/img/user.png'
import teamImg from '../../assets/img/team.png'
import lockImg from '../../assets/img/lock.png'
import repoImg from '../../assets/img/repo.svg'
import sidebarImg from './../../assets/img/sidebarimg.png'
import settingsImg from '../../assets/img/Settings.png'
import './Navbar.css'

 function Navbar() {
  return (
    <div className='navbar'>
      <img src={logoImg} className='logoImg' alt='logoimage'/>
        <div className='sidebarinfo'>
        
              <img src={sidebarImg} className='sidebarimg' alt='sidebarimg'/>
              <h2 className='sidebarName'>Повне ім'я</h2>
              <p className='sidebarPosition'>Посада</p>
          </div>
        <div className='navbarButtons'>
          <a><button className='navbarButton '><img src={userImg} className='userImg'/> Профіль</button></a>
          <button className='navbarButton '><img src={teamImg}/> Команда</button>
          <button className='navbarButton '><img src={lockImg}/> Проекти</button>
          <button className='navbarButton'><img src={repoImg}/> Репозиторій</button>
        </div>
        <button className='navbarButton settingsBtn'><img src={settingsImg}/> Налаштування</button>
        </div>
  )
}

export default Navbar;
