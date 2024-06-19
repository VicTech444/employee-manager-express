import 'dotenv/config.js'

export class logoutController {
    static async logoutEmployee (req, res) {
        const isProduction = process.env.NODE_ENV === 'production';

        res.cookie('login', "logging out", {
            maxAge: 0,
            path: '/',
            httpOnly: isProduction,
            secure: isProduction,
        }).json({message: "Logged out"});
    }
}