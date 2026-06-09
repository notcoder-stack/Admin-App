import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from 'bcrypt'

const login = async (credentials) => {
    try {
        connectToDB();
        const user = await User.findOne({ username: credentials.username});

        if(!user) throw new Error("Invalid Credentials");

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

        if(!isPasswordCorrect) throw new Error("Invalid Credentials");

        return user;

    } catch (error) {
        throw error;
    }
};

export const authOptions = {
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    return null;
                }
            },
        })
    ]
}