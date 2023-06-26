import { body } from "express-validator";

export const validateCreateInsurance = [
    
  body("firstName")
    .isString()
    .withMessage("First Name must be string")
    .notEmpty()
    .withMessage("firstName must not be empty"),
  body("lastName")
    .isString()
    .withMessage("Last Name must be string")
    .notEmpty()
    .withMessage("Last Name must not be empty"),

  body("dateOfBirth")
    .isDate()
    .withMessage("Invalid date of birth")
    .custom((value) => {
      // Calculate age based on the date of birth
      const birthDate = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      //   const monthDiff = today.getMonth() - birthDate.getMonth();
      if (age < 16) {
        return false;
      }
      return true;
    })
    .withMessage("You must be at least 16 years old"),

  body("address.street").notEmpty().withMessage("Street is required"),
  body("address.city").notEmpty().withMessage("City is required"),
  body("address.state").notEmpty().withMessage("State is required"),
  body("address.zipCode")
    .isNumeric()
    .withMessage("Zip code must be numeric")
    .isLength({ min: 6, max: 6 })
    .withMessage("Zip code must be at least 5 digits"),



  body("vehicles")
    .isObject({ min: 1, max: 3 })
    .withMessage("You must provide at least 1 vehicle and at most 3 vehicles"),
  body("vehicles.*.vin")

    .notEmpty()
    .withMessage("VIN is required")
    .isLength({ min: 17, max: 17 })
    .withMessage("VIN must be exactly 17 characters"),

  body("vehicles.*.year")
    .isNumeric()
    .withMessage("Year must be numeric")
    .isInt({ min: 1985, max: new Date().getFullYear() + 1 })
    .withMessage("Invalid year"),

  body("vehicles.*.makeModel").notEmpty().withMessage("Make Model is required"),

  
];
