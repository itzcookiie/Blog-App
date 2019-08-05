const express = require('express')
const cors = require('cors')
const fs = require('fs')
const db = require('./db/db.js');

const app = express();
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req,res) => {
    res.send({
        sucess: true,
        data: db
    })
})

app.post('/post', (req, res) => {
    const blogdata = {id: req.body.id, title: req.body.title, message: req.body.message}
    db[0].posts.push(blogdata)
    res.status(200).send({status: 'Added sucessfully!', blogdata})
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})