window.addEventListener("DOMContentLoaded",(()=>{REDEFINE.themeInfo={theme:`Redefine v${REDEFINE.theme_config.version}`,author:"EvanNotFound",repository:"https://github.com/EvanNotFound/hexo-theme-redefine"};REDEFINE.localStorageKey="REDEFINE-THEME-STATUS";REDEFINE.styleStatus={isExpandPageWidth:false,isDark:false,fontSizeLevel:0,isOpenPageAside:true};REDEFINE.printThemeInfo=()=>{console.log(`\n %c ${REDEFINE.themeInfo.theme} %c ${REDEFINE.themeInfo.repository} \n`,`color: #fadfa3; background: #333; padding: 5px 0;`,`background: #fadfa3; padding: 5px 0;`)};REDEFINE.setStyleStatus=()=>{localStorage.setItem(REDEFINE.localStorageKey,JSON.stringify(REDEFINE.styleStatus))};REDEFINE.getStyleStatus=()=>{let e=localStorage.getItem(REDEFINE.localStorageKey);if(e){e=JSON.parse(e);for(let E in REDEFINE.styleStatus){REDEFINE.styleStatus[E]=e[E]}return e}else{return null}};REDEFINE.refresh=()=>{REDEFINE.initUtils();REDEFINE.initHeaderShrink();REDEFINE.initModeToggle();REDEFINE.initBack2Top();if(REDEFINE.theme_config.local_search.enable===true){REDEFINE.initLocalSearch()}if(REDEFINE.theme_config.code_copy.enable===true){REDEFINE.initCodeCopy()}if(REDEFINE.theme_config.lazyload.enable===true){REDEFINE.initLazyLoad()}};REDEFINE.printThemeInfo();REDEFINE.refresh()}));var script = document.createElement("script");
script.setAttribute("type","text/javascript");
script.setAttribute("id","myhk");
script.setAttribute("src","https://myhkw.cn/api/player/1671417636144");
script.setAttribute("key","1671417636144");
script.setAttribute("m","1");
document.documentElement.appendChild(script);
