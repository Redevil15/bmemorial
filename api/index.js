const express = require('express')
const imagesRoutes = require('./routes/images-route')
const cors = require('cors')



const app = express();

app.use(cors());

app.use(express.static('public'))


app.listen(3001, () => {
  console.log('Server is running on port 3000!!');
});

app.use('/api/images', imagesRoutes)

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})