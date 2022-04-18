"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const article_1 = require("../models/article");
const store = new article_1.ArticleStore();
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const articles = yield store.index();
    res.json(articles);
});
const Show = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(_req.params.id);
    const article = yield store.show(_req.params.id);
    res.json(article);
});
const Create = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = _req.body;
    try {
        const article = {
            title: data.title,
            content: data.content
        };
        const article1 = yield store.create(article);
        res.json(article1);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const Delete = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const article = yield store.delete('1');
    res.json(article);
});
const articles_routes = (app) => {
    app.get('/articles', index);
    app.get('/articles/:id', Show);
    app.post('/articles', Create);
    // app.put('/articles/:id', put)
    app.delete('/articles/:id', Delete);
};
exports.default = articles_routes;
