import { Router } from "express";


import {   deleteNews, getAllPage, getNews, getPage, saveNews, updateNews, uplaodPage } from "../controller/newsController.js";


const router = Router();
router.post('/add-news', saveNews);
router.get('/', getNews);
router.delete('/delete/:id', deleteNews);
router.put('/update/:id', updateNews);
router.get('/all-page', getAllPage);
router.post('/upload-page', uplaodPage );
router.get('/get-page', getPage);





export default router;