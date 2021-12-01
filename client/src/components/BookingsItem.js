import React from "react";

const BookingsItem = ({ booking, deleteBooking, checkChange }) => {

    return(
        <li>
            <p>{booking.name}</p>
            <p>{booking.email}</p>
            <p>{booking.status.toString()}</p>
            <input type="checkbox" onChange={checkChange} id={booking._id} />
            <br/>
            <button onClick={() => deleteBooking(booking._id)}>Delete</button>
        </li>
    )
}

export default BookingsItem;
