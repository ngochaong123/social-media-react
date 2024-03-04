import React from 'react';
import Magnifier from "../../img/sidebarMenu/magnifier.png";
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
import Header from "../header/header";
import { Outlet, Link} from "react-router-dom";


export default function Menu() {
  return (
    <main>
      <Header />
        {/* sidebar menu in left */}
        <div className='sidebar-log-left'>
          <h1 className='nametab'> Thông tin cá nhân </h1>
          {/* button choose nguoi dung */}
          <button className='sidebar-button-left'>
            <img src={User1} className='sidebar-icon-chat-left'/>
            <div className='Name-icon-chat'>Người dùng</div>
          </button>
          <button className='sidebar-button-left'>
            <img src={Friend} className='sidebar-icon-chat-left'/>
            <div className='Name-icon-chat'>Bạn bè </div>
          </button>
          <button className='sidebar-button-left'>
            <img src={Group} className='sidebar-icon-chat-left'/>
            <div className='Name-icon-chat'>Nhóm của bạn</div>
          </button>
          <button className='sidebar-button-left'>
            <img src={Video} className='sidebar-icon-chat-left'/>
            <div className='Name-icon-chat'>Phim</div>
          </button>
          <button className='sidebar-button-left'>
            <img src={Shorts} className='sidebar-icon-chat-left'/>
            <div className='Name-icon-chat'>Phim ngắn</div>
          </button>
        </div>

        {/* user and friend post img and video */}
        <Post />
        
        {/* sidebar menu in right */}
        <div className='sidebar-log-right'>
          <h1 className='nametab'>Người liên hệ</h1>
          {/* search friend */}
          <div className="input-log-container-friend">
            <div className="search-icon">
              <img src={Magnifier}/>
            </div>
            <input className="input-log-friend" type="text" placeholder="Tìm bạn bè" />
          </div>
          {/* friend 1 */}
          <button className='sidebar-button-right'>
            <img src={u1} className='sidebar-icon'/>
            <div className='Name-icon-post-right'>Người bạn 1</div>
          </button>
          {/* friend 2 */}
          <button className='sidebar-button-right'>
            <img src={u2} className='sidebar-icon'/>
            <div className='Name-icon-post-right'>Người bạn 2</div>
          </button>
          {/* friend 3 */}
          <button className='sidebar-button-right'>
            <img src={u3} className='sidebar-icon'/>
            <div className='Name-icon-post-right'>Người bạn 3</div>
          </button>
          <button className='sidebar-button-right'>
            <img src={u4} className='sidebar-icon'/>
            <div className='Name-icon-post-right'>Người bạn 4</div>
          </button>
          <button className='sidebar-button-right'>
            <img src={u5} className='sidebar-icon'/>
            <div className='Name-icon-post-right'>Người bạn 5</div>
          </button>
          <button className='sidebar-button-right'>
            <img src={u6} className='sidebar-icon'/>
            <div className='Name-icon-post-right'>Người bạn 6</div>
          </button>
          <button className='sidebar-button-right'>
            <img src={u7} className='sidebar-icon'/>
            <div className='Name-icon-post-right'>Người bạn 7</div>
          </button>
          <button className='sidebar-button-right'>
            <img src={u8} className='sidebar-icon'/>
            <div className='Name-icon-post-right'>Người bạn 8</div>
          </button>
        </div>
      <Outlet />
    </main>
  );
}
