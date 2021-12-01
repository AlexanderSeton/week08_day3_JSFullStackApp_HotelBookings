import React from "react";
import './HotelHeader.css'
import logo from "../assets/logo.svg";

const HotelHeader = () => {
    return(
        <header>
            <div className="logo-title">
                <img src={logo} height="auto" width="4%" id="svg" />
                <h1 className="heading">Hotelier</h1>
            </div>
            <h4 className="subheading">The Hotel Bookings App</h4>
        </header>
    )
}

export default HotelHeader;
