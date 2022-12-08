import express from 'express';
import cors from 'cors';
import placeRouter from './router/placeRouter.js';
import liveInfoRouter from './router/liveInfoRouter.js';
import morgan from 'morgan';
import { scheduleJob } from 'node-schedule';
import { fetchAllLiveData } from './utils/fetchAllLiveData.js';
import { testWriteTimeLog as writeTimeLog } from './utils/writeTimelog.js';

const app = express();
const MAIN_PORT = 8000;
const SCHEDULE_PORT = 8010;

app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

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
app.listen(MAIN_PORT, () => {
  console.log(`server runs successfully on port ${MAIN_PORT}!`);
})

//api fetch, 재작성
app.listen(SCHEDULE_PORT, () => {
  scheduleJob('*/30 * * * *', function() {
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const date = new Date().toLocaleString('ko-KR', { timeZone: 'UTC' });
    writeTimeLog(date);
    fetchAllLiveData()
  })
})