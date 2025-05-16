import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // fullname : {
    //     type : String,
    //     required : [true,"Provide name"]
    // },
    name: {
        type : String, 
        required : true,
        unique : true 
    },
    email: {
        type : String,
        // required : [true, "provide email"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "provide password"]
    },
    phone_number : {
        type : Number,
        default : null
    },
    refresh_token : {
        type : String,
        default : ""
    },
    verify_email : {
        type : Boolean,
        default : false
    },
    role : {
        type : String,
        enum : ['admin',"landlord"],
        default : "landlord"
    },
    contract : [
        {
        type : mongoose.Schema.ObjectId,
        ref : 'contract'
        }
    ]
},{
    timestamps : true
})

const UserModel = mongoose.model("User",userSchema)

export default UserModel