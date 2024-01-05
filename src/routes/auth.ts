import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const comparePasswords = (password, hash) => {
    return bcrypt.compare(password, hash)
}

export const hashPassword = (password) => {
    return bcrypt.hash(password, 10)
}

export const createJWT = (user) => {
    const token = jwt.sign({
        id: user.id, email: user.email
    },
        process.env.JWT_SECRET    
    )

    return token
}

export const auth = (req, res, next) => {

    const bearer = req.headers.authorization;

    if(!bearer) return res.status(401).send('Access denied. No token provided');

    const [, token] = bearer.split(' ');

    if(!token) return res.status(401).send('Not authorized');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next();
           
    } catch (error) {
        res.status(400).send('Invalid token');
    }
    
}