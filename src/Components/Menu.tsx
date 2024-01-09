import React from 'react';
import Logo from "../img/Logo.png";
import Magnifier from "../img/magnifier.png";
import mes from "../img/messenger.png";
import Bell from "../img/bell.png";
import User from "../img/user1.png";
import User1 from "../img/user.png";
import Friend from "../img/friend.png";
import Group from "../img/group.png";
import Video from "../img/zoom.png";
import Shorts from "../img/video.png"
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

      <div className='sidebar-log'>
        <h1 className='nametab'> Menu</h1>

        <button className='sidebar-button'>
          <img src={User1} className='sidebar-icon'/>
          <div>Profiles</div>
        </button>
        <button className='sidebar-button'>
          <img src={Friend} className='sidebar-icon'/>
          <div>Friends</div>
        </button>
        <button className='sidebar-button'>
          <img src={Group} className='sidebar-icon'/>
          <div>Groups</div>
        </button>
        <button className='sidebar-button'>
          <img src={Video} className='sidebar-icon'/>
          <div>Videos</div>
        </button>
        <button className='sidebar-button'>
          <img src={Shorts} className='sidebar-icon'/>
          <div>Shorts</div>
        </button>
      </div>
    </main>
  );
}
