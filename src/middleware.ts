import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  
  // Handle .md extension - redirect to the version without .md
  if (pathname.endsWith('.md')) {
    const cleanPath = pathname.slice(0, -3);
    return context.redirect(cleanPath, 301);
  }
  
  return next();
});
