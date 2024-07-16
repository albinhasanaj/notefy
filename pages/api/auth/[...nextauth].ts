import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import NextAuth, { NextAuthOptions } from 'next-auth';
import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
import { signToken } from "@/lib/auth/tokens";

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            let username = profile?.name;
            const userProfile = profile as { name: string, email: string, id: string };
            const userEmail = email || userProfile?.email || user.email;
            const provider = account?.provider;
            const providerId = account?.providerAccountId;

            if (!provider || !providerId) {
                return false;
            }

            console.log("Provider", provider);
            console.log("Provider ID", providerId);

            const isLoggingIn = await prisma.user.findFirst({
                where: {
                    [`${provider.toLowerCase()}Id`]: providerId
                }
            });
            console.log("isLoggingIn", isLoggingIn);

            if (isLoggingIn) {
                user.id = isLoggingIn.id;
                user.name = isLoggingIn.username;
                user.email = isLoggingIn.email;
                return true;
            }

            // check if the user email already exists
            const existingEmail = await prisma.user.findFirst({
                where: {
                    email: userEmail as string
                }
            });

            if (existingEmail) {
                return false;
            }

            let increment = 0;
            while (true) {
                const existingUsername = await prisma.user.findFirst({
                    where: {
                        username
                    }
                });

                if (!existingUsername) {
                    break;
                }

                increment++;
                username = `${profile?.name}${increment}`;
            }

            const userId = randomUUID();

            const newUser = await prisma.user.create({
                data: {
                    id: userId,
                    username: username as string,
                    email: userEmail as string,
                    [`${provider}Id`]: providerId as string
                }
            });

            user.id = newUser.id;
            user.name = newUser.username;
            user.email = newUser.email;

            return newUser ? true : false;
        },
        async jwt({ token, user }) {
            // Add id to the token
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
            }
            return token;
        },
        async session({ session, token }) {
            // Add id to the session
            if (session.user) {
                session.user.id = token.id as string;
                session.user.email = token.email;
                session.user.name = token.name;
            }
            return session;
        },
    }
}

export default NextAuth(authOptions); 