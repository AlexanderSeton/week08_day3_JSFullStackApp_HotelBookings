import React from "react";

const BookingsItem = ( {booking} ) => {
    return(
        <li>
            <p>{booking.name}</p>
            <p>{booking.email}</p>
            <p>{booking.status.toString()}</p>
            <input type="checkbox"/>
            <br/>
            <button>Delete</button>
        </li>
    )
}

export default BookingsItem;
