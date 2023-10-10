import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './SubNavbar.css';

interface SubNavbarProps {
  sublinks: Array<{
    label: string
    url: string
  }>
}

export const SubNavbar = (props: SubNavbarProps) => {
  const { sublinks } = props

  const location = useLocation();

  const activeLink = "mainpageswitcher mainpage--active";
  const normalLink = "mainpageswitcher";

  const [activeTab, setActiveTab] = useState<null | string>(null);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <div className='mainnavbardiv'>
      <nav className='navbarmainpage'>
        <ul className="nav-list">

          {
            sublinks.map(link => <li className="nav-list__item">
              <NavLink
                to={link.label}
                className={activeTab === link.url ? activeLink : normalLink}>
                {link.label}
              </NavLink>
            </li>
            )
          }

        </ul>
      </nav>
    </div>
  );
};

