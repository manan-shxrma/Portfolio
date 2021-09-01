
const express = require('express')
const app = express();

app.use(express.static("assets"));

app.get('/', (req, res) => {
  res.sendFile(__dirname +'/index.html')
})
app.get('/contact', (req, res) => {
    res.send("prateush lodu hai...........uski crush priya pahwa hai ")
  })

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening at desired port`)
})