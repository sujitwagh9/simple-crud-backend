import express, { json } from "express"
import { getUser,getUserbyId,createUser,updateUser,deleteUser } from "../controllers/user.controller.js";


const router= express.Router();




//get user
router.get("/",getUser);


// get user by id
router.get("/:id",getUserbyId);

//create user
router.post("/",createUser);

//update user
router.put("/:id",updateUser);

//delete user
router.delete("/:id",deleteUser);

export default router;