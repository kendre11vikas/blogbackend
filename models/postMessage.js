import mongoose from "mongoose";

const postSchema=mongoose.Schema({
    title: String,
    subtitle:String,
    message:String,
    creator: String,
    name:String,
    tags:[String],
    selectedFile:String,
    likes:{
        type:[String],
        default:[]
    },
    comments:{
        type:[String],
        default:[]
    },
    trending:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
    catageory:{
        type:String,
        default:'Technology'
    },

})

const PostMessage=mongoose.model('PostMessage',postSchema);

export default PostMessage;