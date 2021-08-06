const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    topic: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref:"User",
    },
    isPublish: {
        type: Boolean,
        default:false,
    },
    category: {
        type: [String],
        default:["Uncategorized"],
    },
    blogAvatar: {
        type: String,
        // default: ,
    },
},
    { timestamps: true }
);
blogSchema.index({topic:1});
const Blog=mongoose.model("Blog",blogSchema);
module.exports=Blog;