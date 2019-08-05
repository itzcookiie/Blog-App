const fetch = require('node-fetch')

const apiURL = 'http://localhost:3000/'


exports.postRequest = obj => {
    return fetch('http://localhost:3000/post', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(obj)
    })
    .then(response => response.json())
}

exports.fetchRequest = () => {
    return fetch(apiURL)
    .then(response => response.json())
}

//Tried exporting just the function properties, but not too sure how
// E.g. module.exports const { postRequest, fetchRequest } = allDataRequests
// module.exports = { postRequest, fetchRequest } 