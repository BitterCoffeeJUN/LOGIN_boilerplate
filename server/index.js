import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import URL from './config/dev.js'

const app = express()
const PORT = 5000

app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true}))
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello')
})

mongoose
    .connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => {
            console.log(`app listening at http://localhost:${PORT}`)
        }),
    )
