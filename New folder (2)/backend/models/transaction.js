import mongoose from "mongoose";
const transactionSchema=new mongoose.Schema({
    withdrawl:[
        {
        caption:{type:String,},
        amount:{type:Number,},
        date:{type:String,},
        description:{type:String,},
        mode:{type:String,},
        }
    ],
    deposit:[
        {
    caption:{type:String,required:true},
    amount:{type:Number,required:true},
    date:{type:Date,required:true,default:Date.now},
        }
    ],
    loan_given:[
        {
            person:{type:String,required:true},
            amount:{type:Number,required:true},
            date:{type:Date,required:true,default:Date.now},
            repayment:{type:Boolean,default:false},
        }
    ],
    loan_taken:[
        {
            person:{type:String,required:true},
            amount:{type:Number,required:true},
            date:{type:Date,required:true,default:Date.now},
            repayment:{type:Boolean,default:false},
        }
    ],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
})
export const Transaction=mongoose.model("Transaction",transactionSchema);