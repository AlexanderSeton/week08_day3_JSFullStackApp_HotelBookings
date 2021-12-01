import React, {useState, useEffect} from "react";
import BookingsForm from '../components/BookingsForm.js'
import BookingsList from '../components/BookingsList'
import { getBookings } from '../services/bookingsService'

const BookingsContainer = () => {

    const [guestBookings, setGuestBookings] = useState([]);

    useEffect(() => {
        getBookings()
        .then((allBookings) => {
            setGuestBookings(allBookings);
        })
    }, []);

    const addBooking = (booking) => {
        // let tempBookings = guestBookings.map((booking) => booking);
        // tempBookings.push(booking);
        let tempBookings = [...guestBookings, booking]
        setGuestBookings(tempBookings);
    }
    
    return (
        <div>
            {/* <p>Bookings container</p> */}
            <BookingsForm addBooking={addBooking} />
            <BookingsList guestBookings={guestBookings} />
        </div>
    )
};

export default BookingsContainer;
