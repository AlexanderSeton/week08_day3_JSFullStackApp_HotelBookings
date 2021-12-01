const baseURL = 'http://localhost:5000/bookings/'

export const getBookings = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

export const postBooking = (payload) => {
    return fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const destroyBooking = (id) => {
    return fetch(baseURL + id, {
        method: "DELETE"
    })
}
