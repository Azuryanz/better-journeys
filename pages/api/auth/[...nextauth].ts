import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user',
        },
      },
    }),
  ],
  secret: "87a9fb78dd6d2fce74935e074ce6bee5uYaG1ajkq1tNJAdb5jE+4JfWpwAdEDdPOQiyK/IL9RQ=",
})