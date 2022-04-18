"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const express = require("express");
const bodyParser = require("body-parser");
const articles_1 = require("./handlers/articles");
const app = express();
const address = 'localhost:5000';
app.use(bodyParser.json());
(0, articles_1.default)(app);
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
app.put('/articles/:id', (req, res) => {
    const article = {
        id: req.params.id,
        title: req.body.title,
        content: req.body.content
    };
    try {
        res.send('this is the EDIT route');
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
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
