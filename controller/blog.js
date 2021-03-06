const Blog=require("../models/blog");

module.exports={
    async getBlogsPaginated(req,res){
        try{
        const {per_page,page,sort}=req.query;
        let sortOrder=sort === "ASC" ? 1: sort === "DESC" ? -1:1;
        const totalPublishedBlogs=await Blog.find({
            isPublished:true,
        }).countDocuments();
        const blogs=await Blog.find({isPublished:true})
        .populate("author",{name:1,email:1})
        .limit(parseInt(per_page)||6)
        .skip(parseInt(page-1)*parseInt(per_page)).sort({createdAt:sortOrder});
        res.status(200).json({blogs,results:totalPublishedBlogs});
    }
    catch(err){
        res.status(500).send("Internal Server Error");
    }    
},
async getSpecificBlog(req,res){
    try{
        const {blogId}=req.params;
        const blog=await Blog.findOne({_id:blogId});
        res.status(200).json({blog});
    }
    catch(err){
        res.status(500).send("Internal Server Error");
    }
}
}