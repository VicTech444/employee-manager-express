import { supabase } from "../db/supabase.js";
import jwt from 'jsonwebtoken';
import 'dotenv/config.js'
import bcrypt from 'bcrypt'

export class validationModel {
    static async validateEmployee (body) {
        if (!body) return false;

        try {
            let validation = jwt.verify(body, process.env.JWT_SECRET);
            // let {email, userName} = validation;

            // let valid = await supabase
            // .from('employees')
            // .select('email,first_name') 
            // .eq('email', email)
            // .eq('first_name', userName);

            // if (valid.error) return false
            
            return true
        } catch (error) {
            return false
        }     
    }
}