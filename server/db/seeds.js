use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        "name": "Sandy",
        "email": "sandy@codeclan.com",
        "status": false
    },   
    {
        "name" : "John",
        "email": "John@codeclan.com", 
        "status" : false
    },
    {
        "name": "Stuart",
        "email": "stuart@codeclan.com", 
        "status" : true
    }
]);
