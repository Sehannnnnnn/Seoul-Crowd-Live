import express from 'express';
import { listupAll } from '../controller/placeController.js';

const placeRouter = express.Router();

placeRouter.get('/', listupAll)

export default placeRouter;