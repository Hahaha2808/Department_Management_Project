import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    roomId : {
        type : mongoose.Schema.ObjectId,
        ref : 'Room'
    },
    paymentmethod : {
        type : String,
        default : ""
    },
    paymentamount : {
        type : String,
        default : ""
    },
    paymentdate : {
        type : Date,
        default : ""
    }

})

const PaymentModel = mongoose.model("Payment",paymentSchema)

export default PaymentModel