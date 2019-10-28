let getLocations = function () {
    return fetch("/locations")
    .then(response => {
        return response.json()
    })
}

let createLocation = function (attributes) {
    return fetch("/locations", {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({location: attributes})
    })
    .then(resp=>{
        let json = resp.json()
        return json
    })
}

let createBooking = function (attributes) {
    return fetch("/bookings", {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({booking: attributes})
    })
    .then(resp => {
        let json = resp.json()
        return json
    })
}

export {
    getLocations, createLocation, createBooking
}
