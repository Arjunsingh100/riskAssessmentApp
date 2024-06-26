const userModel = require('../Models/usersModel');
const JWT = require('jsonwebtoken');
const { hashedPassword, comparePassword } = require('../utilities/authUtilities')

module.exports.registerController = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const existingUser = await userModel.findOne({ userName: email })
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'You have already Register'
            })
        }
        const hashedPass = await hashedPassword(password);
        const user = await new userModel({ userName: email, firstName, lastName, password: hashedPass }).save();
        res.status(201).send({
            success: true,
            message: 'User Register Succefully',
            user
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
}

module.exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ userName:email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'You email not exits'
            })
        }
        const match = comparePassword(password, user.password);
        if (match === false) {
            return res.status(200).send({
                success: false,
                message: 'Password is wrong'
            })
        }
        const token = await JWT.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: '7d' });
        res.status(200).send({
            success: true,
            message: 'User login successfully',
            user: {
                name: user.userName,
                fistName:user.firstName,
                lastName:user.lastName
            },
            token,
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Login',
            error
        })
    }
}

