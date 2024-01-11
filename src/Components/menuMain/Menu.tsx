import React from 'react';
import Logo from "../../img/sidebarMenu/Logo.png";
import Magnifier from "../../img/sidebarMenu/magnifier.png";
import mes from "../../img/sidebarMenu/messenger.png";
import Bell from "../../img/sidebarMenu/bell.png";
import User from "../../img/sidebarMenu/user1.png";
import User1 from "../../img/sidebarMenu/user.png";
import Friend from "../../img/sidebarMenu/friend.png";
import Group from "../../img/sidebarMenu/group.png";
import Video from "../../img/sidebarMenu/zoom.png";
import Shorts from "../../img/sidebarMenu/video.png"

import u1 from "../../img/person/u1.png";
import u2 from "../../img/person/u2.png";
import u3 from "../../img/person/u3.png";
import u4 from "../../img/person/u4.png";
import u5 from "../../img/person/u5.png";
import u6 from "../../img/person/u6.png";
import u7 from "../../img/person/u7.png";
import u8 from "../../img/person/u8.png";
import "./Menu.css";
import Post from "./Post";

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

      <div className='sidebar-log-left'>
        <h1 className='nametab'> Menu</h1>

        <button className='sidebar-button-left'>
          <img src={User1} className='sidebar-icon'/>
          <div style={{paddingRight:"63px",whiteSpace:"nowrap"}}>Cá nhân</div>
        </button>
        <button className='sidebar-button-left'>
          <img src={Friend} className='sidebar-icon'/>
          <div style={{paddingRight:"72px",whiteSpace:"nowrap"}}>Bạn bè</div>
        </button>
        <button className='sidebar-button-left'>
          <img src={Group} className='sidebar-icon'/>
          <div style={{paddingRight:"20px",whiteSpace:"nowrap"}}>Nhóm của bạn</div>
        </button>
        <button className='sidebar-button-left'>
          <img src={Video} className='sidebar-icon'/>
          <div style={{paddingRight:"83px",whiteSpace:"nowrap"}}>Phim</div>
        </button>
        <button className='sidebar-button-left'>
          <img src={Shorts} className='sidebar-icon'/>
          <div style={{paddingRight:"44px",whiteSpace:"nowrap"}}>Phim ngắn</div>
        </button>
      </div>

      <Post />

      <div className='sidebar-log-right'>
        <h1 className='nametab'>Người liên hệ</h1>

        <button className='sidebar-button-right'>
          <img src={u1} className='sidebar-icon'/>
          <div className='Name-icon'>Người bạn 1</div>
        </button>
        <button className='sidebar-button-right'>
          <img src={u2} className='sidebar-icon'/>
          <div className='Name-icon'>Người bạn 2</div>
        </button>
        <button className='sidebar-button-right'>
          <img src={u3} className='sidebar-icon'/>
          <div className='Name-icon'>Người bạn 3</div>
        </button>
        <button className='sidebar-button-right'>
          <img src={u4} className='sidebar-icon'/>
          <div className='Name-icon'>Người bạn 4</div>
        </button>
        <button className='sidebar-button-right'>
          <img src={u5} className='sidebar-icon'/>
          <div className='Name-icon'>Người bạn 5</div>
        </button>
        <button className='sidebar-button-right'>
          <img src={u6} className='sidebar-icon'/>
          <div className='Name-icon'>Người bạn 6</div>
        </button>
        <button className='sidebar-button-right'>
          <img src={u7} className='sidebar-icon'/>
          <div className='Name-icon'>Người bạn 7</div>
        </button>
        <button className='sidebar-button-right'>
          <img src={u8} className='sidebar-icon'/>
          <div className='Name-icon'>Người bạn 8</div>
        </button>
      </div>
    </main>
  );
}
