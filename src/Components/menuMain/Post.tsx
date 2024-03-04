import React from 'react'
import "./Post.css";
import AddPost from "../../img/sidebarMenu/post.png";
import leftarrow from "../../img/sidebarMenu/Leftarrow.png";
import rightarrow from "../../img/sidebarMenu/rightArrow.png";
import User from "../../img/sidebarMenu/user1.png";
import image from "../../img/sidebarMenu/image.png";
import video1 from "../../img/sidebarMenu/video1.png";

// avatart
import u1 from "../../img/person/u1.png";
import u2 from "../../img/person/u2.png";

// image post
import post1 from "../../img/sidebarMenu/post1.jpg";
import post2 from "../../img/sidebarMenu/post2.png";
import post3 from "../../img/sidebarMenu/post3.jpg";
import post4 from "../../img/sidebarMenu/post4.jpg";

// icon like, comment and share
import Like from "../../img/sidebarMenu/like.png";
import Comments from "../../img/sidebarMenu/chat.png";
import Share from "../../img/sidebarMenu/share.png";

export default function mainContainer() {
  return (
    <main className='Post-container'>

      {/* short video friend and user post */}
      <section className='strories-post'>
        <div className='video-stores-container'>
          <h3 className='name-port'>Stories</h3>

          {/* video user post */}
          <button className='leftarrow-post'>
            <img src={leftarrow} className='leftarrow-icon' />
          </button>
          
          {/* button user turn left */}
          <button className='video-stores-postf'>
            <img src={AddPost} className='icon-post'/>
          </button>

          {/* video friend and user post */}
          <video className='video-stores-post' controls
            controlsList="nodownload noplaybackrate" // delete button dowloand, playbackspead
            disablePictureInPicture //detele full screen
            > 
            <source src={require('../../Video/v1.mp4')} type="video/mp4" />
          </video>

          <video className='video-stores-post' controls
            controlsList="nodownload noplaybackrate" // delete button dowloand, playbackspead
            disablePictureInPicture //detele full screen
            > 
            <source src={require('../../Video/v2.mp4')} type="video/mp4" />
          </video>

          <video className='video-stores-post' controls
            controlsList="nodownload noplaybackrate" // delete button dowloand, playbackspead
            disablePictureInPicture //detele full screen
            > 
            <source src={require('../../Video/v3.mp4')} type="video/mp4" />
          </video>

          <video className='video-stores-post' controls
            controlsList="nodownload noplaybackrate" // delete button dowloand, playbackspead
            disablePictureInPicture //detele full screen
            > 
            <source src={require('../../Video/v4.mp4')} type="video/mp4" />
          </video>
          
          <video className='video-stores-post' controls
            controlsList="nodownload noplaybackrate" // delete button dowloand, playbackspead
            disablePictureInPicture //detele full screen
            > 
            <source src={require('../../Video/v5.mp4')} type="video/mp4" />
          </video>

          {/* button user turn right */}
          <button className='rightarrow-post'>
            <img src={rightarrow} className='rightarrow-icon' />
          </button>
          
        </div>
      </section>

      {/* create user post to friend */}
      <section className='create-post'>
        <div className='avatar-post'><img className='icon-log' src={User} alt="User Icon" /></div>
        {/* input to post */}
        <div className="input-log-container-post">
          <div className="none-space">
          </div>
          <input className="input-log-post" type="text" placeholder="Đăng bài suy nghĩ về bạn" />
        </div>
        {/* post image */}
        <img src={image} style={{marginLeft:"101px",width:"32px",height:"32px"}} className='icon-log-post' />

        {/* post video */}
        <img src={video1} style={{width:"30px",height:"30px"}} className='icon-log-post' />
      </section>
      
      {/* some person post 1 */}
      <section className='someone-post-container'>
        <div className='user-info'>
          <img  src={u2} className='icon-log-person' /> {/* avatar someone  */}
          {/* name user */}
          <div style={{marginLeft:"10px",cursor:"default"}}>
            <div> Người dùng 1 </div>
            <div style={{
              fontFamily:"inherit",
              fontWeight:"300",
              fontSize:"11px",
              marginTop:"2px",
              cursor:"default"
            }}> 1 giờ trước</div>
          </div>
        </div>
        {/* write post */}
        <p className='p-post'>Ăn bánh pizza! </p>
        
        {/* image post */}
        <div className='container-img'>
          <img src={post1} className='img-post' />
          <img src={post2} className='img-post' />
        </div>

        {/* contanier show and chose like, comment and share */}
        <div>
          {/* show people chose  like, comment and share */}
            <div className='chose-post'>
              <div> 300 Thích </div>
              <div> 20 Bình luận </div>
              <div> 150 Chia sẽ </div>
            </div>
            <div className='border-post'></div>

            {/* icon like, comment and share  */}
            <div className='chose-post-space-img'>
              <button className='bnt-post-img'>
                <img src={Like} className='chose-post-img' />
              </button>
              <button className='bnt-post-img'>
                <img src={Comments} className='chose-post-img' />
              </button>
              <button className='bnt-post-img'>
                <img src={Share} className='chose-post-img' />
              </button>
            </div>
        </div>
      </section>
      
      {/* some person post 2 */}
      <section className='someone-post-container'>
        <div className='user-info'>
          <img  src={u1} className='icon-log-person' />  {/* avatar someone  */}
          {/* name user */}
          <div style={{marginLeft:"10px",cursor:"default"}}>
            <div> Người dùng 2 </div>
            <div style={{
              fontFamily:"inherit",
              fontWeight:"300",
              fontSize:"11px",
              marginTop:"2px",
              cursor:"default"
            }}> 2 giờ trước</div>
          </div>
        </div>
        {/* write post */}
        <p className='p-post'>Puppy so cute! </p>
        
        {/* image post */}
        <div className='container-img'>
          <img src={post3} className='img-post' />
          <img src={post4} className='img-post' />
        </div>
        
        {/* contanier show and chose like, comment and share */}
        <div>
          {/* show people chose  like, comment and share */}
            <div className='chose-post'>
              <div> 500 Thích </div>
              <div> 60 Bình luận </div>
              <div> 200 Chia sẽ </div>
            </div>
            <div className='border-post'></div>
            
            {/* icon like, comment and share  */}
            <div className='chose-post-space-img'>
              <button className='bnt-post-img'>
                <img src={Like} className='chose-post-img' />
              </button>
              <button className='bnt-post-img'>
                <img src={Comments} className='chose-post-img' />
              </button>
              <button className='bnt-post-img'>
                <img src={Share} className='chose-post-img' />
              </button>
            </div>
        </div>
      </section>

    </main>
  )
}
