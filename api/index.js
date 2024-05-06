const express = require('express')
const imagesRoutes = require('./routes/images-route')


const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000!!');
});

app.use('/api/images', imagesRoutes)

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})