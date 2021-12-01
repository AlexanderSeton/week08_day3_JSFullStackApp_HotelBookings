const baseURL = 'http://localhost:5000/bookings/'

export const getBookings = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

