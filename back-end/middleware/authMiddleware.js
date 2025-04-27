import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.model.js";

dotenv.config();
const JWT_SECRET = process.env.SECRET_KEY;
if (!JWT_SECRET) {
  console.error("❌ LỖI: SECRET_KEY chưa được thiết lập trong .env");
  process.exit(1);
}

// Xác thực token (dùng cho route cần đăng nhập)
const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res
        .status(401)
        .json({ message: "Không có token, truy cập bị từ chối!" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token không hợp lệ!" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: "Người dùng không tồn tại!" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Lỗi xác thực JWT:", error);
    return res
      .status(403)
      .json({ message: "Token không hợp lệ hoặc đã hết hạn!" });
  }
};

// Middleware phân quyền dành riêng cho landlord
const authorizeLandlord = (req, res, next) => {
  if (!req.user || req.user.role !== "landlord") {
    return res.status(403).json({
      message: "Truy cập bị từ chối. Chỉ dành cho landlord.",
    });
  }
  next();
};

export { authenticateUser, authorizeLandlord };
