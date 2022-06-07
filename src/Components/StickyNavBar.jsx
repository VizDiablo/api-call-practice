import React, { useState } from 'react'
import StickyBox from "react-sticky-box";
import { SidebarData } from '../Data/NavBarData';
import '../ComponentsCSS/NavBar.css';
import Router, { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

function StickyNavBar(props) {
    console.log(SidebarData);


    return (<div className='sticky-navbar'>
        <StickyBox>
            <nav>
                <ul>
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
        </StickyBox>
    </div>);
}

export default StickyNavBar;