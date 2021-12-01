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
    
    const checkChange = (id) => {
        // console.log("event.target.checked:", event.target.checked);
        // console.log("Checkbox has been Checked");
        console.log("id:", id);
        const updatedGuestBookings = guestBookings.map((booking) => {
            if (booking._id === id){
              booking.status = !booking.status
            }
            return booking
          })
        setGuestBookings(updatedGuestBookings)
    }

    return (
        <div>
            {/* <p>Bookings container</p> */}
            <BookingsForm addBooking={addBooking} />
            <BookingsList guestBookings={guestBookings} deleteBooking={deleteBooking} checkChange={checkChange}/>
        </div>
    )
};

export default BookingsContainer;
