import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomNumber: 
    { type: String, 
        required: true },

    price: 
    { type: Number, 
        required: true },

    length: 
    { type: Number },

    width: 
    { type: Number },

    maxPeople: 
    { type: Number },

    area: 
    { type: Number },

    numberBedroom: 
    { type: Number },

    address: 
    { type: String },

    allowMale: 
    { type: Boolean, 
        default: true },

    allowFemale: 
    { type: Boolean, 
        default: true },

    description: { type: String },

    image: { type: String }, // đường dẫn ảnh hoặc URL

    landlord: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Liên kết với landlord thông qua User
      required: true,
    },
  },
  {
    timestamps: true,
  })

const RoomModel = mongoose.model("Room",roomSchema)

export default RoomModel