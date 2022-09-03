const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/users.route');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());

app.use('/users',userRouter)
app.get('/', (req, res) => {
  res.send('Hello from Assignment 1!')
})
app.all('*', (req,res)=>{
  res.send("No Route Found.")
})

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Assignment 1 listening on port ${port}`)
})

process.on('unhandledRejection', (error)=>{
  console.log(error.name, error.message);
  app.close(()=>{
    process.exit(1);
  })
} )