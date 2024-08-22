import mongoose from "mongoose";

// defining the schema and model
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,

    },
    gender: {
        type: String,
    },
});


const User = mongoose.model("user", userSchema);

export default User;