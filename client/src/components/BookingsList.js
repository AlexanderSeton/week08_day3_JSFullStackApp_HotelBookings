import React from "react";
import BookingsItem from './BookingsItem'

const BookingsList = ({guestBookings, deleteBooking}) => {

    const bookingsList = guestBookings.map((booking, index) => {
        return <BookingsItem  booking={booking} key={index} deleteBooking={deleteBooking} />
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
