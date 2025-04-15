import React, { useState } from "react";
import "../styling/components/RoomEditForm.scss";

const RoomEditForm = () => {
  const [formData, setFormData] = useState({
    roomNumber: "",
    house: "",
    price: "",
    length: "",
    width: "",
    maxPeople: "",
    area: "",
    numberBedroom: "",
    address: "",
    allowMale: true,
    allowFemale: true,
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="edit-room-wrapper">
      <div className="edit-room-header">
        <h2 className="edit-room-title">Sửa Phòng</h2>
        <form onSubmit={handleSubmit}>
          <div className="edit-room-container">
            <div style={{ flex: "1 1 45%" }}>
              <div className="form-group">
                <label>Phòng số *</label>
                <input
                  name="roomNumber"
                  value={formData.roomNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Diện tích *</label>
                <input
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Dài *</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    name="length"
                    value={formData.length}
                    onChange={handleChange}
                    required
                  />
                  <span style={{ marginLeft: "8px" }}>M</span>
                </div>
              </div>
              <div className="form-group">
                <label>Số lượng người tối đa *</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    name="maxPeople"
                    value={formData.maxPeople}
                    onChange={handleChange}
                    required
                  />
                  <span style={{ marginLeft: "8px" }}>Người</span>
                </div>
              </div>
              <div className="form-group">
                <label>Số phòng ngủ *</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    name="numberBedroom"
                    value={formData.numberBedroom}
                    onChange={handleChange}
                    required
                  />
                  <span style={{ marginLeft: "8px" }}>Phòng</span>
                </div>
              </div>
            </div>
            <div style={{ flex: "1 1 45%" }}>
              <div className="form-group">
                <label>Nhà *</label>
                <select
                  name="house"
                  value={formData.house}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Chọn nhà --</option>
                  <option value="The Art">Chung cư The Art</option>
                  <option value="Other">Khác</option>
                </select>
              </div>
              <div className="form-group">
                <label>Đơn giá *</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                  <span style={{ marginLeft: "8px" }}>VND</span>
                </div>
              </div>
              <div className="form-group">
                <label>Rộng *</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    required
                  />
                  <span style={{ marginLeft: "8px" }}>M</span>
                </div>
              </div>
              <div className="form-group">
                <label>Cho thuê</label>
                <div
                  style={{ display: "flex", gap: "24px", marginTop: "16px" }}
                >
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <input
                      type="checkbox"
                      name="allowMale"
                      checked={formData.allowMale}
                      onChange={handleChange}
                    />
                    Nam
                  </label>

                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <input
                      type="checkbox"
                      name="allowFemale"
                      checked={formData.allowFemale}
                      onChange={handleChange}
                    />
                    Nữ
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div
            className="edit-room-container"
            style={{ flexDirection: "column" }}
          >
            <label>Địa chỉ</label>
            <textarea
              name="address"
              value={formData.description}
              onChange={handleChange}
              rows={1}
            />
            <label>Mô tả thêm</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
            />

            <label>Hình ảnh</label>
            <input type="file" onChange={handleFileChange} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: "#f0ad4e", marginRight: "10px" }}
            >
              Quay về
            </button>
            <button
              type="submit"
              className="btn"
              style={{ backgroundColor: "#5cb85c" }}
            >
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoomEditForm;
