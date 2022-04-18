import * as express from "express";
import {Article, ArticleStore } from '../models/article';

const store = new ArticleStore();

const index = async (_req : express.Request, res: express.Response) =>{
const articles = await store.index()
res.json(articles);
}

const Show = async (_req : express.Request, res: express.Response) =>{
  console.log(_req.params.id)
    const article = await store.show(_req.params.id)
    res.json(article);
    }

const Create = async (_req : express.Request, res: express.Response) =>{
  let data = _req.body;
   
      try{
        const article: Article = {
          title: data.title,
          content: data.content
        }
          const article1 = await store.create(article)
        res.json(article1);
      }catch(err){
        res.status(400)
        res.json(err)
      }
        
        }
const Delete = async (_req : express.Request, res: express.Response) =>{
            const article = await store.delete('1')
            res.json(article);
            } 
            
            

const articles_routes = (app: express.Application)=>{
app.get('/articles', index)
app.get('/articles/:id',Show)
app.post('/articles', Create)
// app.put('/articles/:id', put)
app.delete('/articles/:id',Delete)
};


export default articles_routes;