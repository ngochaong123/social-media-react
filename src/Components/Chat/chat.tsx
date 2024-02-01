import React from 'react'
import "./chat.css";
import Header from "../header/header";

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
import DownArrow from "../../img/Chat/down.png";

import img1 from "../../img/Chat/Media/fall-pictures-tree-64fb55446921f.jpg";
import img2 from "../../img/Chat/Media/flowers-276014_640.jpg";
import img3 from "../../img/Chat/Media/hd-aspect-1500566326-gettyimages-512366437-1.jpg";
import img4 from "../../img/Chat/Media/imagesdddd.jpg";
import img5 from "../../img/Chat/Media/images.jpg";
import img6 from "../../img/Chat/Media/imagesdddd.jpg";
import img7 from "../../img/Chat/Media/istockphoto-1317323736-612x612.jpg";
import img8 from "../../img/Chat/Media/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg";
import img9 from "../../img/Chat/Media/tron-le-eilpDNi_pV4-unsplash.jpg";

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
            <h3 > user 1 </h3>
            <div className='status-user'> Online </div>
             <div className='chose-inforUser-chat'>
              <img src={User} className='icon-chose-chat-user'/>
              <img src={StopBell} className='icon-chose-chat-bell'/>
            </div>
          </div>
        </div> 

        <div className='btn-chose-sidebar-left'>
          <button >
            <div> Chat Infor </div>
            <img src={DownArrow} ></img>
          </button>
          <button>
            <div> Chat Setting </div>
            <img src={DownArrow} ></img>
          </button>
        </div>

        <h4 style={{marginTop:"20px",marginLeft:"15px"}}> Media </h4>

        <div className='media-img-sidebar'>
          <img src={img1} /> 
          <img src={img2} /> 
          <img src={img3} /> 
          <img src={img4} /> 
          <img src={img5} /> 
          <img src={img6} /> 
          <img src={img7} /> 
          <img src={img8} /> 
          <img src={img9} /> 
        </div>

      </div>
    </main>
  )
}
