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
    
    return (
        <div>
            {/* <p>Bookings container</p> */}
            <BookingsForm />
            <BookingsList guestBookings={guestBookings} />
        </div>
    )
};

export default BookingsContainer;
