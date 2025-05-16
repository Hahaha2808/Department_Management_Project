import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    unit: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    landlord_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }

},
{
    timestamps: true,
})

const ServiceModel = mongoose.model("Service",serviceSchema)

export default ServiceModel