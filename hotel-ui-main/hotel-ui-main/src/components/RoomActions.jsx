import React, { useState } from "react";
import "../styling/components/RoomList.scss";

const RoomActions = ({ onAddRoom }) => {
  const [roomStatus, setRoomStatus] = useState("");
  const [feeStatus, setFeeStatus] = useState("");
  const [roomSearch, setRoomSearch] = useState("");
  const [roomId, setRoomId] = useState("");
  const [price, setPrice] = useState("");
  const [tenant, setTenant] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [numBedrooms, setNumBedrooms] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleRoomStatusChange = (e) => {
    setRoomStatus(e.target.value);
  };

  const handleFeeStatusChange = (e) => {
    setFeeStatus(e.target.value);
  };

  const handleRoomSearchChange = (e) => {
    setRoomSearch(e.target.value);
  };

  const handleSearchClick = () => {
    // Xử lý tìm kiếm hoặc lọc kết quả ở đây
    console.log("Tìm kiếm:", { roomStatus, feeStatus, roomSearch });
  };
  const handleAddRoomClick = () => {
    if (!roomId || !price) return alert("Vui lòng nhập đầy đủ thông tin.");

    const newRoom = {
      id: Number(roomId),
      price: Number(price),
      rented: tenant ? true : false,
      tenant: tenant || null,
      status: roomStatus,
      feeStatus: feeStatus,
      area: Number(area),
      address: address || "Chưa có địa chỉ",
      numBedrooms: Number(numBedrooms),
      imageUrl: imageUrl || "default_image_url_here",
    };

    onAddRoom(newRoom);
    setRoomId("");
    setPrice("");
    setTenant("");
    setArea("");
    setAddress("");
    setNumBedrooms("");
    setImageUrl("");
  };
  const handleCustomersClick = () => {
    // Chức năng quản lý khách hàng (có thể điều hướng đến trang khách hàng)
    console.log("Quản lý khách hàng");
  };
  return (
    <div className="roompage-actions">
      <select
        className="dropdown"
        value={roomStatus}
        onChange={handleRoomStatusChange}
        aria-label="Trạng thái phòng"
      >
        <option value="">- Trạng thái phòng -</option>
        <option value="Trống">Trống</option>
        <option value="Đang thuê">Đang thuê</option>
        <option value="Đang dọn">Đang dọn</option>
      </select>
      <select
        className="dropdown"
        value={feeStatus}
        onChange={handleFeeStatusChange}
        aria-label="Trạng thái phí"
      >
        <option value="">- Trạng thái phí -</option>
        <option value="Đã thanh toán">Đã thanh toán</option>
        <option value="Chưa thanh toán">Chưa thanh toán</option>
      </select>
      <input
        type="text"
        className="search-input"
        placeholder="Phòng"
        value={roomSearch}
        onChange={handleRoomSearchChange}
        aria-label="Tìm kiếm phòng"
      />
      <input
        type="number"
        className="search-input"
        placeholder="Số phòng ngủ"
        value={numBedrooms}
        onChange={(e) => setNumBedrooms(e.target.value)}
        aria-label="Số phòng ngủ"
      />{" "}
      {/* Thêm trường nhập số phòng ngủ */}
      <input
        type="number"
        className="search-input"
        placeholder="Diện tích"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        aria-label="Diện tích"
      />
      <input
        type="text"
        className="search-input"
        placeholder="Địa chỉ"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        aria-label="Địa chỉ"
      />
      <button className="btn search-btn" onClick={handleSearchClick}>
        🔍 Tìm kiếm
      </button>
      <button className="btn add-btn" onClick={handleAddRoomClick}>
        Thêm phòng
      </button>
      <button className="btn customers-btn" onClick={handleCustomersClick}>
        Khách hàng
      </button>
    </div>
  );
};

export default RoomActions;
