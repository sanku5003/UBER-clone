const express = require('express');
const { validate } = require('../models/captain.model');
const router = express.Router();
const captainController = require('../controllers/captain.controller');

const {body} = require('express-validator');

router.post('/register' , [
    body('email').isEmail().withMessage('Invalid Email') ,
    body('fullname.firstname').isLength({ min: 3}).withMessage('First Name must be atleast 3 char long') ,
    body('password').isLength({min : 6}).withMessage('Password must be more than 6 character') ,
    body('vehicle-color').isLength({min : 3}).withMessage('Color must be at least 3 character'),
    body('vehicle-plate').isLength({ min : 3 }).withMessage('Plate must be at least 3 character'),
    body('vehicle-capacity').isInt({ min : 1}).withMessage('Capacity must be atleast 1') ,
    body('vehicle.vehicleType').isIn(['car' ,'motorcycle' , 'auto'].withMessage('Invalid Type'))
] , captainController.registerCaptain);

module.exports = router; 