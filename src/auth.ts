import NextAuth from "next-auth";
import { authConfig } from "../auth.config";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "./models/User";
import { User as UserType } from "@/types/types";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log("Credentials:", credentials);

        const { username, password } = credentials;

        const user = await User.findOne<UserType>({
          username: username,
        });

        if (!user) return null;

        // Check if the password matches
        if (typeof password !== "string" || typeof user.password !== "string") {
          //throw new Error("Invalid credentials format.");
          return null;
        }
        const match = await bcrypt.compare(password, user.password);

        console.log(user);

        if (!match) return null;

        delete user.password; // Remove password from user object before returning

        console.log("session:", {
          extraprop: "hello",
          _id: user._id.toString(),
          name: user.name,
          username: user.username,
        });
        return {
          _id: user._id.toString(),
          name: user.name,
          username: user.username,
        };
      },
    }),
  ],
});
