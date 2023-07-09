const mongoose=require("mongoose")
const OrderSchema=new mongoose.Schema({
    /***
     * 
     */
    ShippingDetails:{
        Country:{},
        State_Province:{},
        City:{},
        District:{},
        Address:{},
        PinCode:{},
        Contact_Number:{},
    },
    //items which person has ordered
    Ordered_Items:[{

    }]
})