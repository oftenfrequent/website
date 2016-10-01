const port = (process.env.PORT || 1337)
const path = require('path')
const express = require('express')

const app = express()


const publicPath = express.static(path.join(__dirname, '../dist'))
// app.use('/dist', publicPath)
app.use(express.static(path.resolve('dist')));

app.get('/', function (req, res, next) {
  res.sendFile(path.resolve('dist/index.html'));
});

app.listen(port)
console.log('Listening at http://localhost:1337')
