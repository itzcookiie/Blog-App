const fetch = require('node-fetch')
const dataFunctionality = require('./request.js')
const apiURL = 'http://localhost:3000'

// test('data is an array', () => {
//     return fetch('http://localhost:3000')
//     .then(resp => resp.json())
//     .then(data => {
//         expect(Array.isArray(data.data)).toBe(true)
//         expect(data.data[0].posts.length).toBe(2)
//     })
// })

test('post request works', () => {
    const testdata = {
        id: 3,
        title: 'title1',
        message: 'random message'
    }
    
    return dataFunctionality.postRequest(testdata)
    .then(oldData => {
        expect(oldData.blogdata.message).toBe(testdata.message)
        dataFunctionality.fetchRequest()
        .then(newData => {
            expect(newData.data[0].posts.length).toBe(3)
        })
    })
})





