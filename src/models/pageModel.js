import mongoose from "mongoose";

const pageSchema = new mongoose.Schema({

  pageNo:{
    type:String,
    required:[true, 'Page no is required']
  },
  image:{
    type:String,
    required:[true, 'Image is required']
  },
  date: {
    type: Date,
    required: [true, 'Date  is required'],
  
  },
},{timestamps:true})


export const Page = mongoose.model('Page', pageSchema)