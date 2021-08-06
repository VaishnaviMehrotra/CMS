const express=require("express");
const router=express.Router();
const BlogController=require("../controller/blog");

router.get("/",BlogController.getBlogsPaginated);
router.get("/:blogId",BlogController.getSpecificBlog);
module.exports=router;