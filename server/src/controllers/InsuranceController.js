import { StatusCodes } from "http-status-codes";
import InsuranceModel from "../models/InsuranceModel.js";
import { validationResult } from "express-validator";
import validationErrorHandler from "../middleware/validationErrorHandler.js";

export async function PostUser(req, res) {
  const errors = validationResult(req);
  const errMessages = validationErrorHandler(errors);
  if (errMessages && errMessages.length) {
    return res.status(400).json({
      success: false,
      errMessages,
    });
  }
  try {
    const { firstName, lastName, dateOfBirth, address, vehicles } = req.body;

    const user = InsuranceModel({
      firstName,
      lastName,
      dateOfBirth,
      address,
      vehicles,
    });

    const savedUser = await user.save();

    return res
      .status(StatusCodes.CREATED)
      .json({ data: savedUser, message: "Post successfully", success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error, message: "error in post ", success: false });
  }
}


export async function getUser(req,res){
  try {
    const user = await InsuranceModel.find()
    return res.status(StatusCodes.OK).json({data: user, message:"user Find successfully", success:true})
  } catch (error) {
    console.log("error in find data",error)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:error, message:"error in find user", success:true})
  }
}