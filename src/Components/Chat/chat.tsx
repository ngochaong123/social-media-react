import React from 'react'
import "./chat.css";
import Header from "../header/header";
import ChatToFriend from "./ChatToFriend";

// avater friend user
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

// icon 
import Magnifier from "../../img/sidebarMenu/magnifier.png";
import Bg from "../../img/Chat/background.jpg"; 
import User from "../../img/Chat/user.png";
import StopBell from "../../img/Chat/stop-bell.png";
import DownArrow from "../../img/Chat/down.png";
import Phone from "../../img/Chat/phone-call.png";
import Webcam from "../../img/sidebarMenu/zoom.png";
import Img from "../../img/sidebarMenu/image.png"
import Video from "../../img/sidebarMenu/video1.png"; 
import Send from "../../img/Chat/send.png";

// image post in chat
import img1 from "../../img/Chat/Media/fall-pictures-tree-64fb55446921f.jpg";
import img2 from "../../img/Chat/Media/flowers-276014_640.jpg";
import img3 from "../../img/Chat/Media/hd-aspect-1500566326-gettyimages-512366437-1.jpg";
import img4 from "../../img/Chat/Media/imagesdddd.jpg";
import img5 from "../../img/Chat/Media/images.jpg";
import img6 from "../../img/Chat/Media/istockphoto-825383494-612x612.jpg";
import img7 from "../../img/Chat/Media/istockphoto-1317323736-612x612.jpg";
import img8 from "../../img/Chat/Media/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg";
import img9 from "../../img/Chat/Media/tron-le-eilpDNi_pV4-unsplash.jpg";

export default function chat() {
  return (
    <main>
      <Header />

      {/* sidebar left friend user */}
      <div className='sidebar-left-chat'>
        <div className='menu-chat-left'>
          <h1 className='nametab-left'> Đoạn chat</h1>

          <div className="input-log-container-friend">
            <div className="search-icon">
              <img src={Magnifier}  />
            </div>
            <input className="input-log-friend" type="text" placeholder="Tìm bạn bè" />
          </div>
        </div>

        {/* list friend  */}
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

      {/* chat friend header */}
      <div className='contener-chat-friend'>
        {/* header friend */}
        <div className='header-friend-chat'>
          <div className='user-info'>
            {/* avatar friend chat */}
            <img  src={u10} className='avatar-friend-chat' /> 
            {/* name and stauts */}
            <div style={{marginLeft:"10px",marginTop:"6px"}}>
              <div style={{cursor:"default"}}> Bạn bè 8 </div>
              <div style={{
                fontFamily:"inherit",
                fontWeight:"300",
                fontSize:"11px",
                marginTop:"2px",
                cursor:"default"
              }}> Online </div>
            </div>
          </div>
          {/* icon call and open webcame */}
          <div className='call-chat'>
            <img src={Phone} className='call-chat-icon' />
            <img src={Webcam} className='call-chat-icon' />
          </div>
        </div>
        
        {/* frame chat to friend */}
        <ChatToFriend />
        
        {/* frames chose chat */}
        <div className='contener-text-chat'>
          {/* post image and video */}
          <div className='img-chose-chat'>
            <img src={Img} style={{width:"28px",height:"28px",marginTop:"8px"}} className='img-text-chat' />
            <img src={Video} style={{width:"26px",height:"26px",marginBottom:"2px"}} className='img-text-chat' />
          </div>
          {/* write chat to friend */}
          <div className="chat-container-friend">
            <div className="emptyArea"> </div>
            <input className="chat-friend" type="text" placeholder="Chat friend"/>
          </div>
          {/* sends chat or image or video */}
          <div className='icon-send'>
            <img src={Send} style={{width:"18px",height:"18px"}} />
          </div>
        </div>
      </div>

      {/* sidebar information friend chat with user */}
      <div className='sidebar-right-chat'>
        <img src={Bg} className='Bg-right-chat'/>
        <img src={u10} className='avatar-chat-right'/>
        
        {/* infor friend */}
        <div className='inforUser'>
          <div className='infor-user-chat'>
            <h3 style={{cursor:"default"}}> Bạn bè 8 </h3>
            <div className='status-user'> Online </div>
             <div className='chose-inforUser-chat'>
              <img src={User} className='icon-chose-chat-user'/>
              <img src={StopBell} className='icon-chose-chat-bell'/>
            </div>
          </div>
        </div> 
        
        {/* list infor friend user */}
        <div className='btn-chose-sidebar-right'>
          <button >
            <div> Chat Infor </div>
            <img src={DownArrow} ></img>
          </button>
          <button>
            <div> Chat Setting </div>
            <img src={DownArrow} ></img>
          </button>
        </div>
        
        {/* imgae use post in chat */}
        <h4 style={{marginTop:"20px",marginLeft:"15px",cursor:"default"}}> Media </h4>
        
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
