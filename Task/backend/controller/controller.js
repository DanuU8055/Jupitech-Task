import "../models/connection.js";
import userSchemaModel from "../models/userModel.js";

import url from "url";


export const register = async (req, res) => {
  let userDetails = req.body;
  console.log(userDetails);
  console.log(req.files);
  let userList = await userSchemaModel.find();
  let len = userList.length;
  let id = len == 0 ? 1 : userList[len - 1]._id + 1;
  userDetails = {
    ...userDetails,
    role: "user",
    status: 0,
    _id: id,
    date: Date(),
    imageUrl: req.file ? req.file.path : null, 
  };


  try {
    await userSchemaModel.create(userDetails);
    return res.status(200).json("Register successful");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Not registered");
  }
};
export const fetch = async (req, res) => {
  let userDetails = url.parse(req.url, true).query;
  let userList = await userSchemaModel.find(userDetails);
  if (userList.length != 0) {
    return res.status(200).json(userList);
  } else {
    return res.status(500).json("User not exsist");
  }
};
export const remove = async (req, res) => {
  let userDetails = req.body;
  console.log(userDetails);
  let userList = await userSchemaModel.findOne(userDetails);
  let len = userList.length;
  console.log(len);
  if (len != 0) {
    let result = await userSchemaModel.deleteMany(userList);
    if (result) {
      return res.status(200).json("User removed successfully");
    } else {
      return res.status(400).json("server error");
    }
  } else {
    return res.status(500).json("User not exsist");
  }
};
export const update = async (req, res) => {
  let userDetails = req.body;
  
  let userList = await userSchemaModel.find(userDetails.condition_obj);
  let len = userList.length;
  if (len != 0) {
    let result = await userSchemaModel.updateMany(userDetails.condition_obj, {
      $set: userDetails.content_obj,
    });
    if (result) {
      return res.status(200).json("Update successfully");
    } else {
      return res.status(400).json("server error");
    }
  } else {
    return res.status(500).json("User not exsist");
  }
};
