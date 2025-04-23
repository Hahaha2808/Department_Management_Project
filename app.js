import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import connectDB from './config/connectDB.js'
import UserModel from "./model/user.model.js"


const app = express()
app.use(cors({
    credentials : true,
    origin : process.env.FRONTEND_URL
}))
app.use(express.json())
app.use(cookieParser())
//app.use(morgan())


app.use(helmet({
    crossOriginResourcePolicy : false
}))

const PORT = 8080 || process.env.PORT 

app.get("/",(request,response)=>{
    ///server to client
    response.json({
        message : "Server is running " + PORT
    })
})

connectDB().then(()=> {
    app.listen(PORT, ()=> {
        console.log("Server is running", PORT)
    })
})

const createTestUser = async () => {
    try {
        const newUser = new UserModel(
            {
                fullnamename: "Nguyen Van A",
                username: "nguyenvana",
                email: "a@gmail.com",
                password: "123456",
                phone_number: "0123456789",
                role: "landlord",
            }
        );
    
        await newUser.save();
        console.log("✅ Đã tạo user mẫu!")
    }   catch (error) {
        console.error("❌ Lỗi khi tạo user mẫu:", error.message)
    }
}

createTestUser()