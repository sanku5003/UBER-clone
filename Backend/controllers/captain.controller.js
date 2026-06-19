const captainModel = require('../models/captain.model');

const  {validationResult} = require('express-validator');

const captainService = require('../services/captain.services');

module.exports.registerCaptain = async (req , res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {firstname , lastname , email , password , color , plate , capacity , vehicleType} = req.body;

        const isCaptainAlreadyExist = await captainModel.findOne({ email });

        if (isCaptainAlreadyExist) {
            return res.status(400).json({ error: 'Captain with this email already exists' });
        }

        const hashedPassword = await captainModel.hashPassword(password);
        const captain = await captainService.createCaptain({
            fistname : fullname.firstname ,
            lastname : fullname.lastname ,
            email ,
            password : hashedPassword ,
            color : vehicle.color ,
            plate : vehicle.plate ,
            capacity : vehicle.capacity ,
            vehicleType : vehicle.vehicleType ,
        });
       
        token = await captainModel.generateToken(captain);
        res.status(201).json({ message: 'Captain registered successfully' , token  , captain});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};