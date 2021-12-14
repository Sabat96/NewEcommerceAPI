import mongoose from 'mongoose'
// import {Schema} from 'mongoose'
const {Schema} = mongoose;


const userSchema = new Schema({
    username : String,
    email: String,
    password: String,
    isAdmin : {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model("User", userSchema);

export default User;