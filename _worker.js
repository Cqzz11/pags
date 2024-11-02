export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // 如果请求的是 config.js，注入环境变量
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

    // 其他请求返回静态文件
    return env.ASSETS.fetch(request);
  }
}; 