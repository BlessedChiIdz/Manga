require('dotenv').config();
export const jwtConstants = {
    secret: process.env.PRIVATE_KEY
};