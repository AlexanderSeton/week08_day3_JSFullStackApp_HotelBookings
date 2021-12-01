import React from "react";
import BookingsItem from './BookingsItem'

const BookingsList = ({guestBookings}) => {

    const bookingsList = guestBookings.map((booking, index) => {
        return <BookingsItem  booking={booking} key={index} />
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
