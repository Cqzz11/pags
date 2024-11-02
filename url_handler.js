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
    if (params.isValid && validateRandomString(params.randomString)) {
        return REDIRECT_URL_SUCCESS;
    }
    return REDIRECT_URL_FAILURE;
}