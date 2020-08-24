function get(url) {
    // step 1: fetch the data
    return fetch(url)
        .then(function(response) { // step 2: run the json() from the response
            return response.json();
    })
        .then(function(data) { // step 3: return data from the response.json() method
            return data;
    });
}