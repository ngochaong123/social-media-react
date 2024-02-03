import React from 'react'
import "./user.css";

// import icon
import BG from "../../img/Chat/backgroundUser.jpg";
import Camera from "../../img/Chat/camera.png";
import Avatar from "../../img/Chat/avatar-user.png";
import Edit from "../../img/Chat/edit.png";
import Image from "../../img/sidebarMenu/image.png";
import Video from "../../img/sidebarMenu/video1.png";

//  images for user
import img1 from "../../img/User/img1.jpg";
import img2 from "../../img/User/img2.jpg";
import img3 from "../../img/User/img3.jpg";
import img4 from "../../img/User/img4.jpg";
import img5 from "../../img/User/img5.jpg";
import img6 from "../../img/User/img6.jpg";
import img7 from "../../img/User/img7.jpg";
import img8 from "../../img/User/img8.jpg";
import img9 from "../../img/User/img9.jpg";
import img10 from "../../img/User/img10.jpg";
import img11 from "../../img/User/img11.jpg";
import img12 from "../../img/User/img12.jpg";

// img post
import post1 from "../../img/sidebarMenu/post1.jpg";
import post2 from "../../img/sidebarMenu/post2.png";
import post3 from "../../img/sidebarMenu/post3.jpg";
import post4 from "../../img/sidebarMenu/post4.jpg";

// icon like, comment, share
import Like from "../../img/sidebarMenu/like.png";
import Comments from "../../img/sidebarMenu/chat.png";
import Share from "../../img/sidebarMenu/share.png";

//  import header
import Header from '../header/header';

export default function user() {
  return (
    <main>
      <Header />
      {/* background in header */}
      <div className='header-user'>
        <img src={BG} className='BG-user' />
        <div className='Camara-user'>
          <img src={Camera} style={{width:"25px",height:"25px",paddingLeft:"1px"}} />
        </div>
      </div>

      {/* create avatar for user */}
      <div className='contener-name-user'>
        <div className='avatar'>
          <img src={Avatar} />
          <div className='camera-chose-img'>
            <img src={Camera} />
          </div>

          {/* local name user */}
          <div className='local-name'>
            <h1> Name </h1>
            <div> 350 friends </div>
          </div>
        </div>
       
        <button className='Edit-Profile-user'>
          <img src={Edit} />
          <div > Edit Profile </div>
        </button>
      </div>

      {/* informarion and img for user  */}

      <div className='info-user'>
        {/* introduction user */}
        <div className='introdution-user'>
          <h4 style={{lineHeight:"2",marginBottom:"30px"}}> Introduction </h4>
          <div> Living in VietNam </div>
          <div> Teacher at ABC school </div>
          <div> Birthday: 05/06/1996 </div>
        </div>

        {/* images user */}
        <div className='img-user'>
          <h4 style={{lineHeight:"2",marginBottom:"10px"}}> Images </h4>
          <div className='user-add-img'>
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
            <img src={img5} />
            <img src={img6} />
            <img src={img7} />
            <img src={img8} />
            <img src={img9} />
            <img src={img10} />
            <img src={img11} />
            <img src={img12} />
          </div>
        </div>
      </div>

      <div className='contener-user-post'>

        {/* create post news  */}
        <section className='create-post-user'>
          <img className='icon-log-user' src={Avatar} alt="User Icon" />

          <div className="input-log-container-post">
            <div className="none-space"></div>
            <input className="input-log-post" type="text" placeholder="Đăng bài suy nghĩ về bạn" style={{width:"40vw"}} />
          </div>
          <img src={Image} style={{marginLeft:"30px",width:"27px",height:"27px"}} className='icon-log-post' />
          <img src={Video} style={{width:"23px",height:"23px"}} className='icon-log-post' />
        </section>

        {/* post news  */}
        <section className='new-post-container'>
          <div className='user-info'>
            <img  src={Avatar} className='icon-log-person' /> 
            <div style={{marginLeft:"10px"}}>
              <div> Name </div>
              <div style={{
                fontFamily:"inherit",
                fontWeight:"300",
                fontSize:"11px",
                marginTop:"2px"
              }}> 2 giờ trước</div>
            </div>
          </div>
          <p className='p-post'>Puppy so cute! </p>

          <div className='container-img'>
            <img src={post3} className='img-post-user' />
            <img src={post4} className='img-post-user' />
          </div>

          <div>
            <div className='chose-post'>
              <div> 500 Thích </div>
              <div> 60 Bình luận </div>
              <div> 200 Chia sẽ </div>
            </div>
            <div className='border-post'></div>
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

        {/* post new 2*/}
        <section className='new-post-container'>
          <div className='user-info'>
            <img  src={Avatar} className='icon-log-person' /> 
            <div style={{marginLeft:"10px"}}>
              <div> Name </div>
              <div style={{
                fontFamily:"inherit",
                fontWeight:"300",
                fontSize:"11px",
                marginTop:"2px"
              }}> 5 giờ trước</div>
            </div>
          </div>
          <p className='p-post'>Hôm nay là Sinh nhật của tôi  </p>

          <div>
            <div className='chose-post'>
              <div> 500 Thích </div>
              <div> 60 Bình luận </div>
              <div> 200 Chia sẽ </div>
            </div>
            <div className='border-post'></div>
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

        {/* post new 3 */}
        <section className='new-post-container'>
          <div className='user-info'>
            <img  src={Avatar} className='icon-log-person' /> 
            <div style={{marginLeft:"10px"}}>
              <div> Name </div>
              <div style={{
                fontFamily:"inherit",
                fontWeight:"300",
                fontSize:"11px",
                marginTop:"2px"
              }}> 1 giờ trước</div>
            </div>
          </div>
          <p className='p-post'>Ăn bánh pizaa </p>

          <div className='container-img'>
            <img src={post1} className='img-post-user' />
            <img src={post2} className='img-post-user' />
          </div>

          <div>
            <div className='chose-post'>
              <div> 500 Thích </div>
              <div> 60 Bình luận </div>
              <div> 200 Chia sẽ </div>
            </div>
            <div className='border-post'></div>
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

        {/* post new 4 */}
        <section className='new-post-container' style={{marginBottom:"80px"}}>
          <div className='user-info'>
            <img  src={Avatar} className='icon-log-person' /> 
            <div style={{marginLeft:"10px"}}>
              <div> Name </div>
              <div style={{
                fontFamily:"inherit",
                fontWeight:"300",
                fontSize:"11px",
                marginTop:"2px"
              }}> 10 ngày trước</div>
            </div>
          </div>
          <p className='p-post'>Sinh nhật của tôi 29/07/2002 </p>

          <div>
            <div className='chose-post'>
              <div> 500 Thích </div>
              <div> 60 Bình luận </div>
              <div> 200 Chia sẽ </div>
            </div>
            <div className='border-post'></div>
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

      </div>
      
    </main>
  )
}
