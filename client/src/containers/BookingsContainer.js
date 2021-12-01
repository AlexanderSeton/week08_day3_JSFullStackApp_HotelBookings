import React, {useState, useEffect} from "react";
import BookingsForm from '../components/BookingsForm.js'
import BookingsList from '../components/BookingsList'
import { getBookings, destroyBooking } from '../services/bookingsService'

const BookingsContainer = () => {

    const [guestBookings, setGuestBookings] = useState([]);

    useEffect(() => {
        getBookings()
        .then((allBookings) => {
            setGuestBookings(allBookings);
        })
    }, []);

    const addBooking = (booking) => {
        let tempBookings = [...guestBookings, booking]
        setGuestBookings(tempBookings);
    }

    const deleteBooking = (id) => {
        destroyBooking(id).then(() => {
            let temp = guestBookings.map(booking => booking);
            const indexToDelete = guestBookings.map(booking => booking._id).indexOf(id);
            temp.splice(indexToDelete, 1);
            setGuestBookings(temp);
        })
    }
    
    return (
        <div>
            {/* <p>Bookings container</p> */}
            <BookingsForm addBooking={addBooking} />
            <BookingsList guestBookings={guestBookings} deleteBooking={deleteBooking} />
        </div>
    )
};

export default BookingsContainer;
