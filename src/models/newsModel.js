import mongoose from 'mongoose'


const newsSchema = new mongoose.Schema({
  title: {
    type: String,
   
  },
  note: {
    type: String,


   
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
  divison: {
    type: String,
    required: [true, 'Divison  is required'],
  
  },
  page: {
    type: String,
    required: [true, 'Page  is required'],
  
  },


 

 
 
}, { timestamps: true });





export const News = mongoose.model('News', newsSchema);

