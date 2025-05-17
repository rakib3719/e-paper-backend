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



// export const getNews = async(req, res)=>{



//   const divison = req.query.divison;
//   const page = req.query.page;

//   try {

//     let filter = {};
  
//     if(divison){
//       filter.divison = divison
//     }

//     if(page){
//            filter.page=page
//     }
//     const news =await News.find(filter);
//     res.status(201).json({
//       message:'News getting successfully',
//       data:news
//     })
    
//   } catch (error) {
//       res.status(500).json({ 
//       message: error?.message || 'Something went wrong!',
//       error
//     });
//   }
// }






export const getNews = async (req, res) => {
  const divison = req.query.divison;
  const page = req.query.page;
  const dateQuery = req.query.date;
  const category = req.query.category;
  const search = req.query.search;


  console.log(category, 'Category')




  try {
    let filter = {};

    if (divison) {
      filter.divison = divison;
    }

    if (page) {
      filter.page = page;
    }

    if(category){
      filter.category = category;
    }
 if(search){
  filter.title = { $regex: search, $options: 'i' } 
}





if(!search){
  
    const date =  dateQuery ? new Date(dateQuery) : new Date()

    const startOfDay = new Date(date.setHours(0, 0, 0, 0));
    const endOfDay = new Date(date.setHours(23, 59, 59, 999));

    filter.date = {
      $gte: startOfDay,
      $lte: endOfDay
    };

}
    const news = await News.find(filter);

    res.status(201).json({
      message: 'News getting successfully',
      data: news
    });

  } catch (error) {
    res.status(500).json({
      message: error?.message || 'Something went wrong!',
      error
    });
  }
};





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