!function(){"use strict";var e,t={704:function(){var e=window.wp.blocks,t=JSON.parse('{"apiVersion":2,"name":"naviddev-gutenberg-blocks/product-info","version":"0.1.0","title":"Product Info Block","category":"naviddev-gutenberg-blocks","icon":"smiley","description":"Example block written with ESNext standard and JSX support build step required.","supports":{"html":false,"anchor":true},"attributes":{"content":{"type":"string","default":"Product detailed info"},"color":{"type":"string","default":"#000000"}},"textdomain":"groceries-gutenberg-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),n=window.wp.element,o=window.wp.i18n,r=window.wp.blockEditor,l=window.wp.components;const{__:__}=wp.i18n;var i=[{name:__("Black","boilerplate"),color:"#000000"},{name:__("White","boilerplate"),color:"#ffffff"},{name:__("Red","boilerplate"),color:"#ff0000"},{name:__("Green","boilerplate"),color:"#00ff00"},{name:__("Blue","boilerplate"),color:"#0000ff"},{name:__("Yellow","boilerplate"),color:"#ffff00"}];const{Fragment:c}=wp.element;(0,e.registerBlockType)(t,{edit:function(e){let{attributes:t,setAttributes:a}=e;const{content:s,color:u}=t;return(0,n.createElement)(c,null,(0,n.createElement)(r.InspectorControls,null,(0,n.createElement)(l.PanelBody,{title:(0,o.__)("Settings","boilerplate"),initialOpen:!0},(0,n.createElement)("p",{className:"custom__editor__label"},(0,o.__)("Text Color","boilerplate")),(0,n.createElement)(l.ColorPalette,{colors:i,value:u,onChange:e=>a({color:e})}))),(0,n.createElement)("div",(0,r.useBlockProps)(),(0,n.createElement)(r.RichText,{tagName:"p",value:s,onChange:e=>a({content:e}),style:{color:u}})))},save:function(e){let{attributes:t}=e;const{content:o,color:l}=t;return(0,n.createElement)("div",r.useBlockProps.save(),(0,n.createElement)(r.RichText.Content,{tagName:"h4",value:o,style:{color:l}}))}})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=function(t,n,r,l){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],l=e[u][2];for(var c=!0,a=0;a<n.length;a++)(!1&l||i>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[a])}))?n.splice(a--,1):(c=!1,l<i&&(i=l));if(c){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,r,l]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={363:0,437:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,l,i=n[0],c=n[1],a=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(a)var u=a(o)}for(t&&t(n);s<i.length;s++)l=i[s],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},n=self.webpackChunkgutenberg_blocks=self.webpackChunkgutenberg_blocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=o.O(void 0,[437],(function(){return o(704)}));r=o.O(r)}();