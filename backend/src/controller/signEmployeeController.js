import { signEmployeeModel } from "../model/signEmployeeModel.js";
import 'dotenv/config.js'
import { signEmployeeCredentials } from "../schema/signEmployee.js";

export class signEmployeeController {
    static async signEmployee (req, res) {
        let newData = await signEmployeeCredentials(req.body);

        if (!newData.success) {
            return res.status(400).json({message: newData.error.message});
        }
        
        let response = await signEmployeeModel.signEmployee(newData.data);
        
        if (!response) {
            return res.status(400).json({message: "An error has been occured while creating the user"});
        }

        res.json({message: "User created succesfully"});
    }
}