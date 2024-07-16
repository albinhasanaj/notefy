import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide all fields' });
    }

    // check if username or email already exists
    const user = await prisma.user.findFirst({
        where: {
            OR: [
                { username },
                { email }
            ]
        }
    });

    // find out if the username or email was the existing field
    let existingField = '';
    if (user?.username === username) {
        existingField = 'Username';
    } else if (user?.email === email) {
        existingField = 'Email';
    }

    if (user) {
        return res.status(400).json({ message: `${existingField} already exists` });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = randomUUID();

    // create the user
    const newUser = await prisma.user.create({
        data: {
            id: userId,
            username,
            email,
            password: hashedPassword
        }
    });

    if (!newUser) {
        return res.status(500).json({ message: 'An error occurred while creating the user' });
    }

    return res.status(201).json({ message: 'User created successfully' });
}