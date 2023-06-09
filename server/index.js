require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env

app.use(express.json())
app.use(cors())

const {seed, getExerciseCard, getSunday, postMonday, postProgress, getProgress, getMonday} = require('./controller.js')

// DEV
app.post('/seed', seed)


// EXERCISE CARD
app.get('/api/exercises/:cardID', getExerciseCard)


// WORKOUT SCHEDULE
app.get('/api/schedule/sunday', getSunday)
app.get('/api/schedule/monday', getMonday)
app.post('/api/schedule/monday', postMonday)


// PROGRESS
app.get('/api/progress', getProgress)
app.post('/api/progress', postProgress)




app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))
