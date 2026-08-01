import { NextResponse } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl.clone();
    const pathname = url.pathname;
    console.log(`Middleware triggered for path: ${pathname}`);


    // Example: permission list stored as JSON string in cookie
    const permissionCookie = request.cookies.get('permissions')?.value;
    const permissions = permissionCookie
        ? JSON.parse(decodeURIComponent(permissionCookie))
        : [];

    // Define protected routes and their required permissions
    const protectedRoutes = {
        '/dashboard': 'view_dashboard',
        '/users': 'view_users',
        '/settings': 'view_settings',
    };

    const requiredPermission = protectedRoutes[pathname];

    if (requiredPermission && !permissions.includes(requiredPermission)) {
        url.pathname = '/unauthorized';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}
