import React from "react";
import Header from "../header/header";
import BG404 from "../../img/sidebarMenu/pagaNotFound.png";
import "./NotFoundPage.css";

export default function NotFoundPage(){
    return(
        <main>
            <Header />
            <div className="titlePage404">
                <h1> Lỗi không tìm thấy trang 404!!!</h1>
                <img src={BG404}></img>
            </div>
            
        </main>
    )
}
