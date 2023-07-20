import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { authOptions } from "../../../../lib/nextAuthOptions";

// const ALLOWED_EMAILS = [
//   'felipemoraesdev@gmail.com'
// ]

// export const authOptions: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.OAUTH_GOOGLE_CLIENT_ID ?? '',
//       clientSecret: process.env.OAUTH_GOOGLE_SECRET_KEY ?? '',
//     }),
//   ],
//   callbacks: {
//     async signIn({ user }) {
//       if (!ALLOWED_EMAILS.includes(user.email!)) {
//         return '/login/?error=account';
//       }

//       return true;
//     },
//   },
// }

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
