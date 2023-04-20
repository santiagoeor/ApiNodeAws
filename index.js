const express = require('express')
const app = express()
const http = require('http');
const port = 3000
const ip = '172.26.8.121';

const serverHttp = http.createServer(app)
serverHttp.listen(port, ip);
serverHttp.on('listening', () => console.info(`Notes App running at http://${ip}:${port}`));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})