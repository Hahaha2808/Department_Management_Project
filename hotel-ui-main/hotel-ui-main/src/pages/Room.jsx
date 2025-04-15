import React, { useState } from "react";
import RoomList from "../components/RoomList";
import RoomActions from "../components/RoomActions";

const Room = () => {
  const [rooms, setRooms] = useState([]);

  const handleAddRoom = (newRoom) => {
    setRooms((prevRooms) => [...prevRooms, newRoom]);
  };

  return (
    <div className="room-wrapper">
      <h2 className="room-title">Danh sách phòng</h2>
      <RoomActions onAddRoom={handleAddRoom} />
      <RoomList rooms={rooms} />
    </div>
  );
};

export default Room;
