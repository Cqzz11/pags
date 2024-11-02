export async function onRequest({ request, env, next }) {
  const url = new URL(request.url);
  
  if (url.pathname === '/config.js') {
    return new Response(`const CONFIG = {
      SITE_TITLE: "${env.SITE_TITLE || ''}",
      TURNSTILE_SITE_KEY: "${env.TURNSTILE_SITE_KEY || ''}",
      REDIRECT_URL_SUCCESS: "${env.REDIRECT_URL_SUCCESS || ''}",
      REDIRECT_URL_FAILURE: "${env.REDIRECT_URL_FAILURE || ''}"
    };`, {
      headers: {
        "content-type": "application/javascript",
      },
    });
  }

  return next();
} 
