import express from 'express';
import { imgByPlace, listupAll } from '../controller/placeController.js';

const placeRouter = express.Router();

placeRouter.get('/', listupAll)
placeRouter.get('/img', imgByPlace)

export default placeRouter;