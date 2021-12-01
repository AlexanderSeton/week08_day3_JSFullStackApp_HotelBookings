import React, {useState} from "react";
import "./BookingsItem.css";
import BookingUpdateForm from "./BookingUpdateForm.js";
import "./BookingUpdateForm.css";

const BookingsItem = ({ booking, deleteBooking, checkChange, updateBooking }) => {

    const [editing, setEditing] = useState(false)

    const checkedIn = function(){
        let status;
        if (booking.status === true){
            status = "Checked In"
        } else {
            status = "Not Checked In"
        }
        return status
    }

    const handleVisible = function() {
        setEditing(!editing)
    }
        
    return(
        <>
            <div className="booking-item">
                <div>
                    <div className="main-data">
                        <p><strong>{booking.name}</strong></p>
                        <p><strong>{booking.email}</strong></p>
                    </div>
                    <div className="main-data" id="slider-switch-section"> 
                        <p>{checkedIn()}</p>
                        <label className="switch">
                            <input type="checkbox" onChange={checkChange} className="checkbox" id={booking._id} checked={booking.status} />
                            <span className="slider round"></span>
                        </label>
                    </div>  
                    <div className="buttons-section">
                        <br/>
                        <button className="button" onClick={handleVisible}>Edit</button>
                        <button onClick={() => deleteBooking(booking._id)} className="button">Delete</button>
                    </div>  
                </div>
                <div>
                    { editing ? <BookingUpdateForm booking={booking} handleVisible={handleVisible} updateBooking={updateBooking} className="update-form" editing={editing} setEditing={setEditing} /> : null}
                </div>
            </div>
        </>
    )
}

export default BookingsItem;
