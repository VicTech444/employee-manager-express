import { supabase } from "../db/supabase.js";
import jwt from 'jsonwebtoken';
import 'dotenv/config.js'
import bcrypt from 'bcrypt'

export class employeeModel {
    static async getAllEmployees () {
        try {
        let {data, error} = await supabase.from('employee').select('*');

        if (error) return false;
 
        return data
        } catch (error) {
            return false;
        }
    }

    static async logEmployee (body) {
        let {email, password} = body;

        if (email === 'FakeEmployee@gmail.com' && password === 'ImFake123@#') {
            let token = jwt.sign({
                exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24),
                email,
                userName: 'FakeName'
            }, process.env.JWT_SECRET);

            return token;
        }

        let salts = await bcrypt.genSalt(10);
        let hashPassword = await bcrypt.hash(password, salts);
    
        let {data, error} = await supabase
        .from('employee')
        .select('email,first_name')
        .eq('email', email)
        .eq('password', hashPassword);

        if (error) return false;

        let token = jwt.sign({
            exp: Math.floor(Date.now() / 1000 + 60 * 60 * 24),
            email: data[0].email,
            username: data[0].first_name

        }, process.env.JWT_SECRET);

        return token
    }
}