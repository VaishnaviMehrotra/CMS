const express=require("express");
const cors = require("cors");
require("./config/db");
const logger=require("morgan");
const helmet= require("helmet");
const app=express();
const authRoutes=require('./routes/auth');
const blogRoutes=require('./routes/blog');
const adminBlogRoutes=require("./routes/admin/blog");
const adminReviewRoutes=require("./routes/admin/review");
const adminUserRoutes=require("./routes/admin/user");
const reviewRoutes=require("./routes/review");

const PORT=process.env.PORT || 5000;

app.use(express.json({limit:"40mb"}));
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(helmet({contentSecurityPolicy:false}));
app.use(logger("dev"));
app.use("/api/auth",authRoutes);
app.use("/api/blog",blogRoutes);
app.use("/api/admin/blog",adminBlogRoutes);
app.use("/api/admin/review",adminReviewRoutes);
app.use("/api/admin/users",adminUserRoutes);
app.use("/api/review",reviewRoutes);

app.listen(PORT,()=>{
    console.log(`Listening to PORT ${PORT}`);
})