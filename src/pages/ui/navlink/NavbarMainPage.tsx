import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './navlink.css';


export const NavbarMainPage = () => {
  const activeLink = "mainpageswitcher mainpage--active";
  const normalLink = "mainpageswitcher";
  const location = useLocation();


  const [activeTab, setActiveTab] = useState<null | string>(null);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <nav className='navbarmainpage'>
        <ul className="nav-list">
          <li className="nav-list__item">
            <NavLink to="/settings" className={activeTab === '/settings' ? activeLink : normalLink}>
              Налаштування
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

