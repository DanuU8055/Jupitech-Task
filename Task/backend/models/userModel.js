import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema=mongoose.Schema({
  _id:Number,
 fullname:{
    lowercase:true,
    trim:true,
    type:String,
    required:[true,"Name is required"]
  },
  email:{
    type:String,
    trim:true,
    unique:true,
    required:[true,"Email is required"]
  },
  mobile:{
    type:String,
    trim:true,
    minlength:10,
    maxlength:10,
    required:[true,"Number is required"]
  },
  password:{
    type:String,
    trim:true,
    minlength:5,
    required:[true,"Password is required"]
  },
 confirmpassword:{
    type:String,
    trim:true,
    minlength:5,
    required:[true,"Password is required"]
  },
  fileUpload: {
    type: [],
    required:[true,"file is required"]
  },

 
  role:String,
  status:Number,
  date:String,
})

userSchema.plugin(uniqueValidator);
const userSchemaModel=mongoose.model("registrations",userSchema);

export default userSchemaModel;