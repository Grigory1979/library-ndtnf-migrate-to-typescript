import express from "express"

const apiBookRouter = express.Router();

import { getBooks, getBook, editeBook, createBook, deleteBook } from '../regulator/apiBooks';

apiBookRouter.get('/', getBooks);
apiBookRouter.get('/:id', getBook);
apiBookRouter.post('/' ,createBook);
apiBookRouter.put('/:id',editeBook);
apiBookRouter.delete('/:id', deleteBook);

export default apiBookRouter;