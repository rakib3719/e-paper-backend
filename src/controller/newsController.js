import { News } from "../models/newsModel.js";

export const saveNews = async (req, res) => {
  try {
    const data = req.body;

    const newNews = await News.create(data);

    res.status(201).json({
      message: 'Create successfully',
      data: newNews
    });
    
  } catch (error) {
    res.status(500).json({ 
      message: error?.message || 'Something went wrong!',
      error
    });
  }
};



export const getNews = async(req, res)=>{
  try {
    const news =await News.find();
    res.status(201).json({
      message:'News getting successfully',
      data:news
    })
    
  } catch (error) {
      res.status(500).json({ 
      message: error?.message || 'Something went wrong!',
      error
    });
  }
}

export const deleteNews = async(req, res)=>{
   try {
    const id = req.params.id;
    const filter = { _id: id };
    const data = await News.deleteOne(filter);
    res.status(201).json({
      message: 'Deleted Successfully',
      data: data
    });
  } catch (error) {
    res.status(500).json({
      message: error?.message || 'Something went wrong!',
      error
    });
  }
}




export const updateNews = async(req, res)=>{
  try {
    const id = req.params.id;
    const data = req.body;
    const filter = {_id:id};
    const response = await News.updateOne(filter, data);
    res.status(201).json({
      message:'Update Sucessfully',
      data:response
    })


    
  } catch (error) {
     res.status(500).json({
      message: error?.message || 'Something went wrong!',
      error
    });
  }
}