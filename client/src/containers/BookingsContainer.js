import React, {useState, useEffect} from "react";
import BookingsForm from '../components/BookingsForm.js'
import BookingsList from '../components/BookingsList'

const BookingsContainer = () => {

    const [guestBookings, setGuestBookings] = useState([]);

    const testBookings = [
        {"name": "Sandy", "email": "sandy@codeclan.com", "status": false},
        {"name" : "John", "email": "John@codeclan.com", "status" : false},
        {"name": "Stuart", "email": "stuart@codeclan.com", "status" : true}
    ]

    useEffect(() => {
        setGuestBookings(testBookings);
        // getBookings()
    }, [])
    
    return (
        <div>
            {/* <p>Bookings container</p> */}
            <BookingsForm />
            <BookingsList guestBookings={guestBookings} />
        </div>
    )
};

export default BookingsContainer;
