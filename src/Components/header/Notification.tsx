import React from "react";
import "./Notification.css"

// avatar 
import avatar1 from "../../img/sidebarMenu/notification/img1.jpg";
import avatar2 from "../../img/sidebarMenu/notification/img2.jpg";
import avatar3 from "../../img/sidebarMenu/notification/img3.jpg";
import avatar4 from "../../img/sidebarMenu/notification/img4.jpg";
import avatar5 from "../../img/sidebarMenu/notification/img5.png";
import avatar6 from "../../img/sidebarMenu/notification/img6.jpg";
import avatar7 from "../../img/sidebarMenu/notification/img7.jpg";


export default function Notification() {

    return (
          <main className="notification-Localtion">
             <div className="notification-container"> {/* frames notification  */}
                    <h1 className="title-Notifca"> Thông báo </h1>

                    {/* Notification group 1 */}
                    <div className="group-notification">
                         <div className="notifica">
                              <img src={avatar1} className="avatar-notifica"></img>
                              <p> Game ROBLOX đã mời 2 người mới vào nhóm </p>
                         </div>
                         <div className="group-time-notification"> 1 tuần trước </div>
                    </div>
                    
                    {/* Notification group 2 */}
                    <div className="group-notification">
                         <div className="notifica">
                              <img src={avatar2} className="avatar-notifica"></img>
                              <p> Liên quân mobile thắng bại tại kỹ năng ra mắt vị tướng mới </p>
                         </div>
                         <div className="group-time-notification"> 2 tuần trước </div>
                    </div>
                    
                    {/* Notification group 3 */}
                    <div className="group-notification">
                         <div className="notifica">
                              <img src={avatar3} className="avatar-notifica"></img>
                              <p> Liên minh huyện thoại ra mắt vị tướng mới </p>
                         </div>
                         <div className="group-time-notification"> 5 giờ trước </div>
                    </div>
                    
                    {/* Notification group 4 */}
                    <div className="group-notification">
                         <div className="notifica">
                              <img src={avatar4} className="avatar-notifica"></img>
                              <p> Khám phá thiên nhiên Bạn Nam đã đăng 6 tấm ảnh mới về nước Ý </p>
                         </div>
                         <div className="group-time-notification"> 2 phút trước </div>
                    </div>

                    {/* Notification group 5 */}
                    <div className="group-notification">
                         <div className="notifica">
                              <img src={avatar5} className="avatar-notifica"></img>
                              <p> CLB Vật lý và những ứng dụng thực tế  </p>
                         </div>
                         <div className="group-time-notification"> 1 tuần trước </div>
                    </div>
                    
                    {/* Notification group 6 */}
                    <div className="group-notification" style={{marginBottom:"20px"}}>
                         <div className="notifica">
                              <img src={avatar6} className="avatar-notifica"></img>
                              <p>Tin giải trí trong cuộc sống Thông báo truyền hình sẽ phát trực tiếp vào 8 giờ tối hôm nay </p>
                         </div>
                         <div className="group-time-notification"> 6 tiếng trước </div>
                    </div>

                    {/* Notification group 7 */}
                    <div className="group-notification" style={{marginBottom:"20px"}}>
                         <div className="notifica">
                              <img src={avatar7} className="avatar-notifica"></img>
                              <p>Âm nhạc reimix đăng bài hát mới Nothing can't stop me </p>
                         </div>
                         <div className="group-time-notification"> 6 tiếng trước </div>
                    </div>

                    {/* Notification group 8 */}
                    <div className="group-notification" style={{marginBottom:"20px"}}>
                         <div className="notifica">
                              <img src={avatar6} className="avatar-notifica"></img>
                              <p>Tin giải trí trong cuộc sống Thông báo truyền hình sẽ phát trực tiếp vào 8 giờ tối hôm nay </p>
                         </div>
                         <div className="group-time-notification"> 5 ngày trước </div>
                    </div>

               </div>  
          </main>
        
    )
}
