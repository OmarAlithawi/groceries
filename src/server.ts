import * as express from "express";

const app = express();

app.get('/' , (req , res) => {
    res.json({name:'omar'})
})

export const server = async () => {

    app.listen(8080);
    console.log("hey you are connected to the server");
    
}
