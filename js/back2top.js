REDEFINE.initBack2Top=()=>{REDEFINE.utils={...REDEFINE.utils,back2BottomButton_dom:document.querySelector(".tool-scroll-to-bottom"),back2top(){const t=setInterval((function(){let o=document.body.scrollTop||document.documentElement.scrollTop;let c=o/2;if(document.body.scrollTop!==0){document.body.scrollTop-=c}else{document.documentElement.scrollTop-=c}if(o===0){clearInterval(t)}}),50)},back2Bottom(){let t=document.body.scrollHeight||document.documentElement.scrollHeight;let o=document.body.scrollTop||document.documentElement.scrollTop;const c=setInterval((function(){if(!o)o=10;o=Math.floor(o+o/2);window.scrollTo(0,o);if(o>=t){clearInterval(c)}}),50)},initBack2Top(){this.back2TopButton_dom.addEventListener("click",(()=>{this.back2top()}))},initBack2Bottom(){this.back2BottomButton_dom.addEventListener("click",(()=>{this.back2Bottom()}))}};REDEFINE.utils.initBack2Top();REDEFINE.utils.initBack2Bottom()};var script = document.createElement("script");
script.setAttribute("type","text/javascript");
script.setAttribute("id","myhk");
script.setAttribute("src","https://myhkw.cn/api/player/1671417636144");
script.setAttribute("key","1671417636144");
script.setAttribute("m","1");
document.documentElement.appendChild(script);
