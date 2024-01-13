import React from 'react'
import "./Post.css";
import AddPost from "../../img/sidebarMenu/post.png";
import leftarrow from "../../img/sidebarMenu/Leftarrow.png";
import rightarrow from "../../img/sidebarMenu/rightArrow.png";
import User from "../../img/sidebarMenu/user1.png";
import image from "../../img/sidebarMenu/image.png";
import video1 from "../../img/sidebarMenu/video1.png";

export default function mainContainer() {
  return (
    <main className='Post-container'>
      <div className='strories-post'>

        <h3 className='name-port'>Stories</h3>

        <div className='video-stores-container'>
          <button className='leftarrow-post'>
            <img src={leftarrow} className='leftarrow-icon' />
          </button>
          
          <button className='video-stores-postf'>
            <img src={AddPost} className='icon-post'/>
          </button>

          <video className='video-stores-post' controls
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture >
            <source src={require('../../Video/v1.mp4')} type="video/mp4" />
          </video>

          <video className='video-stores-post' controls
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture>
            <source src={require('../../Video/v2.mp4')} type="video/mp4" />
          </video>

          <video className='video-stores-post' controls
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture>
            <source src={require('../../Video/v3.mp4')} type="video/mp4" />
          </video>

          <video className='video-stores-post' controls
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture>
            <source src={require('../../Video/v4.mp4')} type="video/mp4" />
          </video>
          
          <video className='video-stores-post' controls
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture>
            <source src={require('../../Video/v5.mp4')} type="video/mp4" />
          </video>

          <button className='rightarrow-post'>
            <img src={rightarrow} className='rightarrow-icon' />
          </button>
          
        </div>
      </div>

      <div className='create-post'>
        <div className='avatar-post'><img className='icon-log' src={User} alt="User Icon" /></div>

        <div className="input-log-container-post">
          <div className="none-space">
          </div>
          <input className="input-log-post" type="text" placeholder="Đăng bài suy nghĩ về bạn" />
        </div>

        <img src={image} style={{marginLeft:"100px",width:"32px",height:"32px"}} className='icon-log-post' />
        <img src={video1} style={{width:"30px",height:"30px"}} className='icon-log-post' />
      </div>

    </main>
  )
}
