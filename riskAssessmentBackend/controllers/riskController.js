const riskObjectModel = require('../Models/riskObjectModel');
module.exports.addRiskObject = async (req, res) => {
    try {
        const {riskScenario,riskDescription,riskField1,riskField2,keyValueObj} = req.body;
        const riskObj = await new riskObjectModel({riskScenario,riskDescription,riskField1,riskField2,riskKeyValueObj:keyValueObj}).save();
        res.status(201).send({
            success:true,
            message:'risk object added successfully',
            riskObj
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error while inserting risk object',
            error
        })
    }
}

//router to find the all riskObject
module.exports.findAllRiskObj = async (req,res) => {
    try {
        const riskObjects = await riskObjectModel.find();
        res.status(201).send({
            success:true,
            message:'Risk object fetched successfully',
            riskObjects
        }) 
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error while fetching riskObj',
            error
        })
    }
}