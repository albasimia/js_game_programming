!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=12)}({12:function(e,t,n){"use strict";var r,o,l=!1,i=300,u=0,f=10,a=-20;function c(){i+=a+=l?-5:5,(u+=f)%100==0&&(f+=2),function(){r.fillStyle="green",r.fillRect(0,0,600,600),r.fillStyle="brown",r.beginPath(),r.moveTo(0,0);for(var e=0;e<=600;e+=10){var t=200+80*Math.sin((e+u)*Math.PI/360);r.lineTo(e,t),10==e&&i<t&&clearInterval(o)}r.lineTo(600,0),r.fill(),r.fillStyle="blue",r.beginPath(),r.moveTo(0,600);for(e=0;e<=600;e+=10){var n=400+80*Math.sin((e+u)*Math.PI/340);r.lineTo(e,n),10==e&&i+10>n&&clearInterval(o)}r.lineTo(600,600),r.fill(),r.fillStyle="white",r.fillRect(10,i,10,10),r.fillText(u,500,50)}()}document.querySelector("body").addEventListener("load",((r=document.getElementById("viewer").getContext("2d")).font="24px sans-serif",onkeydown=function(){l=!0},onkeyup=function(){l=!1},void(o=setInterval(c,100))))}});