const express=require("express");
const router=express.Router();
const AdminUserController=require("../../controller/admin/user");
const authMiddleware=require("../../config/auth");
const adminMiddleware=require("../../config/admin");

router.get("/",authMiddleware,adminMiddleware,AdminUserController.getAllUser);

router.delete("/userId",authMiddleware,adminMiddleware,AdminUserController.deleteUser);

router.put("/:userId",authMiddleware,adminMiddleware,AdminUserController.updateUser);
module.exports=router;