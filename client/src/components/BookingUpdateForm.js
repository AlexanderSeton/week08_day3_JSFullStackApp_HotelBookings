import React, {useState} from 'react';
import './BookingUpdateForm.css'
import { putBooking } from '../services/bookingsService';
import handleVisible from "./BookingsItem.js";


const BookingUpdateForm = ( {booking, updateBooking, editing, setEditing} ) => {

    const [formData, setFormData] = useState({})

    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    }
    
    const onHandleSubmit = (event) => {
        event.preventDefault();
        // console.log("formData:", formData);
        updateBooking(booking._id, formData)
        setEditing(!editing);
        console.log(event.target);
    }

    return (
        <div className="update-form">
            <form onSubmit={onHandleSubmit} className="update-form">
                <input type="text" placeholder="Enter Full Name..." id="name" onChange={onChange} required defaultValue={booking.name}></input>
                <input type="text" placeholder="Enter Email Address..." id="email" onChange={onChange} required defaultValue={booking.email}></input>
                <input type="submit" id="form-submit-update"/>
            </form>
            {/* <h2>Edit Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input onChange={onChange} type="text" id="name" defaultValue={booking.name} required/>
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text" id="location" defaultValue={booking.email} required />
            </div>
            <div className="formWrap">
                <input onChange={onChange} type="checkbox" className="checkbox" id={booking._id} checked={booking.status} />
            </div>

            <input type="submit" value="Save" id="save"/>
            </form> */}
        </div>
    )
}

export default BookingUpdateForm;
