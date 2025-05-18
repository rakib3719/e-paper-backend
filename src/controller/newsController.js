import { News } from "../models/newsModel.js";
import { Page } from "../models/pageModel.js";

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

export const getAllPage = async(req, res)=>{

    const dateQuery = req.query.date;

  try {



    let filter = {};


     const date =  dateQuery ? new Date(dateQuery) : new Date()

    const startOfDay = new Date(date.setHours(0, 0, 0, 0));
    const endOfDay = new Date(date.setHours(23, 59, 59, 999));

    filter.date = {
      $gte: startOfDay,
      $lte: endOfDay
    };





    const page1 = await News.find({page:1, date:{$gte: startOfDay,
      $lte: endOfDay}})
    const page2 = await News.find({page:2,date:{$gte: startOfDay,
      $lte: endOfDay} })
    const page3 = await News.find({page:3, date:{$gte: startOfDay,
      $lte: endOfDay}})
    const page4 = await News.find({page:4, date:{$gte: startOfDay,
      $lte: endOfDay}})
    const page5 = await News.find({page:5, date:{$gte: startOfDay,
      $lte: endOfDay}})
    const page6 = await News.find({page:6, date:{$gte: startOfDay,
      $lte: endOfDay}})
    const page7 = await News.find({page:7, date:{$gte: startOfDay,
      $lte: endOfDay}})
    const page8 = await News.find({page:8, date:{$gte: startOfDay,
      $lte: endOfDay}})
    const page9 = await News.find({page:9,date:{$gte: startOfDay,
      $lte: endOfDay}})
    const page10 = await News.find({page:10, date:{$gte: startOfDay,
      $lte: endOfDay}})


    const resp = [
      page1, page2, page3, page4, page5, page6, page7, page8, page9, page10
    ]
    res.status(201).json({
      message:'sucess',
      data: resp
    })
    
  } catch (error) {



    res.status(401).json({
      message:'Something went worng!',
      error
    })
    
  }
}





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


export const uplaodPage = async(req, res)=>{
  try {
    const data = req.body;

 const resp = Page.create(data);
 res.status(201).json({
  message:'Page upload sucessfully',
  data:resp
 })

    
  } catch (error) {
    res.status(401).json({
      message:'Someting went wrong!',
      error
    })
    
  }
}




export const getPage = async(req, res)=>{
  try {


    let filter = {};

      const dateQuery = req.query.date;
      const date =  dateQuery ? new Date(dateQuery) : new Date()

    const startOfDay = new Date(date.setHours(0, 0, 0, 0));
    const endOfDay = new Date(date.setHours(23, 59, 59, 999));

    filter.date = {
      $gte: startOfDay,
      $lte: endOfDay
    };
    const data = await Page.find(filter);
    res.status(201).json({
      message:'Page get successfully',
      data
    })
    
  } catch (error) {
    res.status(401).json({
      message:'Something went wromg!',
      error
    })
  }
}