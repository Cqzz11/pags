(function(){
    const _0x2f8e=['validate','location','random','redirect','check','jp','test'];
    const _0x1f9d=function(_0x2d8f05,_0x5f4d1d){return _0x2f8e[_0x2d8f05];};
    
    const _0x4f3e = function(_0x3ed45){
        return btoa(JSON.stringify(_0x3ed45));
    };
    
    const _0x5e2d = function(_0x4d21){
        try{
            return (function(_0x3f4d){
                const _0x2e4d = atob(_0x3f4d);
                return JSON.parse(_0x2e4d);
            })(_0x4f3e(_0x4d21));
        }catch(_0x1f3d){
            return false;
        }
    };

    window['handleURL'] = function(){
        const _0x1f2d = document.getElementById('urlInput').value;
        const _0x3f1d = _0x5e2d(_0x1f2d);
        if(_0x3f1d){
            window[_0x1f9d(1)].href = _0x3f1d;
        }
    };
})();
