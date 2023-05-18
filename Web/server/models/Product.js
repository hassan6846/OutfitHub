const productsSchema = new mongoose.Schema({
    productName: {
      type: String,
      required: [true, 'Please add a product name'],
      trim: true
    },
    productDescription: {
      type: String,
      required: [true, 'Please add a product description']
    },
    price: {
    priceCut:{
        type: Number,
        required: [true, 'Please add a product price'],
        min: 0
    },
    SellPrice:{
        type: Number,
        required: [true, 'Please add a product price'],
        min: 0
    }
    },
    Multiple_Imgs: {
      type: String,
      required: [true, 'Please add a product image URL'],
      CoverIMG:{
        type: String,
        required: [true, 'Please add a product image URL']
    },
    },
 
    category: {
        type: {
            main: String,
            sub: [String]
          }
    },
    brand: {
      type: String,
      required: [true, 'Please add a product brand']
    },
    quantity: {
      type: Number,
      default: 1
    }
  });
  