import React, { useState } from "react";
import "../styling/components/RoomList.scss";

const initialRooms = [
  {
    id: 1,
    roomNumber: "A101",
    price: 15000000,
    rented: false,
    area: 234,
    address: "46 Lê Quý Đôn, Cầu Giấy, Hà Nội",
    numBedrooms: 2,
    imageUrl:
      "https://klux.com.vn/wp-content/uploads/2023/12/thiet-ke-chung-cu-2-phong-ngu-5.jpg",
  },
  {
    id: 2,
    roomNumber: "A102",
    price: 25000000,
    rented: true,
    tenant: "haf",
    area: 234,
    address: "108 Lý Thường Kiệt, Thành phố Huế",
    numBedrooms: 3,
    imageUrl:
      "https://vinhomecentralpark.com.vn/wp-content/uploads/2022/10/Phong-khach-can-ho-Landmark-3-Vinhomes-Tan-Cang.jpg",
  },
  {
    id: 3,
    roomNumber: "A103",
    price: 9000000,
    rented: false,
    area: 234,
    address: "103 Trần Quốc Toản, Đống Đa, Hà Nội",
    numBedrooms: 1,
    imageUrl:
      "https://everon.com/upload/upload-images/thiet-ke-can-ho-1-phong-ngu-17.jpg",
  },
  {
    id: 4,
    roomNumber: "A104",
    price: 1400000,
    rented: false,
    area: 234,
    address: "90 D5, Quận Bình Thạnh, Tp.Hồ Chí Minh",
    numBedrooms: 2,
    imageUrl:
      "https://media.vneconomy.vn/w800/images/upload/2021/04/20/a1-1606267205268147052067-crop-16062672089211225810064.jpg",
  },
  {
    id: 5,
    roomNumber: "A105",
    price: 32000000,
    rented: false,
    area: 234,
    address: "60 Trần Chân, Quận 3, Tp.Hồ Chí Minh",
    numBedrooms: 4,
    imageUrl:
      "https://noithatmanhhe.vn/wp-content/uploads/2024/03/15-khong-gian-phong-khach-dep-1.jpg",
  },
];

const RoomList = () => {
  const [rooms, setRooms] = useState(initialRooms);

  const handleEditRoom = (roomId) => {
    const roomToEdit = rooms.find((room) => room.id === roomId);
    if (!roomToEdit) return;

    const updatedRoom = {
      ...roomToEdit,
      price: Number(prompt("Giá phòng:", roomToEdit.price)),
      area: Number(prompt("Diện tích:", roomToEdit.area)),
      address: prompt("Địa chỉ:", roomToEdit.address),
      numBedrooms: Number(prompt("Số phòng ngủ:", roomToEdit.numBedrooms)),
      imageUrl:
        prompt("Link hình ảnh (có thể để trống):", roomToEdit.imageUrl || "") ||
        roomToEdit.imageUrl,
    };

    setRooms((prevRooms) =>
      prevRooms.map((room) => (room.id === roomId ? updatedRoom : room))
    );
  };

  const handleDeleteRoom = (roomId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa phòng này không?")) {
      setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
    }
  };

  const handleAddTenant = (roomId) => {
    const tenantName = prompt("Tên khách thuê:");
    if (!tenantName) return;

    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId
          ? { ...room, rented: true, tenant: tenantName }
          : room
      )
    );
  };

  return (
    <div className="room-container">
      {rooms.map((room) => (
        <div
          key={room.id}
          className={`room-card ${room.rented ? "rented" : ""}`}
        >
          {/* Hiển thị hình ảnh */}
          <div className="room-image">
            {room.imageUrl ? (
              <img src={room.imageUrl} alt={`Room ${room.id}`} />
            ) : (
              <p>Chưa có hình ảnh</p>
            )}
          </div>
          <div className="room-id"> 🏠Phòng {room.id}</div>

          {room.rented ? (
            <div className="tenant">👤 {room.tenant}</div>
          ) : (
            <button
              className="btn add-tenant"
              onClick={() => handleAddTenant(room.id)}
            >
              ➕Thêm khách
            </button>
          )}
          <div className="room-details">
            <div className="area">◼️ {room.area} m²</div>
            <div className="num-bedrooms">🛏️ {room.numBedrooms}</div>
          </div>
          <div className="price">🏷️{room.price.toLocaleString()} VNĐ/Tháng</div>
          <div className="address"> 📍{room.address.toLocaleString()}</div>
          <div className="room-actions">
            <button
              className="btn edit-btn"
              onClick={() => handleEditRoom(room.id)}
            >
              ✏️ Chỉnh sửa
            </button>
            <button
              className="btn delete-btn"
              onClick={() => handleDeleteRoom(room.id)}
            >
              🗑️ Xóa
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomList;
