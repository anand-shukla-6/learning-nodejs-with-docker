const express=require("express");
const userRoutes=express.Router();
const ctrl=require("../controllers/userControllers")


userRoutes.get("/users-details", ctrl.getUserDetails);
userRoutes.post("/users-details", ctrl.register);


module.exports={userRoutes}