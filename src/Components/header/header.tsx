import React, { useState, useRef } from 'react';

import { Outlet, Link } from "react-router-dom";
import Logo from "../../img/sidebarMenu/Logo.png";
import Magnifier from "../../img/sidebarMenu/magnifier.png";
import mes from "../../img/sidebarMenu/messenger.png";
import Bell from "../../img/sidebarMenu/bell.png";
import User from "../../img/sidebarMenu/user1.png";
import Notification from "./Notification";
import Avatar from "../../img/Chat/avatar-user.png";
import Exit from "../../img/sidebarMenu/exit.png";
import Sun from "../../img/sidebarMenu/sun.png";
import Setting from "../../img/sidebarMenu/settings.png";

import { useNavigate } from 'react-router-dom';

import "./header.css";

const Header = () => {
    const [showNotification, setShowNotification] = useState(false);
    const notificationRef = useRef(null);

    const handleNotificationClick = () => {
        setShowNotification(!showNotification);
        setShowTabUser(false);
    };

    const [showTabUser, setShowTabUser] = useState(false);
    const noTabUser = useRef(null);

    const handleTabClick = () => {
        setShowTabUser(!showTabUser);
        setShowNotification(false); 
    };

    // call link
    const navigate = useNavigate();

    // link to personalPage
    const personalPage = () => {
        navigate('/Menu/User');
    };

    // login out
    function LoginOut (){
        navigate("/Login");
    }

    return (
        <div>
            <div className='head-log'>
                <Link to="/Menu">
                    <img src={Logo} alt="Logo" className="Logo-Log" />
                </Link>

                <div className="input-log-container">
                    <div className="search-icon">
                        <img src={Magnifier} alt="Search Icon" />
                    </div>
                    <input className="input-log" type="text" placeholder="Tìm kiếm" />
                </div>

                <div className='enter-log-container'>
                    <Link to="/Menu/Chat">
                        <button className='enter-log'><img className='icon-log' src={mes} alt="Messenger Icon" /></button>
                    </Link>

                    <div>
                        <button onClick={handleNotificationClick} className='enter-log'>
                            <img className='icon-log' src={Bell} alt="Bell Icon" />
                        </button>

                        {showNotification && (
                            <div ref={notificationRef}>
                                <Notification />
                            </div>
                        )}
                    </div>

                    <div>
                        <button onClick={handleTabClick} className='enter-log'><img className='icon-log' src={User} alt="User Icon" /></button>

                        {showTabUser && (
                            <div ref={noTabUser} className='tabUserLocal'>
                                <div className='tabUser'>
                                    {/* personal page */}
                                    <button className='ClicktabUser' onClick={personalPage}>
                                        <img src={Avatar} className='personalPage' 
                                            style={{
                                                width:"36px",
                                                height:"36px",
                                                marginLeft:"2px"
                                            }}
                                        ></img>
                                        <div className='NametabUser' style={{marginTop:"-4px"}}> Trang cá nhân </div>
                                    </button>
                                    
                                    {/* mode light or night */}
                                    <button className='ClicktabUser' >
                                        <div className='iconTab'>
                                            <img src={Sun} className='personalPage'></img>
                                        </div>    
                                        <div className='NametabUser'> Chế độ sáng tối  </div>
                                    </button>
                                    
                                    {/* setting */}
                                    <button className='ClicktabUser'>
                                        <div className='iconTab'>
                                             <img src={Setting} className='personalPage'></img>
                                        </div>
                                        <div className='NametabUser'> Cài đặt  </div>
                                    </button>

                                    {/* login out account */}
                                    <button className='ClicktabUser' onClick={LoginOut}>
                                        <div className='iconTab'>
                                            <img src={Exit} className='personalPage' style={{
                                                width:"23px",
                                                height:"23px",
                                                marginRight:"-1px",
                                                marginTop:"2px"
                                            }}
                                            ></img>
                                        </div>
                                        <div className='NametabUser'> Thoát tài khoản </div>
                                    </button>

                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Header;
