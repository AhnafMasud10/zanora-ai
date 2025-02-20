import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // These routes do not require authentication
  publicRoutes: ["/", "/auth(.*)", "/portal(.*)"],

  // These routes will be ignored by Clerk’s auth checks
  ignoredRoutes: ["/chatbot"],
});

export const config = {
  // The matcher tells Next.js which routes this middleware applies to
  matcher: [
    // This pattern matches all routes except those starting with /_next
    "/((?!_next).*)",
    // Matches the root path
    "/",
    // Matches /api/trpc and any sub-paths
    "/api/trpc(.*)",
  ],
};
