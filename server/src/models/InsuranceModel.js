import mongoose from "mongoose";

const insuranceSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },

  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: Number, required: true },
  },
  vehicles: [
    {
      vin: { type: String, required: true },
      year: { type: Number, required: true },
      makeModel: { type: String, required: true },
    },
  ],
},{
    timestamps:true
});


const InsuranceModel = new mongoose.model('User',insuranceSchema) 

export default InsuranceModel;
