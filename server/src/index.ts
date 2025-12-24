import express from 'express';
import {Express, Response, Request} from 'express'


const app: Express = express();

const PORT: number = 8000;


app.get("/api", (req: Request, res: Response)=> {
    res.json({
        message: "Selamün Aleyküm Dünya"
    })
})

app.listen(PORT, ():void => {
    console.log(`Server is running at ${PORT}`)
})