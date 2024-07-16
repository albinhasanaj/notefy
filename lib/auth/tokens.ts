import jwt, { JwtPayload } from 'jsonwebtoken';

interface jwtPayload {
    userId: string;
    username: string;
    email: string;
}

export const signToken = (jwtPayload: jwtPayload) => {
    return jwt.sign(jwtPayload, process.env.JWT_SECRET!, {
        expiresIn: '30d'
    });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET!);
};