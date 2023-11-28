import mongoose, {Schema} from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userLastname: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userDescription: {
        type: String,
        required: true
    },
    userDepartment: {
        type: String,
        required: true
    },
    userAvatarGithub: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

export default User;