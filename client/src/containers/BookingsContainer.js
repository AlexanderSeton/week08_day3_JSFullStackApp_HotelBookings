import React, {useState, useEffect} from "react";
import BookingsForm from '../components/BookingsForm.js'
import BookingsList from '../components/BookingsList'
import BookingUpdateForm from "../components/BookingUpdateForm.js";
import { getBookings, destroyBooking, putBooking } from '../services/bookingsService'

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
    
    const checkChange = (event) => {
        // console.log(event.target);
        const id = event.target.id;
        let checked = event.target.checked;
        const updatedGuestBookings = guestBookings.map((booking) => {
            if (booking._id === id) {
              booking.status = !booking.status;
            }
            return booking;
          })
        setGuestBookings(updatedGuestBookings);
        let payload = {"status": checked};
        updateBooking(id, payload);
    }

    const updateBooking = (id, payload) => {
        putBooking(id, payload).then(() => {
            getBookings()
            .then((allBookings) => {
                console.log("Inside the ten statement.")
                setGuestBookings(allBookings);
            })
        })

    }

    return (
        <div>
            <BookingsForm addBooking={addBooking} />
            <BookingsList guestBookings={guestBookings} deleteBooking={deleteBooking} checkChange={checkChange} updateBooking={updateBooking}/>
        </div>
    )
};

export default BookingsContainer;
