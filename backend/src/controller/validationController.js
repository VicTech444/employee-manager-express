import { validationModel } from "../model/validationModel.js";
import 'dotenv/config.js';

export class validationController {
    static async validateEmployee (req, res) {
        let { cookies } = req.body
        
        let validation = await validationModel.validateEmployee(cookies);
        
        if (!validation) {
            return res.status(400)
            .cookie('login', "", {maxAge: 0, path: '/'})
            .json({message: "Invalid credentials"});
        }

        res.json({message: "Validation success"})
    }
}