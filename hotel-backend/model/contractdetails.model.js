import mongoose from "mongoose";

const contractSchema = new mongoose.Schema({
    startday : {
        type : Date,
        default : ""
    },
    endday : {
        type : Date,
        default : ""
    }

})

const ContractModel = mongoose.model("Contract",contractSchema)

export default ContractModel