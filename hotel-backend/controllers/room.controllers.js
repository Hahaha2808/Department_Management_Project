import { request, response } from "express"
import RoomModel from "../model/room.model.js"

export const createRoomController = async(request, response)=>{
    try {
        const {
            roomNumber,
            price,
            length,
            width,
            maxPeople,
            area,
            numberBedroom,
            address,
            allowMale,
            allowFemale,
            description,
            image,
            landlord,
        } = request.body

        if (!roomNumber || !price || !length || !width || !maxPeople || !area || !numberBedroom || !address[0] || !allowMale[0] || !allowFemale[0] || !description[0] || !image[0] || !landlord[0]){
            return response.status(400).json({
            message: "Enter required fields",
            error: false,
            success: true
            })
        }

        const room = new RoomModel({
            roomNumber,
            price,
            length,
            width,
            maxPeople,
            area,
            numberBedroom,
            address,
            allowMale,
            allowFemale,
            description,
            image,
            landlord,
        })
        const saveRoom = await room.save()

        return response.json({
            message : "Room Created Successfully",
            data : saveRoom,
            error : false,
            success : true
        })

        } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error : true,
            success : false
        })
    }
}

export const getRoomController = async(request, response) => {

}

export const getRoomDetails = async(request, response) => {

}

export const updateRoomDetails = async(request, response) => {
    try {
        const { _id } = request.body 

        if(!_id){
            return response.status(400).json({
                message : "provide room _id",
                error : true,
                success : false
            })
        }

        const updateRoom = await RoomModel.updateOne({ _id : _id },{
            ...request.body
        })

        return response.json({
            message : "updated successfully",
            data : updateRoom,
            error : false,
            success : true
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

export const deleteRoomDetails = async(request, response) => {
    try {
        const { _id } = request.body 

        if(!_id){
            return response.status(400).json({
                message : "provide _id ",
                error : true,
                success : false
            })
        }

        const deleteRoom = await RoomModel.deleteOne({_id : _id })

        return response.json({
            message : "Delete successfully",
            error : false,
            success : true,
            data : deleteRoom
        })
    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

export const searchRoomController = async(request, response) => {

}