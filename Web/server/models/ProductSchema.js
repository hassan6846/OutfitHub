const mongoose = require("mongoose");
// Define the main Category
const MainCategorySchema= new mongoose.Schema({
  ParentCategory:{
    // name of all the Parent Category e.g male female etc
    CategoryName:{    
       type:String,
      required:true},
    SubCategory:[ SubCategorySchema]
  }
})
// schema of a single sub product
const SubCategorySchema= new mongoose.Schema({
  // name of a product
    ProductName:{
      type:String,
      required:true
    },
    // description of product
    Description:{
  
    },
   Price:{
    OrignalPrice:{

      type:Number,
    },
    // price to be sold
    SalePrice:{
      type:Number
    },

  },
    Reviews:{
      Stars:{
        default:0,
        max:5,
        min:1
      },
    },
// setting if the product is trending on HomePage
    isTrendingHomePage:{
    default:0,

    },
    // how many user liked a singleProduct
    Likes:{
    defualt:0
    },
    ProductImages:{
      CoverImages:[],
      OtherImages:[]
    },

})
