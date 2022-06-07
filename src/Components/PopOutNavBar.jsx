import React, { useState } from 'react';
import Router, { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../Data/NavBarData';
import '../ComponentsCSS/NavBar.css';

function NavBar() {
    const [shouldShowNavBar, setShouldShowNavBar] = useState(false);

    function showSidebar() {
        setShouldShowNavBar(!shouldShowNavBar);
    }


    //</nav>//</div>>

    return (
        <div>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={shouldShowNavBar ? 'nav-menu-active' : 'nav-menu-inactive'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>


    )
}

export default NavBar