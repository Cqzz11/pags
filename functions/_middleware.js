export async function onRequest({ request, env, next }) {
  const url = new URL(request.url);
  
  // 如果请求的是 config.js，注入环境变量
  if (url.pathname === '/cc/config.js') {
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

  // 其他请求正常处理
  return next();
} 