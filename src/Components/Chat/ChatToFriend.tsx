import React from "react";
import "./ChatToFriend.css";

import u10 from "../../img/person/u10.png";
import avatarUser from "./../../img/Chat/avatar-user.png"


export default function (){
    return(
        <main>
            {/* friend chat  */}
            <div className="friend-frame-chat">
                {/* avatar chat to friend */}
                <div className="friend-avatar-container">
                    <img src={u10} className="friend-chat" alt="Friend Avatar" />
                </div>
                {/* paragraph chat to friend */}
                <p className="friend-paragraph-chat">Theo thông tin bước đầu, do nghi ngờ chồng mình có tình nhân nên bà T. mang theo dao đến một khách sạn trên đường Nguyễn Du, phường 7, TP Tuy Hòa thuê phòng để theo dõi. Khi phát hiện chồng là P.N.H. bước ra từ một phòng nghỉ, bà T. đã đâm một nhát vào lưng ông H. Chưa dừng lại ở đó, bà T. tiếp tục xông vào phòng nghỉ dùng dao khống chế, tra hỏi bà Q., sau đó đâm tình địch ba nhát vào đầu, mặt và tay.</p>
            </div>

            <div className="friend-frame-chat">
                {/* avatar chat to friend */}
                <div className="friend-avatar-container">
                    <img src={u10} className="friend-chat" alt="Friend Avatar" />
                </div>
                {/* paragraph chat to friend */}
                <p className="friend-paragraph-chat">  phường 7, TP Tuy Hòa thuê phòng để theo dõi. Khi phát hiện chồng là P.N.H. bước ra từ một phòng nghỉ, bà T. đã đâm một nhát vào lưng ông H. Chưa dừng lại ở đó, bà T. tiếp tục xông vào phòng nghỉ dùng dao khống chế, tra hỏi bà Q., sau đó đâm tình địch ba nhát vào đầu, mặt và tay.</p>
            </div>

            {/* user chat  */}
            <div className="user-frame-chat">
                {/* avatar chat to friend */}
                <div className="user-avatar-container">
                    <img src={avatarUser} className="user-chat" alt="Friend Avatar" />
                </div>
                {/* paragraph chat to friend */}
                <p className="user-paragraph-chat">  phường 7, TP Tuy Hòa thuê phòng để theo dõi. Khi phát hiện chồng là P.N.H. bước ra từ một phòng nghỉ, bà T. đã đâm một nhát vào lưng ông H. Chưa dừng lại ở đó, bà T. tiếp tục xông vào phòng nghỉ dùng dao khống chế, tra hỏi bà Q., sau đó đâm tình địch ba nhát vào đầu, mặt và tay.</p>
            </div>

            <div className="user-frame-chat">
                {/* avatar chat to friend */}
                <div className="user-avatar-container">
                    <img src={avatarUser} className="user-chat" alt="Friend Avatar" />
                </div>
                {/* paragraph chat to friend */}
                <p className="user-paragraph-chat">Hello my friend</p>
            </div>

            {/* friend chat */}
            <div className="friend-frame-chat" style={{marginBottom:"100px"}}>
                {/* avatar chat to friend */}
                <div className="friend-avatar-container">
                    <img src={u10} className="friend-chat" alt="Friend Avatar" />
                </div>
                {/* paragraph chat to friend */}
                <p className="friend-paragraph-chat">Theo thông tin bước đầu, do nghi ngờ chồng mình có tình nhân nên bà T. mang theo dao đến một khách sạn trên đường Nguyễn Du, phường 7, TP Tuy Hòa thuê phòng để theo dõi. Khi phát hiện chồng là P.N.H. bước ra từ một phòng nghỉ, bà T. đã đâm một nhát vào lưng ông H. Chưa dừng lại ở đó, bà T. tiếp tục xông vào phòng nghỉ dùng dao khống chế, tra hỏi bà Q., sau đó đâm tình địch ba nhát vào đầu, mặt và tay.</p>
            </div>

        </main>
    )
}