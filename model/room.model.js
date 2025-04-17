import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    price : {
        type : String,
        default : ""
    },
    status : {
        type : String,
        enum : ['Empty',"Full"],
        default : "Empty"
    },
    service : [
        {
            type : mongoose.Schema.ObjectId,
            ref : "service"
        }
    ],
    address : {
        type : String,
        default : ""
    }

})

const RoomModel = mongoose.model("Room",roomSchema)

export default RoomModel