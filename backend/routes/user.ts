import { Router } from "express";
import { Request, Response } from "express";
import { user } from "../models/userModel";
import User from "../models/userModel";
import { col1, col2, col3, col4, col5 } from "../controllers/user.controllers";



const router:Router = Router();

router.get('/col1', col1);
router.get('/col2', col2);
router.get('/col3', col3);
router.get('/col4', col4);
router.get('/col5', col5);


export default router