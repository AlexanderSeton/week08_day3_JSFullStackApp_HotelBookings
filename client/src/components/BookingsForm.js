import React, { useState } from "react";
import { postBooking } from "../services/bookingsService";

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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Full Name..." id="name" onChange={onChange} required></input>
                <input type="text" placeholder="Enter Email Address..." id="email" onChange={onChange} required></input>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default BookingsForm;
