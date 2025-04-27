import Room from "../models/Room.model.js";

export const addRoom = async (req, res) => {
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
    } = req.body;

    const image = req.file ? req.file.filename : null;

    // Kiểm tra dữ liệu bắt buộc
    if (
      !roomNumber ||
      !price ||
      !length ||
      !width ||
      !maxPeople ||
      !area ||
      !numberBedroom
    ) {
      return res.status(400).json({
        success: false,
        error: "Vui lòng nhập đầy đủ thông tin bắt buộc.",
      });
    }

    const newRoom = new Room({
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
      landlordID: "6806750b7c3816985129f742",
    });

    await newRoom.save();

    res.status(201).json({
      success: true,
      message: "Thêm phòng thành công!",
      room: newRoom,
    });
  } catch (error) {
    console.error("Lỗi khi thêm phòng:", error);
    res.status(500).json({
      success: false,
      error: "Lỗi máy chủ khi thêm phòng.",
    });
  }
};
export const getAllRooms = async (req, res) => {
  try {
    const { roomStatus, feeStatus, roomSearch, area, numberBedroom, address } =
      req.query;

    const query = {};

    if (roomStatus) query.status = roomStatus;
    if (feeStatus) query.feeStatus = feeStatus;
    if (roomSearch) query.roomNumber = { $regex: roomSearch, $options: "i" }; // không phân biệt hoa thường
    if (area) query.area = Number(area);
    if (numberBedroom) query.numberBedroom = Number(numberBedroom);
    if (address) query.address = { $regex: address, $options: "i" };

    const rooms = await Room.find(query).populate("landlordID", "fullname");

    res.status(200).json(rooms);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi khi lấy danh sách phòng", error: err.message });
  }
};
// get Room Information
export const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room)
      return res.status(404).json({ message: "Không tìm thấy phòng." });
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi lấy phòng.", error: err.message });
  }
};
// Update RoomInf
export const updateRoom = async (req, res) => {
  try {
    const updatedData = { ...req.body };

    if (req.file) {
      updatedData.image = req.file.filename;
    }

    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
      }
    );

    if (!updatedRoom) {
      return res.status(404).json({ message: "Could not find room." });
    }

    res.json({
      message: "Updated room completely.",
      room: updatedRoom,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating room.", error: err.message });
  }
};
// Delete Room
export const deleteRoom = async (req, res) => {
  try {
    const deletedRoom = await Room.findByIdAndDelete(req.params.id);
    if (!deletedRoom) {
      return res.status(404).json({ message: "Không tìm thấy phòng để xóa." });
    }
    res.json({ message: "Đã xóa phòng thành công!" });
  } catch (error) {
    console.error("Lỗi khi xóa phòng:", error);
    res.status(500).json({ message: "Lỗi máy chủ khi xóa phòng." });
  }
};
