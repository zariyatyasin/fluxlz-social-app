import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "96c3d7507dd42b72da2",
      clientSecret: "56ee2ddd6c6823a65aa31bc1d586d39aa94eec90",
    }),
    GoogleProvider({
      clientId:
        "990776302661-g0guv3o2m0ilkobmcb964vt0dcno9re0.apps.googleusercontent.com",
      clientSecret: "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",
    }),

    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
