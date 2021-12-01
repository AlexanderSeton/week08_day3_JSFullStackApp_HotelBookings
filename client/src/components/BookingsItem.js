import React from "react";

const BookingsItem = ({ booking, deleteBooking }) => {
    return(
        <li>
            <p>{booking.name}</p>
            <p>{booking.email}</p>
            <p>{booking.status.toString()}</p>
            <input type="checkbox"/>
            <br/>
            <button onClick={() => deleteBooking(booking._id)}>Delete</button>
        </li>
    )
}

export default BookingsItem;
