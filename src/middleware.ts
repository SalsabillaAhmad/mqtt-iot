import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req:NextRequest){
    const tokenuser = req.cookies.get('token');
    if(!tokenuser){
        return NextResponse.redirect(new URL('/login',req.url));
    }
    return NextResponse.next(); 
}

export const config={
    matcher:['/dashboard/:path*'],
};