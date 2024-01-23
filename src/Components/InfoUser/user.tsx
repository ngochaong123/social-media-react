import React from 'react'
import "./User.css";

import BG from "../../img/Chat/backgroundUser.jpg";
import Camera from "../../img/Chat/camera.png";
import Avatar from "../../img/Chat/avatar-user.png";
import Edit from "../../img/Chat/edit.png";

import Header from '../menuMain/header';

export default function user() {
  return (
    <main>
      <Header />
      <div className='header-user'>
        <img src={BG} className='BG-user' />
        <div className='Camara-user' >
          <img src={Camera} style={{width:"25px",height:"25px",paddingLeft:"1px"}} />
        </div>
      </div>

      <div className='contener-name-user'>
        <div className='avatar'>
          <img src={Avatar} />
          <div className='camera-chose-img'>
            <img src={Camera} />
          </div>
           <div className=''>
              <h3> Name </h3>
              <div> 350 friends </div>
            </div>
        </div>
       
        <button className='Edit-Profile-user'>
          <img src={Edit} />
          <div > Edit Profile </div>
        </button>
      </div>

    </main>
  )
}
