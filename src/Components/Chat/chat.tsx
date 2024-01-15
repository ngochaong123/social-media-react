import React from 'react'
import "./chat.css";
import Header from "../menuMain/header";

import u1 from "../../img/person/u1.png";
import u2 from "../../img/person/u2.png";
import u3 from "../../img/person/u3.png";
import u4 from "../../img/person/u4.png";
import u5 from "../../img/person/u5.png";
import u6 from "../../img/person/u6.png";
import u7 from "../../img/person/u7.png";
import u8 from "../../img/person/u8.png";

import Magnifier from "../../img/sidebarMenu/magnifier.png";

export default function chat() {
  return (
    <main>
      <Header />
      <div className='sidebar-left-chat'>
        <h1 className='nametab'> Đoạn chat</h1>

        <div className="input-log-container-friend">
          <div className="search-icon">
            <img src={Magnifier}/>
          </div>
          <input className="input-log-friend" type="text" placeholder="Tìm bạn bè" />
        </div>

        <button className='sidebar-button-left-chat'>
          <img src={u1} className='sidebar-icon-chat'/>
          <div className='Name-icon-chat'>Bạn bè 1</div>
        </button>
        <button className='sidebar-button-left-chat'>
          <img src={u2} className='sidebar-icon-chat'/>
          <div className='Name-icon-chat'>Bạn bè 2</div>
        </button>
        <button className='sidebar-button-left-chat'>
          <img src={u3} className='sidebar-icon-chat'/>
          <div className='Name-icon-chat'>Bạn bè 3</div>
        </button>
        <button className='sidebar-button-left-chat'>
          <img src={u4} className='sidebar-icon-chat'/>
          <div className='Name-icon-chat'>Bạn bè 4</div>
        </button>
        <button className='sidebar-button-left-chat'>
          <img src={u5} className='sidebar-icon-chat'/>
          <div className='Name-icon-chat'>Bạn bè 5</div>
        </button>
        <button className='sidebar-button-left-chat'>
          <img src={u6} className='sidebar-icon-chat'/>
          <div className='Name-icon-chat'>Bạn bè 6</div>
        </button>
        <button className='sidebar-button-left-chat'>
          <img src={u7} className='sidebar-icon-chat'/>
          <div className='Name-icon-chat'>Bạn bè 7</div>
        </button>
        <button className='sidebar-button-left-chat'>
          <img src={u8} className='sidebar-icon-chat'/>
          <div className='Name-icon-chat'>Bạn bè 8</div>
        </button>
      </div>

      <div className='sidebar-right-chat'>
        <h1 className='nametab'>Người liên hệ</h1>

       
      </div>
    </main>
  )
}
