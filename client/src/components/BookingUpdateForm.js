import React, {useState} from 'react';
import './BookingUpdateForm.css'
import { putBooking } from '../services/bookingsService';

const BookingUpdateForm = ( {booking} ) => {

    const [formData, setFormData] = useState({})

    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    }
    
    const onHandleSubmit = (event) => {
        event.preventDefault();
        putBooking(booking._id, formData)
    }


    return (
        <div className="update-form">
            <form >
            <h2>Edit Booking</h2>
            <div className="formWrap">
                <label htmlFor="name">Name:</label>
                <input onChange={onChange} type="text" id="species" defaultValue={booking.name} required/>
            </div>
            <div className="formWrap">
                <label htmlFor="email">Email:</label>
                <input onChange={onChange} type="text" id="location" defaultValue={booking.email} required />
            </div>
            <div className="formWrap">
                <input onChange={onChange} type="checkbox" className="checkbox" id={booking._id} checked={booking.status} />
            </div>

            <input type="submit" value="Save" id="save"/>
            </form>
    </div>
    )
}

export default BookingUpdateForm;