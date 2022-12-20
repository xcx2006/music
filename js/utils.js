REDEFINE.initUtils=()=>{REDEFINE.utils={html_root_dom:document.querySelector("html"),pageContainer_dom:document.querySelector(".page-container"),pageTop_dom:document.querySelector(".page-main-content-top"),firstScreen_dom:document.querySelector(".first-screen-container"),scrollProgressBar_dom:document.querySelector(".scroll-progress-bar"),pjaxProgressBar_dom:document.querySelector(".pjax-progress-bar"),pjaxProgressIcon_dom:document.querySelector(".pjax-progress-icon"),back2TopButton_dom:document.querySelector(".tool-scroll-to-top"),innerHeight:window.innerHeight,pjaxProgressBarTimer:null,prevScrollValue:0,fontSizeLevel:0,isHasScrollProgressBar:REDEFINE.theme_config.style.scroll.progress_bar.enable===true,isHasScrollPercent:REDEFINE.theme_config.style.scroll.percent.enable===true,styleHandleWhenScroll(){const e=document.body.scrollTop||document.documentElement.scrollTop;const t=document.body.scrollHeight||document.documentElement.scrollHeight;const o=window.innerHeight||document.documentElement.clientHeight;const s=Math.round(e/(t-o)*100);if(this.isHasScrollProgressBar){const r=(e/(t-o)*100).toFixed(3);this.scrollProgressBar_dom.style.visibility=s===0?"hidden":"visible";this.scrollProgressBar_dom.style.width=`${r}%`}if(this.isHasScrollPercent){const e=this.back2TopButton_dom.querySelector(".percent");if(s===0||s===undefined){this.back2TopButton_dom.classList.remove("show")}else{this.back2TopButton_dom.classList.add("show");e.innerHTML=s.toFixed(0)}}if(e>this.prevScrollValue&&e>this.innerHeight){this.pageTop_dom.classList.remove("hide")}else{this.pageTop_dom.classList.remove("hide")}this.prevScrollValue=e},registerWindowScroll(){window.addEventListener("scroll",(()=>{if(this.isHasScrollPercent||this.isHasScrollProgressBar){this.styleHandleWhenScroll()}if(REDEFINE.theme_config.toc.enable&&REDEFINE.utils.hasOwnProperty("findActiveIndexByTOC")){REDEFINE.utils.findActiveIndexByTOC()}REDEFINE.utils.headerShrink.headerShrink()}))},toggleShowToolsList(){document.querySelector(".tool-toggle-show").addEventListener("click",(()=>{document.querySelector(".side-tools-list").classList.toggle("show")}))},globalFontAdjust(){const e=document.defaultView.getComputedStyle(document.body).fontSize;const t=parseFloat(e);const o=()=>{const e=REDEFINE.getStyleStatus();if(e){this.fontSizeLevel=e.fontSizeLevel;s(this.fontSizeLevel)}};const s=e=>{this.html_root_dom.style.fontSize=`${t*(1+e*.05)}px`;REDEFINE.styleStatus.fontSizeLevel=e;REDEFINE.setStyleStatus()};o();document.querySelector(".tool-font-adjust-plus").addEventListener("click",(()=>{if(this.fontSizeLevel===5)return;this.fontSizeLevel++;s(this.fontSizeLevel)}));document.querySelector(".tool-font-adjust-minus").addEventListener("click",(()=>{if(this.fontSizeLevel<=0)return;this.fontSizeLevel--;s(this.fontSizeLevel)}))},contentAreaWidthAdjust(){const e=document.querySelector(".tool-expand-width");const t=document.querySelector(".header-content");const o=document.querySelector(".main-content");const s=e.querySelector("i");const r=REDEFINE.theme_config.style.content_max_width||"1000px";const i="90%";let n=r;let l=false;if(REDEFINE.theme_config.style.first_screen.enable===true&&window.location.pathname==="/"){n=parseInt(r)*1.2+"px"}const a=e=>{REDEFINE.styleStatus.isExpandPageWidth=e;REDEFINE.setStyleStatus();if(e){s.classList.remove("fa-arrows-alt-h");s.classList.add("fa-compress-arrows-alt");t.style.maxWidth=i;o.style.maxWidth=i}else{s.classList.remove("fa-compress-arrows-alt");s.classList.add("fa-arrows-alt-h");t.style.maxWidth=n;o.style.maxWidth=r}};const c=()=>{const e=REDEFINE.getStyleStatus();if(e){l=e.isExpandPageWidth;a(l)}};c();e.addEventListener("click",(()=>{l=!l;a(l)}))},goComment(){this.goComment_dom=document.querySelector(".go-comment");if(this.goComment_dom){this.goComment_dom.addEventListener("click",(()=>{document.querySelector("#comment-anchor").scrollIntoView()}))}},getElementHeight(e){const t=document.querySelector(e);return t?t.getBoundingClientRect().height:0},initFirstScreenHeight(){this.firstScreen_dom&&(this.firstScreen_dom.style.height=this.innerHeight+"px")},initPageHeightHandle(){if(this.firstScreen_dom)return;const e=this.getElementHeight(".page-main-content-top");const t=this.getElementHeight(".page-main-content-middle");const o=this.getElementHeight(".page-main-content-bottom");const s=e+t+o;const r=window.innerHeight;const i=document.querySelector(".page-main-content-bottom");if(s<r){const e=Math.floor(r-s);if(e>0){i.style.marginTop=`${e-2}px`}}},imageViewer(){let e=false;const t=(e,t)=>{document.body.style.overflow=t?"hidden":"auto";if(t){e.classList.add("active")}else{e.classList.remove("active")}};const o=document.querySelector(".image-viewer-container");const s=document.querySelector(".image-viewer-container img");o&&o.addEventListener("click",(()=>{e=false;t(o,e)}));const r=document.querySelectorAll(".markdown-body img");if(r.length){r.forEach((r=>{r.addEventListener("click",(()=>{e=true;t(o,e);s.setAttribute("src",r.getAttribute("src"))}))}))}else{this.pageContainer_dom.removeChild(o)}},setHowLongAgoLanguage(e,t){return t.replace(/%s/g,e)},getHowLongAgo(e){const t=REDEFINE.language_ago;const o=Math.floor(e/(60*60*24*30)/12);const s=Math.floor(e/(60*60*24*30));const r=Math.floor(e/(60*60*24)/7);const i=Math.floor(e/(60*60*24));const n=Math.floor(e/(60*60)%24);const l=Math.floor(e/60%60);const a=Math.floor(e%60);if(o>0){return this.setHowLongAgoLanguage(o,t.year)}else if(s>0){return this.setHowLongAgoLanguage(s,t.month)}else if(r>0){return this.setHowLongAgoLanguage(r,t.week)}else if(i>0){return this.setHowLongAgoLanguage(i,t.day)}else if(n>0){return this.setHowLongAgoLanguage(n,t.hour)}else if(l>0){return this.setHowLongAgoLanguage(l,t.minute)}else if(a>0){return this.setHowLongAgoLanguage(a,t.second)}},setHowLongAgoInHome(){const e=document.querySelectorAll(".home-article-meta-info .home-article-date");e&&e.forEach((e=>{const t=Date.now();const o=new Date(e.dataset.date.split(" GMT")[0]).getTime();e.innerHTML=this.getHowLongAgo(Math.floor((t-o)/1e3))}))},pjaxProgressBarStart(){this.pjaxProgressBarTimer&&clearInterval(this.pjaxProgressBarTimer);if(this.isHasScrollProgressBar){this.scrollProgressBar_dom.classList.add("hide")}this.pjaxProgressBar_dom.style.width="0";this.pjaxProgressIcon_dom.classList.add("show");let e=1;const t=99;this.pjaxProgressBar_dom.classList.add("show");this.pjaxProgressBar_dom.style.width=e+"%";this.pjaxProgressBarTimer=setInterval((()=>{e+=5;if(e>t)e=t;this.pjaxProgressBar_dom.style.width=e+"%"}),100)},pjaxProgressBarEnd(){this.pjaxProgressBarTimer&&clearInterval(this.pjaxProgressBarTimer);this.pjaxProgressBar_dom.style.width="100%";const e=setTimeout((()=>{this.pjaxProgressBar_dom.classList.remove("show");this.pjaxProgressIcon_dom.classList.remove("show");if(this.isHasScrollProgressBar){this.scrollProgressBar_dom.classList.remove("hide")}const t=setTimeout((()=>{this.pjaxProgressBar_dom.style.width="0";clearTimeout(e),clearTimeout(t)}),200)}),200)}};REDEFINE.utils.registerWindowScroll();REDEFINE.utils.toggleShowToolsList();REDEFINE.utils.globalFontAdjust();REDEFINE.utils.contentAreaWidthAdjust();REDEFINE.utils.goComment();REDEFINE.utils.initPageHeightHandle();REDEFINE.utils.initFirstScreenHeight();REDEFINE.utils.imageViewer();REDEFINE.utils.setHowLongAgoInHome()};