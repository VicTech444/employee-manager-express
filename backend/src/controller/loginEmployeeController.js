import { loginEmployeeModel } from "../model/loginEmployeeModel.js";
import { validateEmployeeCredentials } from "../schema/logEmployee.js";
import 'dotenv/config.js'

export class loginEmployeeController {
    static async getAllEmployees (req, res) {
        let response = await loginEmployeeModel.getAllEmployees();

        if (!response) {
            return res.status(500).json({
                message: "An error has been occured"
            });
        }

        res.json(response)
    }

    static async logEmployee (req, res) {
        let newData = await validateEmployeeCredentials(req.body);

        if (!newData.success) {
            return res.status(400).json({message: newData.error.message});
        }
        
        let response = await loginEmployeeModel.logEmployee(newData.data);
        
        if (!response) {
            return res.status(400).json({message: "Invalid credentials"});
        }
        
        const isProduction = process.env.NODE_ENV === 'production';

        res.cookie('login', response, {
            maxAge: 24 * 60 * 60 * 1000,
            path: '/',
            httpOnly: isProduction,
            secure: isProduction,
        }).json({message: "Data sent succesfully"});
    }
}