const express = require('express')
const server = express()
const port = 3000
server.use(express.json());


const routes = require('./routes');

server.use('/cacti', routes);

server.listen(port, () => {
    console.log(`API ONLINE http://localhost:${port}`)
})

