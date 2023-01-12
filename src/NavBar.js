import React from "react";
import "./NavBar.css";
import Amazon from "./Amazonlogo.png";

function NavBar() {
    return(
        <div className="navMain">
            <div className="navLeft">
                <img className="navLogo" src={Amazon} alt="" />
                <img
                  src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg"
                  alt="logo"
                  />
                <h1 className="navLogotxt">T.music</h1>
            </div>
            <div className="navMiddle">
                <h1>PRICE</h1>
                <h1>ABOUT</h1>
                <h1>CONTACT</h1>
                <h1>TEAM</h1>
            </div>
            <div className="navRight">
                <h1>GET STARTED</h1>
            </div>
        </div>
    );
}

export default NavBar;