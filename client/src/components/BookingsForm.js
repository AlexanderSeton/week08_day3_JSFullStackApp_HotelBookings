import React, { useState } from "react";
import { postBooking } from "../services/bookingsService";
import "./BookingsForm.css";


const BookingsForm = ({ addBooking }) => {

    const [formData, setFormData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        formData.status = false;
        postBooking(formData).then((data) => {
            addBooking(data);
        });
        event.target.reset();
    }
    
    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    }
    
    return (
        <div className="booking-form-container">
            {/* <h3>Add a new booking</h3> */}
            <form onSubmit={handleSubmit} className="form">
                <input type="text" placeholder="Enter Full Name..." id="name" onChange={onChange} required className="input"></input>
                <input type="text" placeholder="Enter Email Address..." id="email" onChange={onChange} required className="input"></input>
                <input type="submit" className="submit" value="Add Booking"/>
            </form>
        </div>
    )
}

export default BookingsForm;
