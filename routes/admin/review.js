const express=require("express");
const router=express.Router();
const AdminReviewController=require("../../controller/admin/review");
const authMiddleware=require("../../config/auth");
const adminMiddleware=require("../../config/admin");

router.get("/",authMiddleware,adminMiddleware,AdminReviewController.getAllReviews);

router.delete("/:reviewId",authMiddleware,adminMiddleware,AdminReviewController.deleteReviews);

module.exports=router;