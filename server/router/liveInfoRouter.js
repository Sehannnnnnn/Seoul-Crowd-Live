import express from 'express';
import { liveInfo } from '../controller/liveInfoController.js';

const liveInfoRouter = express.Router();

liveInfoRouter.get('/', liveInfo)

export default liveInfoRouter;