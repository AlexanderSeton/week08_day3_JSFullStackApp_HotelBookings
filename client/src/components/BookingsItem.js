import React, {useState} from "react";
import "./BookingsItem.css";
import BookingUpdateForm from "./BookingUpdateForm.js";
import "./BookingUpdateForm.css";

const BookingsItem = ({ booking, deleteBooking, checkChange, updateBooking }) => {

    const [editing, setEditing] = useState(false)

    const checkedIn = function(){
        let status;
        if (booking.status === true){
            status = "Checked-In"
        } else {
            status = null
        }
        return status
    }

    const handleVisible = function() {
        setEditing(!editing)
    }
        
    return(
        <>
            <li className="booking-item">
                <div>
                    <p>{booking.name}</p>
                    <p>{booking.email}</p>
                    <div className="status-data">
                        <p>{checkedIn()}</p>
                        <label className="switch">
                            <input type="checkbox" onChange={checkChange} className="checkbox" id={booking._id} checked={booking.status} />
                            <span className="slider round"></span>
                        </label>
                    </div>    
                    <br/>
                    <button className="button" onClick={handleVisible}>Edit</button>
                    <button onClick={() => deleteBooking(booking._id)} className="button">Delete</button>
                </div>
                <div>
                    { editing ? <BookingUpdateForm booking={booking} handleVisible={handleVisible} updateBooking={updateBooking} className="update-form" editing={editing} setEditing={setEditing} /> : null}
                </div>
            </li>
        </>
    )
}

export default BookingsItem;
