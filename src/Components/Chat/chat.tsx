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
import u9 from "../../img/person/u9.png";
import u10 from "../../img/person/u10.png";

import Magnifier from "../../img/sidebarMenu/magnifier.png";
import Bg from "../../img/Chat/background.jpg"; 
import User from "../../img/Chat/user.png";
import StopBell from "../../img/Chat/stop-bell.png";

export default function chat() {
  return (
    <main>
      <Header />
      <div className='sidebar-left-chat'>
        <div className='menu-chat-left'>
          <h1 className='nametab-left'> Đoạn chat</h1>

          <div className="input-log-container-friend">
            <div className="search-icon">
              <img src={Magnifier}/>
            </div>
            <input className="input-log-friend" type="text" placeholder="Tìm bạn bè" />
          </div>
        </div>


        <button className='sidebar-button-left-chat' style={{marginTop:"100px"}}>
          <img src={u10} className='sidebar-icon-chat'/>
          <div>
            <div className='Name-icon-chat'>Bạn bè 8</div>
            <div className='chat-friends'>Bạn bè 8</div>
          </div>
        </button>
        <button className='sidebar-button-left-chat'>
          <img src={u1} className='sidebar-icon-chat'/>
          <div>
            <div className='Name-icon-chat'>Bạn bè 1</div>
            <div className='chat-friends'>Bạn bè 1</div>
          </div>
        </button>
        <button className='sidebar-button-left-chat'>
          <img src={u2} className='sidebar-icon-chat'/>
          <div>
            <div className='Name-icon-chat'>Bạn bè 2</div>
            <div className='chat-friends'>Bạn bè 2</div>
          </div>
        </button>
        <button className='sidebar-button-left-chat'>
          <img src={u3} className='sidebar-icon-chat'/>
          <div>
            <div className='Name-icon-chat'>Bạn bè 3</div>
            <div className='chat-friends'>Bạn bè 3</div>
          </div>
        </button>
        <button className='sidebar-button-left-chat'>
          <img src={u4} className='sidebar-icon-chat'/>
          <div>
             <div className='Name-icon-chat'>Bạn bè 4</div>
             <div className='chat-friends'>Bạn bè 4</div>
          </div>
        </button>
        <button className='sidebar-button-left-chat'>
          <img src={u5} className='sidebar-icon-chat'/>
          <div>
            <div className='Name-icon-chat'>Bạn bè 5</div>
            <div className='chat-friends'>Bạn bè 5</div>
          </div>
        </button>
        <button className='sidebar-button-left-chat'>
          <img src={u6} className='sidebar-icon-chat'/>
          <div>
            <div className='Name-icon-chat'>Bạn bè 6</div>
            <div className='chat-friends'>Bạn bè 6</div>
          </div>
        </button>
        <button className='sidebar-button-left-chat'>
          <img src={u7} className='sidebar-icon-chat'/>
          <div>
             <div className='Name-icon-chat'>Bạn bè 7</div>
             <div className='chat-friends'>Bạn bè 7</div>
          </div>
        </button>
        <button className='sidebar-button-left-chat'>
          <img src={u8} className='sidebar-icon-chat'/>
          <div>
            <div className='Name-icon-chat'>Bạn bè 8</div>
            <div className='chat-friends'>Bạn bè 8</div>
          </div>
        </button>
        <button className='sidebar-button-left-chat'>
          <img src={u9} className='sidebar-icon-chat'/>
          <div>
            <div className='Name-icon-chat'>Bạn bè 8</div>
            <div className='chat-friends'>Bạn bè 8</div>
          </div>
        </button>
      </div>

      <div className='sidebar-right-chat'>
        <img src={Bg} className='Bg-right-chat'/>
        <img src={u10} className='avatar-chat-right'/>

        <div className='inforUser'>
          <div className='infor-user-chat'>
            <h3> user 1 </h3>
            <div style={{fontWeight:"100px",fontSize:"12px"}}> Online </div>
             <div className='chose-inforUser-chat'>
              <img src={User} className='icon-chose-chat-user'/>
              <img src={StopBell} className='icon-chose-chat-bell'/>
            </div>
          </div>
        </div> 
        
      </div>
    </main>
  )
}
