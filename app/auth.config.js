export const authConfig = {
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.sub;
            }
            return session;
        },
        authorized({ auth, request }) {
            const isLoggedIn = !!auth?.user;
            const pathname = request?.nextUrl?.pathname;
            const isOnDashboard = pathname?.startsWith("/dashboard");
            
            if (isOnDashboard) {
                return isLoggedIn;
            }
            
            return true;
        }
    }
}