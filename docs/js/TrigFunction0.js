!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=13)}({13:function(e,t,n){"use strict";var r,o=0;function u(e,t,n,o,u){r.strokeStyle=u,r.beginPath(),r.moveTo(e,t),r.lineTo(n,o),r.closePath(),r.stroke()}function a(){r.fillStyle="white",r.fillRect(0,0,600,600),r.save(),r.translate(300,300),u(0,-300,0,300,"black"),u(-300,0,300,0,"black");var e=Math.sin(o*Math.PI/180).toFixed(3),t=Math.cos(o*Math.PI/180).toFixed(3),n=200*t,a=-200*e;u(0,0,n,a,"red"),r.beginPath(),r.arc(0,0,200,0,2*Math.PI),r.stroke(),u(n,a,n,0,"blue"),r.strokeText("cos:"+t,n-10,20),u(n,a,0,a,"green"),r.strokeText("sin:"+e,-40,a-10),r.restore()}document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("graph");(r=e.getContext("2d")).font="24px sans-serif",a()})),document.querySelector("#theta").addEventListener("change",(function(){o=document.getElementById("theta").value,document.getElementById("degree").textContent=o,a()}))}});