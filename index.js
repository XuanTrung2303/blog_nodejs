const express = require('express')
const app = express()
const port = 3000

// dinh nghia route
app.get('/', (req, res) => {
  var a = 1;
  var b =2;
  var c = a+b;
  return res.send('hello word');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})