// Mustache.js
var Mustache="undefined"!==typeof module&&module.exports||{};
(function(j){function H(a){return String(a).replace(/&(?!\w+;)|[<>"']/g,function(a){return I[a]||a})}function u(a,c,d,e){for(var e=e||"<template>",b=c.split("\n"),f=Math.max(d-3,0),g=Math.min(b.length,d+3),b=b.slice(f,g),i=0,l=b.length;i<l;++i)g=i+f+1,b[i]=(g===d?" >> ":"    ")+b[i];a.template=c;a.line=d;a.file=e;a.message=[e+":"+d,b.join("\n"),"",a.message].join("\n");return a}function v(a,c,d){if("."===a)return c[c.length-1];for(var a=a.split("."),e=a.length-1,b=a[e],f,g,i=c.length,l,j;i;){j=c.slice(0);
g=c[--i];for(l=0;l<e;){g=g[a[l++]];if(null==g)break;j.push(g)}if(g&&b in g){f=g[b];break}}"function"===typeof f&&(f=f.call(j[j.length-1]));return null==f?d:f}function J(a,c,d,e){var b="",a=v(a,c);if(e){if(null==a||!1===a||r(a)&&0===a.length)b+=d()}else if(r(a))z(a,function(a){c.push(a);b+=d();c.pop()});else if("object"===typeof a)c.push(a),b+=d(),c.pop();else if("function"===typeof a)var f=c[c.length-1],b=b+(a.call(f,d(),function(a){return s(a,f)})||"");else a&&(b+=d());return b}function A(a,c){for(var c=
c||{},d=c.tags||j.tags,e=d[0],b=d[d.length-1],f=['var buffer = "";',"\nvar line = 1;","\ntry {",'\nbuffer += "'],g=[],i=!1,l=!1,s=function(){if(i&&!l&&!c.space)for(;g.length;)f.splice(g.pop(),1);else g=[];l=i=!1},n=[],w,q,r,x=function(a){d=p(a).split(/\s+/);q=d[0];r=d[d.length-1]},y=function(a){f.push('";',w,'\nvar partial = partials["'+p(a)+'"];',"\nif (partial) {","\n  buffer += render(partial,stack[stack.length - 1],partials);","\n}",'\nbuffer += "')},v=function(b,d){var e=p(b);if(""===e)throw u(Error("Section name may not be empty"),
a,t,c.file);n.push({name:e,inverted:d});f.push('";',w,'\nvar name = "'+e+'";',"\nvar callback = (function () {","\n  return function () {",'\n    var buffer = "";','\nbuffer += "')},z=function(a){v(a,!0)},A=function(b){var b=p(b),d=0!=n.length&&n[n.length-1].name;if(!d||b!=d)throw u(Error('Section named "'+b+'" was never opened'),a,t,c.file);b=n.pop();f.push('";',"\n    return buffer;","\n  };","\n})();");b.inverted?f.push("\nbuffer += renderSection(name,stack,callback,true);"):f.push("\nbuffer += renderSection(name,stack,callback);");
f.push('\nbuffer += "')},B=function(a){f.push('";',w,'\nbuffer += lookup("'+p(a)+'",stack,"");','\nbuffer += "')},C=function(a){f.push('";',w,'\nbuffer += escapeHTML(lookup("'+p(a)+'",stack,""));','\nbuffer += "')},t=1,m,k,h=0,D=a.length;h<D;++h)if(a.slice(h,h+e.length)===e){h+=e.length;m=a.substr(h,1);w="\nline = "+t+";";q=e;r=b;i=!0;switch(m){case "!":h++;k=null;break;case "=":h++;b="="+b;k=x;break;case ">":h++;k=y;break;case "#":h++;k=v;break;case "^":h++;k=z;break;case "/":h++;k=A;break;case "{":b=
"}"+b;case "&":h++;l=!0;k=B;break;default:l=!0,k=C}m=a.indexOf(b,h);if(-1===m)throw u(Error('Tag "'+e+'" was not closed properly'),a,t,c.file);e=a.substring(h,m);k&&k(e);for(k=0;~(k=e.indexOf("\n",k));)t++,k++;h=m+b.length-1;e=q;b=r}else switch(m=a.substr(h,1),m){case '"':case "\\":l=!0;f.push("\\"+m);break;case "\r":break;case "\n":g.push(f.length);f.push("\\n");s();t++;break;default:E.test(m)?g.push(f.length):l=!0,f.push(m)}if(0!=n.length)throw u(Error('Section "'+n[n.length-1].name+'" was not closed properly'),
a,t,c.file);s();f.push('";',"\nreturn buffer;","\n} catch (e) { throw {error: e, line: line}; }");b=f.join("").replace(/buffer \+= "";\n/g,"");c.debug&&("undefined"!=typeof console&&console.log?console.log(b):"function"===typeof print&&print(b));return b}function B(a,c){var d=A(a,c),e=new Function("view,partials,stack,lookup,escapeHTML,renderSection,render",d);return function(b,d){var d=d||{},g=[b];try{return e(b,d,g,v,H,J,s)}catch(i){throw u(i.error,a,i.line,c.file);}}}function C(a,c){c=c||{};return!1!==
c.cache?(q[a]||(q[a]=B(a,c)),q[a]):B(a,c)}function s(a,c,d){return C(a)(c,d)}j.name="mustache.js";j.version="0.5.0-dev";j.tags=["{{","}}"];j.parse=A;j.compile=C;j.render=s;j.clearCache=function(){q={}};j.to_html=function(a,c,d,e){a=s(a,c,d);if("function"===typeof e)e(a);else return a};var K=Object.prototype.toString,D=Array.isArray,F=Array.prototype.forEach,G=String.prototype.trim,r;r=D?D:function(a){return"[object Array]"===K.call(a)};var z;z=F?function(a,c,d){return F.call(a,c,d)}:function(a,c,
d){for(var e=0,b=a.length;e<b;++e)c.call(d,a[e],e,a)};var E=/^\s*$/,p;if(G)p=function(a){return null==a?"":G.call(a)};else{var x,y;E.test("\u00a0")?(x=/^\s+/,y=/\s+$/):(x=/^[\s\xA0]+/,y=/[\s\xA0]+$/);p=function(a){return null==a?"":String(a).replace(x,"").replace(y,"")}}var I={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},q={}})(Mustache);
// tappable
(function(h,k){"function"===typeof define&&define.amd?define("tappable",[],function(){k(h,window.document);return h.tappable}):k(h,window.document)})(this,function(h,k){var d=function(){},z={noScroll:!1,activeClass:"tappable-active",onTap:d,onStart:d,onMove:d,onMoveOut:d,onMoveIn:d,onEnd:d,onCancel:d,allowClick:!1,boundMargin:50,noScrollDelay:0,activeClassDelay:0,inactiveClassDelay:0},E=(d="ontouchend"in document)?"touchstart":"mousedown",F=d?"touchmove":"mousemove",G=d?"touchend":"mouseup",A=function(b,
a){var c=k.elementFromPoint(b,a);3==c.nodeType&&(c=c.parentNode);return c},n=function(b){return b.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")},t=function(b,a){a&&(b.classList?b.classList.add(a):-1<n(b.className).indexOf(a)||(b.className=n(b.className+" "+a)))},p=function(b,a){a&&(b.classList?b.classList.remove(a):b.className=b.className.replace(RegExp("(^|\\s)"+a+"(?:\\s|$)"),"$1"))},B=function(b,a){var c=!1;do c=k.documentElement,c=(c.matchesSelector||c.mozMatchesSelector||c.webkitMatchesSelector||
c.msMatchesSelector).call(b,a);while(!c&&(b=b.parentNode)&&b.ownerDocument);return c?b:!1};h.tappable=function(b,a){"function"==typeof a&&(a={onTap:a});var c={},d;for(d in z)c[d]=a[d]||z[d];var g=c.containerElement||k.body,e,h,l,m,q,r=!1,u=!1,j=c.activeClass,x=c.activeClassDelay,v,y=c.inactiveClassDelay,n,s=c.noScroll,C=c.noScrollDelay,D,w=c.boundMargin;g.addEventListener(E,function(f){var i;i=f.target;i||(i=f.targetTouches[0],i=A(i.clientX,i.clientY));var a=B(i,b);if(a){x?(clearTimeout(v),v=setTimeout(function(){t(a,
j)},x)):t(a,j);y&&a==h&&clearTimeout(n);l=f.clientX;m=f.clientY;if(!l||!m)i=f.targetTouches[0],l=i.clientX,m=i.clientY;e=a;u=r=!1;q=s?a.getBoundingClientRect():null;C&&(clearTimeout(D),s=!1,D=setTimeout(function(){s=!0},C));c.onStart.call(g,f,a)}},!1);g.addEventListener(F,function(f){if(e){s?f.preventDefault():clearTimeout(v);var a=f.target,b=f.clientX,d=f.clientY;if(!a||!b||!d){var h=f.changedTouches[0];b||(b=h.clientX);d||(d=h.clientY);a||(a=A(b,d))}s?b>q.left-w&&b<q.right+w&&d>q.top-w&&d<q.bottom+
w?(u=!1,t(e,j),c.onMoveIn.call(g,f,a)):(u=!0,p(e,j),c.onMoveOut.call(g,f,a)):r||(r=!0,p(e,j),c.onCancel.call(a,f));c.onMove.call(g,f,a)}},!1);g.addEventListener(G,function(a){if(e){clearTimeout(v);if(y){x&&!r&&t(e,j);var b=e;n=setTimeout(function(){p(b,j)},y)}else p(e,j);c.onEnd.call(g,a,e);var d=3==a.which||2==a.button;if(!r&&!u&&!d){var k=e;setTimeout(function(){c.onTap.call(g,a,k)},1)}h=e;e=null;setTimeout(function(){l=m=null},400)}},!1);g.addEventListener("touchcancel",function(a){e&&(p(e,j),
e=l=m=null,c.onCancel.call(g,a))},!1);c.allowClick||g.addEventListener("click",function(a){B(a.target,b)?a.preventDefault():l&&(m&&25>Math.abs(a.clientX-l)&&25>Math.abs(a.clientY-m))&&(a.stopPropagation(),a.preventDefault())},!1)}});
// pagedown
var Markdown;Markdown="object"===typeof exports&&"function"===typeof require?exports:{};
(function(){function p(e){return e}function t(){return!1}function u(){}function v(){}u.prototype={chain:function(e,h){var i=this[e];if(!i)throw Error("unknown hook "+e);this[e]=i===p?h:function(e){return h(i(e))}},set:function(e,h){if(!this[e])throw Error("unknown hook "+e);this[e]=h},addNoop:function(e){this[e]=p},addFalse:function(e){this[e]=t}};Markdown.HookCollection=u;v.prototype={set:function(e,h){this["s_"+e]=h},get:function(e){return this["s_"+e]}};Markdown.Converter=function(){function e(a){a=
a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,h);a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,h);a=a.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,h);a=a.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,h);return a=a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
h)}function h(a,c){var b;b=c.replace(/^\n+/,"");b=b.replace(/\n+$/g,"");return b="\n\n~K"+(r.push(b)-1)+"K\n\n"}function i(a,c){var b;b=a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(a,b){return"<h1>"+q(b)+"</h1>\n\n"});b=b.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(a,b){return"<h2>"+q(b)+"</h2>\n\n"});a=b=b.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(a,b,c){a=b.length;return"<h"+a+">"+q(c)+"</h"+a+">\n\n"});a=a.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,"<hr />\n");a=a.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,
"<hr />\n");a=a.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,"<hr />\n");a=B(a);b=a+"~0";b=b.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(a,b,c){a=C(w(b));a=D(a);a=a.replace(/^\n+/g,"");a=a.replace(/\n+$/g,"");a="<pre><code>"+a+"\n</code></pre>";return"\n\n"+a+"\n\n"+c});a=b=b.replace(/~0/,"");a=b=a.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,b){var c;c=b.replace(/^[ \t]*>[ \t]?/gm,"~0");c=c.replace(/~0/g,"");c=c.replace(/^[ \t]+$/gm,"");c=i(c);c=
c.replace(/(^|\n)/g,"$1  ");c=c.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){var c;c=b.replace(/^  /mg,"~0");return c=c.replace(/~0/g,"")});c="<blockquote>\n"+c+"\n</blockquote>";c=c.replace(/(^\n+|\n+$)/g,"");return"\n\n~K"+(r.push(c)-1)+"K\n\n"});a=e(a);b=a.replace(/^\n+/g,"");b=b.replace(/\n+$/g,"");b=b.split(/\n{2,}/g);for(var d=[],g=/~K(\d+)K/,x=b.length,j=0;j<x;j++){var f=b[j];g.test(f)?d.push(f):/\S/.test(f)&&(f=q(f),f=f.replace(/^([ \t]*)/g,"<p>"),f+="</p>",d.push(f))}if(!c){x=d.length;
for(j=0;j<x;j++)for(var h=!0;h;)h=!1,d[j]=d[j].replace(/~K(\d+)K/g,function(a,b){h=!0;return r[b]})}return a=d.join("\n\n")}function q(a){a=a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,b,d,g){a=g.replace(/^([ \t]*)/g,"");a=a.replace(/[ \t]*$/g,"");a=C(a);a=a.replace(/:\/\//g,"~P");return b+"<code>"+a+"</code>"});a=a.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi,function(a){var b=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return b=m(b,"!"==
a.charAt(1)?"\\`*_/":"\\`*_")});a=a.replace(/\\(\\)/g,y);a=a.replace(/\\([`*_{}\[\]()>#+-.!])/g,y);a=a.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,p);a=a.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,p);a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,z);a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,z);a=a.replace(/(\[([^\[\]]+)\])()()()()()/g,z);a=a.replace(/(^|\s)(https?|ftp)(:\/\/[-A-Z0-9+&@#\/%?=~_|\[\]\(\)!:,\.;]*[-A-Z0-9+&@#\/%=~_|\[\]])($|\W)/gi,
"$1<$2$3>$4");a=a.replace(/<((https?|ftp):[^'">\s]+)>/gi,function(a,b){return'<a href="'+b+'">'+k.plainLinkText(b)+"</a>"});a=a.replace(/~P/g,"://");a=E(a);a=a.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g,"$1<strong>$3</strong>$4");a=a.replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g,"$1<em>$3</em>$4");return a=a.replace(/  +\n/g," <br>\n")}function z(a,c,b,d,g,e,h,f){void 0==f&&(f="");a=b.replace(/:\/\//g,"~P");d=d.toLowerCase();if(""==g)if(""==d&&(d=a.toLowerCase().replace(/ ?\n/g,
" ")),void 0!=l.get(d))g=l.get(d),void 0!=n.get(d)&&(f=n.get(d));else if(-1<c.search(/\(\s*\)$/m))g="";else return c;var i=g;if(i)var k=i.length,g=i.replace(G,function(a,b){return"~D"==a?"%24":":"==a&&(b==k-1||/[0-9\/]/.test(i.charAt(b+1)))?":":"%"+a.charCodeAt(0).toString(16)});else g="";g=m(g,"*_");c='<a href="'+g+'"';""!=f&&(f=A(f),f=m(f,"*_"),c+=' title="'+f+'"');return c+(">"+a+"</a>")}function A(a){return a.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function p(a,c,b,d,
g,e,h,f){a=b;d=d.toLowerCase();f||(f="");if(""==g)if(""==d&&(d=a.toLowerCase().replace(/ ?\n/g," ")),void 0!=l.get(d))g=l.get(d),void 0!=n.get(d)&&(f=n.get(d));else return c;a=m(A(a),"*_[]()");g=m(g,"*_");c='<img src="'+g+'" alt="'+a+'"';f=A(f);f=m(f,"*_");return c=c+(' title="'+f+'"')+" />"}function B(a){var a=a+"~0",c=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;s?a=a.replace(c,function(a,c,g){a=-1<g.search(/[*+-]/g)?"ul":"ol";c=F(c,a);c=c.replace(/\s+$/,
"");return"<"+a+">"+c+"</"+a+">\n"}):(c=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,a=a.replace(c,function(a,c,g,e){a=-1<e.search(/[*+-]/g)?"ul":"ol";g=F(g,a);return c+"<"+a+">\n"+g+"</"+a+">\n"}));return a=a.replace(/~0/,"")}function F(a,c){s++;var a=a.replace(/\n{2,}$/,"\n"),b=t[c],d=!1,a=(a+"~0").replace(RegExp("(^[ \\t]*)("+b+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+b+")[ \\t]+))","gm"),function(a,b,c,f){a=f;(b=/\n\n$/.test(a))||-1<a.search(/\n{2,}/)||
d?a=i(w(a),!0):(a=B(w(a)),a=a.replace(/\n$/,""),a=q(a));d=b;return"<li>"+a+"</li>\n"}),a=a.replace(/~0/g,"");s--;return a}function C(a){a=a.replace(/&/g,"&amp;");a=a.replace(/</g,"&lt;");a=a.replace(/>/g,"&gt;");return a=m(a,"*_{}[]\\",!1)}function E(a){a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;");return a=a.replace(/<(?![a-z\/?\$!])/gi,"&lt;")}function w(a){a=a.replace(/^(\t|[ ]{1,4})/gm,"~0");return a=a.replace(/~0/g,"")}function D(a){if(!/\t/.test(a))return a;var c=["    ","   ","  ",
" "],b=0,d;return a.replace(/[\n\t]/g,function(a,e){if("\n"===a)return b=e+1,a;d=(e-b)%4;b=e+1;return c[d]})}function m(a,c,b){c="(["+c.replace(/([\[\]\\])/g,"\\$1")+"])";b&&(c="\\\\"+c);return a=a.replace(RegExp(c,"g"),y)}function y(a,c){return"~E"+c.charCodeAt(0)+"E"}var k=this.hooks=new u;k.addNoop("plainLinkText");k.addNoop("preConversion");k.addNoop("postConversion");var l,n,r,s;this.makeHtml=function(a){if(l)throw Error("Recursive call to converter.makeHtml");l=new v;n=new v;r=[];s=0;a=k.preConversion(a);
a=a.replace(/~/g,"~T");a=a.replace(/\$/g,"~D");a=a.replace(/\r\n/g,"\n");a=a.replace(/\r/g,"\n");a=D("\n\n"+a+"\n\n");a=a.replace(/^[ \t]+$/mg,"");a=e(a);a=a.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,function(a,b,d,e,h,i){b=b.toLowerCase();l.set(b,E(d));if(h)return e;i&&n.set(b,i.replace(/"/g,"&quot;"));return""});a=i(a);a=a.replace(/~E(\d+)E/g,function(a,b){var d=parseInt(b);return String.fromCharCode(d)});a=a.replace(/~D/g,"$$");
a=a.replace(/~T/g,"~");a=k.postConversion(a);r=n=l=null;return a};var t={ol:"\\d+[.]",ul:"[*+-]"},G=/(?:["'*()[\]:]|~D)/g}})();
// resizeEnd
(function(a,b){"use strict";if(!(a.addEventListener&&b.createEvent&&a.dispatchEvent)){return}var c=function(){var c=b.createEvent("Event");c.initEvent("resizeend",false,false);a.dispatchEvent(c)};var d=function(){return Math.abs(+a.orientation||0)%180};var e=d();var f;var g;a.addEventListener("resize",function(){f=d();if(f!==e){c();e=f}else{clearTimeout(g);g=setTimeout(c,100)}},false)})(window,document);
// TimeSince
function timeSince(c,d){var b=Math.floor(c/1E3-d),a=b/31536E3;if(1<a)return a=Math.floor(a),a+(1<a?" years":" year");a=b/2592E3;if(1<a)return a=Math.floor(a),a+(1<a?" months":" month");a=b/86400;if(1<a)return a=Math.floor(a),a+(1<a?" days":" day");a=b/3600;if(1<a)return a=Math.floor(a),a+(1<a?" hours":" hour");a=b/60;return 1<a?(a=Math.floor(a),a+(1<a?" minutes":" minute")):Math.floor(b)+" seconds"};
// CookiesReader
var allCookies={getItem:function(a){return!a||!this.hasItem(a)?null:unescape(document.cookie.replace(RegExp("(?:^|.*;\\s*)"+escape(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1"))},setItem:function(a,f,b,d,e,g){if(a&&!/^(?:expires|max\-age|path|domain|secure)$/i.test(a)){var c="";b||(b=Infinity);if(b)switch(b.constructor){case Number:c=Infinity===b?"; expires=Tue, 19 Jan 2038 03:14:07 GMT":"; max-age="+b;break;case String:c="; expires="+b;break;case Date:c="; expires="+
b.toGMTString()}document.cookie=escape(a)+"="+escape(f)+c+(e?"; domain="+e:"")+(d?"; path="+d:"")+(g?"; secure":"")}},hasItem:function(a){return RegExp("(?:^|;\\s*)"+escape(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)}};