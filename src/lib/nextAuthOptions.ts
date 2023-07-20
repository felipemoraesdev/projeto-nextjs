import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

const ALLOWED_EMAILS = [
    'felipemoraesdev@gmail.com'
];

export const authOptions: NextAuthOptions = {
    providers: [
    GoogleProvider({
        clientId: process.env.OAUTH_GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.OAUTH_GOOGLE_SECRET_KEY ?? '',
      }),
    ],
    callbacks: {
      async signIn({ user }) {
        if (!ALLOWED_EMAILS.includes(user.email!)) {
          return '/login/?error=account';
        }
  
        return true;
      },
      redirect({ url, baseUrl }) {
        return '/adm/dashboard'
      }
    },
}