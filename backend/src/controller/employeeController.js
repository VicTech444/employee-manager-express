import { employeeModel } from "../model/employeeModel.js";
import 'dotenv/config.js'

export class employeeController {
    static async getAllEmployees (req, res) {
        let response = await employeeModel.getAllEmployees();

        if (!response) {
            return res.status(500).json({
                message: "An error has been occured"
            });
        }

        res.json(response)
    }

    static async getEmployee (req, res) {
        let response = await employeeModel.getEmployee(req.body);
        
        if (!response) {
            return res.status(400).json({message: "User not found"});
        }

        res.json({message: response})
    }
}