const getLocations = function() {
  return fetch("/locations").then(response => {
    return response.json();
  });
};

const createLocation = function(attributes) {
  return fetch("/locations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ location: attributes })
  })
  .then(resp => {
    const json = resp.json()
    return json
  })
};

export { getLocations, createLocation };
