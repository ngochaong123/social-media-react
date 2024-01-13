import React from 'react'
import "./Post.css";
import AddPost from "../../img/sidebarMenu/post.png";
import leftarrow from "../../img/sidebarMenu/Leftarrow.png";
import rightarrow from "../../img/sidebarMenu/rightArrow.png";

export default function mainContainer() {
  return (
    <main className='Post-container'>
      <div className='srories-post'>

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

    </main>
  )
}
