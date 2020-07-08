import * as express from "express";
import * as bodyParser from 'body-parser';

import { notFoundError , errorHandler } from './middlewares/errors.middleware';
import { router as groceriesRoute } from './controllers/groceries.routes';



const app = express();
app.use(bodyParser.json());

app.get('/' , (req , res) => {
    res.json({name:'omar'})
})


app.use('/api/groceries' , groceriesRoute);
app.use(notFoundError);
app.use(errorHandler);

export const server = async () => {

  await  app.listen(8080);
    console.log("hey you are connected to the server");
    
}
