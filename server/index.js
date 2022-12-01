import express from 'express';
import cors from 'cors';
import placeRouter from './router/placeRouter.js';
import liveInfoRouter from './router/liveInfoRouter.js';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send('Hello!');
})

//Connect Router
app.use('/place', placeRouter);
app.use('/info', liveInfoRouter);

//Handling Errors
app.use((req, res, next) => {
    res.status(404).send('Not Found!');
});
  
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: 'Internal Server Error',
    stacktrace: err.toString()
  });
});

//port + open server settings
app.listen(port, () => {
  console.log(`server runs successfully on port ${port}!`);
})
// var process = spawn("node", ["server/fetchserver.js"]);

// process.stdout.on("data", function (data) {
//   console.log(data);
// })

// process.stderr.on("data", function (data) {
//   console.error(data.toString());
// });