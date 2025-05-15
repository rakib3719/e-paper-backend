import { Router } from "express";
import userRouter from './userRoutes.js'
import newsRouter from "./NewsPapaerRoutes.js";




const router = Router();

router.use('/user',userRouter);
router.use('/news',newsRouter )





export default router;