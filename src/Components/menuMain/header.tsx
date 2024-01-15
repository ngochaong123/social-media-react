import React from 'react'
import { Outlet, Link} from "react-router-dom";
import Logo from "../../img/sidebarMenu/Logo.png";
import Magnifier from "../../img/sidebarMenu/magnifier.png";
import mes from "../../img/sidebarMenu/messenger.png";
import Bell from "../../img/sidebarMenu/bell.png";
import User from "../../img/sidebarMenu/user1.png";
import "./header.css";

export default function header() {
  return (
    <div>
        <div className='head-log'>
            <img src={Logo} alt="Logo" className="Logo-Log" />

            <div className="input-log-container">
            <div className="search-icon">
                <img src={Magnifier}/>
            </div>
            <input className="input-log" type="text" placeholder="Tìm kiếm" />
            </div>
    
            <div className='enter-log-container'>
            <Link to="/Menu/Chat">
                <button className='enter-log'><img className='icon-log' src={mes} alt="Messenger Icon" /></button>
            </Link>
            <button className='enter-log'><img className='icon-log' src={Bell} alt="Bell Icon" /></button>
            <Link to="/Menu/User">
                <button className='enter-log'><img className='icon-log' src={User} alt="User Icon" /></button>
            </Link>
            </div>
        </div>
        <Outlet />
    </div>
  )
}
