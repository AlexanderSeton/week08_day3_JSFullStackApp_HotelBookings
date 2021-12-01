import React from "react";
import BookingsItem from './BookingsItem'
import './BookingsList.css'

const BookingsList = ({guestBookings, deleteBooking, checkChange, updateBooking}) => {

    const bookingsList = guestBookings.map((booking, index) => {
        return <BookingsItem  booking={booking} key={index} deleteBooking={deleteBooking} checkChange={checkChange} updateBooking={updateBooking}/>
    })

    return(
        <div className ="booking-container">
            <ul className="unlist">
                {bookingsList}
            </ul>
        </div>
    )
}

export default BookingsList;
