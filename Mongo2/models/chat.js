const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    from : {
        type:String , 
        required : true ,
    },
    to:{
        type:String,
        required :True  ,
    },
    msg :{
        type :String , 
        maxLength : 50,
    },
    created_at :{
        Date:String ,
        required:true ,
    }

})