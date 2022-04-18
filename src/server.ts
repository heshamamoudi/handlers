// @ts-ignore
import * as express from "express";
import * as bodyParser from 'body-parser';
import {Article } from './models/article'
import articles_routes from "./handlers/articles";


const app: express.Application = express();

const address: string = 'localhost:5000';
app.use(bodyParser.json());



articles_routes(app)

// app.get('/articles', (req: Request, res: Response) => {
//   try {
//       res.send('this is the INDEX route')
//   } catch (err) {
//       res.status(400)
//       res.json(err)
//   }
// })
// app.get('/articles/:id', (_req: Request, res: Response) => {
//   try {
//      res.send('this is the SHOW route')
//   } catch (err) {
//      res.status(400)
//      res.json(err)
//   }
// })

// app.post('/articles', (req: Request, res: Response) => {
//   const article: Article = {
//     title: req.body.title,
//     content: req.body.content
//   }
//   try {
//      res.send('this is the CREATE route')
//   } catch (err) {
//      res.status(400)
//      res.json(err)
//   }
// })

app.put('/articles/:id', (req: express.Request, res: express.Response) => {
  const article: Article = {
    id: req.params.id, 
    title: req.body.title,
    content: req.body.content
  }
  try {
     res.send('this is the EDIT route')
  } catch (err) {
     res.status(400)
     res.json(err)
  }
})

// app.delete('/articles/:id', (_req: Request, res: Response) => {
//   try {
//      res.send('this is the DELETE route')
//   } catch (err) {
//      res.status(400)
//      res.json(err)
//   }
// })

app.listen(5000, function () {
  console.log(`starting app on: ${address}`);
});
