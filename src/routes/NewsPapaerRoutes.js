import { Router } from "express";


import {   deleteNews, getNews, saveNews, updateNews } from "../controller/newsController.js";


const router = Router();
router.post('/add-news', saveNews);
router.get('/', getNews);
router.delete('/delete/:id', deleteNews);
router.put('/update/:id', updateNews)




export default router;