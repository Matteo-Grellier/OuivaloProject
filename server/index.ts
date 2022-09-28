import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const request = require('request');
const bodyParser = require('body-parser');

dotenv.config();

const app: Express = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
const port = process.env.PORT;


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});


// Post request to https://script.google.com/macros/s/AKfycby-TJmFFUFTfiNUbMoSIZx8LVtiskQ-bUt4xO6hmrU0XQpJS8IPUBow/exec and get response
app.post('/api', (req: Request, res: Response) => {
  const { id, date, urlRelais, message } = req.body;
  const data = {
    "cle": "CLE-TEST-IOT",
        "donnees": {
            "id": id,
            "date": date,
            "urlRelais": urlRelais,
            "message": message
        }
  }
  request.post({
    url: 'https://script.google.com/macros/s/AKfycby-TJmFFUFTfiNUbMoSIZx8LVtiskQ-bUt4xO6hmrU0XQpJS8IPUBow/exec',
    body: data,
    json: true
  }, (error:any, response:any, body:any) => {
    if (error) {
      console.error(error);
      return;
    }
    res.send(body);
  }
  );
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

