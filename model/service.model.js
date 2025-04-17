import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    electric : {
        type : String,
        default : ""
    },
    water : {
        type : String,
        default : ""
    },
    others : {
        type : String,
        default : ""
    }
})

const ServiceModel = mongoose.model("Service",serviceSchema)

export default ServiceModel