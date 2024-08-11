// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// // Define the routes that need protection
// const isProtectedRoute = createRouteMatcher([
//   "/dashboard(.*)",
//   "/workspace(.*)",
// ]);

// // Export the middleware
// export default clerkMiddleware((auth, req) => {
//   const { userId } = auth();
//   // if (isProtectedRoute(req)) {
//   //   auth().protect();
//   // }
//   if (userId && isProtectedRoute(req)) {
//     // auth().protect();
//     return NextResponse.redirect(new URL("/", req.url));
//   }
//   if (!userId) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return NextResponse.next();
// });

// // Configure the matcher
// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define the routes that need protection
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/workspace(.*)",
]);

// Export the middleware
export default clerkMiddleware((auth, req) => {
  const { userId } = auth();

  if (!userId && isProtectedRoute(req)) {
    // If the user is not authenticated and trying to access a protected route, redirect to login
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // If the user is authenticated and tries to access login page, redirect to dashboard or home
  if (userId && req.nextUrl.pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // If the route is not protected or the user is authenticated, allow the request to proceed
  return NextResponse.next();
});

// Configure the matcher
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
