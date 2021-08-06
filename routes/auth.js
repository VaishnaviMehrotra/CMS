const express=require("express");
const router=express.Router();
const AuthController=require("../controller/auth");
const {validateAuthRegister,validateAuthLogin}=require("../config/validator")
const authMiddleware=require("../config/auth");

router.post("/register",validateAuthRegister,AuthController.registerUser);

router.post("/login",validateAuthLogin,AuthController.loginUser);
// router.get("/protected",auth,function(req,res){
//     res.send("hi");
// });
router.get("/user",authMiddleware,AuthController.fetchUser);
module.exports=router;