import { Router } from "express";
import { getAllUsers,  login, logout, register } from "../controller/authController.js";


const router = Router();





router.get('/',  getAllUsers)

// router.get('/getUserOne', getUserController)

export default router
