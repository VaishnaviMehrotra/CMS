const express=require("express");
const router=express.Router();
const {validatePostReview}=require("../config/validator");
const authMiddleware=require("../config/auth");
const ReviewController=require("../controller/review");
router.post("/",authMiddleware,validatePostReview,ReviewController.postReview);

router.get("/:blogId",ReviewController.getReviewByBlog);

module.exports=router;