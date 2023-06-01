import {NextResponse} from "next/server";

export function middleware(req) {

    let isAuthed = req.cookies.get("isAuthed");
    let userType = req.cookies.get("userType");


    if (!isAuthed) {
        return NextResponse.redirect(new URL("/")); // stay on same page from which the request was made
    }

    if (req.nextUrl.pathname.startsWith('/upload-project') && !(userType === "Developer" || userType === "Investor")) {
        return NextResponse.redirect(new URL("/", req.url)); // stay on same page from which the request was made
    }

    if (req.nextUrl.pathname.startsWith('/mentor-dashboard') && userType !== "Mentor") {
        return NextResponse.redirect(new URL("/", req.url)); // stay on same page from which the request was made
    }

}

export const config = {
    matcher: ['/dashboard', '/logout', '/upload-project', '/my-projects', '/confirmation-page', '/mentor-dashboard'],
    // matcher: ['/dashboard', '/logout', '/upload-project'],
}

// TODO: if cookies are manually set upload-project page is accessible!!! this is bad