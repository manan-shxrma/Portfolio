
const express = require('express')
const app = express();
const port = 3003;




app.use(express.static("assets"));

app.get('/', (req, res) => {
  res.sendFile(__dirname +'/index.html')
})
app.get('/contact', (req, res) => {
    res.send("manan")
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})