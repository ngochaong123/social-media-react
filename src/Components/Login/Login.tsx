import React, { useState } from 'react';
import facebook from "../../img/sidebarMenu/facebook.png";
import Google from "../../img/sidebarMenu/google.png";
import Apple from "../../img/sidebarMenu/apple-logo.png";
import Twitter from "../../img/sidebarMenu/twitter.png";
import { Outlet, Link } from "react-router-dom";
import "./Login.css"

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [activePanel, setActivePanel] = useState('active');

    const togglePanel = (panel: React.SetStateAction<string>) => {
        setActivePanel(panel);
    };

  return (
    <main className='fornt-login'>
        <div className={`container ${activePanel === 'signin' ? 'active' : ''}`} >
            <div className="form-container sign-in">
                <form>
                    <h1>Đăng nhập </h1>
                    <div className="social-icons">
                        <a className="icon"><img src={facebook} alt="Facebook Icon" style={{width:"25px", marginBottom: "0"}} /></a>
                        <a className="icon"><img src={Google} alt="Google Icon" style={{width:"25px", marginBottom: "0"}} /></a>
                        <a className="icon"><img src={Apple} alt="Apple Icon" style={{width:"25px", marginBottom: "0"}} /></a>
                        <a className="icon"><img src={Twitter} alt="Twitter Icon" style={{width:"25px", marginBottom: "0"}} /></a>
                    </div>
                    <span>Hoặc sử dụng tài khoản email </span>
                    <input type="email" placeholder="Email"  value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <a href="#">Quên mật khẩu?</a>
                    <Link to="/Menu"><button className='buttton'>Đăng nhập </button> </Link>
                </form>
            </div>
            <div className="form-container sign-up">
                <form>
                    <h1>Tạo tài khoản</h1>
                    <div className="social-icons">
                        <a className="icon"><img src={facebook} alt="Facebook Icon" style={{width:"25px", marginBottom: "0"}} /></a>
                        <a className="icon"><img src={Google} alt="Google Icon" style={{width:"25px", marginBottom: "0"}} /></a>
                        <a className="icon"><img src={Apple} alt="Apple Icon" style={{width:"25px", marginBottom: "0"}} /></a>
                        <a className="icon"><img src={Twitter} alt="Twitter Icon" style={{width:"25px", marginBottom: "0"}} /></a>
                    </div>
                    <span>Hoặc sử dụng email của bạn để đăng ký</span>
                    <input type="text" placeholder="Họ Tên" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Mật khẩu" />
                    <button>Đăng ký </button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className={`toggle-panel toggle-right ${activePanel === 'signin' ? 'active' : ''}`} >
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="hidden" onClick={() => togglePanel('signin')} >Đăng ký</button>
                    </div>
                    <div className={`toggle-panel toggle-left ${activePanel === 'signup' ? 'active' : ''}`}>
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button className="hidden" onClick={() => togglePanel('active')} >Đăng nhập</button>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    </main>
    
  );
}

export default App;
