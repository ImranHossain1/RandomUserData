const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/users.route');
const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());

app.use('/users',userRouter)
app.get('/', (req, res) => {
  res.send('Hello from Assignment 1!')
})

app.listen(port, () => {
  console.log(`Assignment 1 listening on port ${port}`)
})