import { NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

let locales = ['en', 'pl'];

// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
    const cookieLocale = request.cookies.get('locale');
    
    let headers = { 'accept-language': request.headers.get('accept-language') || 'en-US,en;q=0.5' };
    let languages = new Negotiator({ headers }).languages();
    let defaultLocale = 'en';
    if (cookieLocale && locales.includes(cookieLocale.value)) {
        return match([cookieLocale.value], locales, defaultLocale);
    }
    return match(languages, locales, defaultLocale);
}

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
   
    if (pathnameHasLocale) return
   
    // Redirect if there is no locale
    const locale = getLocale(request)
    console.log(locale)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl)
  }

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Skip all static files (e.g. images, fonts, icons)
        '/((?!.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|otf|eot|css|js)).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
};
