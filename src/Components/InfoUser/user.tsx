import React from 'react'
import "./User.css";

// import icon
import BG from "../../img/Chat/backgroundUser.jpg";
import Camera from "../../img/Chat/camera.png";
import Avatar from "../../img/Chat/avatar-user.png";
import Edit from "../../img/Chat/edit.png";

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

//  import header
import Header from '../menuMain/header';

export default function user() {
  return (
    <main>
      <Header />
      {/* background in header */}
      <div className='header-user'>
        <img src={BG} className='BG-user' />
        <div className='Camara-user' >
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

    </main>
  )
}
