import { Router } from "express";
import { Request, Response } from "express";
import { user } from "../models/userModel";
import User from "../models/userModel";
import { table1, table2, table3, table4, table5 } from "../controllers/user.controllers";



const router:Router = Router();

router.get('/table1', table1);
router.get('/table2', table2);
router.get('/table3', table3);
router.get('/table4', table4);
router.get('/table5', table5);


export default router