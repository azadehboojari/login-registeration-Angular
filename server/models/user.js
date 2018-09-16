let mongoose =require('mongoose');
// email validator npm
const validator = require('validator');

var UserSchema= new mongoose.Schema({
    name:{ 
        type:String, 
        required: [true, "Please Enter your name"], 
        minlength:[2, "Name must be at least 2 charchaters"]
    },
    last:{
        type:String,
        required: [true, "Please Enter your last name"], 
        minlength:[2, "Last name must be at least 2 charchaters"]

    },
    email:{
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
            }    
    },
    password:{
        type: String,
        required: [true, "password is required"],
    }, 
},{timestamps: true})

var user = mongoose.model("User", UserSchema)
module.exports = user;