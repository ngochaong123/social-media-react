import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link} from "react-router-dom";
import Logo from "../../img/sidebarMenu/Logo.png";
import Magnifier from "../../img/sidebarMenu/magnifier.png";
import mes from "../../img/sidebarMenu/messenger.png";
import Bell from "../../img/sidebarMenu/bell.png";
import User from "../../img/sidebarMenu/user1.png";
import Notification from "./Notification";
import "./header.css";

const Header = () => {
    const [showNotification, setShowNotification] = useState(false);
    const notificationRef = useRef(null);

    const handleNotificationClick = () => {
        // Toggle the showNotification state when clicking the bell button
        setShowNotification(!showNotification);
    };

    // Use useEffect to listen for click events outside the Notification component
    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Check if the click event occurred outside the Notification element
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                // Hide the Notification when clicking outside
                setShowNotification(false);
            }
        };

        // Register the click event for the entire page
        document.addEventListener('mousedown', handleOutsideClick);

        // Unregister the event when the component is unmounted
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

  return (
    <div>
        <div className='head-log'>
            {/* return to menu */}
            <Link to="/Menu">
                <img src={Logo} alt="Logo" className="Logo-Log" />
            </Link>
            
            {/* found  */}
            <div className="input-log-container">
                <div className="search-icon">
                    <img src={Magnifier}/>
                </div>
                <input className="input-log" type="text" placeholder="Tìm kiếm" />
            </div>

            {/* chat to friend */}
            <div className='enter-log-container'>
            <Link to="/Menu/Chat">
                <button className='enter-log'><img className='icon-log' src={mes} alt="Messenger Icon" /></button>
            </Link>
            
            {/* Notification code in header */}
            <div>
                {/* Nút Bell */}
                <button onClick={handleNotificationClick} className='enter-log'>
                    <img className='icon-log' src={Bell} alt="Bell Icon" />
                </button>

                {/* Component Notification, được điều chỉnh bởi showNotification */}
                {showNotification && (
                    <div ref={notificationRef}>
                        <Notification />
                    </div>
                )}
            </div>

            {/* user infomation */}
            <Link to="/Menu/User">
                <button className='enter-log'><img className='icon-log' src={User} alt="User Icon" /></button>
            </Link>
            </div>
        </div>
        <Outlet />
    </div>
  )
}

export default Header;