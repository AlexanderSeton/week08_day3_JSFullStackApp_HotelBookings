import React from "react";
import BookingsItem from './BookingsItem'

const BookingsList = ({guestBookings, deleteBooking, checkChange}) => {

    const bookingsList = guestBookings.map((booking, index) => {
        return <BookingsItem  booking={booking} key={index} deleteBooking={deleteBooking} checkChange={checkChange}/>
    })

    return(
        <div>
            <ul>
                {bookingsList}
            </ul>
        </div>
    )
}

export default BookingsList;
