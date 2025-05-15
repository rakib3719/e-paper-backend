import mongoose from 'mongoose'


const newsSchema = new mongoose.Schema({
  title: {
    type: String,
   
  },
  note: {
    type: String,


    select: false
  },
image: {
    type: String,
    required: [true, 'Image  is required'],
 
  
  },
 pdf: {
    type: String,

   
   
  },
  category: {
  type: String,
  required: [true, 'Category is required'],
},

 
  date: {
    type: Date,
    required: [true, 'Date  is required'],
  
  },

 

 
 
}, { timestamps: true });





export const News = mongoose.model('News', newsSchema);

