import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
    callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/home');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
    async jwt({ token, user }) {
      // Persist custom user properties to the token
      if (user) {
        (token as any)._id = (user as any)._id;
        (token as any).username = (user as any).username;
        (token as any).extraprop = (user as any).extraprop;
      }
      return token;
    },
    async session({ session, token }) {
      // Expose custom properties in the session
      if (token) {
        (session.user as any).id = (token as any)._id;
        (session.user as any).username = (token as any).username;
        (session.user as any).extraprop = (token as any).extraprop;
      }
      return session;
    },
  },
  providers: [], // Add providers with an empty array for no
} satisfies NextAuthConfig;
