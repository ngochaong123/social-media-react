import React from 'react';
import Logo from "../img/Logo.png";
import Magnifier from "../img/magnifier.png";
import mes from "../img/messenger.png";
import Bell from "../img/bell.png";
import User from "../img/user1.png";
import "./Menu.css";

export default function Menu() {
  return (
    <main>
      <div className='head-log'>
        <img src={Logo} alt="Logo" className="Logo-Log" />

        <div className="input-log-container">
          <div className="search-icon">
            <img src={Magnifier}/>
          </div>
          <input className="input-log" type="text" placeholder="Tìm kiếm" />
        </div>
 
        <div className='enter-log-container'>
          <div className='enter-log'><img className='icon-log' src={mes} alt="Messenger Icon" /></div>
          <div className='enter-log'><img className='icon-log' src={Bell} alt="Bell Icon" /></div>
          <div className='enter-log'><img className='icon-log' src={User} alt="User Icon" /></div>
        </div>
      </div>
    </main>
  );
}
