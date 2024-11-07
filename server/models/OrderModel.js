const mongoose=require('mongoose')

const OrderSchema=new mongoose.Schema({
    OrderedAt:{
        default:Date.now,
        required:false,
    },
    Total:{

    },
    Status:{

    },
    PaymentType:{

    },
    PaidOnline:{

    },
 products:{
    type:[Object]
 },
 orderedBy:{
    type:mongoose.Types.ObjectId

 },
 OrderDetails:{
    //ref the address Schema if you want.. address book
 }
})
