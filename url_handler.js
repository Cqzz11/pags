// 验证链接格式并提取参数
function validateAndExtractParams(url) {
    const regex = /\/caonima=([A-Za-z]+)\.co\.jp\//;
    const match = url.match(regex);
    
    if (match) {
        const randomStr = match[1];
        const validLength = randomStr.length >= 7 && randomStr.length <= 9;
        const hasUpperCase = /[A-Z]/.test(randomStr);
        const hasLowerCase = /[a-z]/.test(randomStr);
        
        return {
            isValid: validLength && hasUpperCase && hasLowerCase,
            randomString: randomStr
        };
    }
    return {
        isValid: false,
        randomString: null
    };
}

function validateRandomString(str) {
    return /^[A-Za-z]{7,9}$/.test(str);
}

function handleRedirect(params) {
    // 检查 URL 是否包含参数
    if (window.location.pathname.includes('caonima=')) {
        // 带参数的情况
        if (params.isValid && validateRandomString(params.randomString)) {
            return CONFIG.REDIRECT_URL_SUCCESS;
        }
    } else {
        // 不带参数的情况
        return CONFIG.REDIRECT_URL_FAILURE;
    }
    return CONFIG.REDIRECT_URL_FAILURE;
}
