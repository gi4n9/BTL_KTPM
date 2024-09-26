// Cơ sở dữ liệu cho người dùng
// Xác định vai trò của người dùng
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
});

const User = mongoose.model('User', userSchema);
export default User;