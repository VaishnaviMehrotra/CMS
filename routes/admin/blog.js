const express=require("express");
const router=express.Router();
const {validatePostBlog}=require("../../config/validator");
const AdminBlogController=require("../../controller/admin/blog");
const authMiddleware=require("../../config/auth");
const adminMiddleware=require("../../config/admin");

router.post("/", authMiddleware,adminMiddleware,validatePostBlog,AdminBlogController.postBlog);

router.get("/", authMiddleware,adminMiddleware,AdminBlogController.getAllBlogs);

router.delete("/:blogId", authMiddleware,adminMiddleware,AdminBlogController.deleteBlog);

router.put("/:blogId", authMiddleware,adminMiddleware,AdminBlogController.updateBlog);
module.exports = router;