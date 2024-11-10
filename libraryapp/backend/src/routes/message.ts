import express from "express";

const apiMessagesRouter = express.Router();

import { sendMessage, getMessage } from '../regulator/messageApi';

apiMessagesRouter.get('/:id', getMessage);
apiMessagesRouter.post('/', sendMessage);

export default apiMessagesRouter;