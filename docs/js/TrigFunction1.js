!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=14)}({14:function(e,t,n){"use strict";var r,o=0;function a(){o++,function(){r.fillStyle="white",r.fillRect(0,0,600,600),r.save(),r.translate(100,100),i(0,-100,0,500,"black"),i(-100,0,500,0,"black");var e=Math.sin(o*Math.PI/180),t=50*Math.cos(o*Math.PI/180),n=-50*e;i(0,0,t,n,"red"),r.arc(0,0,50,0,2*Math.PI),r.stroke(),r.strokeStyle="green",r.beginPath(),r.moveTo(t,n);for(var a=0;a<500;a++){var u=-50*Math.sin((o+a)*Math.PI/180);r.lineTo(a,u)}r.stroke(),r.strokeStyle="blue",r.beginPath(),r.moveTo(t,n);for(a=0;a<500;a++){var l=50*Math.cos((o+a)*Math.PI/180);r.lineTo(l,a)}r.stroke(),r.restore()}()}function i(e,t,n,o,a){r.strokeStyle=a,r.beginPath(),r.moveTo(e,t),r.lineTo(n,o),r.closePath(),r.stroke()}document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("graph");(r=e.getContext("2d")).font="24px sans-serif",setInterval(a,10)}))}});