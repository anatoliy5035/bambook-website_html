/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*
 _ _      _       _
 ___| (_) ___| | __  (_)___
 / __| | |/ __| |/ /  | / __|
 \__ \ | | (__|   < _ | \__ \
 |___/_|_|\___|_|\_(_)/ |___/
 |__/
 Version: 1.6.0
 Author: Ken Wheeler
 Website: http://kenwheeler.github.io
 Docs: http://kenwheeler.github.io/slick
 Repo: http://github.com/kenwheeler/slick
 Issues: http://github.com/kenwheeler/slick/issues
 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows >= 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows >= 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick',
                '*:not(.slick-arrow)', function(event) {

                    event.stopImmediatePropagation();
                    var $sf = $(this);

                    setTimeout(function() {

                        if( _.options.pauseOnFocus ) {
                            _.focussed = $sf.is(':focus');
                            _.autoPlay();
                        }

                    }, 0);

                });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr('role', 'option');

            //Evenly distribute aria-describedby tags through available dots.
            var describedBySlideId = _.options.centerMode ? i : Math.floor(i / _.options.slidesToShow);

            if (_.options.dots === true) {
                $(this).attr('aria-describedby', 'slick-slide' + _.instanceUid + describedBySlideId + '');
            }
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'previous'
                }, _.changeSlide);
            _.$nextArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'next'
                }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
        Slick.prototype.slickSetOption = function() {

            /**
             * accepts arguments in format of:
             *
             *  - for changing a single option's value:
             *     .slick("setOption", option, value, refresh )
             *
             *  - for changing a set of responsive options:
             *     .slick("setOption", 'responsive', [{}, ...], refresh )
             *
             *  - for updating multiple values at once (not responsive)
             *     .slick("setOption", { 'option': value, ... }, refresh )
             */

            var _ = this, l, item, option, value, refresh = false, type;

            if( $.type( arguments[0] ) === 'object' ) {

                option =  arguments[0];
                refresh = arguments[1];
                type = 'multiple';

            } else if ( $.type( arguments[0] ) === 'string' ) {

                option =  arguments[0];
                value = arguments[1];
                refresh = arguments[2];

                if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                    type = 'responsive';

                } else if ( typeof arguments[1] !== 'undefined' ) {

                    type = 'single';

                }

            }

            if ( type === 'single' ) {

                _.options[option] = value;


            } else if ( type === 'multiple' ) {

                $.each( option , function( opt, val ) {

                    _.options[opt] = val;

                });


            } else if ( type === 'responsive' ) {

                for ( item in value ) {

                    if( $.type( _.options.responsive ) !== 'array' ) {

                        _.options.responsive = [ value[item] ];

                    } else {

                        l = _.options.responsive.length-1;

                        // loop through the responsive object and splice out duplicates.
                        while( l >= 0 ) {

                            if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                                _.options.responsive.splice(l,1);

                            }

                            l--;

                        }

                        _.options.responsive.push( value[item] );

                    }

                }

            }

            if ( refresh ) {

                _.unload();
                _.reinit();

            }

        };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                        _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                        _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
                .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                    .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));
/*
 _ _      _       _
 ___| (_) ___| | __  (_)___
 / __| | |/ __| |/ /  | / __|
 \__ \ | | (__|   < _ | \__ \
 |___/_|_|\___|_|\_(_)/ |___/
 |__/
 Version: 1.6.0
 Author: Ken Wheeler
 Website: http://kenwheeler.github.io
 Docs: http://kenwheeler.github.io/slick
 Repo: http://github.com/kenwheeler/slick
 Issues: http://github.com/kenwheeler/slick/issues
 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows >= 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows >= 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick',
                '*:not(.slick-arrow)', function(event) {

                    event.stopImmediatePropagation();
                    var $sf = $(this);

                    setTimeout(function() {

                        if( _.options.pauseOnFocus ) {
                            _.focussed = $sf.is(':focus');
                            _.autoPlay();
                        }

                    }, 0);

                });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr('role', 'option');

            //Evenly distribute aria-describedby tags through available dots.
            var describedBySlideId = _.options.centerMode ? i : Math.floor(i / _.options.slidesToShow);

            if (_.options.dots === true) {
                $(this).attr('aria-describedby', 'slick-slide' + _.instanceUid + describedBySlideId + '');
            }
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'previous'
                }, _.changeSlide);
            _.$nextArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'next'
                }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
        Slick.prototype.slickSetOption = function() {

            /**
             * accepts arguments in format of:
             *
             *  - for changing a single option's value:
             *     .slick("setOption", option, value, refresh )
             *
             *  - for changing a set of responsive options:
             *     .slick("setOption", 'responsive', [{}, ...], refresh )
             *
             *  - for updating multiple values at once (not responsive)
             *     .slick("setOption", { 'option': value, ... }, refresh )
             */

            var _ = this, l, item, option, value, refresh = false, type;

            if( $.type( arguments[0] ) === 'object' ) {

                option =  arguments[0];
                refresh = arguments[1];
                type = 'multiple';

            } else if ( $.type( arguments[0] ) === 'string' ) {

                option =  arguments[0];
                value = arguments[1];
                refresh = arguments[2];

                if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                    type = 'responsive';

                } else if ( typeof arguments[1] !== 'undefined' ) {

                    type = 'single';

                }

            }

            if ( type === 'single' ) {

                _.options[option] = value;


            } else if ( type === 'multiple' ) {

                $.each( option , function( opt, val ) {

                    _.options[opt] = val;

                });


            } else if ( type === 'responsive' ) {

                for ( item in value ) {

                    if( $.type( _.options.responsive ) !== 'array' ) {

                        _.options.responsive = [ value[item] ];

                    } else {

                        l = _.options.responsive.length-1;

                        // loop through the responsive object and splice out duplicates.
                        while( l >= 0 ) {

                            if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                                _.options.responsive.splice(l,1);

                            }

                            l--;

                        }

                        _.options.responsive.push( value[item] );

                    }

                }

            }

            if ( refresh ) {

                _.unload();
                _.reinit();

            }

        };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                        _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                        _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
                .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                    .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));
 /*
 * # Semantic UI - 2.2.3
 * https://github.com/Semantic-Org/Semantic-UI
 * http://www.semantic-ui.com/
 *
 * Copyright 2014 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,n,i){e.site=e.fn.site=function(o){var a,r,s=(new Date).getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1),f=e.isPlainObject(o)?e.extend(!0,{},e.site.settings,o):e.extend({},e.site.settings),m=f.namespace,g=f.error,p="module-"+m,h=e(n),v=h,b=this,y=v.data(p);return a={initialize:function(){a.instantiate()},instantiate:function(){a.verbose("Storing instance of site",a),y=a,v.data(p,a)},normalize:function(){a.fix.console(),a.fix.requestAnimationFrame()},fix:{console:function(){a.debug("Normalizing window.console"),console!==i&&console.log!==i||(a.verbose("Console not available, normalizing events"),a.disable.console()),"undefined"!=typeof console.group&&"undefined"!=typeof console.groupEnd&&"undefined"!=typeof console.groupCollapsed||(a.verbose("Console group not available, normalizing events"),t.console.group=function(){},t.console.groupEnd=function(){},t.console.groupCollapsed=function(){}),"undefined"==typeof console.markTimeline&&(a.verbose("Mark timeline not available, normalizing events"),t.console.markTimeline=function(){})},consoleClear:function(){a.debug("Disabling programmatic console clearing"),t.console.clear=function(){}},requestAnimationFrame:function(){a.debug("Normalizing requestAnimationFrame"),t.requestAnimationFrame===i&&(a.debug("RequestAnimationFrame not available, normalizing event"),t.requestAnimationFrame=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)})}},moduleExists:function(t){return e.fn[t]!==i&&e.fn[t].settings!==i},enabled:{modules:function(t){var n=[];return t=t||f.modules,e.each(t,function(e,t){a.moduleExists(t)&&n.push(t)}),n}},disabled:{modules:function(t){var n=[];return t=t||f.modules,e.each(t,function(e,t){a.moduleExists(t)||n.push(t)}),n}},change:{setting:function(t,n,o,r){o="string"==typeof o?"all"===o?f.modules:[o]:o||f.modules,r=r===i||r,e.each(o,function(i,o){var s,l=!a.moduleExists(o)||(e.fn[o].settings.namespace||!1);a.moduleExists(o)&&(a.verbose("Changing default setting",t,n,o),e.fn[o].settings[t]=n,r&&l&&(s=e(":data(module-"+l+")"),s.length>0&&(a.verbose("Modifying existing settings",s),s[o]("setting",t,n))))})},settings:function(t,n,o){n="string"==typeof n?[n]:n||f.modules,o=o===i||o,e.each(n,function(n,i){var r;a.moduleExists(i)&&(a.verbose("Changing default setting",t,i),e.extend(!0,e.fn[i].settings,t),o&&m&&(r=e(":data(module-"+m+")"),r.length>0&&(a.verbose("Modifying existing settings",r),r[i]("setting",t))))})}},enable:{console:function(){a.console(!0)},debug:function(e,t){e=e||f.modules,a.debug("Enabling debug for modules",e),a.change.setting("debug",!0,e,t)},verbose:function(e,t){e=e||f.modules,a.debug("Enabling verbose debug for modules",e),a.change.setting("verbose",!0,e,t)}},disable:{console:function(){a.console(!1)},debug:function(e,t){e=e||f.modules,a.debug("Disabling debug for modules",e),a.change.setting("debug",!1,e,t)},verbose:function(e,t){e=e||f.modules,a.debug("Disabling verbose debug for modules",e),a.change.setting("verbose",!1,e,t)}},console:function(e){if(e){if(y.cache.console===i)return void a.error(g.console);a.debug("Restoring console function"),t.console=y.cache.console}else a.debug("Disabling console function"),y.cache.console=t.console,t.console={clear:function(){},error:function(){},group:function(){},groupCollapsed:function(){},groupEnd:function(){},info:function(){},log:function(){},markTimeline:function(){},warn:function(){}}},destroy:function(){a.verbose("Destroying previous site for",v),v.removeData(p)},cache:{},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,f,t);else{if(n===i)return f[t];f[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,a,t);else{if(n===i)return a[t];a[t]=n}},debug:function(){f.debug&&(f.performance?a.performance.log(arguments):(a.debug=Function.prototype.bind.call(console.info,console,f.name+":"),a.debug.apply(console,arguments)))},verbose:function(){f.verbose&&f.debug&&(f.performance?a.performance.log(arguments):(a.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),a.verbose.apply(console,arguments)))},error:function(){a.error=Function.prototype.bind.call(console.error,console,f.name+":"),a.error.apply(console,arguments)},performance:{log:function(e){var t,n,i;f.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Element:b,Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(a.performance.timer),a.performance.timer=setTimeout(a.performance.display,500)},display:function(){var t=f.name+":",n=0;s=!1,clearTimeout(a.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,o){var s,l,c,u=y;return n=n||d,o=b||o,"string"==typeof t&&u!==i&&(t=t.split(/[\. ]/),s=t.length-1,e.each(t,function(n,o){var r=n!=s?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(u[r])&&n!=s)u=u[r];else{if(u[r]!==i)return l=u[r],!1;if(!e.isPlainObject(u[o])||n==s)return u[o]!==i?(l=u[o],!1):(a.error(g.method,t),!1);u=u[o]}})),e.isFunction(l)?c=l.apply(o,n):l!==i&&(c=l),e.isArray(r)?r.push(c):r!==i?r=[r,c]:c!==i&&(r=c),l}},u?(y===i&&a.initialize(),a.invoke(c)):(y!==i&&a.destroy(),a.initialize()),r!==i?r:this},e.site.settings={name:"Site",namespace:"site",error:{console:"Console cannot be restored, most likely it was overwritten outside of module",method:"The method you called is not defined."},debug:!1,verbose:!1,performance:!0,modules:["accordion","api","checkbox","dimmer","dropdown","embed","form","modal","nag","popup","rating","shape","sidebar","state","sticky","tab","transition","visit","visibility"],siteNamespace:"site",namespaceStub:{cache:{},config:{},sections:{},section:{},utilities:{}}},e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,i){return!!e.data(t,i[3])}})}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.form=function(t){var o,a=e(this),r=a.selector||"",s=(new Date).getTime(),l=[],c=arguments[0],u=arguments[1],d="string"==typeof c,f=[].slice.call(arguments,1);return a.each(function(){var m,g,p,h,v,b,y,x,C,w,k,S,T,A,R,P,E,F,O=e(this),D=this,q=[],j=!1;F={initialize:function(){F.get.settings(),d?(E===i&&F.instantiate(),F.invoke(c)):(E!==i&&E.invoke("destroy"),F.verbose("Initializing form validation",O,x),F.bindEvents(),F.set.defaults(),F.instantiate())},instantiate:function(){F.verbose("Storing instance of module",F),E=F,O.data(R,F)},destroy:function(){F.verbose("Destroying previous module",E),F.removeEvents(),O.removeData(R)},refresh:function(){F.verbose("Refreshing selector cache"),m=O.find(k.field),g=O.find(k.group),p=O.find(k.message),h=O.find(k.prompt),v=O.find(k.submit),b=O.find(k.clear),y=O.find(k.reset)},submit:function(){F.verbose("Submitting form",O),O.submit()},attachEvents:function(t,n){n=n||"submit",e(t).on("click"+P,function(e){F[n](),e.preventDefault()})},bindEvents:function(){F.verbose("Attaching form events"),O.on("submit"+P,F.validate.form).on("blur"+P,k.field,F.event.field.blur).on("click"+P,k.submit,F.submit).on("click"+P,k.reset,F.reset).on("click"+P,k.clear,F.clear),x.keyboardShortcuts&&O.on("keydown"+P,k.field,F.event.field.keydown),m.each(function(){var t=e(this),n=t.prop("type"),i=F.get.changeEvent(n,t);e(this).on(i+P,F.event.field.change)})},clear:function(){m.each(function(){var t=e(this),n=t.parent(),i=t.closest(g),o=i.find(k.prompt),a=t.data(w.defaultValue)||"",r=n.is(k.uiCheckbox),s=n.is(k.uiDropdown),l=i.hasClass(S.error);l&&(F.verbose("Resetting error on field",i),i.removeClass(S.error),o.remove()),s?(F.verbose("Resetting dropdown value",n,a),n.dropdown("clear")):r?t.prop("checked",!1):(F.verbose("Resetting field value",t,a),t.val(""))})},reset:function(){m.each(function(){var t=e(this),n=t.parent(),o=t.closest(g),a=o.find(k.prompt),r=t.data(w.defaultValue),s=n.is(k.uiCheckbox),l=n.is(k.uiDropdown),c=o.hasClass(S.error);r!==i&&(c&&(F.verbose("Resetting error on field",o),o.removeClass(S.error),a.remove()),l?(F.verbose("Resetting dropdown value",n,r),n.dropdown("restore defaults")):s?(F.verbose("Resetting checkbox value",n,r),t.prop("checked",r)):(F.verbose("Resetting field value",t,r),t.val(r)))})},is:{bracketedRule:function(e){return e.type&&e.type.match(x.regExp.bracket)},empty:function(e){return!e||0===e.length||(e.is('input[type="checkbox"]')?!e.is(":checked"):F.is.blank(e))},blank:function(t){return""===e.trim(t.val())},valid:function(){var t=!0;return F.verbose("Checking if form is valid"),e.each(C,function(e,n){F.validate.field(n,e)||(t=!1)}),t}},removeEvents:function(){O.off(P),m.off(P),v.off(P),m.off(P)},event:{field:{keydown:function(t){var n=e(this),i=t.which,o=n.is(k.input),a=n.is(k.checkbox),r=n.closest(k.uiDropdown).length>0,s={enter:13,escape:27};i==s.escape&&(F.verbose("Escape key pressed blurring field"),n.blur()),t.ctrlKey||i!=s.enter||!o||r||a||(j||(n.one("keyup"+P,F.event.field.keyup),F.submit(),F.debug("Enter pressed on input submitting form")),j=!0)},keyup:function(){j=!1},blur:function(t){var n=e(this),i=n.closest(g),o=F.get.validation(n);i.hasClass(S.error)?(F.debug("Revalidating field",n,o),o&&F.validate.field(o)):"blur"!=x.on&&"change"!=x.on||o&&F.validate.field(o)},change:function(t){var n=e(this),i=n.closest(g),o=F.get.validation(n);("change"==x.on||i.hasClass(S.error)&&x.revalidate)&&(clearTimeout(F.timer),F.timer=setTimeout(function(){F.debug("Revalidating field",n,F.get.validation(n)),F.validate.field(o)},x.delay))}}},get:{ancillaryValue:function(e){return!(!e.type||!e.value&&!F.is.bracketedRule(e))&&(e.value!==i?e.value:e.type.match(x.regExp.bracket)[1]+"")},ruleName:function(e){return F.is.bracketedRule(e)?e.type.replace(e.type.match(x.regExp.bracket)[0],""):e.type},changeEvent:function(e,t){return"checkbox"==e||"radio"==e||"hidden"==e||t.is("select")?"change":F.get.inputEvent()},inputEvent:function(){return n.createElement("input").oninput!==i?"input":n.createElement("input").onpropertychange!==i?"propertychange":"keyup"},prompt:function(e,t){var n,i,o,a=F.get.ruleName(e),r=F.get.ancillaryValue(e),s=e.prompt||x.prompt[a]||x.text.unspecifiedRule,l=s.search("{value}")!==-1,c=s.search("{name}")!==-1;return(c||l)&&(i=F.get.field(t.identifier)),l&&(s=s.replace("{value}",i.val())),c&&(n=i.closest(k.group).find("label").eq(0),o=1==n.length?n.text():i.prop("placeholder")||x.text.unspecifiedField,s=s.replace("{name}",o)),s=s.replace("{identifier}",t.identifier),s=s.replace("{ruleValue}",r),e.prompt||F.verbose("Using default validation prompt for type",s,a),s},settings:function(){if(e.isPlainObject(t)){var n,o=Object.keys(t),a=o.length>0&&(t[o[0]].identifier!==i&&t[o[0]].rules!==i);a?(x=e.extend(!0,{},e.fn.form.settings,u),C=e.extend({},e.fn.form.settings.defaults,t),F.error(x.error.oldSyntax,D),F.verbose("Extending settings from legacy parameters",C,x)):(t.fields&&(n=Object.keys(t.fields),("string"==typeof t.fields[n[0]]||e.isArray(t.fields[n[0]]))&&e.each(t.fields,function(n,i){"string"==typeof i&&(i=[i]),t.fields[n]={rules:[]},e.each(i,function(e,i){t.fields[n].rules.push({type:i})})})),x=e.extend(!0,{},e.fn.form.settings,t),C=e.extend({},e.fn.form.settings.defaults,x.fields),F.verbose("Extending settings",C,x))}else x=e.fn.form.settings,C=e.fn.form.settings.defaults,F.verbose("Using default form validation",C,x);A=x.namespace,w=x.metadata,k=x.selector,S=x.className,T=x.error,R="module-"+A,P="."+A,E=O.data(R),F.refresh()},field:function(t){return F.verbose("Finding field with identifier",t),m.filter("#"+t).length>0?m.filter("#"+t):m.filter('[name="'+t+'"]').length>0?m.filter('[name="'+t+'"]'):m.filter('[name="'+t+'[]"]').length>0?m.filter('[name="'+t+'[]"]'):m.filter("[data-"+w.validate+'="'+t+'"]').length>0?m.filter("[data-"+w.validate+'="'+t+'"]'):e("<input/>")},fields:function(t){var n=e();return e.each(t,function(e,t){n=n.add(F.get.field(t))}),n},validation:function(t){var n,i;return!!C&&(e.each(C,function(e,o){i=o.identifier||e,F.get.field(i)[0]==t[0]&&(o.identifier=i,n=o)}),n||!1)},value:function(e){var t,n=[];return n.push(e),t=F.get.values.call(D,n),t[e]},values:function(t){var n=e.isArray(t)?F.get.fields(t):m,i={};return n.each(function(t,n){var o=e(n),a=(o.prop("type"),o.prop("name")),r=o.val(),s=o.is(k.checkbox),l=o.is(k.radio),c=a.indexOf("[]")!==-1,u=!!s&&o.is(":checked");a&&(c?(a=a.replace("[]",""),i[a]||(i[a]=[]),s?u?i[a].push(r||!0):i[a].push(!1):i[a].push(r)):l?u&&(i[a]=r):s?u?i[a]=r||!0:i[a]=!1:i[a]=r)}),i}},has:{field:function(e){return F.verbose("Checking for existence of a field with identifier",e),"string"!=typeof e&&F.error(T.identifier,e),m.filter("#"+e).length>0||(m.filter('[name="'+e+'"]').length>0||m.filter("[data-"+w.validate+'="'+e+'"]').length>0)}},add:{prompt:function(t,n){var o=F.get.field(t),a=o.closest(g),r=a.children(k.prompt),s=0!==r.length;n="string"==typeof n?[n]:n,F.verbose("Adding field error state",t),a.addClass(S.error),x.inline&&(s||(r=x.templates.prompt(n),r.appendTo(a)),r.html(n[0]),s?F.verbose("Inline errors are disabled, no inline error added",t):x.transition&&e.fn.transition!==i&&O.transition("is supported")?(F.verbose("Displaying error with css transition",x.transition),r.transition(x.transition+" in",x.duration)):(F.verbose("Displaying error with fallback javascript animation"),r.fadeIn(x.duration)))},errors:function(e){F.debug("Adding form error messages",e),F.set.error(),p.html(x.templates.error(e))}},remove:{prompt:function(t){var n=F.get.field(t),o=n.closest(g),a=o.children(k.prompt);o.removeClass(S.error),x.inline&&a.is(":visible")&&(F.verbose("Removing prompt for field",t),x.transition&&e.fn.transition!==i&&O.transition("is supported")?a.transition(x.transition+" out",x.duration,function(){a.remove()}):a.fadeOut(x.duration,function(){a.remove()}))}},set:{success:function(){O.removeClass(S.error).addClass(S.success)},defaults:function(){m.each(function(){var t=e(this),n=t.filter(k.checkbox).length>0,i=n?t.is(":checked"):t.val();t.data(w.defaultValue,i)})},error:function(){O.removeClass(S.success).addClass(S.error)},value:function(e,t){var n={};return n[e]=t,F.set.values.call(D,n)},values:function(t){e.isEmptyObject(t)||e.each(t,function(t,n){var i,o=F.get.field(t),a=o.parent(),r=e.isArray(n),s=a.is(k.uiCheckbox),l=a.is(k.uiDropdown),c=o.is(k.radio)&&s,u=o.length>0;u&&(r&&s?(F.verbose("Selecting multiple",n,o),a.checkbox("uncheck"),e.each(n,function(e,t){i=o.filter('[value="'+t+'"]'),a=i.parent(),i.length>0&&a.checkbox("check")})):c?(F.verbose("Selecting radio value",n,o),o.filter('[value="'+n+'"]').parent(k.uiCheckbox).checkbox("check")):s?(F.verbose("Setting checkbox value",n,a),n===!0?a.checkbox("check"):a.checkbox("uncheck")):l?(F.verbose("Setting dropdown value",n,a),a.dropdown("set selected",n)):(F.verbose("Setting field value",n,o),o.val(n)))})}},validate:{form:function(e,t){var n=F.get.values();if(j)return!1;if(q=[],F.is.valid()){if(F.debug("Form has no validation errors, submitting"),F.set.success(),t!==!0)return x.onSuccess.call(D,e,n)}else if(F.debug("Form has errors"),F.set.error(),x.inline||F.add.errors(q),O.data("moduleApi")!==i&&e.stopImmediatePropagation(),t!==!0)return x.onFailure.call(D,q,n)},field:function(t,n){var o=t.identifier||n,a=F.get.field(o),r=!!t.depends&&F.get.field(t.depends),s=!0,l=[];return t.identifier||(F.debug("Using field name as identifier",o),t.identifier=o),a.prop("disabled")?(F.debug("Field is disabled. Skipping",o),s=!0):t.optional&&F.is.blank(a)?(F.debug("Field is optional and blank. Skipping",o),s=!0):t.depends&&F.is.empty(r)?(F.debug("Field depends on another value that is not present or empty. Skipping",r),s=!0):t.rules!==i&&e.each(t.rules,function(e,n){F.has.field(o)&&!F.validate.rule(t,n)&&(F.debug("Field is invalid",o,n.type),l.push(F.get.prompt(n,t)),s=!1)}),s?(F.remove.prompt(o,l),x.onValid.call(a),!0):(q=q.concat(l),F.add.prompt(o,l),x.onInvalid.call(a,l),!1)},rule:function(t,n){var o=F.get.field(t.identifier),a=(n.type,o.val()),r=F.get.ancillaryValue(n),s=F.get.ruleName(n),l=x.rules[s];return e.isFunction(l)?(a=a===i||""===a||null===a?"":e.trim(a+""),l.call(o,a,r)):void F.error(T.noRule,s)}},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,x,t);else{if(n===i)return x[t];x[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,F,t);else{if(n===i)return F[t];F[t]=n}},debug:function(){!x.silent&&x.debug&&(x.performance?F.performance.log(arguments):(F.debug=Function.prototype.bind.call(console.info,console,x.name+":"),F.debug.apply(console,arguments)))},verbose:function(){!x.silent&&x.verbose&&x.debug&&(x.performance?F.performance.log(arguments):(F.verbose=Function.prototype.bind.call(console.info,console,x.name+":"),F.verbose.apply(console,arguments)))},error:function(){x.silent||(F.error=Function.prototype.bind.call(console.error,console,x.name+":"),F.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;x.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:D,"Execution Time":n})),clearTimeout(F.performance.timer),F.performance.timer=setTimeout(F.performance.display,500)},display:function(){var t=x.name+":",n=0;s=!1,clearTimeout(F.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),a.length>1&&(t+=" ("+a.length+")"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,a){var r,s,l,c=E;return n=n||f,a=D||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o]}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s}},F.initialize()}),o!==i?o:this},e.fn.form.settings={name:"Form",namespace:"form",debug:!1,verbose:!1,performance:!0,fields:!1,keyboardShortcuts:!0,on:"submit",inline:!1,delay:200,revalidate:!0,transition:"scale",duration:200,onValid:function(){},onInvalid:function(){},onSuccess:function(){return!0},onFailure:function(){return!1},metadata:{defaultValue:"default",validate:"validate"},regExp:{bracket:/\[(.*)\]/i,decimal:/^\d*(\.)\d+/,email:/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,flags:/^\/(.*)\/(.*)?/,integer:/^\-?\d+$/,number:/^\-?\d*(\.\d+)?$/,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i},text:{unspecifiedRule:"Please enter a valid value",unspecifiedField:"This field"},prompt:{empty:"{name} must have a value",checked:"{name} must be checked",email:"{name} must be a valid e-mail",url:"{name} must be a valid url",regExp:"{name} is not formatted correctly",integer:"{name} must be an integer",decimal:"{name} must be a decimal number",number:"{name} must be set to a number",is:'{name} must be "{ruleValue}"',isExactly:'{name} must be exactly "{ruleValue}"',not:'{name} cannot be set to "{ruleValue}"',notExactly:'{name} cannot be set to exactly "{ruleValue}"',contain:'{name} cannot contain "{ruleValue}"',containExactly:'{name} cannot contain exactly "{ruleValue}"',doesntContain:'{name} must contain  "{ruleValue}"',doesntContainExactly:'{name} must contain exactly "{ruleValue}"',minLength:"{name} must be at least {ruleValue} characters",length:"{name} must be at least {ruleValue} characters",exactLength:"{name} must be exactly {ruleValue} characters",maxLength:"{name} cannot be longer than {ruleValue} characters",match:"{name} must match {ruleValue} field",different:"{name} must have a different value than {ruleValue} field",creditCard:"{name} must be a valid credit card number",minCount:"{name} must have at least {ruleValue} choices",exactCount:"{name} must have exactly {ruleValue} choices",maxCount:"{name} must have {ruleValue} or less choices"},selector:{checkbox:'input[type="checkbox"], input[type="radio"]',clear:".clear",field:"input, textarea, select",group:".field",input:"input",message:".error.message",prompt:".prompt.label",radio:'input[type="radio"]',reset:'.reset:not([type="reset"])',submit:'.submit:not([type="submit"])',uiCheckbox:".ui.checkbox",uiDropdown:".ui.dropdown"},className:{error:"error",label:"ui prompt label",pressed:"down",success:"success"},error:{identifier:"You must specify a string identifier for each field",method:"The method you called is not defined.",noRule:"There is no rule matching the one you specified",oldSyntax:"Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically."},templates:{error:function(t){var n='<ul class="list">';return e.each(t,function(e,t){n+="<li>"+t+"</li>"}),n+="</ul>",e(n)},prompt:function(t){return e("<div/>").addClass("ui basic red pointing prompt label").html(t[0])}},rules:{empty:function(t){return!(t===i||""===t||e.isArray(t)&&0===t.length)},checked:function(){return e(this).filter(":checked").length>0},email:function(t){return e.fn.form.settings.regExp.email.test(t)},url:function(t){return e.fn.form.settings.regExp.url.test(t)},regExp:function(t,n){if(n instanceof RegExp)return t.match(n);var i,o=n.match(e.fn.form.settings.regExp.flags);return o&&(n=o.length>=2?o[1]:n,i=o.length>=3?o[2]:""),t.match(new RegExp(n,i))},integer:function(t,n){var o,a,r,s=e.fn.form.settings.regExp.integer;return n&&["",".."].indexOf(n)===-1&&(n.indexOf("..")==-1?s.test(n)&&(o=a=n-0):(r=n.split("..",2),s.test(r[0])&&(o=r[0]-0),s.test(r[1])&&(a=r[1]-0))),s.test(t)&&(o===i||t>=o)&&(a===i||t<=a)},decimal:function(t){return e.fn.form.settings.regExp.decimal.test(t)},number:function(t){return e.fn.form.settings.regExp.number.test(t)},is:function(e,t){return t="string"==typeof t?t.toLowerCase():t,e="string"==typeof e?e.toLowerCase():e,e==t},isExactly:function(e,t){return e==t},not:function(e,t){return e="string"==typeof e?e.toLowerCase():e,t="string"==typeof t?t.toLowerCase():t,e!=t},notExactly:function(e,t){return e!=t},contains:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),t.search(new RegExp(n,"i"))!==-1},containsExactly:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),t.search(new RegExp(n))!==-1},doesntContain:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),t.search(new RegExp(n,"i"))===-1},doesntContainExactly:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),t.search(new RegExp(n))===-1},minLength:function(e,t){return e!==i&&e.length>=t},length:function(e,t){return e!==i&&e.length>=t},exactLength:function(e,t){return e!==i&&e.length==t},maxLength:function(e,t){return e!==i&&e.length<=t},match:function(t,n){var o;e(this);return e('[data-validate="'+n+'"]').length>0?o=e('[data-validate="'+n+'"]').val():e("#"+n).length>0?o=e("#"+n).val():e('[name="'+n+'"]').length>0?o=e('[name="'+n+'"]').val():e('[name="'+n+'[]"]').length>0&&(o=e('[name="'+n+'[]"]')),o!==i&&t.toString()==o.toString()},different:function(t,n){var o;e(this);return e('[data-validate="'+n+'"]').length>0?o=e('[data-validate="'+n+'"]').val():e("#"+n).length>0?o=e("#"+n).val():e('[name="'+n+'"]').length>0?o=e('[name="'+n+'"]').val():e('[name="'+n+'[]"]').length>0&&(o=e('[name="'+n+'[]"]')),o!==i&&t.toString()!==o.toString()},creditCard:function(t,n){var i,o,a={visa:{pattern:/^4/,length:[16]},amex:{pattern:/^3[47]/,length:[15]},mastercard:{pattern:/^5[1-5]/,length:[16]},discover:{pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,length:[16]},unionPay:{pattern:/^(62|88)/,length:[16,17,18,19]},jcb:{pattern:/^35(2[89]|[3-8][0-9])/,length:[16]},maestro:{pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,length:[12,13,14,15,16,17,18,19]},dinersClub:{pattern:/^(30[0-5]|^36)/,length:[14]},laser:{pattern:/^(6304|670[69]|6771)/,length:[16,17,18,19]},visaElectron:{pattern:/^(4026|417500|4508|4844|491(3|7))/,length:[16]}},r={},s=!1,l="string"==typeof n&&n.split(",");if("string"==typeof t&&0!==t.length){if(l&&(e.each(l,function(n,i){o=a[i],o&&(r={length:e.inArray(t.length,o.length)!==-1,pattern:t.search(o.pattern)!==-1},r.length&&r.pattern&&(s=!0))}),!s))return!1;if(i={number:e.inArray(t.length,a.unionPay.length)!==-1,pattern:t.search(a.unionPay.pattern)!==-1},i.number&&i.pattern)return!0;for(var c=t.length,u=0,d=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],f=0;c--;)f+=d[u][parseInt(t.charAt(c),10)],u^=1;return f%10===0&&f>0}},minCount:function(e,t){return 0==t||(1==t?""!==e:e.split(",").length>=t)},exactCount:function(e,t){return 0==t?""===e:1==t?""!==e&&e.search(",")===-1:e.split(",").length==t},maxCount:function(e,t){return 0!=t&&(1==t?e.search(",")===-1:e.split(",").length<=t)}}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.accordion=function(n){var o,a=e(this),r=(new Date).getTime(),s=[],l=arguments[0],c="string"==typeof l,u=[].slice.call(arguments,1);t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return a.each(function(){var d,f,m=e.isPlainObject(n)?e.extend(!0,{},e.fn.accordion.settings,n):e.extend({},e.fn.accordion.settings),g=m.className,p=m.namespace,h=m.selector,v=m.error,b="."+p,y="module-"+p,x=a.selector||"",C=e(this),w=C.find(h.title),k=C.find(h.content),S=this,T=C.data(y);f={initialize:function(){f.debug("Initializing",C),f.bind.events(),m.observeChanges&&f.observeChanges(),f.instantiate()},instantiate:function(){T=f,C.data(y,f)},destroy:function(){f.debug("Destroying previous instance",C),C.off(b).removeData(y)},refresh:function(){w=C.find(h.title),k=C.find(h.content)},observeChanges:function(){"MutationObserver"in t&&(d=new MutationObserver(function(e){f.debug("DOM tree modified, updating selector cache"),f.refresh()}),d.observe(S,{childList:!0,subtree:!0}),f.debug("Setting up mutation observer",d))},bind:{events:function(){f.debug("Binding delegated events"),C.on(m.on+b,h.trigger,f.event.click)}},event:{click:function(){f.toggle.call(this)}},toggle:function(t){var n=t!==i?"number"==typeof t?w.eq(t):e(t).closest(h.title):e(this).closest(h.title),o=n.next(k),a=o.hasClass(g.animating),r=o.hasClass(g.active),s=r&&!a,l=!r&&a;f.debug("Toggling visibility of content",n),s||l?m.collapsible?f.close.call(n):f.debug("Cannot close accordion content collapsing is disabled"):f.open.call(n)},open:function(t){var n=t!==i?"number"==typeof t?w.eq(t):e(t).closest(h.title):e(this).closest(h.title),o=n.next(k),a=o.hasClass(g.animating),r=o.hasClass(g.active),s=r||a;return s?void f.debug("Accordion already open, skipping",o):(f.debug("Opening accordion content",n),m.onOpening.call(o),m.exclusive&&f.closeOthers.call(n),n.addClass(g.active),o.stop(!0,!0).addClass(g.animating),m.animateChildren&&(e.fn.transition!==i&&C.transition("is supported")?o.children().transition({animation:"fade in",queue:!1,useFailSafe:!0,debug:m.debug,verbose:m.verbose,duration:m.duration}):o.children().stop(!0,!0).animate({opacity:1},m.duration,f.resetOpacity)),void o.slideDown(m.duration,m.easing,function(){o.removeClass(g.animating).addClass(g.active),f.reset.display.call(this),m.onOpen.call(this),m.onChange.call(this)}))},close:function(t){var n=t!==i?"number"==typeof t?w.eq(t):e(t).closest(h.title):e(this).closest(h.title),o=n.next(k),a=o.hasClass(g.animating),r=o.hasClass(g.active),s=!r&&a,l=r&&a;!r&&!s||l||(f.debug("Closing accordion content",o),m.onClosing.call(o),n.removeClass(g.active),o.stop(!0,!0).addClass(g.animating),m.animateChildren&&(e.fn.transition!==i&&C.transition("is supported")?o.children().transition({animation:"fade out",queue:!1,useFailSafe:!0,debug:m.debug,verbose:m.verbose,duration:m.duration}):o.children().stop(!0,!0).animate({opacity:0},m.duration,f.resetOpacity)),o.slideUp(m.duration,m.easing,function(){o.removeClass(g.animating).removeClass(g.active),f.reset.display.call(this),m.onClose.call(this),m.onChange.call(this)}))},closeOthers:function(t){var n,o,a,r=t!==i?w.eq(t):e(this).closest(h.title),s=r.parents(h.content).prev(h.title),l=r.closest(h.accordion),c=h.title+"."+g.active+":visible",u=h.content+"."+g.active+":visible";m.closeNested?(n=l.find(c).not(s),a=n.next(k)):(n=l.find(c).not(s),o=l.find(u).find(c).not(s),n=n.not(o),a=n.next(k)),n.length>0&&(f.debug("Exclusive enabled, closing other content",n),n.removeClass(g.active),a.removeClass(g.animating).stop(!0,!0),m.animateChildren&&(e.fn.transition!==i&&C.transition("is supported")?a.children().transition({animation:"fade out",useFailSafe:!0,debug:m.debug,verbose:m.verbose,duration:m.duration}):a.children().stop(!0,!0).animate({opacity:0},m.duration,f.resetOpacity)),a.slideUp(m.duration,m.easing,function(){e(this).removeClass(g.active),f.reset.display.call(this)}))},reset:{display:function(){f.verbose("Removing inline display from element",this),e(this).css("display",""),""===e(this).attr("style")&&e(this).attr("style","").removeAttr("style")},opacity:function(){f.verbose("Removing inline opacity from element",this),e(this).css("opacity",""),""===e(this).attr("style")&&e(this).attr("style","").removeAttr("style")}},setting:function(t,n){if(f.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];e.isPlainObject(m[t])?e.extend(!0,m[t],n):m[t]=n}},internal:function(t,n){return f.debug("Changing internal",t,n),n===i?f[t]:void(e.isPlainObject(t)?e.extend(!0,f,t):f[t]=n)},debug:function(){!m.silent&&m.debug&&(m.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,m.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),f.verbose.apply(console,arguments)))},error:function(){m.silent||(f.error=Function.prototype.bind.call(console.error,console,m.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;m.performance&&(t=(new Date).getTime(),i=r||t,n=t-i,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:S,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var t=m.name+":",n=0;r=!1,clearTimeout(f.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",x&&(t+=" '"+x+"'"),(console.group!==i||console.table!==i)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,n,a){var r,s,l,c=T;return n=n||u,a=S||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(f.error(v.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s}},c?(T===i&&f.initialize(),f.invoke(l)):(T!==i&&T.invoke("destroy"),f.initialize())}),o!==i?o:this},e.fn.accordion.settings={name:"Accordion",namespace:"accordion",silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",observeChanges:!0,exclusive:!0,collapsible:!0,closeNested:!1,animateChildren:!0,duration:350,easing:"easeOutQuad",onOpening:function(){},onOpen:function(){},onClosing:function(){},
onClose:function(){},onChange:function(){},error:{method:"The method you called is not defined"},className:{active:"active",animating:"animating"},selector:{accordion:".accordion",title:".title",trigger:".title",content:".content"}},e.extend(e.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.checkbox=function(o){var a,r=e(this),s=r.selector||"",l=(new Date).getTime(),c=[],u=arguments[0],d="string"==typeof u,f=[].slice.call(arguments,1);return r.each(function(){var r,m,g=e.extend(!0,{},e.fn.checkbox.settings,o),p=g.className,h=g.namespace,v=g.selector,b=g.error,y="."+h,x="module-"+h,C=e(this),w=e(this).children(v.label),k=e(this).children(v.input),S=k[0],T=!1,A=!1,R=C.data(x),P=this;m={initialize:function(){m.verbose("Initializing checkbox",g),m.create.label(),m.bind.events(),m.set.tabbable(),m.hide.input(),m.observeChanges(),m.instantiate(),m.setup()},instantiate:function(){m.verbose("Storing instance of module",m),R=m,C.data(x,m)},destroy:function(){m.verbose("Destroying module"),m.unbind.events(),m.show.input(),C.removeData(x)},fix:{reference:function(){C.is(v.input)&&(m.debug("Behavior called on <input> adjusting invoked element"),C=C.closest(v.checkbox),m.refresh())}},setup:function(){m.set.initialLoad(),m.is.indeterminate()?(m.debug("Initial value is indeterminate"),m.indeterminate()):m.is.checked()?(m.debug("Initial value is checked"),m.check()):(m.debug("Initial value is unchecked"),m.uncheck()),m.remove.initialLoad()},refresh:function(){w=C.children(v.label),k=C.children(v.input),S=k[0]},hide:{input:function(){m.verbose("Modifying <input> z-index to be unselectable"),k.addClass(p.hidden)}},show:{input:function(){m.verbose("Modifying <input> z-index to be selectable"),k.removeClass(p.hidden)}},observeChanges:function(){"MutationObserver"in t&&(r=new MutationObserver(function(e){m.debug("DOM tree modified, updating selector cache"),m.refresh()}),r.observe(P,{childList:!0,subtree:!0}),m.debug("Setting up mutation observer",r))},attachEvents:function(t,n){var i=e(t);n=e.isFunction(m[n])?m[n]:m.toggle,i.length>0?(m.debug("Attaching checkbox events to element",t,n),i.on("click"+y,n)):m.error(b.notFound)},event:{click:function(t){var n=e(t.target);return n.is(v.input)?void m.verbose("Using default check action on initialized checkbox"):n.is(v.link)?void m.debug("Clicking link inside checkbox, skipping toggle"):(m.toggle(),k.focus(),void t.preventDefault())},keydown:function(e){var t=e.which,n={enter:13,space:32,escape:27};t==n.escape?(m.verbose("Escape key pressed blurring field"),k.blur(),A=!0):e.ctrlKey||t!=n.space&&t!=n.enter?A=!1:(m.verbose("Enter/space key pressed, toggling checkbox"),m.toggle(),A=!0)},keyup:function(e){A&&e.preventDefault()}},check:function(){m.should.allowCheck()&&(m.debug("Checking checkbox",k),m.set.checked(),m.should.ignoreCallbacks()||(g.onChecked.call(S),g.onChange.call(S)))},uncheck:function(){m.should.allowUncheck()&&(m.debug("Unchecking checkbox"),m.set.unchecked(),m.should.ignoreCallbacks()||(g.onUnchecked.call(S),g.onChange.call(S)))},indeterminate:function(){return m.should.allowIndeterminate()?void m.debug("Checkbox is already indeterminate"):(m.debug("Making checkbox indeterminate"),m.set.indeterminate(),void(m.should.ignoreCallbacks()||(g.onIndeterminate.call(S),g.onChange.call(S))))},determinate:function(){return m.should.allowDeterminate()?void m.debug("Checkbox is already determinate"):(m.debug("Making checkbox determinate"),m.set.determinate(),void(m.should.ignoreCallbacks()||(g.onDeterminate.call(S),g.onChange.call(S))))},enable:function(){return m.is.enabled()?void m.debug("Checkbox is already enabled"):(m.debug("Enabling checkbox"),m.set.enabled(),g.onEnable.call(S),void g.onEnabled.call(S))},disable:function(){return m.is.disabled()?void m.debug("Checkbox is already disabled"):(m.debug("Disabling checkbox"),m.set.disabled(),g.onDisable.call(S),void g.onDisabled.call(S))},get:{radios:function(){var t=m.get.name();return e('input[name="'+t+'"]').closest(v.checkbox)},otherRadios:function(){return m.get.radios().not(C)},name:function(){return k.attr("name")}},is:{initialLoad:function(){return T},radio:function(){return k.hasClass(p.radio)||"radio"==k.attr("type")},indeterminate:function(){return k.prop("indeterminate")!==i&&k.prop("indeterminate")},checked:function(){return k.prop("checked")!==i&&k.prop("checked")},disabled:function(){return k.prop("disabled")!==i&&k.prop("disabled")},enabled:function(){return!m.is.disabled()},determinate:function(){return!m.is.indeterminate()},unchecked:function(){return!m.is.checked()}},should:{allowCheck:function(){return m.is.determinate()&&m.is.checked()&&!m.should.forceCallbacks()?(m.debug("Should not allow check, checkbox is already checked"),!1):g.beforeChecked.apply(S)!==!1||(m.debug("Should not allow check, beforeChecked cancelled"),!1)},allowUncheck:function(){return m.is.determinate()&&m.is.unchecked()&&!m.should.forceCallbacks()?(m.debug("Should not allow uncheck, checkbox is already unchecked"),!1):g.beforeUnchecked.apply(S)!==!1||(m.debug("Should not allow uncheck, beforeUnchecked cancelled"),!1)},allowIndeterminate:function(){return m.is.indeterminate()&&!m.should.forceCallbacks()?(m.debug("Should not allow indeterminate, checkbox is already indeterminate"),!1):g.beforeIndeterminate.apply(S)!==!1||(m.debug("Should not allow indeterminate, beforeIndeterminate cancelled"),!1)},allowDeterminate:function(){return m.is.determinate()&&!m.should.forceCallbacks()?(m.debug("Should not allow determinate, checkbox is already determinate"),!1):g.beforeDeterminate.apply(S)!==!1||(m.debug("Should not allow determinate, beforeDeterminate cancelled"),!1)},forceCallbacks:function(){return m.is.initialLoad()&&g.fireOnInit},ignoreCallbacks:function(){return T&&!g.fireOnInit}},can:{change:function(){return!(C.hasClass(p.disabled)||C.hasClass(p.readOnly)||k.prop("disabled")||k.prop("readonly"))},uncheck:function(){return"boolean"==typeof g.uncheckable?g.uncheckable:!m.is.radio()}},set:{initialLoad:function(){T=!0},checked:function(){return m.verbose("Setting class to checked"),C.removeClass(p.indeterminate).addClass(p.checked),m.is.radio()&&m.uncheckOthers(),!m.is.indeterminate()&&m.is.checked()?void m.debug("Input is already checked, skipping input property change"):(m.verbose("Setting state to checked",S),k.prop("indeterminate",!1).prop("checked",!0),void m.trigger.change())},unchecked:function(){return m.verbose("Removing checked class"),C.removeClass(p.indeterminate).removeClass(p.checked),!m.is.indeterminate()&&m.is.unchecked()?void m.debug("Input is already unchecked"):(m.debug("Setting state to unchecked"),k.prop("indeterminate",!1).prop("checked",!1),void m.trigger.change())},indeterminate:function(){return m.verbose("Setting class to indeterminate"),C.addClass(p.indeterminate),m.is.indeterminate()?void m.debug("Input is already indeterminate, skipping input property change"):(m.debug("Setting state to indeterminate"),k.prop("indeterminate",!0),void m.trigger.change())},determinate:function(){return m.verbose("Removing indeterminate class"),C.removeClass(p.indeterminate),m.is.determinate()?void m.debug("Input is already determinate, skipping input property change"):(m.debug("Setting state to determinate"),void k.prop("indeterminate",!1))},disabled:function(){return m.verbose("Setting class to disabled"),C.addClass(p.disabled),m.is.disabled()?void m.debug("Input is already disabled, skipping input property change"):(m.debug("Setting state to disabled"),k.prop("disabled","disabled"),void m.trigger.change())},enabled:function(){return m.verbose("Removing disabled class"),C.removeClass(p.disabled),m.is.enabled()?void m.debug("Input is already enabled, skipping input property change"):(m.debug("Setting state to enabled"),k.prop("disabled",!1),void m.trigger.change())},tabbable:function(){m.verbose("Adding tabindex to checkbox"),k.attr("tabindex")===i&&k.attr("tabindex",0)}},remove:{initialLoad:function(){T=!1}},trigger:{change:function(){var e=n.createEvent("HTMLEvents"),t=k[0];t&&(m.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},create:{label:function(){k.prevAll(v.label).length>0?(k.prev(v.label).detach().insertAfter(k),m.debug("Moving existing label",w)):m.has.label()||(w=e("<label>").insertAfter(k),m.debug("Creating label",w))}},has:{label:function(){return w.length>0}},bind:{events:function(){m.verbose("Attaching checkbox events"),C.on("click"+y,m.event.click).on("keydown"+y,v.input,m.event.keydown).on("keyup"+y,v.input,m.event.keyup)}},unbind:{events:function(){m.debug("Removing events"),C.off(y)}},uncheckOthers:function(){var e=m.get.otherRadios();m.debug("Unchecking other radios",e),e.removeClass(p.checked)},toggle:function(){return m.can.change()?void(m.is.indeterminate()||m.is.unchecked()?(m.debug("Currently unchecked"),m.check()):m.is.checked()&&m.can.uncheck()&&(m.debug("Currently checked"),m.uncheck())):void(m.is.radio()||m.debug("Checkbox is read-only or disabled, ignoring toggle"))},setting:function(t,n){if(m.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,g,t);else{if(n===i)return g[t];e.isPlainObject(g[t])?e.extend(!0,g[t],n):g[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];m[t]=n}},debug:function(){!g.silent&&g.debug&&(g.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,g.name+":"),m.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),m.verbose.apply(console,arguments)))},error:function(){g.silent||(m.error=Function.prototype.bind.call(console.error,console,g.name+":"),m.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;g.performance&&(t=(new Date).getTime(),i=l||t,n=t-i,l=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:P,"Execution Time":n})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500)},display:function(){var t=g.name+":",n=0;l=!1,clearTimeout(m.performance.timer),e.each(c,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",s&&(t+=" '"+s+"'"),(console.group!==i||console.table!==i)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),c=[]}},invoke:function(t,n,o){var r,s,l,c=R;return n=n||f,o=P||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(m.error(b.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},d?(R===i&&m.initialize(),m.invoke(u)):(R!==i&&R.invoke("destroy"),m.initialize())}),a!==i?a:this},e.fn.checkbox.settings={name:"Checkbox",namespace:"checkbox",silent:!1,debug:!1,verbose:!0,performance:!0,uncheckable:"auto",fireOnInit:!1,onChange:function(){},beforeChecked:function(){},beforeUnchecked:function(){},beforeDeterminate:function(){},beforeIndeterminate:function(){},onChecked:function(){},onUnchecked:function(){},onDeterminate:function(){},onIndeterminate:function(){},onEnable:function(){},onDisable:function(){},onEnabled:function(){},onDisabled:function(){},className:{checked:"checked",indeterminate:"indeterminate",disabled:"disabled",hidden:"hidden",radio:"radio",readOnly:"read-only"},error:{method:"The method you called is not defined"},selector:{checkbox:".ui.checkbox",label:"label, .box",input:'input[type="checkbox"], input[type="radio"]',link:"a[href]"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.dimmer=function(t){var o,a=e(this),r=(new Date).getTime(),s=[],l=arguments[0],c="string"==typeof l,u=[].slice.call(arguments,1);return a.each(function(){var d,f,m,g=e.isPlainObject(t)?e.extend(!0,{},e.fn.dimmer.settings,t):e.extend({},e.fn.dimmer.settings),p=g.selector,h=g.namespace,v=g.className,b=g.error,y="."+h,x="module-"+h,C=a.selector||"",w="ontouchstart"in n.documentElement?"touchstart":"click",k=e(this),S=this,T=k.data(x);m={preinitialize:function(){m.is.dimmer()?(f=k.parent(),d=k):(f=k,d=m.has.dimmer()?g.dimmerName?f.find(p.dimmer).filter("."+g.dimmerName):f.find(p.dimmer):m.create(),m.set.variation())},initialize:function(){m.debug("Initializing dimmer",g),m.bind.events(),m.set.dimmable(),m.instantiate()},instantiate:function(){m.verbose("Storing instance of module",m),T=m,k.data(x,T)},destroy:function(){m.verbose("Destroying previous module",d),m.unbind.events(),m.remove.variation(),f.off(y)},bind:{events:function(){"hover"==g.on?f.on("mouseenter"+y,m.show).on("mouseleave"+y,m.hide):"click"==g.on&&f.on(w+y,m.toggle),m.is.page()&&(m.debug("Setting as a page dimmer",f),m.set.pageDimmer()),m.is.closable()&&(m.verbose("Adding dimmer close event",d),f.on(w+y,p.dimmer,m.event.click))}},unbind:{events:function(){k.removeData(x),f.off(y)}},event:{click:function(t){m.verbose("Determining if event occured on dimmer",t),(0===d.find(t.target).length||e(t.target).is(p.content))&&(m.hide(),t.stopImmediatePropagation())}},addContent:function(t){var n=e(t);m.debug("Add content to dimmer",n),n.parent()[0]!==d[0]&&n.detach().appendTo(d)},create:function(){var t=e(g.template.dimmer());return g.dimmerName&&(m.debug("Creating named dimmer",g.dimmerName),t.addClass(g.dimmerName)),t.appendTo(f),t},show:function(t){t=e.isFunction(t)?t:function(){},m.debug("Showing dimmer",d,g),m.is.dimmed()&&!m.is.animating()||!m.is.enabled()?m.debug("Dimmer is already shown or disabled"):(m.animate.show(t),g.onShow.call(S),g.onChange.call(S))},hide:function(t){t=e.isFunction(t)?t:function(){},m.is.dimmed()||m.is.animating()?(m.debug("Hiding dimmer",d),m.animate.hide(t),g.onHide.call(S),g.onChange.call(S)):m.debug("Dimmer is not visible")},toggle:function(){m.verbose("Toggling dimmer visibility",d),m.is.dimmed()?m.hide():m.show()},animate:{show:function(t){t=e.isFunction(t)?t:function(){},g.useCSS&&e.fn.transition!==i&&d.transition("is supported")?("auto"!==g.opacity&&m.set.opacity(),d.transition({animation:g.transition+" in",queue:!1,duration:m.get.duration(),useFailSafe:!0,onStart:function(){m.set.dimmed()},onComplete:function(){m.set.active(),t()}})):(m.verbose("Showing dimmer animation with javascript"),m.set.dimmed(),"auto"==g.opacity&&(g.opacity=.8),d.stop().css({opacity:0,width:"100%",height:"100%"}).fadeTo(m.get.duration(),g.opacity,function(){d.removeAttr("style"),m.set.active(),t()}))},hide:function(t){t=e.isFunction(t)?t:function(){},g.useCSS&&e.fn.transition!==i&&d.transition("is supported")?(m.verbose("Hiding dimmer with css"),d.transition({animation:g.transition+" out",queue:!1,duration:m.get.duration(),useFailSafe:!0,onStart:function(){m.remove.dimmed()},onComplete:function(){m.remove.active(),t()}})):(m.verbose("Hiding dimmer with javascript"),m.remove.dimmed(),d.stop().fadeOut(m.get.duration(),function(){m.remove.active(),d.removeAttr("style"),t()}))}},get:{dimmer:function(){return d},duration:function(){return"object"==typeof g.duration?m.is.active()?g.duration.hide:g.duration.show:g.duration}},has:{dimmer:function(){return g.dimmerName?k.find(p.dimmer).filter("."+g.dimmerName).length>0:k.find(p.dimmer).length>0}},is:{active:function(){return d.hasClass(v.active)},animating:function(){return d.is(":animated")||d.hasClass(v.animating)},closable:function(){return"auto"==g.closable?"hover"!=g.on:g.closable},dimmer:function(){return k.hasClass(v.dimmer)},dimmable:function(){return k.hasClass(v.dimmable)},dimmed:function(){return f.hasClass(v.dimmed)},disabled:function(){return f.hasClass(v.disabled)},enabled:function(){return!m.is.disabled()},page:function(){return f.is("body")},pageDimmer:function(){return d.hasClass(v.pageDimmer)}},can:{show:function(){return!d.hasClass(v.disabled)}},set:{opacity:function(e){var t=d.css("background-color"),n=t.split(","),i=n&&3==n.length,o=n&&4==n.length;e=0===g.opacity?0:g.opacity||e,i||o?(n[3]=e+")",t=n.join(",")):t="rgba(0, 0, 0, "+e+")",m.debug("Setting opacity to",e),d.css("background-color",t)},active:function(){d.addClass(v.active)},dimmable:function(){f.addClass(v.dimmable)},dimmed:function(){f.addClass(v.dimmed)},pageDimmer:function(){d.addClass(v.pageDimmer)},disabled:function(){d.addClass(v.disabled)},variation:function(e){e=e||g.variation,e&&d.addClass(e)}},remove:{active:function(){d.removeClass(v.active)},dimmed:function(){f.removeClass(v.dimmed)},disabled:function(){d.removeClass(v.disabled)},variation:function(e){e=e||g.variation,e&&d.removeClass(e)}},setting:function(t,n){if(m.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,g,t);else{if(n===i)return g[t];e.isPlainObject(g[t])?e.extend(!0,g[t],n):g[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];m[t]=n}},debug:function(){!g.silent&&g.debug&&(g.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,g.name+":"),m.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),m.verbose.apply(console,arguments)))},error:function(){g.silent||(m.error=Function.prototype.bind.call(console.error,console,g.name+":"),m.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;g.performance&&(t=(new Date).getTime(),i=r||t,n=t-i,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:S,"Execution Time":n})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500)},display:function(){var t=g.name+":",n=0;r=!1,clearTimeout(m.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",C&&(t+=" '"+C+"'"),a.length>1&&(t+=" ("+a.length+")"),(console.group!==i||console.table!==i)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,n,a){var r,s,l,c=T;return n=n||u,a=S||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(m.error(b.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s}},m.preinitialize(),c?(T===i&&m.initialize(),m.invoke(l)):(T!==i&&T.invoke("destroy"),m.initialize())}),o!==i?o:this},e.fn.dimmer.settings={name:"Dimmer",namespace:"dimmer",silent:!1,debug:!1,verbose:!1,performance:!0,dimmerName:!1,variation:!1,closable:"auto",useCSS:!0,transition:"fade",on:!1,opacity:"auto",duration:{show:500,hide:500},onChange:function(){},onShow:function(){},onHide:function(){},error:{method:"The method you called is not defined."},className:{active:"active",animating:"animating",dimmable:"dimmable",dimmed:"dimmed",dimmer:"dimmer",disabled:"disabled",hide:"hide",pageDimmer:"page",show:"show"},selector:{dimmer:"> .ui.dimmer",content:".ui.dimmer > .content, .ui.dimmer > .content > .center"},template:{dimmer:function(){return e("<div />").attr("class","ui dimmer")}}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.dropdown=function(o){var a,r=e(this),s=e(n),l=r.selector||"",c="ontouchstart"in n.documentElement,u=(new Date).getTime(),d=[],f=arguments[0],m="string"==typeof f,g=[].slice.call(arguments,1);return r.each(function(p){var h,v,b,y,x,C,w,k,S=e.isPlainObject(o)?e.extend(!0,{},e.fn.dropdown.settings,o):e.extend({},e.fn.dropdown.settings),T=S.className,A=S.message,R=S.fields,P=S.keys,E=S.metadata,F=S.namespace,O=S.regExp,D=S.selector,q=S.error,j=S.templates,z="."+F,M="module-"+F,I=e(this),L=e(S.context),N=I.find(D.text),V=I.find(D.search),H=I.find(D.sizer),U=I.find(D.input),W=I.find(D.icon),B=I.prev().find(D.text).length>0?I.prev().find(D.text):I.prev(),Q=I.children(D.menu),X=Q.find(D.item),$=!1,Y=!1,K=!1,Z=this,J=I.data(M);k={initialize:function(){k.debug("Initializing dropdown",S),k.is.alreadySetup()?k.setup.reference():(k.setup.layout(),k.refreshData(),k.save.defaults(),k.restore.selected(),k.create.id(),k.bind.events(),k.observeChanges(),k.instantiate())},instantiate:function(){k.verbose("Storing instance of dropdown",k),J=k,I.data(M,k)},destroy:function(){k.verbose("Destroying previous dropdown",I),k.remove.tabbable(),I.off(z).removeData(M),Q.off(z),s.off(y),k.disconnect.menuObserver(),k.disconnect.selectObserver()},observeChanges:function(){"MutationObserver"in t&&(C=new MutationObserver(k.event.select.mutation),w=new MutationObserver(k.event.menu.mutation),k.debug("Setting up mutation observer",C,w),k.observe.select(),k.observe.menu())},disconnect:{menuObserver:function(){w&&w.disconnect()},selectObserver:function(){C&&C.disconnect()}},observe:{select:function(){k.has.input()&&C.observe(U[0],{childList:!0,subtree:!0})},menu:function(){k.has.menu()&&w.observe(Q[0],{childList:!0,subtree:!0})}},create:{id:function(){x=(Math.random().toString(16)+"000000000").substr(2,8),y="."+x,k.verbose("Creating unique id for element",x)},userChoice:function(t){var n,o,a;return!!(t=t||k.get.userValues())&&(t=e.isArray(t)?t:[t],e.each(t,function(t,r){k.get.item(r)===!1&&(a=S.templates.addition(k.add.variables(A.addResult,r)),o=e("<div />").html(a).attr("data-"+E.value,r).attr("data-"+E.text,r).addClass(T.addition).addClass(T.item),S.hideAdditions&&o.addClass(T.hidden),n=n===i?o:n.add(o),k.verbose("Creating user choices for value",r,o))}),n)},userLabels:function(t){var n=k.get.userValues();n&&(k.debug("Adding user labels",n),e.each(n,function(e,t){k.verbose("Adding custom user value"),k.add.label(t,t)}))},menu:function(){Q=e("<div />").addClass(T.menu).appendTo(I)},sizer:function(){H=e("<span />").addClass(T.sizer).insertAfter(V)}},search:function(e){e=e!==i?e:k.get.query(),k.verbose("Searching for query",e),k.has.minCharacters(e)?k.filter(e):k.hide()},select:{firstUnfiltered:function(){k.verbose("Selecting first non-filtered element"),k.remove.selectedItem(),X.not(D.unselectable).not(D.addition+D.hidden).eq(0).addClass(T.selected)},nextAvailable:function(e){e=e.eq(0);var t=e.nextAll(D.item).not(D.unselectable).eq(0),n=e.prevAll(D.item).not(D.unselectable).eq(0),i=t.length>0;i?(k.verbose("Moving selection to",t),t.addClass(T.selected)):(k.verbose("Moving selection to",n),n.addClass(T.selected))}},setup:{api:function(){var e={debug:S.debug,urlData:{value:k.get.value(),query:k.get.query()},on:!1};k.verbose("First request, initializing API"),I.api(e)},layout:function(){I.is("select")&&(k.setup.select(),k.setup.returnedObject()),k.has.menu()||k.create.menu(),k.is.search()&&!k.has.search()&&(k.verbose("Adding search input"),V=e("<input />").addClass(T.search).prop("autocomplete","off").insertBefore(N)),k.is.multiple()&&k.is.searchSelection()&&!k.has.sizer()&&k.create.sizer(),S.allowTab&&k.set.tabbable()},select:function(){var t=k.get.selectValues();k.debug("Dropdown initialized on a select",t),I.is("select")&&(U=I),U.parent(D.dropdown).length>0?(k.debug("UI dropdown already exists. Creating dropdown menu only"),I=U.closest(D.dropdown),k.has.menu()||k.create.menu(),Q=I.children(D.menu),k.setup.menu(t)):(k.debug("Creating entire dropdown from select"),I=e("<div />").attr("class",U.attr("class")).addClass(T.selection).addClass(T.dropdown).html(j.dropdown(t)).insertBefore(U),U.hasClass(T.multiple)&&U.prop("multiple")===!1&&(k.error(q.missingMultiple),U.prop("multiple",!0)),U.is("[multiple]")&&k.set.multiple(),U.prop("disabled")&&(k.debug("Disabling dropdown"),I.addClass(T.disabled)),U.removeAttr("class").detach().prependTo(I)),k.refresh()},menu:function(e){Q.html(j.menu(e,R)),X=Q.find(D.item)},reference:function(){k.debug("Dropdown behavior was called on select, replacing with closest dropdown"),I=I.parent(D.dropdown),k.refresh(),k.setup.returnedObject(),m&&(J=k,k.invoke(f))},returnedObject:function(){var e=r.slice(0,p),t=r.slice(p+1);r=e.add(I).add(t)}},refresh:function(){k.refreshSelectors(),k.refreshData()},refreshItems:function(){X=Q.find(D.item)},refreshSelectors:function(){k.verbose("Refreshing selector cache"),N=I.find(D.text),V=I.find(D.search),U=I.find(D.input),W=I.find(D.icon),B=I.prev().find(D.text).length>0?I.prev().find(D.text):I.prev(),Q=I.children(D.menu),X=Q.find(D.item)},refreshData:function(){k.verbose("Refreshing cached metadata"),X.removeData(E.text).removeData(E.value)},clearData:function(){k.verbose("Clearing metadata"),X.removeData(E.text).removeData(E.value),I.removeData(E.defaultText).removeData(E.defaultValue).removeData(E.placeholderText)},toggle:function(){k.verbose("Toggling menu visibility"),k.is.active()?k.hide():k.show()},show:function(t){if(t=e.isFunction(t)?t:function(){},k.can.show()&&!k.is.active()){if(k.debug("Showing dropdown"),!k.has.message()||k.has.maxSelections()||k.has.allResultsFiltered()||k.remove.message(),k.is.allFiltered())return!0;S.onShow.call(Z)!==!1&&k.animate.show(function(){k.can.click()&&k.bind.intent(),k.has.menuSearch()&&k.focusSearch(),k.set.visible(),t.call(Z)})}},hide:function(t){t=e.isFunction(t)?t:function(){},k.is.active()&&(k.debug("Hiding dropdown"),S.onHide.call(Z)!==!1&&k.animate.hide(function(){k.remove.visible(),t.call(Z)}))},hideOthers:function(){k.verbose("Finding other dropdowns to hide"),r.not(I).has(D.menu+"."+T.visible).dropdown("hide")},hideMenu:function(){k.verbose("Hiding menu  instantaneously"),k.remove.active(),k.remove.visible(),Q.transition("hide")},hideSubMenus:function(){var e=Q.children(D.item).find(D.menu);k.verbose("Hiding sub menus",e),e.transition("hide")},bind:{events:function(){c&&k.bind.touchEvents(),k.bind.keyboardEvents(),k.bind.inputEvents(),k.bind.mouseEvents()},touchEvents:function(){k.debug("Touch device detected binding additional touch events"),k.is.searchSelection()||k.is.single()&&I.on("touchstart"+z,k.event.test.toggle),Q.on("touchstart"+z,D.item,k.event.item.mouseenter)},keyboardEvents:function(){k.verbose("Binding keyboard events"),I.on("keydown"+z,k.event.keydown),k.has.search()&&I.on(k.get.inputEvent()+z,D.search,k.event.input),k.is.multiple()&&s.on("keydown"+y,k.event.document.keydown)},inputEvents:function(){k.verbose("Binding input change events"),I.on("change"+z,D.input,k.event.change)},mouseEvents:function(){k.verbose("Binding mouse events"),k.is.multiple()&&I.on("click"+z,D.label,k.event.label.click).on("click"+z,D.remove,k.event.remove.click),k.is.searchSelection()?(I.on("mousedown"+z,k.event.mousedown).on("mouseup"+z,k.event.mouseup).on("mousedown"+z,D.menu,k.event.menu.mousedown).on("mouseup"+z,D.menu,k.event.menu.mouseup).on("click"+z,D.icon,k.event.icon.click).on("focus"+z,D.search,k.event.search.focus).on("click"+z,D.search,k.event.search.focus).on("blur"+z,D.search,k.event.search.blur).on("click"+z,D.text,k.event.text.focus),k.is.multiple()&&I.on("click"+z,k.event.click)):("click"==S.on?I.on("click"+z,D.icon,k.event.icon.click).on("click"+z,k.event.test.toggle):"hover"==S.on?I.on("mouseenter"+z,k.delay.show).on("mouseleave"+z,k.delay.hide):I.on(S.on+z,k.toggle),I.on("mousedown"+z,k.event.mousedown).on("mouseup"+z,k.event.mouseup).on("focus"+z,k.event.focus).on("blur"+z,k.event.blur)),Q.on("mouseenter"+z,D.item,k.event.item.mouseenter).on("mouseleave"+z,D.item,k.event.item.mouseleave).on("click"+z,D.item,k.event.item.click)},intent:function(){k.verbose("Binding hide intent event to document"),c&&s.on("touchstart"+y,k.event.test.touch).on("touchmove"+y,k.event.test.touch),s.on("click"+y,k.event.test.hide)}},unbind:{intent:function(){k.verbose("Removing hide intent event from document"),c&&s.off("touchstart"+y).off("touchmove"+y),s.off("click"+y)}},filter:function(e){var t=e!==i?e:k.get.query(),n=function(){k.is.multiple()&&k.filterActive(),k.select.firstUnfiltered(),k.has.allResultsFiltered()?S.onNoResults.call(Z,t)?S.allowAdditions?S.hideAdditions&&(k.verbose("User addition with no menu, setting empty style"),k.set.empty(),k.hideMenu()):(k.verbose("All items filtered, showing message",t),k.add.message(A.noResults)):(k.verbose("All items filtered, hiding dropdown",t),k.hideMenu()):(k.remove.empty(),k.remove.message()),S.allowAdditions&&k.add.userSuggestion(e),k.is.searchSelection()&&k.can.show()&&k.is.focusedOnSearch()&&k.show()};S.useLabels&&k.has.maxSelections()||(S.apiSettings?k.can.useAPI()?k.queryRemote(t,function(){n()}):k.error(q.noAPI):(k.filterItems(t),n()))},queryRemote:function(t,n){var i={errorDuration:!1,cache:"local",throttle:S.throttle,urlData:{query:t},onError:function(){k.add.message(A.serverError),n()},onFailure:function(){k.add.message(A.serverError),n()},onSuccess:function(e){k.remove.message(),k.setup.menu({values:e[R.remoteValues]}),n()}};I.api("get request")||k.setup.api(),i=e.extend(!0,{},i,S.apiSettings),I.api("setting",i).api("query")},filterItems:function(t){var n=t!==i?t:k.get.query(),o=null,a=k.escape.regExp(n),r=new RegExp("^"+a,"igm");k.has.query()&&(o=[],k.verbose("Searching for matching values",n),X.each(function(){var t,i,a=e(this);if("both"==S.match||"text"==S.match){if(t=String(k.get.choiceText(a,!1)),t.search(r)!==-1)return o.push(this),!0;if("exact"===S.fullTextSearch&&k.exactSearch(n,t))return o.push(this),!0;if(S.fullTextSearch===!0&&k.fuzzySearch(n,t))return o.push(this),!0}if("both"==S.match||"value"==S.match){if(i=String(k.get.choiceValue(a,t)),i.search(r)!==-1)return o.push(this),!0;if(S.fullTextSearch&&k.fuzzySearch(n,i))return o.push(this),!0}})),k.debug("Showing only matched items",n),k.remove.filteredItem(),o&&X.not(o).addClass(T.filtered)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if(e=e.toLowerCase(),t=t.toLowerCase(),i>n)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===r)continue e;return!1}return!0},exactSearch:function(e,t){return e=e.toLowerCase(),t=t.toLowerCase(),t.indexOf(e)>-1},filterActive:function(){S.useLabels&&X.filter("."+T.active).addClass(T.filtered)},focusSearch:function(e){k.has.search()&&!k.is.focusedOnSearch()&&(e?(I.off("focus"+z,D.search),V.focus(),I.on("focus"+z,D.search,k.event.search.focus)):V.focus())},forceSelection:function(){var e=X.not(T.filtered).filter("."+T.selected).eq(0),t=X.not(T.filtered).filter("."+T.active).eq(0),n=e.length>0?e:t,i=n.length>0;return i?(k.debug("Forcing partial selection to selected item",n),void k.event.item.click.call(n,{},!0)):void(S.allowAdditions?(k.set.selected(k.get.query()),k.remove.searchTerm()):k.remove.searchTerm())},event:{change:function(){K||(k.debug("Input changed, updating selection"),k.set.selected())},focus:function(){S.showOnFocus&&!$&&k.is.hidden()&&!v&&k.show()},blur:function(e){v=n.activeElement===this,$||v||(k.remove.activeLabel(),k.hide())},mousedown:function(){k.is.searchSelection()?b=!0:$=!0},mouseup:function(){k.is.searchSelection()?b=!1:$=!1},click:function(t){var n=e(t.target);n.is(I)&&(k.is.focusedOnSearch()?k.show():k.focusSearch())},search:{focus:function(){$=!0,k.is.multiple()&&k.remove.activeLabel(),S.showOnFocus&&k.search()},blur:function(e){v=n.activeElement===this,b||Y||v||(S.forceSelection&&k.forceSelection(),k.hide()),b=!1}},icon:{click:function(e){k.toggle()}},text:{focus:function(e){$=!0,k.focusSearch()}},input:function(e){(k.is.multiple()||k.is.searchSelection())&&k.set.filtered(),clearTimeout(k.timer),k.timer=setTimeout(k.search,S.delay.search);
},label:{click:function(t){var n=e(this),i=I.find(D.label),o=i.filter("."+T.active),a=n.nextAll("."+T.active),r=n.prevAll("."+T.active),s=a.length>0?n.nextUntil(a).add(o).add(n):n.prevUntil(r).add(o).add(n);t.shiftKey?(o.removeClass(T.active),s.addClass(T.active)):t.ctrlKey?n.toggleClass(T.active):(o.removeClass(T.active),n.addClass(T.active)),S.onLabelSelect.apply(this,i.filter("."+T.active))}},remove:{click:function(){var t=e(this).parent();t.hasClass(T.active)?k.remove.activeLabels():k.remove.activeLabels(t)}},test:{toggle:function(e){var t=k.is.multiple()?k.show:k.toggle;k.is.bubbledLabelClick(e)||k.is.bubbledIconClick(e)||k.determine.eventOnElement(e,t)&&e.preventDefault()},touch:function(e){k.determine.eventOnElement(e,function(){"touchstart"==e.type?k.timer=setTimeout(function(){k.hide()},S.delay.touch):"touchmove"==e.type&&clearTimeout(k.timer)}),e.stopPropagation()},hide:function(e){k.determine.eventInModule(e,k.hide)}},select:{mutation:function(e){k.debug("<select> modified, recreating menu"),k.setup.select()}},menu:{mutation:function(t){var n=t[0],i=e(n.addedNodes?n.addedNodes[0]:!1),o=e(n.removedNodes?n.removedNodes[0]:!1),a=i.add(o),r=a.is(D.addition)||a.closest(D.addition).length>0,s=a.is(D.message)||a.closest(D.message).length>0;r||s?(k.debug("Updating item selector cache"),k.refreshItems()):(k.debug("Menu modified, updating selector cache"),k.refresh())},mousedown:function(){Y=!0},mouseup:function(){Y=!1}},item:{mouseenter:function(t){var n=e(t.target),i=e(this),o=i.children(D.menu),a=i.siblings(D.item).children(D.menu),r=o.length>0,s=o.find(n).length>0;!s&&r&&(clearTimeout(k.itemTimer),k.itemTimer=setTimeout(function(){k.verbose("Showing sub-menu",o),e.each(a,function(){k.animate.hide(!1,e(this))}),k.animate.show(!1,o)},S.delay.show),t.preventDefault())},mouseleave:function(t){var n=e(this).children(D.menu);n.length>0&&(clearTimeout(k.itemTimer),k.itemTimer=setTimeout(function(){k.verbose("Hiding sub-menu",n),k.animate.hide(!1,n)},S.delay.hide))},click:function(t,n){var i=e(this),o=e(t?t.target:""),a=i.find(D.menu),r=k.get.choiceText(i),s=k.get.choiceValue(i,r),l=a.length>0,c=a.find(o).length>0;c||l&&!S.allowCategorySelection||(k.is.searchSelection()&&(S.allowAdditions&&k.remove.userAddition(),k.remove.searchTerm(),k.is.focusedOnSearch()||1==n||k.focusSearch(!0)),S.useLabels||(k.remove.filteredItem(),k.set.scrollPosition(i)),k.determine.selectAction.call(this,r,s))}},document:{keydown:function(e){var t=e.which,n=k.is.inObject(t,P);if(n){var i=I.find(D.label),o=i.filter("."+T.active),a=(o.data(E.value),i.index(o)),r=i.length,s=o.length>0,l=o.length>1,c=0===a,u=a+1==r,d=k.is.searchSelection(),f=k.is.focusedOnSearch(),m=k.is.focused(),g=f&&0===k.get.caretPosition();if(d&&!s&&!f)return;t==P.leftArrow?!m&&!g||s?s&&(e.shiftKey?k.verbose("Adding previous label to selection"):(k.verbose("Selecting previous label"),i.removeClass(T.active)),c&&!l?o.addClass(T.active):o.prev(D.siblingLabel).addClass(T.active).end(),e.preventDefault()):(k.verbose("Selecting previous label"),i.last().addClass(T.active)):t==P.rightArrow?(m&&!s&&i.first().addClass(T.active),s&&(e.shiftKey?k.verbose("Adding next label to selection"):(k.verbose("Selecting next label"),i.removeClass(T.active)),u?d?f?i.removeClass(T.active):k.focusSearch():l?o.next(D.siblingLabel).addClass(T.active):o.addClass(T.active):o.next(D.siblingLabel).addClass(T.active),e.preventDefault())):t==P.deleteKey||t==P.backspace?s?(k.verbose("Removing active labels"),u&&d&&!f&&k.focusSearch(),o.last().next(D.siblingLabel).addClass(T.active),k.remove.activeLabels(o),e.preventDefault()):g&&!s&&t==P.backspace&&(k.verbose("Removing last label on input backspace"),o=i.last().addClass(T.active),k.remove.activeLabels(o)):o.removeClass(T.active)}}},keydown:function(e){var t=e.which,n=k.is.inObject(t,P);if(n){var i,o,a=X.not(D.unselectable).filter("."+T.selected).eq(0),r=Q.children("."+T.active).eq(0),s=a.length>0?a:r,l=s.length>0?s.siblings(":not(."+T.filtered+")").addBack():Q.children(":not(."+T.filtered+")"),c=s.children(D.menu),u=s.closest(D.menu),d=u.hasClass(T.visible)||u.hasClass(T.animating)||u.parent(D.menu).length>0,f=c.length>0,m=s.length>0,g=s.not(D.unselectable).length>0,p=t==P.delimiter&&S.allowAdditions&&k.is.multiple(),h=S.allowAdditions&&S.hideAdditions&&(t==P.enter||p)&&g;if(h&&(k.verbose("Selecting item from keyboard shortcut",s),k.event.item.click.call(s,e),k.is.searchSelection()&&k.remove.searchTerm()),k.is.visible()){if((t==P.enter||p)&&(t==P.enter&&m&&f&&!S.allowCategorySelection?(k.verbose("Pressed enter on unselectable category, opening sub menu"),t=P.rightArrow):g&&(k.verbose("Selecting item from keyboard shortcut",s),k.event.item.click.call(s,e),k.is.searchSelection()&&k.remove.searchTerm()),e.preventDefault()),m&&(t==P.leftArrow&&(o=u[0]!==Q[0],o&&(k.verbose("Left key pressed, closing sub-menu"),k.animate.hide(!1,u),s.removeClass(T.selected),u.closest(D.item).addClass(T.selected),e.preventDefault())),t==P.rightArrow&&f&&(k.verbose("Right key pressed, opening sub-menu"),k.animate.show(!1,c),s.removeClass(T.selected),c.find(D.item).eq(0).addClass(T.selected),e.preventDefault())),t==P.upArrow){if(i=m&&d?s.prevAll(D.item+":not("+D.unselectable+")").eq(0):X.eq(0),l.index(i)<0)return k.verbose("Up key pressed but reached top of current menu"),void e.preventDefault();k.verbose("Up key pressed, changing active item"),s.removeClass(T.selected),i.addClass(T.selected),k.set.scrollPosition(i),S.selectOnKeydown&&k.is.single()&&k.set.selectedItem(i),e.preventDefault()}if(t==P.downArrow){if(i=m&&d?i=s.nextAll(D.item+":not("+D.unselectable+")").eq(0):X.eq(0),0===i.length)return k.verbose("Down key pressed but reached bottom of current menu"),void e.preventDefault();k.verbose("Down key pressed, changing active item"),X.removeClass(T.selected),i.addClass(T.selected),k.set.scrollPosition(i),S.selectOnKeydown&&k.is.single()&&k.set.selectedItem(i),e.preventDefault()}t==P.pageUp&&(k.scrollPage("up"),e.preventDefault()),t==P.pageDown&&(k.scrollPage("down"),e.preventDefault()),t==P.escape&&(k.verbose("Escape key pressed, closing dropdown"),k.hide())}else p&&e.preventDefault(),t!=P.downArrow||k.is.visible()||(k.verbose("Down key pressed, showing dropdown"),k.select.firstUnfiltered(),k.show(),e.preventDefault())}else k.has.search()||k.set.selectedLetter(String.fromCharCode(t))}},trigger:{change:function(){var e=n.createEvent("HTMLEvents"),t=U[0];t&&(k.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},determine:{selectAction:function(t,n){k.verbose("Determining action",S.action),e.isFunction(k.action[S.action])?(k.verbose("Triggering preset action",S.action,t,n),k.action[S.action].call(Z,t,n,this)):e.isFunction(S.action)?(k.verbose("Triggering user action",S.action,t,n),S.action.call(Z,t,n,this)):k.error(q.action,S.action)},eventInModule:function(t,i){var o=e(t.target),a=o.closest(n.documentElement).length>0,r=o.closest(I).length>0;return i=e.isFunction(i)?i:function(){},a&&!r?(k.verbose("Triggering event",i),i(),!0):(k.verbose("Event occurred in dropdown, canceling callback"),!1)},eventOnElement:function(t,i){var o=e(t.target),a=o.closest(D.siblingLabel),r=n.body.contains(t.target),s=0===I.find(a).length,l=0===o.closest(Q).length;return i=e.isFunction(i)?i:function(){},r&&s&&l?(k.verbose("Triggering event",i),i(),!0):(k.verbose("Event occurred in dropdown menu, canceling callback"),!1)}},action:{nothing:function(){},activate:function(t,n,o){if(n=n!==i?n:t,k.can.activate(e(o))){if(k.set.selected(n,e(o)),k.is.multiple()&&!k.is.allFiltered())return;k.hideAndClear()}},select:function(t,n,o){if(n=n!==i?n:t,k.can.activate(e(o))){if(k.set.value(n,e(o)),k.is.multiple()&&!k.is.allFiltered())return;k.hideAndClear()}},combo:function(t,n,o){n=n!==i?n:t,k.set.selected(n,e(o)),k.hideAndClear()},hide:function(e,t,n){k.set.value(t,e),k.hideAndClear()}},get:{id:function(){return x},defaultText:function(){return I.data(E.defaultText)},defaultValue:function(){return I.data(E.defaultValue)},placeholderText:function(){return I.data(E.placeholderText)||""},text:function(){return N.text()},query:function(){return e.trim(V.val())},searchWidth:function(e){return e=e!==i?e:V.val(),H.text(e),Math.ceil(H.width()+1)},selectionCount:function(){var t,n=k.get.values();return t=k.is.multiple()?e.isArray(n)?n.length:0:""!==k.get.value()?1:0},transition:function(e){return"auto"==S.transition?k.is.upward(e)?"slide up":"slide down":S.transition},userValues:function(){var t=k.get.values();return!!t&&(t=e.isArray(t)?t:[t],e.grep(t,function(e){return k.get.item(e)===!1}))},uniqueArray:function(t){return e.grep(t,function(n,i){return e.inArray(n,t)===i})},caretPosition:function(){var e,t,i=V.get(0);return"selectionStart"in i?i.selectionStart:n.selection?(i.focus(),e=n.selection.createRange(),t=e.text.length,e.moveStart("character",-i.value.length),e.text.length-t):void 0},value:function(){var t=U.length>0?U.val():I.data(E.value),n=e.isArray(t)&&1===t.length&&""===t[0];return t===i||n?"":t},values:function(){var e=k.get.value();return""===e?"":!k.has.selectInput()&&k.is.multiple()?"string"==typeof e?e.split(S.delimiter):"":e},remoteValues:function(){var t=k.get.values(),n=!1;return t&&("string"==typeof t&&(t=[t]),e.each(t,function(e,t){var i=k.read.remoteData(t);k.verbose("Restoring value from session data",i,t),i&&(n||(n={}),n[t]=i)})),n},choiceText:function(t,n){if(n=n!==i?n:S.preserveHTML,t)return t.find(D.menu).length>0&&(k.verbose("Retrieving text of element with sub-menu"),t=t.clone(),t.find(D.menu).remove(),t.find(D.menuIcon).remove()),t.data(E.text)!==i?t.data(E.text):n?e.trim(t.html()):e.trim(t.text())},choiceValue:function(t,n){return n=n||k.get.choiceText(t),!!t&&(t.data(E.value)!==i?String(t.data(E.value)):"string"==typeof n?e.trim(n.toLowerCase()):String(n))},inputEvent:function(){var e=V[0];return!!e&&(e.oninput!==i?"input":e.onpropertychange!==i?"propertychange":"keyup")},selectValues:function(){var t={};return t.values=[],I.find("option").each(function(){var n=e(this),o=n.html(),a=n.attr("disabled"),r=n.attr("value")!==i?n.attr("value"):o;"auto"===S.placeholder&&""===r?t.placeholder=o:t.values.push({name:o,value:r,disabled:a})}),S.placeholder&&"auto"!==S.placeholder&&(k.debug("Setting placeholder value to",S.placeholder),t.placeholder=S.placeholder),S.sortSelect?(t.values.sort(function(e,t){return e.name>t.name?1:-1}),k.debug("Retrieved and sorted values from select",t)):k.debug("Retrieved values from select",t),t},activeItem:function(){return X.filter("."+T.active)},selectedItem:function(){var e=X.not(D.unselectable).filter("."+T.selected);return e.length>0?e:X.eq(0)},itemWithAdditions:function(e){var t=k.get.item(e),n=k.create.userChoice(e),i=n&&n.length>0;return i&&(t=t.length>0?t.add(n):n),t},item:function(t,n){var o,a,r=!1;return t=t!==i?t:k.get.values()!==i?k.get.values():k.get.text(),o=a?t.length>0:t!==i&&null!==t,a=k.is.multiple()&&e.isArray(t),n=""===t||0===t||(n||!1),o&&X.each(function(){var o=e(this),s=k.get.choiceText(o),l=k.get.choiceValue(o,s);if(null!==l&&l!==i)if(a)e.inArray(String(l),t)===-1&&e.inArray(s,t)===-1||(r=r?r.add(o):o);else if(n){if(k.verbose("Ambiguous dropdown value using strict type check",o,t),l===t||s===t)return r=o,!0}else if(String(l)==String(t)||s==t)return k.verbose("Found select item by value",l,t),r=o,!0}),r}},check:{maxSelections:function(e){return!S.maxSelections||(e=e!==i?e:k.get.selectionCount(),e>=S.maxSelections?(k.debug("Maximum selection count reached"),S.useLabels&&(X.addClass(T.filtered),k.add.message(A.maxSelections)),!0):(k.verbose("No longer at maximum selection count"),k.remove.message(),k.remove.filteredItem(),k.is.searchSelection()&&k.filterItems(),!1))}},restore:{defaults:function(){k.clear(),k.restore.defaultText(),k.restore.defaultValue()},defaultText:function(){var e=k.get.defaultText(),t=k.get.placeholderText;e===t?(k.debug("Restoring default placeholder text",e),k.set.placeholderText(e)):(k.debug("Restoring default text",e),k.set.text(e))},placeholderText:function(){k.set.placeholderText()},defaultValue:function(){var e=k.get.defaultValue();e!==i&&(k.debug("Restoring default value",e),""!==e?(k.set.value(e),k.set.selected()):(k.remove.activeItem(),k.remove.selectedItem()))},labels:function(){S.allowAdditions&&(S.useLabels||(k.error(q.labels),S.useLabels=!0),k.debug("Restoring selected values"),k.create.userLabels()),k.check.maxSelections()},selected:function(){k.restore.values(),k.is.multiple()?(k.debug("Restoring previously selected values and labels"),k.restore.labels()):k.debug("Restoring previously selected values")},values:function(){k.set.initialLoad(),S.apiSettings&&S.saveRemoteData&&k.get.remoteValues()?k.restore.remoteValues():k.set.selected(),k.remove.initialLoad()},remoteValues:function(){var t=k.get.remoteValues();k.debug("Recreating selected from session data",t),t&&(k.is.single()?e.each(t,function(e,t){k.set.text(t)}):e.each(t,function(e,t){k.add.label(e,t)}))}},read:{remoteData:function(e){var n;return t.Storage===i?void k.error(q.noStorage):(n=sessionStorage.getItem(e),n!==i&&n)}},save:{defaults:function(){k.save.defaultText(),k.save.placeholderText(),k.save.defaultValue()},defaultValue:function(){var e=k.get.value();k.verbose("Saving default value as",e),I.data(E.defaultValue,e)},defaultText:function(){var e=k.get.text();k.verbose("Saving default text as",e),I.data(E.defaultText,e)},placeholderText:function(){var e;S.placeholder!==!1&&N.hasClass(T.placeholder)&&(e=k.get.text(),k.verbose("Saving placeholder text as",e),I.data(E.placeholderText,e))},remoteData:function(e,n){return t.Storage===i?void k.error(q.noStorage):(k.verbose("Saving remote data to session storage",n,e),void sessionStorage.setItem(n,e))}},clear:function(){k.is.multiple()&&S.useLabels?k.remove.labels():(k.remove.activeItem(),k.remove.selectedItem()),k.set.placeholderText(),k.clearValue()},clearValue:function(){k.set.value("")},scrollPage:function(e,t){var n,i,o,a=t||k.get.selectedItem(),r=a.closest(D.menu),s=r.outerHeight(),l=r.scrollTop(),c=X.eq(0).outerHeight(),u=Math.floor(s/c),d=(r.prop("scrollHeight"),"up"==e?l-c*u:l+c*u),f=X.not(D.unselectable);o="up"==e?f.index(a)-u:f.index(a)+u,n="up"==e?o>=0:o<f.length,i=n?f.eq(o):"up"==e?f.first():f.last(),i.length>0&&(k.debug("Scrolling page",e,i),a.removeClass(T.selected),i.addClass(T.selected),S.selectOnKeydown&&k.is.single()&&k.set.selectedItem(i),r.scrollTop(d))},set:{filtered:function(){var e=k.is.multiple(),t=k.is.searchSelection(),n=e&&t,i=t?k.get.query():"",o="string"==typeof i&&i.length>0,a=k.get.searchWidth(),r=""!==i;e&&o&&(k.verbose("Adjusting input width",a,S.glyphWidth),V.css("width",a)),o||n&&r?(k.verbose("Hiding placeholder text"),N.addClass(T.filtered)):(!e||n&&!r)&&(k.verbose("Showing placeholder text"),N.removeClass(T.filtered))},empty:function(){I.addClass(T.empty)},loading:function(){I.addClass(T.loading)},placeholderText:function(e){e=e||k.get.placeholderText(),k.debug("Setting placeholder text",e),k.set.text(e),N.addClass(T.placeholder)},tabbable:function(){k.has.search()?(k.debug("Added tabindex to searchable dropdown"),V.val("").attr("tabindex",0),Q.attr("tabindex",-1)):(k.debug("Added tabindex to dropdown"),I.attr("tabindex")===i&&(I.attr("tabindex",0),Q.attr("tabindex",-1)))},initialLoad:function(){k.verbose("Setting initial load"),h=!0},activeItem:function(e){S.allowAdditions&&e.filter(D.addition).length>0?e.addClass(T.filtered):e.addClass(T.active)},partialSearch:function(e){var t=k.get.query().length;V.val(e.substr(0,t))},scrollPosition:function(e,t){var n,o,a,r,s,l,c,u,d,f=5;e=e||k.get.selectedItem(),n=e.closest(D.menu),o=e&&e.length>0,t=t!==i&&t,e&&n.length>0&&o&&(r=e.position().top,n.addClass(T.loading),l=n.scrollTop(),s=n.offset().top,r=e.offset().top,a=l-s+r,t||(c=n.height(),d=l+c<a+f,u=a-f<l),k.debug("Scrolling to active item",a),(t||u||d)&&n.scrollTop(a),n.removeClass(T.loading))},text:function(e){"select"!==S.action&&("combo"==S.action?(k.debug("Changing combo button text",e,B),S.preserveHTML?B.html(e):B.text(e)):(e!==k.get.placeholderText()&&N.removeClass(T.placeholder),k.debug("Changing text",e,N),N.removeClass(T.filtered),S.preserveHTML?N.html(e):N.text(e)))},selectedItem:function(e){var t=k.get.choiceValue(e),n=k.get.choiceText(e,!1);k.debug("Setting user selection to item",e),k.remove.activeItem(),k.set.partialSearch(n),k.set.activeItem(e),k.set.selected(t,e),k.set.text(n)},selectedLetter:function(t){var n,i=X.filter("."+T.selected),o=i.length>0&&k.has.firstLetter(i,t),a=!1;o&&(n=i.nextAll(X).eq(0),k.has.firstLetter(n,t)&&(a=n)),a||X.each(function(){if(k.has.firstLetter(e(this),t))return a=e(this),!1}),a&&(k.verbose("Scrolling to next value with letter",t),k.set.scrollPosition(a),i.removeClass(T.selected),a.addClass(T.selected),S.selectOnKeydown&&k.is.single()&&k.set.selectedItem(a))},direction:function(e){"auto"==S.direction?k.is.onScreen(e)?k.remove.upward(e):k.set.upward(e):"upward"==S.direction&&k.set.upward(e)},upward:function(e){var t=e||I;t.addClass(T.upward)},value:function(e,t,n){var o=k.escape.value(e),a=U.length>0,r=(!k.has.value(e),k.get.values()),s=e!==i?String(e):e;if(a){if(!S.allowReselection&&s==r&&(k.verbose("Skipping value update already same value",e,r),!k.is.initialLoad()))return;k.is.single()&&k.has.selectInput()&&k.can.extendSelect()&&(k.debug("Adding user option",e),k.add.optionValue(e)),k.debug("Updating input value",o,r),K=!0,U.val(o),S.fireOnInit===!1&&k.is.initialLoad()?k.debug("Input native change event ignored on initial load"):k.trigger.change(),K=!1}else k.verbose("Storing value in metadata",o,U),o!==r&&I.data(E.value,s);S.fireOnInit===!1&&k.is.initialLoad()?k.verbose("No callback on initial load",S.onChange):S.onChange.call(Z,e,t,n)},active:function(){I.addClass(T.active)},multiple:function(){I.addClass(T.multiple)},visible:function(){I.addClass(T.visible)},exactly:function(e,t){k.debug("Setting selected to exact values"),k.clear(),k.set.selected(e,t)},selected:function(t,n){var i=k.is.multiple();n=S.allowAdditions?n||k.get.itemWithAdditions(t):n||k.get.item(t),n&&(k.debug("Setting selected menu item to",n),k.is.multiple()&&k.remove.searchWidth(),k.is.single()?(k.remove.activeItem(),k.remove.selectedItem()):S.useLabels&&k.remove.selectedItem(),n.each(function(){var t=e(this),o=k.get.choiceText(t),a=k.get.choiceValue(t,o),r=t.hasClass(T.filtered),s=t.hasClass(T.active),l=t.hasClass(T.addition),c=i&&1==n.length;i?!s||l?(S.apiSettings&&S.saveRemoteData&&k.save.remoteData(o,a),S.useLabels?(k.add.value(a,o,t),k.add.label(a,o,c),k.set.activeItem(t),k.filterActive(),k.select.nextAvailable(n)):(k.add.value(a,o,t),k.set.text(k.add.variables(A.count)),k.set.activeItem(t))):r||(k.debug("Selected active value, removing label"),k.remove.selected(a)):(S.apiSettings&&S.saveRemoteData&&k.save.remoteData(o,a),k.set.text(o),k.set.value(a,o,t),t.addClass(T.active).addClass(T.selected))}))}},add:{label:function(t,n,i){var o,a=k.is.searchSelection()?V:N,r=k.escape.value(t);return o=e("<a />").addClass(T.label).attr("data-value",r).html(j.label(r,n)),o=S.onLabelCreate.call(o,r,n),k.has.label(t)?void k.debug("Label already exists, skipping",r):(S.label.variation&&o.addClass(S.label.variation),void(i===!0?(k.debug("Animating in label",o),o.addClass(T.hidden).insertBefore(a).transition(S.label.transition,S.label.duration)):(k.debug("Adding selection label",o),o.insertBefore(a))))},message:function(t){var n=Q.children(D.message),i=S.templates.message(k.add.variables(t));n.length>0?n.html(i):n=e("<div/>").html(i).addClass(T.message).appendTo(Q)},optionValue:function(t){var n=k.escape.value(t),i=U.find('option[value="'+n+'"]'),o=i.length>0;o||(k.disconnect.selectObserver(),k.is.single()&&(k.verbose("Removing previous user addition"),U.find("option."+T.addition).remove()),e("<option/>").prop("value",n).addClass(T.addition).html(t).appendTo(U),k.verbose("Adding user addition as an <option>",t),k.observe.select())},userSuggestion:function(e){var t,n=Q.children(D.addition),i=k.get.item(e),o=i&&i.not(D.addition).length,a=n.length>0;if(!S.useLabels||!k.has.maxSelections()){if(""===e||o)return void n.remove();a?(n.data(E.value,e).data(E.text,e).attr("data-"+E.value,e).attr("data-"+E.text,e).removeClass(T.filtered),S.hideAdditions||(t=S.templates.addition(k.add.variables(A.addResult,e)),n.html(t)),k.verbose("Replacing user suggestion with new value",n)):(n=k.create.userChoice(e),n.prependTo(Q),k.verbose("Adding item choice to menu corresponding with user choice addition",n)),S.hideAdditions&&!k.is.allFiltered()||n.addClass(T.selected).siblings().removeClass(T.selected),k.refreshItems()}},variables:function(e,t){var n,i,o=e.search("{count}")!==-1,a=e.search("{maxCount}")!==-1,r=e.search("{term}")!==-1;return k.verbose("Adding templated variables to message",e),o&&(n=k.get.selectionCount(),e=e.replace("{count}",n)),a&&(n=k.get.selectionCount(),e=e.replace("{maxCount}",S.maxSelections)),r&&(i=t||k.get.query(),e=e.replace("{term}",i)),e},value:function(t,n,i){var o,a=k.get.values();return""===t?void k.debug("Cannot select blank values from multiselect"):(e.isArray(a)?(o=a.concat([t]),o=k.get.uniqueArray(o)):o=[t],k.has.selectInput()?k.can.extendSelect()&&(k.debug("Adding value to select",t,o,U),k.add.optionValue(t)):(o=o.join(S.delimiter),k.debug("Setting hidden input to delimited value",o,U)),S.fireOnInit===!1&&k.is.initialLoad()?k.verbose("Skipping onadd callback on initial load",S.onAdd):S.onAdd.call(Z,t,n,i),k.set.value(o,t,n,i),void k.check.maxSelections())}},remove:{active:function(){I.removeClass(T.active)},activeLabel:function(){I.find(D.label).removeClass(T.active)},empty:function(){I.removeClass(T.empty)},loading:function(){I.removeClass(T.loading)},initialLoad:function(){h=!1},upward:function(e){var t=e||I;t.removeClass(T.upward)},visible:function(){I.removeClass(T.visible)},activeItem:function(){X.removeClass(T.active)},filteredItem:function(){S.useLabels&&k.has.maxSelections()||(S.useLabels&&k.is.multiple()?X.not("."+T.active).removeClass(T.filtered):X.removeClass(T.filtered),k.remove.empty())},optionValue:function(e){var t=k.escape.value(e),n=U.find('option[value="'+t+'"]'),i=n.length>0;i&&n.hasClass(T.addition)&&(C&&(C.disconnect(),k.verbose("Temporarily disconnecting mutation observer")),n.remove(),k.verbose("Removing user addition as an <option>",t),C&&C.observe(U[0],{childList:!0,subtree:!0}))},message:function(){Q.children(D.message).remove()},searchWidth:function(){V.css("width","")},searchTerm:function(){k.verbose("Cleared search term"),V.val(""),k.set.filtered()},userAddition:function(){X.filter(D.addition).remove()},selected:function(t,n){return!!(n=S.allowAdditions?n||k.get.itemWithAdditions(t):n||k.get.item(t))&&void n.each(function(){var t=e(this),n=k.get.choiceText(t),i=k.get.choiceValue(t,n);k.is.multiple()?S.useLabels?(k.remove.value(i,n,t),k.remove.label(i)):(k.remove.value(i,n,t),0===k.get.selectionCount()?k.set.placeholderText():k.set.text(k.add.variables(A.count))):k.remove.value(i,n,t),t.removeClass(T.filtered).removeClass(T.active),S.useLabels&&t.removeClass(T.selected)})},selectedItem:function(){X.removeClass(T.selected)},value:function(e,t,n){var i,o=k.get.values();k.has.selectInput()?(k.verbose("Input is <select> removing selected option",e),i=k.remove.arrayValue(e,o),k.remove.optionValue(e)):(k.verbose("Removing from delimited values",e),i=k.remove.arrayValue(e,o),i=i.join(S.delimiter)),S.fireOnInit===!1&&k.is.initialLoad()?k.verbose("No callback on initial load",S.onRemove):S.onRemove.call(Z,e,t,n),k.set.value(i,t,n),k.check.maxSelections()},arrayValue:function(t,n){return e.isArray(n)||(n=[n]),n=e.grep(n,function(e){return t!=e}),k.verbose("Removed value from delimited string",t,n),n},label:function(e,t){var n=I.find(D.label),i=n.filter('[data-value="'+e+'"]');k.verbose("Removing label",i),i.remove()},activeLabels:function(e){e=e||I.find(D.label).filter("."+T.active),k.verbose("Removing active label selections",e),k.remove.labels(e)},labels:function(t){t=t||I.find(D.label),k.verbose("Removing labels",t),t.each(function(){var t=e(this),n=t.data(E.value),o=n!==i?String(n):n,a=k.is.userValue(o);return S.onLabelRemove.call(t,n)===!1?void k.debug("Label remove callback cancelled removal"):(k.remove.message(),void(a?(k.remove.value(o),k.remove.label(o)):k.remove.selected(o)))})},tabbable:function(){k.has.search()?(k.debug("Searchable dropdown initialized"),V.removeAttr("tabindex"),Q.removeAttr("tabindex")):(k.debug("Simple selection dropdown initialized"),I.removeAttr("tabindex"),Q.removeAttr("tabindex"))}},has:{menuSearch:function(){return k.has.search()&&V.closest(Q).length>0},search:function(){return V.length>0},sizer:function(){return H.length>0},selectInput:function(){return U.is("select")},minCharacters:function(e){return!S.minCharacters||(e=e!==i?String(e):String(k.get.query()),e.length>=S.minCharacters)},firstLetter:function(e,t){var n,i;return!(!e||0===e.length||"string"!=typeof t)&&(n=k.get.choiceText(e,!1),t=t.toLowerCase(),i=String(n).charAt(0).toLowerCase(),t==i)},input:function(){return U.length>0},items:function(){return X.length>0},menu:function(){return Q.length>0},message:function(){return 0!==Q.children(D.message).length},label:function(e){var t=k.escape.value(e),n=I.find(D.label);return n.filter('[data-value="'+t+'"]').length>0},maxSelections:function(){return S.maxSelections&&k.get.selectionCount()>=S.maxSelections},allResultsFiltered:function(){var e=X.not(D.addition);return e.filter(D.unselectable).length===e.length},userSuggestion:function(){return Q.children(D.addition).length>0},query:function(){return""!==k.get.query()},value:function(t){var n=k.get.values(),i=e.isArray(n)?n&&e.inArray(t,n)!==-1:n==t;return!!i}},is:{active:function(){return I.hasClass(T.active)},bubbledLabelClick:function(t){return e(t.target).is("select, input")&&I.closest("label").length>0},bubbledIconClick:function(t){return e(t.target).closest(W).length>0},alreadySetup:function(){return I.is("select")&&I.parent(D.dropdown).length>0&&0===I.prev().length},animating:function(e){return e?e.transition&&e.transition("is animating"):Q.transition&&Q.transition("is animating")},disabled:function(){return I.hasClass(T.disabled)},focused:function(){return n.activeElement===I[0]},focusedOnSearch:function(){return n.activeElement===V[0]},allFiltered:function(){return(k.is.multiple()||k.has.search())&&!(0==S.hideAdditions&&k.has.userSuggestion())&&!k.has.message()&&k.has.allResultsFiltered()},hidden:function(e){return!k.is.visible(e)},initialLoad:function(){return h},onScreen:function(e){var t,n=e||Q,i=!0,o={};return n.addClass(T.loading),t={context:{scrollTop:L.scrollTop(),height:L.outerHeight()},menu:{offset:n.offset(),height:n.outerHeight()}},o={above:t.context.scrollTop<=t.menu.offset.top-t.menu.height,below:t.context.scrollTop+t.context.height>=t.menu.offset.top+t.menu.height},o.below?(k.verbose("Dropdown can fit in context downward",o),i=!0):o.below||o.above?(k.verbose("Dropdown cannot fit below, opening upward",o),i=!1):(k.verbose("Dropdown cannot fit in either direction, favoring downward",o),i=!0),n.removeClass(T.loading),i},inObject:function(t,n){var i=!1;return e.each(n,function(e,n){if(n==t)return i=!0,!0}),i},multiple:function(){return I.hasClass(T.multiple)},single:function(){return!k.is.multiple()},selectMutation:function(t){var n=!1;return e.each(t,function(t,i){if(i.target&&e(i.target).is("select"))return n=!0,!0}),n},search:function(){return I.hasClass(T.search)},searchSelection:function(){return k.has.search()&&1===V.parent(D.dropdown).length},selection:function(){return I.hasClass(T.selection)},userValue:function(t){return e.inArray(t,k.get.userValues())!==-1},upward:function(e){var t=e||I;return t.hasClass(T.upward)},visible:function(e){return e?e.hasClass(T.visible):Q.hasClass(T.visible)}},can:{activate:function(e){return!!S.useLabels||(!k.has.maxSelections()||!(!k.has.maxSelections()||!e.hasClass(T.active)))},click:function(){return c||"click"==S.on},extendSelect:function(){return S.allowAdditions||S.apiSettings},show:function(){return!k.is.disabled()&&(k.has.items()||k.has.message())},useAPI:function(){return e.fn.api!==i}},animate:{show:function(t,n){var o,a=n||Q,r=n?function(){}:function(){k.hideSubMenus(),k.hideOthers(),k.set.active()};t=e.isFunction(t)?t:function(){},k.verbose("Doing menu show animation",a),k.set.direction(n),o=k.get.transition(n),k.is.selection()&&k.set.scrollPosition(k.get.selectedItem(),!0),(k.is.hidden(a)||k.is.animating(a))&&("none"==o?(r(),a.transition("show"),t.call(Z)):e.fn.transition!==i&&I.transition("is supported")?a.transition({animation:o+" in",debug:S.debug,verbose:S.verbose,duration:S.duration,queue:!0,onStart:r,onComplete:function(){t.call(Z)}}):k.error(q.noTransition,o))},hide:function(t,n){var o=n||Q,a=(n?.9*S.duration:S.duration,n?function(){}:function(){k.can.click()&&k.unbind.intent(),k.remove.active()}),r=k.get.transition(n);t=e.isFunction(t)?t:function(){},(k.is.visible(o)||k.is.animating(o))&&(k.verbose("Doing menu hide animation",o),"none"==r?(a(),o.transition("hide"),t.call(Z)):e.fn.transition!==i&&I.transition("is supported")?o.transition({animation:r+" out",duration:S.duration,debug:S.debug,verbose:S.verbose,queue:!0,onStart:a,onComplete:function(){"auto"==S.direction&&k.remove.upward(n),t.call(Z)}}):k.error(q.transition))}},hideAndClear:function(){k.remove.searchTerm(),k.has.maxSelections()||(k.has.search()?k.hide(function(){k.remove.filteredItem()}):k.hide())},delay:{show:function(){k.verbose("Delaying show event to ensure user intent"),clearTimeout(k.timer),k.timer=setTimeout(k.show,S.delay.show)},hide:function(){k.verbose("Delaying hide event to ensure user intent"),clearTimeout(k.timer),k.timer=setTimeout(k.hide,S.delay.hide)}},escape:{value:function(t){var n=e.isArray(t),i="string"==typeof t,o=!i&&!n,a=i&&t.search(O.quote)!==-1,r=[];return k.has.selectInput()&&!o&&a?(k.debug("Encoding quote values for use in select",t),n?(e.each(t,function(e,t){r.push(t.replace(O.quote,"&quot;"))}),r):t.replace(O.quote,"&quot;")):t},regExp:function(e){return e=String(e),e.replace(O.escape,"\\$&")}},setting:function(t,n){if(k.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,S,t);else{if(n===i)return S[t];e.isPlainObject(S[t])?e.extend(!0,S[t],n):S[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,k,t);else{if(n===i)return k[t];k[t]=n}},debug:function(){!S.silent&&S.debug&&(S.performance?k.performance.log(arguments):(k.debug=Function.prototype.bind.call(console.info,console,S.name+":"),k.debug.apply(console,arguments)))},verbose:function(){!S.silent&&S.verbose&&S.debug&&(S.performance?k.performance.log(arguments):(k.verbose=Function.prototype.bind.call(console.info,console,S.name+":"),k.verbose.apply(console,arguments)))},error:function(){S.silent||(k.error=Function.prototype.bind.call(console.error,console,S.name+":"),k.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;S.performance&&(t=(new Date).getTime(),i=u||t,n=t-i,u=t,d.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:Z,"Execution Time":n})),clearTimeout(k.performance.timer),k.performance.timer=setTimeout(k.performance.display,500)},display:function(){var t=S.name+":",n=0;u=!1,clearTimeout(k.performance.timer),e.each(d,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",l&&(t+=" '"+l+"'"),(console.group!==i||console.table!==i)&&d.length>0&&(console.groupCollapsed(t),console.table?console.table(d):e.each(d,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),d=[]}},invoke:function(t,n,o){var r,s,l,c=J;return n=n||g,o=Z||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(k.error(q.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},m?(J===i&&k.initialize(),k.invoke(f)):(J!==i&&J.invoke("destroy"),
k.initialize())}),a!==i?a:r},e.fn.dropdown.settings={silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",action:"activate",apiSettings:!1,selectOnKeydown:!0,minCharacters:0,saveRemoteData:!0,throttle:200,context:t,direction:"auto",keepOnScreen:!0,match:"both",fullTextSearch:!1,placeholder:"auto",preserveHTML:!0,sortSelect:!1,forceSelection:!0,allowAdditions:!1,hideAdditions:!0,maxSelections:!1,useLabels:!0,delimiter:",",showOnFocus:!0,allowReselection:!1,allowTab:!0,allowCategorySelection:!1,fireOnInit:!1,transition:"auto",duration:200,glyphWidth:1.037,label:{transition:"scale",duration:200,variation:!1},delay:{hide:300,show:200,search:20,touch:50},onChange:function(e,t,n){},onAdd:function(e,t,n){},onRemove:function(e,t,n){},onLabelSelect:function(e){},onLabelCreate:function(t,n){return e(this)},onLabelRemove:function(e){return!0},onNoResults:function(e){return!0},onShow:function(){},onHide:function(){},name:"Dropdown",namespace:"dropdown",message:{addResult:"Add <b>{term}</b>",count:"{count} selected",maxSelections:"Max {maxCount} selections",noResults:"No results found.",serverError:"There was an error contacting the server"},error:{action:"You called a dropdown action that was not defined",alreadySetup:"Once a select has been initialized behaviors must be called on the created ui dropdown",labels:"Allowing user additions currently requires the use of labels.",missingMultiple:"<select> requires multiple property to be set to correctly preserve multiple values",method:"The method you called is not defined.",noAPI:"The API module is required to load resources remotely",noStorage:"Saving remote data requires session storage",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s]/g,quote:/"/g},metadata:{defaultText:"defaultText",defaultValue:"defaultValue",placeholderText:"placeholder",text:"text",value:"value"},fields:{remoteValues:"results",values:"values",disabled:"disabled",name:"name",value:"value",text:"text"},keys:{backspace:8,delimiter:188,deleteKey:46,enter:13,escape:27,pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},selector:{addition:".addition",dropdown:".ui.dropdown",hidden:".hidden",icon:"> .dropdown.icon",input:'> input[type="hidden"], > select',item:".item",label:"> .label",remove:"> .label > .delete.icon",siblingLabel:".label",menu:".menu",message:".message",menuIcon:".dropdown.icon",search:"input.search, .menu > .search > input, .menu input.search",sizer:"> input.sizer",text:"> .text:not(.icon)",unselectable:".disabled, .filtered"},className:{active:"active",addition:"addition",animating:"animating",disabled:"disabled",empty:"empty",dropdown:"ui dropdown",filtered:"filtered",hidden:"hidden transition",item:"item",label:"ui label",loading:"loading",menu:"menu",message:"message",multiple:"multiple",placeholder:"default",sizer:"sizer",search:"search",selected:"selected",selection:"selection",upward:"upward",visible:"visible"}},e.fn.dropdown.settings.templates={dropdown:function(t){var n=t.placeholder||!1,i=(t.values||{},"");return i+='<i class="dropdown icon"></i>',i+=t.placeholder?'<div class="default text">'+n+"</div>":'<div class="text"></div>',i+='<div class="menu">',e.each(t.values,function(e,t){i+=t.disabled?'<div class="disabled item" data-value="'+t.value+'">'+t.name+"</div>":'<div class="item" data-value="'+t.value+'">'+t.name+"</div>"}),i+="</div>"},menu:function(t,n){var i=t[n.values]||{},o="";return e.each(i,function(e,t){var i=t[n.text]?'data-text="'+t[n.text]+'"':"",a=t[n.disabled]?"disabled ":"";o+='<div class="'+a+'item" data-value="'+t[n.value]+'"'+i+">",o+=t[n.name],o+="</div>"}),o},label:function(e,t){return t+'<i class="delete icon"></i>'},message:function(e){return e},addition:function(e){return e}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.embed=function(n){var o,a=e(this),r=a.selector||"",s=(new Date).getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return a.each(function(){var f,m=e.isPlainObject(n)?e.extend(!0,{},e.fn.embed.settings,n):e.extend({},e.fn.embed.settings),g=m.selector,p=m.className,h=m.sources,v=m.error,b=m.metadata,y=m.namespace,x=m.templates,C="."+y,w="module-"+y,k=(e(t),e(this)),S=k.find(g.placeholder),T=k.find(g.icon),A=k.find(g.embed),R=this,P=k.data(w);f={initialize:function(){f.debug("Initializing embed"),f.determine.autoplay(),f.create(),f.bind.events(),f.instantiate()},instantiate:function(){f.verbose("Storing instance of module",f),P=f,k.data(w,f)},destroy:function(){f.verbose("Destroying previous instance of embed"),f.reset(),k.removeData(w).off(C)},refresh:function(){f.verbose("Refreshing selector cache"),S=k.find(g.placeholder),T=k.find(g.icon),A=k.find(g.embed)},bind:{events:function(){f.has.placeholder()&&(f.debug("Adding placeholder events"),k.on("click"+C,g.placeholder,f.createAndShow).on("click"+C,g.icon,f.createAndShow))}},create:function(){var e=f.get.placeholder();e?f.createPlaceholder():f.createAndShow()},createPlaceholder:function(e){var t=f.get.icon(),n=f.get.url();f.generate.embed(n);e=e||f.get.placeholder(),k.html(x.placeholder(e,t)),f.debug("Creating placeholder for embed",e,t)},createEmbed:function(t){f.refresh(),t=t||f.get.url(),A=e("<div/>").addClass(p.embed).html(f.generate.embed(t)).appendTo(k),m.onCreate.call(R,t),f.debug("Creating embed object",A)},changeEmbed:function(e){A.html(f.generate.embed(e))},createAndShow:function(){f.createEmbed(),f.show()},change:function(e,t,n){f.debug("Changing video to ",e,t,n),k.data(b.source,e).data(b.id,t),n?k.data(b.url,n):k.removeData(b.url),f.has.embed()?f.changeEmbed():f.create()},reset:function(){f.debug("Clearing embed and showing placeholder"),f.remove.active(),f.remove.embed(),f.showPlaceholder(),m.onReset.call(R)},show:function(){f.debug("Showing embed"),f.set.active(),m.onDisplay.call(R)},hide:function(){f.debug("Hiding embed"),f.showPlaceholder()},showPlaceholder:function(){f.debug("Showing placeholder image"),f.remove.active(),m.onPlaceholderDisplay.call(R)},get:{id:function(){return m.id||k.data(b.id)},placeholder:function(){return m.placeholder||k.data(b.placeholder)},icon:function(){return m.icon?m.icon:k.data(b.icon)!==i?k.data(b.icon):f.determine.icon()},source:function(e){return m.source?m.source:k.data(b.source)!==i?k.data(b.source):f.determine.source()},type:function(){var e=f.get.source();return h[e]!==i&&h[e].type},url:function(){return m.url?m.url:k.data(b.url)!==i?k.data(b.url):f.determine.url()}},determine:{autoplay:function(){f.should.autoplay()&&(m.autoplay=!0)},source:function(t){var n=!1;return t=t||f.get.url(),t&&e.each(h,function(e,i){if(t.search(i.domain)!==-1)return n=e,!1}),n},icon:function(){var e=f.get.source();return h[e]!==i&&h[e].icon},url:function(){var e,t=m.id||k.data(b.id),n=m.source||k.data(b.source);return e=h[n]!==i&&h[n].url.replace("{id}",t),e&&k.data(b.url,e),e}},set:{active:function(){k.addClass(p.active)}},remove:{active:function(){k.removeClass(p.active)},embed:function(){A.empty()}},encode:{parameters:function(e){var t,n=[];for(t in e)n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return n.join("&amp;")}},generate:{embed:function(e){f.debug("Generating embed html");var t,n,i=f.get.source();return e=f.get.url(e),e?(n=f.generate.parameters(i),t=x.iframe(e,n)):f.error(v.noURL,k),t},parameters:function(t,n){var o=h[t]&&h[t].parameters!==i?h[t].parameters(m):{};return n=n||m.parameters,n&&(o=e.extend({},o,n)),o=m.onEmbed(o),f.encode.parameters(o)}},has:{embed:function(){return A.length>0},placeholder:function(){return m.placeholder||k.data(b.placeholder)}},should:{autoplay:function(){return"auto"===m.autoplay?m.placeholder||k.data(b.placeholder)!==i:m.autoplay}},is:{video:function(){return"video"==f.get.type()}},setting:function(t,n){if(f.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];e.isPlainObject(m[t])?e.extend(!0,m[t],n):m[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,f,t);else{if(n===i)return f[t];f[t]=n}},debug:function(){!m.silent&&m.debug&&(m.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,m.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),f.verbose.apply(console,arguments)))},error:function(){m.silent||(f.error=Function.prototype.bind.call(console.error,console,m.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;m.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:R,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var t=m.name+":",n=0;s=!1,clearTimeout(f.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),a.length>1&&(t+=" ("+a.length+")"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,a){var r,s,l,c=P;return n=n||d,a=R||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(f.error(v.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s}},u?(P===i&&f.initialize(),f.invoke(c)):(P!==i&&P.invoke("destroy"),f.initialize())}),o!==i?o:this},e.fn.embed.settings={name:"Embed",namespace:"embed",silent:!1,debug:!1,verbose:!1,performance:!0,icon:!1,source:!1,url:!1,id:!1,autoplay:"auto",color:"#444444",hd:!0,brandedUI:!1,parameters:!1,onDisplay:function(){},onPlaceholderDisplay:function(){},onReset:function(){},onCreate:function(e){},onEmbed:function(e){return e},metadata:{id:"id",icon:"icon",placeholder:"placeholder",source:"source",url:"url"},error:{noURL:"No URL specified",method:"The method you called is not defined"},className:{active:"active",embed:"embed"},selector:{embed:".embed",placeholder:".placeholder",icon:".icon"},sources:{youtube:{name:"youtube",type:"video",icon:"video play",domain:"youtube.com",url:"//www.youtube.com/embed/{id}",parameters:function(e){return{autohide:!e.brandedUI,autoplay:e.autoplay,color:e.color||i,hq:e.hd,jsapi:e.api,modestbranding:!e.brandedUI}}},vimeo:{name:"vimeo",type:"video",icon:"video play",domain:"vimeo.com",url:"//player.vimeo.com/video/{id}",parameters:function(e){return{api:e.api,autoplay:e.autoplay,byline:e.brandedUI,color:e.color||i,portrait:e.brandedUI,title:e.brandedUI}}}},templates:{iframe:function(e,t){var n=e;return t&&(n+="?"+t),'<iframe src="'+n+'" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'},placeholder:function(e,t){var n="";return t&&(n+='<i class="'+t+' icon"></i>'),e&&(n+='<img class="placeholder" src="'+e+'">'),n}},api:!1,onPause:function(){},onPlay:function(){},onStop:function(){}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.modal=function(o){var a,r=e(this),s=e(t),l=e(n),c=e("body"),u=r.selector||"",d=(new Date).getTime(),f=[],m=arguments[0],g="string"==typeof m,p=[].slice.call(arguments,1),h=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return r.each(function(){var r,v,b,y,x,C,w,k,S,T=e.isPlainObject(o)?e.extend(!0,{},e.fn.modal.settings,o):e.extend({},e.fn.modal.settings),A=T.selector,R=T.className,P=T.namespace,E=T.error,F="."+P,O="module-"+P,D=e(this),q=e(T.context),j=D.find(A.close),z=this,M=D.data(O);S={initialize:function(){S.verbose("Initializing dimmer",q),S.create.id(),S.create.dimmer(),S.refreshModals(),S.bind.events(),T.observeChanges&&S.observeChanges(),S.instantiate()},instantiate:function(){S.verbose("Storing instance of modal"),M=S,D.data(O,M)},create:{dimmer:function(){var t={debug:T.debug,dimmerName:"modals",duration:{show:T.duration,hide:T.duration}},n=e.extend(!0,t,T.dimmerSettings);return T.inverted&&(n.variation=n.variation!==i?n.variation+" inverted":"inverted"),e.fn.dimmer===i?void S.error(E.dimmer):(S.debug("Creating dimmer with settings",n),y=q.dimmer(n),T.detachable?(S.verbose("Modal is detachable, moving content into dimmer"),y.dimmer("add content",D)):S.set.undetached(),T.blurring&&y.addClass(R.blurring),void(x=y.dimmer("get dimmer")))},id:function(){w=(Math.random().toString(16)+"000000000").substr(2,8),C="."+w,S.verbose("Creating unique id for element",w)}},destroy:function(){S.verbose("Destroying previous modal"),D.removeData(O).off(F),s.off(C),x.off(C),j.off(F),q.dimmer("destroy")},observeChanges:function(){"MutationObserver"in t&&(k=new MutationObserver(function(e){S.debug("DOM tree modified, refreshing"),S.refresh()}),k.observe(z,{childList:!0,subtree:!0}),S.debug("Setting up mutation observer",k))},refresh:function(){S.remove.scrolling(),S.cacheSizes(),S.set.screenHeight(),S.set.type(),S.set.position()},refreshModals:function(){v=D.siblings(A.modal),r=v.add(D)},attachEvents:function(t,n){var i=e(t);n=e.isFunction(S[n])?S[n]:S.toggle,i.length>0?(S.debug("Attaching modal events to element",t,n),i.off(F).on("click"+F,n)):S.error(E.notFound,t)},bind:{events:function(){S.verbose("Attaching events"),D.on("click"+F,A.close,S.event.close).on("click"+F,A.approve,S.event.approve).on("click"+F,A.deny,S.event.deny),s.on("resize"+C,S.event.resize)}},get:{id:function(){return(Math.random().toString(16)+"000000000").substr(2,8)}},event:{approve:function(){return T.onApprove.call(z,e(this))===!1?void S.verbose("Approve callback returned false cancelling hide"):void S.hide()},deny:function(){return T.onDeny.call(z,e(this))===!1?void S.verbose("Deny callback returned false cancelling hide"):void S.hide()},close:function(){S.hide()},click:function(t){var i=e(t.target),o=i.closest(A.modal).length>0,a=e.contains(n.documentElement,t.target);!o&&a&&(S.debug("Dimmer clicked, hiding all modals"),S.is.active()&&(S.remove.clickaway(),T.allowMultiple?S.hide():S.hideAll()))},debounce:function(e,t){clearTimeout(S.timer),S.timer=setTimeout(e,t)},keyboard:function(e){var t=e.which,n=27;t==n&&(T.closable?(S.debug("Escape key pressed hiding modal"),S.hide()):S.debug("Escape key pressed, but closable is set to false"),e.preventDefault())},resize:function(){y.dimmer("is active")&&h(S.refresh)}},toggle:function(){S.is.active()||S.is.animating()?S.hide():S.show()},show:function(t){t=e.isFunction(t)?t:function(){},S.refreshModals(),S.showModal(t)},hide:function(t){t=e.isFunction(t)?t:function(){},S.refreshModals(),S.hideModal(t)},showModal:function(t){t=e.isFunction(t)?t:function(){},S.is.animating()||!S.is.active()?(S.showDimmer(),S.cacheSizes(),S.set.position(),S.set.screenHeight(),S.set.type(),S.set.clickaway(),!T.allowMultiple&&S.others.active()?S.hideOthers(S.showModal):(T.onShow.call(z),T.transition&&e.fn.transition!==i&&D.transition("is supported")?(S.debug("Showing modal with css animations"),D.transition({debug:T.debug,animation:T.transition+" in",queue:T.queue,duration:T.duration,useFailSafe:!0,onComplete:function(){T.onVisible.apply(z),T.keyboardShortcuts&&S.add.keyboardShortcuts(),S.save.focus(),S.set.active(),T.autofocus&&S.set.autofocus(),t()}})):S.error(E.noTransition))):S.debug("Modal is already visible")},hideModal:function(t,n){return t=e.isFunction(t)?t:function(){},S.debug("Hiding modal"),T.onHide.call(z,e(this))===!1?void S.verbose("Hide callback returned false cancelling hide"):void((S.is.animating()||S.is.active())&&(T.transition&&e.fn.transition!==i&&D.transition("is supported")?(S.remove.active(),D.transition({debug:T.debug,animation:T.transition+" out",queue:T.queue,duration:T.duration,useFailSafe:!0,onStart:function(){S.others.active()||n||S.hideDimmer(),T.keyboardShortcuts&&S.remove.keyboardShortcuts()},onComplete:function(){T.onHidden.call(z),S.restore.focus(),t()}})):S.error(E.noTransition)))},showDimmer:function(){y.dimmer("is animating")||!y.dimmer("is active")?(S.debug("Showing dimmer"),y.dimmer("show")):S.debug("Dimmer already visible")},hideDimmer:function(){return y.dimmer("is animating")||y.dimmer("is active")?void y.dimmer("hide",function(){S.remove.clickaway(),S.remove.screenHeight()}):void S.debug("Dimmer is not visible cannot hide")},hideAll:function(t){var n=r.filter("."+R.active+", ."+R.animating);t=e.isFunction(t)?t:function(){},n.length>0&&(S.debug("Hiding all visible modals"),S.hideDimmer(),n.modal("hide modal",t))},hideOthers:function(t){var n=v.filter("."+R.active+", ."+R.animating);t=e.isFunction(t)?t:function(){},n.length>0&&(S.debug("Hiding other modals",v),n.modal("hide modal",t,!0))},others:{active:function(){return v.filter("."+R.active).length>0},animating:function(){return v.filter("."+R.animating).length>0}},add:{keyboardShortcuts:function(){S.verbose("Adding keyboard shortcuts"),l.on("keyup"+F,S.event.keyboard)}},save:{focus:function(){b=e(n.activeElement).blur()}},restore:{focus:function(){b&&b.length>0&&b.focus()}},remove:{active:function(){D.removeClass(R.active)},clickaway:function(){T.closable&&x.off("click"+C)},bodyStyle:function(){""===c.attr("style")&&(S.verbose("Removing style attribute"),c.removeAttr("style"))},screenHeight:function(){S.debug("Removing page height"),c.css("height","")},keyboardShortcuts:function(){S.verbose("Removing keyboard shortcuts"),l.off("keyup"+F)},scrolling:function(){y.removeClass(R.scrolling),D.removeClass(R.scrolling)}},cacheSizes:function(){var o=D.outerHeight();S.cache!==i&&0===o||(S.cache={pageHeight:e(n).outerHeight(),height:o+T.offset,contextHeight:"body"==T.context?e(t).height():y.height()}),S.debug("Caching modal and container sizes",S.cache)},can:{fit:function(){return S.cache.height+2*T.padding<S.cache.contextHeight}},is:{active:function(){return D.hasClass(R.active)},animating:function(){return D.transition("is supported")?D.transition("is animating"):D.is(":visible")},scrolling:function(){return y.hasClass(R.scrolling)},modernBrowser:function(){return!(t.ActiveXObject||"ActiveXObject"in t)}},set:{autofocus:function(){var e=D.find("[tabindex], :input").filter(":visible"),t=e.filter("[autofocus]"),n=t.length>0?t.first():e.first();n.length>0&&n.focus()},clickaway:function(){T.closable&&x.on("click"+C,S.event.click)},screenHeight:function(){S.can.fit()?c.css("height",""):(S.debug("Modal is taller than page content, resizing page height"),c.css("height",S.cache.height+2*T.padding))},active:function(){D.addClass(R.active)},scrolling:function(){y.addClass(R.scrolling),D.addClass(R.scrolling)},type:function(){S.can.fit()?(S.verbose("Modal fits on screen"),S.others.active()||S.others.animating()||S.remove.scrolling()):(S.verbose("Modal cannot fit on screen setting to scrolling"),S.set.scrolling())},position:function(){S.verbose("Centering modal on page",S.cache),S.can.fit()?D.css({top:"",marginTop:-(S.cache.height/2)}):D.css({marginTop:"",top:l.scrollTop()})},undetached:function(){y.addClass(R.undetached)}},setting:function(t,n){if(S.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,T,t);else{if(n===i)return T[t];e.isPlainObject(T[t])?e.extend(!0,T[t],n):T[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,S,t);else{if(n===i)return S[t];S[t]=n}},debug:function(){!T.silent&&T.debug&&(T.performance?S.performance.log(arguments):(S.debug=Function.prototype.bind.call(console.info,console,T.name+":"),S.debug.apply(console,arguments)))},verbose:function(){!T.silent&&T.verbose&&T.debug&&(T.performance?S.performance.log(arguments):(S.verbose=Function.prototype.bind.call(console.info,console,T.name+":"),S.verbose.apply(console,arguments)))},error:function(){T.silent||(S.error=Function.prototype.bind.call(console.error,console,T.name+":"),S.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;T.performance&&(t=(new Date).getTime(),i=d||t,n=t-i,d=t,f.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:z,"Execution Time":n})),clearTimeout(S.performance.timer),S.performance.timer=setTimeout(S.performance.display,500)},display:function(){var t=T.name+":",n=0;d=!1,clearTimeout(S.performance.timer),e.each(f,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",u&&(t+=" '"+u+"'"),(console.group!==i||console.table!==i)&&f.length>0&&(console.groupCollapsed(t),console.table?console.table(f):e.each(f,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),f=[]}},invoke:function(t,n,o){var r,s,l,c=M;return n=n||p,o=z||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},g?(M===i&&S.initialize(),S.invoke(m)):(M!==i&&M.invoke("destroy"),S.initialize())}),a!==i?a:this},e.fn.modal.settings={name:"Modal",namespace:"modal",silent:!1,debug:!1,verbose:!1,performance:!0,observeChanges:!1,allowMultiple:!1,detachable:!0,closable:!0,autofocus:!0,inverted:!1,blurring:!1,dimmerSettings:{closable:!1,useCSS:!0},keyboardShortcuts:!0,context:"body",queue:!1,duration:500,offset:0,transition:"scale",padding:50,onShow:function(){},onVisible:function(){},onHide:function(){return!0},onHidden:function(){},onApprove:function(){return!0},onDeny:function(){return!0},selector:{close:"> .close",approve:".actions .positive, .actions .approve, .actions .ok",deny:".actions .negative, .actions .deny, .actions .cancel",modal:".ui.modal"},error:{dimmer:"UI Dimmer, a required component is not included in this page",method:"The method you called is not defined.",notFound:"The element you specified could not be found"},className:{active:"active",animating:"animating",blurring:"blurring",scrolling:"scrolling",undetached:"undetached"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.nag=function(n){var o,a=e(this),r=a.selector||"",s=(new Date).getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return a.each(function(){var a,f=e.isPlainObject(n)?e.extend(!0,{},e.fn.nag.settings,n):e.extend({},e.fn.nag.settings),m=(f.className,f.selector),g=f.error,p=f.namespace,h="."+p,v=p+"-module",b=e(this),y=(b.find(m.close),e(f.context?f.context:"body")),x=this,C=b.data(v);t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};a={initialize:function(){a.verbose("Initializing element"),b.on("click"+h,m.close,a.dismiss).data(v,a),f.detachable&&b.parent()[0]!==y[0]&&b.detach().prependTo(y),f.displayTime>0&&setTimeout(a.hide,f.displayTime),a.show()},destroy:function(){a.verbose("Destroying instance"),b.removeData(v).off(h)},show:function(){a.should.show()&&!b.is(":visible")&&(a.debug("Showing nag",f.animation.show),"fade"==f.animation.show?b.fadeIn(f.duration,f.easing):b.slideDown(f.duration,f.easing))},hide:function(){a.debug("Showing nag",f.animation.hide),"fade"==f.animation.show?b.fadeIn(f.duration,f.easing):b.slideUp(f.duration,f.easing)},onHide:function(){a.debug("Removing nag",f.animation.hide),b.remove(),f.onHide&&f.onHide()},dismiss:function(e){f.storageMethod&&a.storage.set(f.key,f.value),a.hide(),e.stopImmediatePropagation(),e.preventDefault()},should:{show:function(){return f.persist?(a.debug("Persistent nag is set, can show nag"),!0):a.storage.get(f.key)!=f.value.toString()?(a.debug("Stored value is not set, can show nag",a.storage.get(f.key)),!0):(a.debug("Stored value is set, cannot show nag",a.storage.get(f.key)),!1)}},get:{storageOptions:function(){var e={};return f.expires&&(e.expires=f.expires),f.domain&&(e.domain=f.domain),f.path&&(e.path=f.path),e}},clear:function(){a.storage.remove(f.key)},storage:{set:function(n,o){var r=a.get.storageOptions();if("localstorage"==f.storageMethod&&t.localStorage!==i)t.localStorage.setItem(n,o),a.debug("Value stored using local storage",n,o);else if("sessionstorage"==f.storageMethod&&t.sessionStorage!==i)t.sessionStorage.setItem(n,o),a.debug("Value stored using session storage",n,o);else{if(e.cookie===i)return void a.error(g.noCookieStorage);e.cookie(n,o,r),a.debug("Value stored using cookie",n,o,r)}},get:function(n,o){var r;return"localstorage"==f.storageMethod&&t.localStorage!==i?r=t.localStorage.getItem(n):"sessionstorage"==f.storageMethod&&t.sessionStorage!==i?r=t.sessionStorage.getItem(n):e.cookie!==i?r=e.cookie(n):a.error(g.noCookieStorage),"undefined"!=r&&"null"!=r&&r!==i&&null!==r||(r=i),r},remove:function(n){var o=a.get.storageOptions();"localstorage"==f.storageMethod&&t.localStorage!==i?t.localStorage.removeItem(n):"sessionstorage"==f.storageMethod&&t.sessionStorage!==i?t.sessionStorage.removeItem(n):e.cookie!==i?e.removeCookie(n,o):a.error(g.noStorage)}},setting:function(t,n){if(a.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,f,t);else{if(n===i)return f[t];e.isPlainObject(f[t])?e.extend(!0,f[t],n):f[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,a,t);else{if(n===i)return a[t];a[t]=n}},debug:function(){!f.silent&&f.debug&&(f.performance?a.performance.log(arguments):(a.debug=Function.prototype.bind.call(console.info,console,f.name+":"),a.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?a.performance.log(arguments):(a.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),a.verbose.apply(console,arguments)))},error:function(){f.silent||(a.error=Function.prototype.bind.call(console.error,console,f.name+":"),a.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;f.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:x,"Execution Time":n})),clearTimeout(a.performance.timer),a.performance.timer=setTimeout(a.performance.display,500)},display:function(){var t=f.name+":",n=0;s=!1,clearTimeout(a.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,r){var s,l,c,u=C;return n=n||d,r=x||r,"string"==typeof t&&u!==i&&(t=t.split(/[\. ]/),s=t.length-1,e.each(t,function(n,o){var r=n!=s?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(u[r])&&n!=s)u=u[r];else{if(u[r]!==i)return l=u[r],!1;if(!e.isPlainObject(u[o])||n==s)return u[o]!==i?(l=u[o],!1):(a.error(g.method,t),!1);u=u[o]}})),e.isFunction(l)?c=l.apply(r,n):l!==i&&(c=l),e.isArray(o)?o.push(c):o!==i?o=[o,c]:c!==i&&(o=c),l}},u?(C===i&&a.initialize(),a.invoke(c)):(C!==i&&C.invoke("destroy"),a.initialize())}),o!==i?o:this},e.fn.nag.settings={name:"Nag",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"Nag",persist:!1,displayTime:0,animation:{show:"slide",hide:"slide"},context:!1,detachable:!1,expires:30,domain:!1,path:"/",storageMethod:"cookie",key:"nag",value:"dismiss",error:{noCookieStorage:"$.cookie is not included. A storage solution is required.",noStorage:"Neither $.cookie or store is defined. A storage solution is required for storing state",method:"The method you called is not defined."},className:{bottom:"bottom",fixed:"fixed"},selector:{close:".close.icon"},speed:500,easing:"easeOutQuad",onHide:function(){}},e.extend(e.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.popup=function(o){var a,r=e(this),s=e(n),l=e(t),c=e("body"),u=r.selector||"",d=!0,f=(new Date).getTime(),m=[],g=arguments[0],p="string"==typeof g,h=[].slice.call(arguments,1);return r.each(function(){var r,v,b,y,x,C,w=e.isPlainObject(o)?e.extend(!0,{},e.fn.popup.settings,o):e.extend({},e.fn.popup.settings),k=w.selector,S=w.className,T=w.error,A=w.metadata,R=w.namespace,P="."+w.namespace,E="module-"+R,F=e(this),O=e(w.context),D=e(w.scrollContext),q=e(w.boundary),j=w.target?e(w.target):F,z=0,M=!1,I=!1,L=this,N=F.data(E);C={initialize:function(){C.debug("Initializing",F),C.createID(),C.bind.events(),!C.exists()&&w.preserve&&C.create(),w.observeChanges&&C.observeChanges(),C.instantiate()},instantiate:function(){C.verbose("Storing instance",C),N=C,F.data(E,N)},observeChanges:function(){"MutationObserver"in t&&(b=new MutationObserver(C.event.documentChanged),b.observe(n,{childList:!0,subtree:!0}),C.debug("Setting up mutation observer",b))},refresh:function(){w.popup?r=e(w.popup).eq(0):w.inline&&(r=j.nextAll(k.popup).eq(0),w.popup=r),w.popup?(r.addClass(S.loading),v=C.get.offsetParent(),r.removeClass(S.loading),w.movePopup&&C.has.popup()&&C.get.offsetParent(r)[0]!==v[0]&&(C.debug("Moving popup to the same offset parent as activating element"),r.detach().appendTo(v))):v=w.inline?C.get.offsetParent(j):C.has.popup()?C.get.offsetParent(r):c,v.is("html")&&v[0]!==c[0]&&(C.debug("Setting page as offset parent"),v=c),C.get.variation()&&C.set.variation()},reposition:function(){C.refresh(),C.set.position()},destroy:function(){C.debug("Destroying previous module"),b&&b.disconnect(),r&&!w.preserve&&C.removePopup(),clearTimeout(C.hideTimer),clearTimeout(C.showTimer),C.unbind.close(),C.unbind.events(),F.removeData(E)},event:{start:function(t){var n=e.isPlainObject(w.delay)?w.delay.show:w.delay;clearTimeout(C.hideTimer),I||(C.showTimer=setTimeout(C.show,n))},end:function(){var t=e.isPlainObject(w.delay)?w.delay.hide:w.delay;clearTimeout(C.showTimer),C.hideTimer=setTimeout(C.hide,t)},touchstart:function(e){I=!0,C.show()},resize:function(){C.is.visible()&&C.set.position()},documentChanged:function(t){[].forEach.call(t,function(t){t.removedNodes&&[].forEach.call(t.removedNodes,function(t){(t==L||e(t).find(L).length>0)&&(C.debug("Element removed from DOM, tearing down events"),C.destroy())})})},hideGracefully:function(t){var i=e(t.target),o=e.contains(n.documentElement,t.target),a=i.closest(k.popup).length>0;t&&!a&&o?(C.debug("Click occurred outside popup hiding popup"),C.hide()):C.debug("Click was inside popup, keeping popup open")}},create:function(){var t=C.get.html(),n=C.get.title(),i=C.get.content();t||i||n?(C.debug("Creating pop-up html"),t||(t=w.templates.popup({title:n,content:i})),r=e("<div/>").addClass(S.popup).data(A.activator,F).html(t),w.inline?(C.verbose("Inserting popup element inline",r),r.insertAfter(F)):(C.verbose("Appending popup element to body",r),r.appendTo(O)),C.refresh(),C.set.variation(),w.hoverable&&C.bind.popup(),w.onCreate.call(r,L)):0!==j.next(k.popup).length?(C.verbose("Pre-existing popup found"),w.inline=!0,w.popup=j.next(k.popup).data(A.activator,F),C.refresh(),w.hoverable&&C.bind.popup()):w.popup?(e(w.popup).data(A.activator,F),C.verbose("Used popup specified in settings"),C.refresh(),w.hoverable&&C.bind.popup()):C.debug("No content specified skipping display",L)},createID:function(){x=(Math.random().toString(16)+"000000000").substr(2,8),y="."+x,C.verbose("Creating unique id for element",x)},toggle:function(){C.debug("Toggling pop-up"),C.is.hidden()?(C.debug("Popup is hidden, showing pop-up"),C.unbind.close(),C.show()):(C.debug("Popup is visible, hiding pop-up"),
C.hide())},show:function(e){if(e=e||function(){},C.debug("Showing pop-up",w.transition),C.is.hidden()&&(!C.is.active()||!C.is.dropdown())){if(C.exists()||C.create(),w.onShow.call(r,L)===!1)return void C.debug("onShow callback returned false, cancelling popup animation");w.preserve||w.popup||C.refresh(),r&&C.set.position()&&(C.save.conditions(),w.exclusive&&C.hideAll(),C.animate.show(e))}},hide:function(e){if(e=e||function(){},C.is.visible()||C.is.animating()){if(w.onHide.call(r,L)===!1)return void C.debug("onHide callback returned false, cancelling popup animation");C.remove.visible(),C.unbind.close(),C.restore.conditions(),C.animate.hide(e)}},hideAll:function(){e(k.popup).filter("."+S.visible).each(function(){e(this).data(A.activator).popup("hide")})},exists:function(){return!!r&&(w.inline||w.popup?C.has.popup():r.closest(O).length>=1)},removePopup:function(){C.has.popup()&&!w.popup&&(C.debug("Removing popup",r),r.remove(),r=i,w.onRemove.call(r,L))},save:{conditions:function(){C.cache={title:F.attr("title")},C.cache.title&&F.removeAttr("title"),C.verbose("Saving original attributes",C.cache.title)}},restore:{conditions:function(){return C.cache&&C.cache.title&&(F.attr("title",C.cache.title),C.verbose("Restoring original attributes",C.cache.title)),!0}},supports:{svg:function(){return typeof SVGGraphicsElement===i}},animate:{show:function(t){t=e.isFunction(t)?t:function(){},w.transition&&e.fn.transition!==i&&F.transition("is supported")?(C.set.visible(),r.transition({animation:w.transition+" in",queue:!1,debug:w.debug,verbose:w.verbose,duration:w.duration,onComplete:function(){C.bind.close(),t.call(r,L),w.onVisible.call(r,L)}})):C.error(T.noTransition)},hide:function(t){return t=e.isFunction(t)?t:function(){},C.debug("Hiding pop-up"),w.onHide.call(r,L)===!1?void C.debug("onHide callback returned false, cancelling popup animation"):void(w.transition&&e.fn.transition!==i&&F.transition("is supported")?r.transition({animation:w.transition+" out",queue:!1,duration:w.duration,debug:w.debug,verbose:w.verbose,onComplete:function(){C.reset(),t.call(r,L),w.onHidden.call(r,L)}}):C.error(T.noTransition))}},change:{content:function(e){r.html(e)}},get:{html:function(){return F.removeData(A.html),F.data(A.html)||w.html},title:function(){return F.removeData(A.title),F.data(A.title)||w.title},content:function(){return F.removeData(A.content),F.data(A.content)||F.attr("title")||w.content},variation:function(){return F.removeData(A.variation),F.data(A.variation)||w.variation},popup:function(){return r},popupOffset:function(){return r.offset()},calculations:function(){var e,n=j[0],i=q[0]==t,o=w.inline||w.popup&&w.movePopup?j.position():j.offset(),a=i?{top:0,left:0}:q.offset(),s={},c=i?{top:l.scrollTop(),left:l.scrollLeft()}:{top:0,left:0};return s={target:{element:j[0],width:j.outerWidth(),height:j.outerHeight(),top:o.top,left:o.left,margin:{}},popup:{width:r.outerWidth(),height:r.outerHeight()},parent:{width:v.outerWidth(),height:v.outerHeight()},screen:{top:a.top,left:a.left,scroll:{top:c.top,left:c.left},width:q.width(),height:q.height()}},w.setFluidWidth&&C.is.fluid()&&(s.container={width:r.parent().outerWidth()},s.popup.width=s.container.width),s.target.margin.top=w.inline?parseInt(t.getComputedStyle(n).getPropertyValue("margin-top"),10):0,s.target.margin.left=w.inline?C.is.rtl()?parseInt(t.getComputedStyle(n).getPropertyValue("margin-right"),10):parseInt(t.getComputedStyle(n).getPropertyValue("margin-left"),10):0,e=s.screen,s.boundary={top:e.top+e.scroll.top,bottom:e.top+e.scroll.top+e.height,left:e.left+e.scroll.left,right:e.left+e.scroll.left+e.width},s},id:function(){return x},startEvent:function(){return"hover"==w.on?"mouseenter":"focus"==w.on&&"focus"},scrollEvent:function(){return"scroll"},endEvent:function(){return"hover"==w.on?"mouseleave":"focus"==w.on&&"blur"},distanceFromBoundary:function(e,t){var n,i,o={};return t=t||C.get.calculations(),n=t.popup,i=t.boundary,e&&(o={top:e.top-i.top,left:e.left-i.left,right:i.right-(e.left+n.width),bottom:i.bottom-(e.top+n.height)},C.verbose("Distance from boundaries determined",e,o)),o},offsetParent:function(t){var n=t!==i?t[0]:F[0],o=n.parentNode,a=e(o);if(o)for(var r="none"===a.css("transform"),s="static"===a.css("position"),l=a.is("html");o&&!l&&s&&r;)o=o.parentNode,a=e(o),r="none"===a.css("transform"),s="static"===a.css("position"),l=a.is("html");return a&&a.length>0?a:e()},positions:function(){return{"top left":!1,"top center":!1,"top right":!1,"bottom left":!1,"bottom center":!1,"bottom right":!1,"left center":!1,"right center":!1}},nextPosition:function(e){var t=e.split(" "),n=t[0],i=t[1],o={top:"bottom",bottom:"top",left:"right",right:"left"},a={left:"center",center:"right",right:"left"},r={"top left":"top center","top center":"top right","top right":"right center","right center":"bottom right","bottom right":"bottom center","bottom center":"bottom left","bottom left":"left center","left center":"top left"},s="top"==n||"bottom"==n,l=!1,c=!1,u=!1;return M||(C.verbose("All available positions available"),M=C.get.positions()),C.debug("Recording last position tried",e),M[e]=!0,"opposite"===w.prefer&&(u=[o[n],i],u=u.join(" "),l=M[u]===!0,C.debug("Trying opposite strategy",u)),"adjacent"===w.prefer&&s&&(u=[n,a[i]],u=u.join(" "),c=M[u]===!0,C.debug("Trying adjacent strategy",u)),(c||l)&&(C.debug("Using backup position",u),u=r[e]),u}},set:{position:function(e,t){if(0===j.length||0===r.length)return void C.error(T.notFound);var n,o,a,s,l,c,u,d;if(t=t||C.get.calculations(),e=e||F.data(A.position)||w.position,n=F.data(A.offset)||w.offset,o=w.distanceAway,a=t.target,s=t.popup,l=t.parent,0===a.width&&0===a.height&&!C.is.svg(a.element))return C.debug("Popup target is hidden, no action taken"),!1;switch(w.inline&&(C.debug("Adding margin to calculation",a.margin),"left center"==e||"right center"==e?(n+=a.margin.top,o+=-a.margin.left):"top left"==e||"top center"==e||"top right"==e?(n+=a.margin.left,o-=a.margin.top):(n+=a.margin.left,o+=a.margin.top)),C.debug("Determining popup position from calculations",e,t),C.is.rtl()&&(e=e.replace(/left|right/g,function(e){return"left"==e?"right":"left"}),C.debug("RTL: Popup position updated",e)),z==w.maxSearchDepth&&"string"==typeof w.lastResort&&(e=w.lastResort),e){case"top left":c={top:"auto",bottom:l.height-a.top+o,left:a.left+n,right:"auto"};break;case"top center":c={bottom:l.height-a.top+o,left:a.left+a.width/2-s.width/2+n,top:"auto",right:"auto"};break;case"top right":c={bottom:l.height-a.top+o,right:l.width-a.left-a.width-n,top:"auto",left:"auto"};break;case"left center":c={top:a.top+a.height/2-s.height/2+n,right:l.width-a.left+o,left:"auto",bottom:"auto"};break;case"right center":c={top:a.top+a.height/2-s.height/2+n,left:a.left+a.width+o,bottom:"auto",right:"auto"};break;case"bottom left":c={top:a.top+a.height+o,left:a.left+n,bottom:"auto",right:"auto"};break;case"bottom center":c={top:a.top+a.height+o,left:a.left+a.width/2-s.width/2+n,bottom:"auto",right:"auto"};break;case"bottom right":c={top:a.top+a.height+o,right:l.width-a.left-a.width-n,left:"auto",bottom:"auto"}}if(c===i&&C.error(T.invalidPosition,e),C.debug("Calculated popup positioning values",c),r.css(c).removeClass(S.position).addClass(e).addClass(S.loading),u=C.get.popupOffset(),d=C.get.distanceFromBoundary(u,t),C.is.offstage(d,e)){if(C.debug("Position is outside viewport",e),z<w.maxSearchDepth)return z++,e=C.get.nextPosition(e),C.debug("Trying new position",e),!!r&&C.set.position(e,t);if(!w.lastResort)return C.debug("Popup could not find a position to display",r),C.error(T.cannotPlace,L),C.remove.attempts(),C.remove.loading(),C.reset(),w.onUnplaceable.call(r,L),!1;C.debug("No position found, showing with last position")}return C.debug("Position is on stage",e),C.remove.attempts(),C.remove.loading(),w.setFluidWidth&&C.is.fluid()&&C.set.fluidWidth(t),!0},fluidWidth:function(e){e=e||C.get.calculations(),C.debug("Automatically setting element width to parent width",e.parent.width),r.css("width",e.container.width)},variation:function(e){e=e||C.get.variation(),e&&C.has.popup()&&(C.verbose("Adding variation to popup",e),r.addClass(e))},visible:function(){F.addClass(S.visible)}},remove:{loading:function(){r.removeClass(S.loading)},variation:function(e){e=e||C.get.variation(),e&&(C.verbose("Removing variation",e),r.removeClass(e))},visible:function(){F.removeClass(S.visible)},attempts:function(){C.verbose("Resetting all searched positions"),z=0,M=!1}},bind:{events:function(){C.debug("Binding popup events to module"),"click"==w.on&&F.on("click"+P,C.toggle),"hover"==w.on&&d&&F.on("touchstart"+P,C.event.touchstart),C.get.startEvent()&&F.on(C.get.startEvent()+P,C.event.start).on(C.get.endEvent()+P,C.event.end),w.target&&C.debug("Target set to element",j),l.on("resize"+y,C.event.resize)},popup:function(){C.verbose("Allowing hover events on popup to prevent closing"),r&&C.has.popup()&&r.on("mouseenter"+P,C.event.start).on("mouseleave"+P,C.event.end)},close:function(){(w.hideOnScroll===!0||"auto"==w.hideOnScroll&&"click"!=w.on)&&D.one(C.get.scrollEvent()+y,C.event.hideGracefully),"hover"==w.on&&I&&(C.verbose("Binding popup close event to document"),s.on("touchstart"+y,function(e){C.verbose("Touched away from popup"),C.event.hideGracefully.call(L,e)})),"click"==w.on&&w.closable&&(C.verbose("Binding popup close event to document"),s.on("click"+y,function(e){C.verbose("Clicked away from popup"),C.event.hideGracefully.call(L,e)}))}},unbind:{events:function(){l.off(y),F.off(P)},close:function(){s.off(y),D.off(y)}},has:{popup:function(){return r&&r.length>0}},is:{offstage:function(t,n){var i=[];return e.each(t,function(e,t){t<-w.jitter&&(C.debug("Position exceeds allowable distance from edge",e,t,n),i.push(e))}),i.length>0},svg:function(e){return C.supports.svg()&&e instanceof SVGGraphicsElement},active:function(){return F.hasClass(S.active)},animating:function(){return r!==i&&r.hasClass(S.animating)},fluid:function(){return r!==i&&r.hasClass(S.fluid)},visible:function(){return r!==i&&r.hasClass(S.visible)},dropdown:function(){return F.hasClass(S.dropdown)},hidden:function(){return!C.is.visible()},rtl:function(){return"rtl"==F.css("direction")}},reset:function(){C.remove.visible(),w.preserve?e.fn.transition!==i&&r.transition("remove transition"):C.removePopup()},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,w,t);else{if(n===i)return w[t];w[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,C,t);else{if(n===i)return C[t];C[t]=n}},debug:function(){!w.silent&&w.debug&&(w.performance?C.performance.log(arguments):(C.debug=Function.prototype.bind.call(console.info,console,w.name+":"),C.debug.apply(console,arguments)))},verbose:function(){!w.silent&&w.verbose&&w.debug&&(w.performance?C.performance.log(arguments):(C.verbose=Function.prototype.bind.call(console.info,console,w.name+":"),C.verbose.apply(console,arguments)))},error:function(){w.silent||(C.error=Function.prototype.bind.call(console.error,console,w.name+":"),C.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;w.performance&&(t=(new Date).getTime(),i=f||t,n=t-i,f=t,m.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:L,"Execution Time":n})),clearTimeout(C.performance.timer),C.performance.timer=setTimeout(C.performance.display,500)},display:function(){var t=w.name+":",n=0;f=!1,clearTimeout(C.performance.timer),e.each(m,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",u&&(t+=" '"+u+"'"),(console.group!==i||console.table!==i)&&m.length>0&&(console.groupCollapsed(t),console.table?console.table(m):e.each(m,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),m=[]}},invoke:function(t,n,o){var r,s,l,c=N;return n=n||h,o=L||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},p?(N===i&&C.initialize(),C.invoke(g)):(N!==i&&N.invoke("destroy"),C.initialize())}),a!==i?a:this},e.fn.popup.settings={name:"Popup",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"popup",observeChanges:!0,onCreate:function(){},onRemove:function(){},onShow:function(){},onVisible:function(){},onHide:function(){},onUnplaceable:function(){},onHidden:function(){},on:"hover",boundary:t,addTouchEvents:!0,position:"top left",variation:"",movePopup:!0,target:!1,popup:!1,inline:!1,preserve:!1,hoverable:!1,content:!1,html:!1,title:!1,closable:!0,hideOnScroll:"auto",exclusive:!1,context:"body",scrollContext:t,prefer:"opposite",lastResort:!1,delay:{show:50,hide:70},setFluidWidth:!0,duration:200,transition:"scale",distanceAway:0,jitter:2,offset:0,maxSearchDepth:15,error:{invalidPosition:"The position you specified is not a valid position",cannotPlace:"Popup does not fit within the boundaries of the viewport",method:"The method you called is not defined.",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",notFound:"The target or popup you specified does not exist on the page"},metadata:{activator:"activator",content:"content",html:"html",offset:"offset",position:"position",title:"title",variation:"variation"},className:{active:"active",animating:"animating",dropdown:"dropdown",fluid:"fluid",loading:"loading",popup:"ui popup",position:"top left center bottom right",visible:"visible"},selector:{popup:".ui.popup"},templates:{escape:function(e){var t=/[&<>"'`]/g,n=/[&<>"'`]/,i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},o=function(e){return i[e]};return n.test(e)?e.replace(t,o):e},popup:function(t){var n="",o=e.fn.popup.settings.templates.escape;return typeof t!==i&&(typeof t.title!==i&&t.title&&(t.title=o(t.title),n+='<div class="header">'+t.title+"</div>"),typeof t.content!==i&&t.content&&(t.content=o(t.content),n+='<div class="content">'+t.content+"</div>")),n}}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();e.fn.progress=function(t){var o,a=e(this),r=a.selector||"",s=(new Date).getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return a.each(function(){var a,f,m=e.isPlainObject(t)?e.extend(!0,{},e.fn.progress.settings,t):e.extend({},e.fn.progress.settings),g=m.className,p=m.metadata,h=m.namespace,v=m.selector,b=m.error,y="."+h,x="module-"+h,C=e(this),w=e(this).find(v.bar),k=e(this).find(v.progress),S=e(this).find(v.label),T=this,A=C.data(x),R=!1;f={initialize:function(){f.debug("Initializing progress bar",m),f.set.duration(),f.set.transitionEvent(),f.read.metadata(),f.read.settings(),f.instantiate()},instantiate:function(){f.verbose("Storing instance of progress",f),A=f,C.data(x,f)},destroy:function(){f.verbose("Destroying previous progress for",C),clearInterval(A.interval),f.remove.state(),C.removeData(x),A=i},reset:function(){f.remove.nextValue(),f.update.progress(0)},complete:function(){(f.percent===i||f.percent<100)&&(f.remove.progressPoll(),f.set.percent(100))},read:{metadata:function(){var e={percent:C.data(p.percent),total:C.data(p.total),value:C.data(p.value)};e.percent&&(f.debug("Current percent value set from metadata",e.percent),f.set.percent(e.percent)),e.total&&(f.debug("Total value set from metadata",e.total),f.set.total(e.total)),e.value&&(f.debug("Current value set from metadata",e.value),f.set.value(e.value),f.set.progress(e.value))},settings:function(){m.total!==!1&&(f.debug("Current total set in settings",m.total),f.set.total(m.total)),m.value!==!1&&(f.debug("Current value set in settings",m.value),f.set.value(m.value),f.set.progress(f.value)),m.percent!==!1&&(f.debug("Current percent set in settings",m.percent),f.set.percent(m.percent))}},increment:function(e){var t,n,i;f.has.total()?(n=f.get.value(),e=e||1,i=n+e):(n=f.get.percent(),e=e||f.get.randomValue(),i=n+e,t=100,f.debug("Incrementing percentage by",n,i)),i=f.get.normalizedValue(i),f.set.progress(i)},decrement:function(e){var t,n,i=f.get.total();i?(t=f.get.value(),e=e||1,n=t-e,f.debug("Decrementing value by",e,t)):(t=f.get.percent(),e=e||f.get.randomValue(),n=t-e,f.debug("Decrementing percentage by",e,t)),n=f.get.normalizedValue(n),f.set.progress(n)},has:{progressPoll:function(){return f.progressPoll},total:function(){return f.get.total()!==!1}},get:{text:function(e){var t=f.value||0,n=f.total||0,i=R?f.get.displayPercent():f.percent||0,o=f.total>0?n-t:100-i;return e=e||"",e=e.replace("{value}",t).replace("{total}",n).replace("{left}",o).replace("{percent}",i),f.verbose("Adding variables to progress bar text",e),e},normalizedValue:function(e){if(e<0)return f.debug("Value cannot decrement below 0"),0;if(f.has.total()){if(e>f.total)return f.debug("Value cannot increment above total",f.total),f.total}else if(e>100)return f.debug("Value cannot increment above 100 percent"),100;return e},updateInterval:function(){return"auto"==m.updateInterval?m.duration:m.updateInterval},randomValue:function(){return f.debug("Generating random increment percentage"),Math.floor(Math.random()*m.random.max+m.random.min)},numericValue:function(e){return"string"==typeof e?""!==e.replace(/[^\d.]/g,"")&&+e.replace(/[^\d.]/g,""):e},transitionEnd:function(){var e,t=n.createElement("element"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in o)if(t.style[e]!==i)return o[e]},displayPercent:function(){var e=w.width(),t=C.width(),n=parseInt(w.css("min-width"),10),i=e>n?e/t*100:f.percent;return m.precision>0?Math.round(i*(10*m.precision))/(10*m.precision):Math.round(i)},percent:function(){return f.percent||0},value:function(){return f.nextValue||f.value||0},total:function(){return f.total||!1}},create:{progressPoll:function(){f.progressPoll=setTimeout(function(){f.update.toNextValue(),f.remove.progressPoll()},f.get.updateInterval())}},is:{complete:function(){return f.is.success()||f.is.warning()||f.is.error()},success:function(){return C.hasClass(g.success)},warning:function(){return C.hasClass(g.warning)},error:function(){return C.hasClass(g.error)},active:function(){return C.hasClass(g.active)},visible:function(){return C.is(":visible")}},remove:{progressPoll:function(){f.verbose("Removing progress poll timer"),f.progressPoll&&(clearTimeout(f.progressPoll),delete f.progressPoll)},nextValue:function(){f.verbose("Removing progress value stored for next update"),delete f.nextValue},state:function(){f.verbose("Removing stored state"),delete f.total,delete f.percent,delete f.value},active:function(){f.verbose("Removing active state"),C.removeClass(g.active)},success:function(){f.verbose("Removing success state"),C.removeClass(g.success)},warning:function(){f.verbose("Removing warning state"),C.removeClass(g.warning)},error:function(){f.verbose("Removing error state"),C.removeClass(g.error)}},set:{barWidth:function(e){e>100?f.error(b.tooHigh,e):e<0?f.error(b.tooLow,e):(w.css("width",e+"%"),C.attr("data-percent",parseInt(e,10)))},duration:function(e){e=e||m.duration,e="number"==typeof e?e+"ms":e,f.verbose("Setting progress bar transition duration",e),w.css({"transition-duration":e})},percent:function(e){e="string"==typeof e?+e.replace("%",""):e,e=m.precision>0?Math.round(e*(10*m.precision))/(10*m.precision):Math.round(e),f.percent=e,f.has.total()||(f.value=m.precision>0?Math.round(e/100*f.total*(10*m.precision))/(10*m.precision):Math.round(e/100*f.total*10)/10,m.limitValues&&(f.value=f.value>100?100:f.value<0?0:f.value)),f.set.barWidth(e),f.set.labelInterval(),f.set.labels(),m.onChange.call(T,e,f.value,f.total)},labelInterval:function(){var t=function(){f.verbose("Bar finished animating, removing continuous label updates"),clearInterval(f.interval),R=!1,f.set.labels()};clearInterval(f.interval),w.one(a+y,t),R=!0,f.interval=setInterval(function(){var t=e.contains(n.documentElement,T);t||(clearInterval(f.interval),R=!1),f.set.labels()},m.framerate)},labels:function(){f.verbose("Setting both bar progress and outer label text"),f.set.barLabel(),f.set.state()},label:function(e){e=e||"",e&&(e=f.get.text(e),f.verbose("Setting label to text",e),S.text(e))},state:function(e){e=e!==i?e:f.percent,100===e?m.autoSuccess&&!(f.is.warning()||f.is.error()||f.is.success())?(f.set.success(),f.debug("Automatically triggering success at 100%")):(f.verbose("Reached 100% removing active state"),f.remove.active(),f.remove.progressPoll()):e>0?(f.verbose("Adjusting active progress bar label",e),f.set.active()):(f.remove.active(),f.set.label(m.text.active))},barLabel:function(e){e!==i?k.text(f.get.text(e)):"ratio"==m.label&&f.total?(f.verbose("Adding ratio to bar label"),k.text(f.get.text(m.text.ratio))):"percent"==m.label&&(f.verbose("Adding percentage to bar label"),k.text(f.get.text(m.text.percent)))},active:function(e){e=e||m.text.active,f.debug("Setting active state"),m.showActivity&&!f.is.active()&&C.addClass(g.active),f.remove.warning(),f.remove.error(),f.remove.success(),e=m.onLabelUpdate("active",e,f.value,f.total),e&&f.set.label(e),w.one(a+y,function(){m.onActive.call(T,f.value,f.total)})},success:function(e){e=e||m.text.success||m.text.active,f.debug("Setting success state"),C.addClass(g.success),f.remove.active(),f.remove.warning(),f.remove.error(),f.complete(),m.text.success?(e=m.onLabelUpdate("success",e,f.value,f.total),f.set.label(e)):(e=m.onLabelUpdate("active",e,f.value,f.total),f.set.label(e)),w.one(a+y,function(){m.onSuccess.call(T,f.total)})},warning:function(e){e=e||m.text.warning,f.debug("Setting warning state"),C.addClass(g.warning),f.remove.active(),f.remove.success(),f.remove.error(),f.complete(),e=m.onLabelUpdate("warning",e,f.value,f.total),e&&f.set.label(e),w.one(a+y,function(){m.onWarning.call(T,f.value,f.total)})},error:function(e){e=e||m.text.error,f.debug("Setting error state"),C.addClass(g.error),f.remove.active(),f.remove.success(),f.remove.warning(),f.complete(),e=m.onLabelUpdate("error",e,f.value,f.total),e&&f.set.label(e),w.one(a+y,function(){m.onError.call(T,f.value,f.total)})},transitionEvent:function(){a=f.get.transitionEnd()},total:function(e){f.total=e},value:function(e){f.value=e},progress:function(e){f.has.progressPoll()?(f.debug("Updated within interval, setting next update to use new value",e),f.set.nextValue(e)):(f.debug("First update in progress update interval, immediately updating",e),f.update.progress(e),f.create.progressPoll())},nextValue:function(e){f.nextValue=e}},update:{toNextValue:function(){var e=f.nextValue;e&&(f.debug("Update interval complete using last updated value",e),f.update.progress(e),f.remove.nextValue())},progress:function(e){var t;e=f.get.numericValue(e),e===!1&&f.error(b.nonNumeric,e),e=f.get.normalizedValue(e),f.has.total()?(f.set.value(e),t=e/f.total*100,f.debug("Calculating percent complete from total",t),f.set.percent(t)):(t=e,f.debug("Setting value to exact percentage value",t),f.set.percent(t))}},setting:function(t,n){if(f.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];e.isPlainObject(m[t])?e.extend(!0,m[t],n):m[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,f,t);else{if(n===i)return f[t];f[t]=n}},debug:function(){!m.silent&&m.debug&&(m.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,m.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),f.verbose.apply(console,arguments)))},error:function(){m.silent||(f.error=Function.prototype.bind.call(console.error,console,m.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;m.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:T,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var t=m.name+":",n=0;s=!1,clearTimeout(f.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,a){var r,s,l,c=A;return n=n||d,a=T||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(f.error(b.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s}},u?(A===i&&f.initialize(),f.invoke(c)):(A!==i&&A.invoke("destroy"),f.initialize())}),o!==i?o:this},e.fn.progress.settings={name:"Progress",namespace:"progress",silent:!1,debug:!1,verbose:!1,performance:!0,random:{min:2,max:5},duration:300,updateInterval:"auto",autoSuccess:!0,showActivity:!0,limitValues:!0,label:"percent",precision:0,framerate:1e3/30,percent:!1,total:!1,value:!1,onLabelUpdate:function(e,t,n,i){return t},onChange:function(e,t,n){},onSuccess:function(e){},onActive:function(e,t){},onError:function(e,t){},onWarning:function(e,t){},error:{method:"The method you called is not defined.",nonNumeric:"Progress value is non numeric",tooHigh:"Value specified is above 100%",tooLow:"Value specified is below 0%"},regExp:{variable:/\{\$*[A-z0-9]+\}/g},metadata:{percent:"percent",total:"total",value:"value"},selector:{bar:"> .bar",label:"> .label",progress:".bar > .progress"},text:{active:!1,error:!1,success:!1,warning:!1,percent:"{percent}%",ratio:"{value} of {total}"},className:{active:"active",error:"error",success:"success",warning:"warning"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.rating=function(t){var n,o=e(this),a=o.selector||"",r=(new Date).getTime(),s=[],l=arguments[0],c="string"==typeof l,u=[].slice.call(arguments,1);return o.each(function(){var d,f,m=e.isPlainObject(t)?e.extend(!0,{},e.fn.rating.settings,t):e.extend({},e.fn.rating.settings),g=m.namespace,p=m.className,h=m.metadata,v=m.selector,b=(m.error,"."+g),y="module-"+g,x=this,C=e(this).data(y),w=e(this),k=w.find(v.icon);f={initialize:function(){f.verbose("Initializing rating module",m),0===k.length&&f.setup.layout(),m.interactive?f.enable():f.disable(),f.set.initialLoad(),f.set.rating(f.get.initialRating()),f.remove.initialLoad(),f.instantiate()},instantiate:function(){f.verbose("Instantiating module",m),C=f,w.data(y,f)},destroy:function(){f.verbose("Destroying previous instance",C),f.remove.events(),w.removeData(y)},refresh:function(){k=w.find(v.icon)},setup:{layout:function(){var t=f.get.maxRating(),n=e.fn.rating.settings.templates.icon(t);f.debug("Generating icon html dynamically"),w.html(n),f.refresh()}},event:{mouseenter:function(){var t=e(this);t.nextAll().removeClass(p.selected),w.addClass(p.selected),t.addClass(p.selected).prevAll().addClass(p.selected)},mouseleave:function(){w.removeClass(p.selected),k.removeClass(p.selected)},click:function(){var t=e(this),n=f.get.rating(),i=k.index(t)+1,o="auto"==m.clearable?1===k.length:m.clearable;o&&n==i?f.clearRating():f.set.rating(i)}},clearRating:function(){f.debug("Clearing current rating"),f.set.rating(0)},bind:{events:function(){f.verbose("Binding events"),w.on("mouseenter"+b,v.icon,f.event.mouseenter).on("mouseleave"+b,v.icon,f.event.mouseleave).on("click"+b,v.icon,f.event.click)}},remove:{events:function(){f.verbose("Removing events"),w.off(b)},initialLoad:function(){d=!1}},enable:function(){f.debug("Setting rating to interactive mode"),f.bind.events(),w.removeClass(p.disabled)},disable:function(){f.debug("Setting rating to read-only mode"),f.remove.events(),w.addClass(p.disabled)},is:{initialLoad:function(){return d}},get:{initialRating:function(){return w.data(h.rating)!==i?(w.removeData(h.rating),w.data(h.rating)):m.initialRating},maxRating:function(){return w.data(h.maxRating)!==i?(w.removeData(h.maxRating),w.data(h.maxRating)):m.maxRating},rating:function(){var e=k.filter("."+p.active).length;return f.verbose("Current rating retrieved",e),e}},set:{rating:function(e){var t=e-1>=0?e-1:0,n=k.eq(t);w.removeClass(p.selected),k.removeClass(p.selected).removeClass(p.active),e>0&&(f.verbose("Setting current rating to",e),n.prevAll().addBack().addClass(p.active)),f.is.initialLoad()||m.onRate.call(x,e)},initialLoad:function(){d=!0}},setting:function(t,n){if(f.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];e.isPlainObject(m[t])?e.extend(!0,m[t],n):m[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,f,t);else{if(n===i)return f[t];f[t]=n}},debug:function(){!m.silent&&m.debug&&(m.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,m.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),f.verbose.apply(console,arguments)))},error:function(){m.silent||(f.error=Function.prototype.bind.call(console.error,console,m.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;m.performance&&(t=(new Date).getTime(),i=r||t,n=t-i,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:x,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var t=m.name+":",n=0;r=!1,clearTimeout(f.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",a&&(t+=" '"+a+"'"),o.length>1&&(t+=" ("+o.length+")"),(console.group!==i||console.table!==i)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,o,a){var r,s,l,c=C;return o=o||u,a=x||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o]}})),e.isFunction(s)?l=s.apply(a,o):s!==i&&(l=s),e.isArray(n)?n.push(l):n!==i?n=[n,l]:l!==i&&(n=l),s}},c?(C===i&&f.initialize(),f.invoke(l)):(C!==i&&C.invoke("destroy"),f.initialize())}),n!==i?n:this},e.fn.rating.settings={name:"Rating",namespace:"rating",slent:!1,debug:!1,verbose:!1,performance:!0,initialRating:0,interactive:!0,maxRating:4,clearable:"auto",fireOnInit:!1,onRate:function(e){},error:{method:"The method you called is not defined",noMaximum:"No maximum rating specified. Cannot generate HTML automatically"},metadata:{rating:"rating",maxRating:"maxRating"},className:{active:"active",disabled:"disabled",selected:"selected",loading:"loading"},selector:{icon:".icon"},templates:{icon:function(e){for(var t=1,n="";t<=e;)n+='<i class="icon"></i>',t++;return n}}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.search=function(o){var a,r=e(this),s=r.selector||"",l=(new Date).getTime(),c=[],u=arguments[0],d="string"==typeof u,f=[].slice.call(arguments,1);return e(this).each(function(){var m,g=e.isPlainObject(o)?e.extend(!0,{},e.fn.search.settings,o):e.extend({},e.fn.search.settings),p=g.className,h=g.metadata,v=g.regExp,b=g.fields,y=g.selector,x=g.error,C=g.namespace,w="."+C,k=C+"-module",S=e(this),T=S.find(y.prompt),A=S.find(y.searchButton),R=S.find(y.results),P=S.find(y.result),E=S.find(y.category),F=this,O=S.data(k),D=!1;
m={initialize:function(){m.verbose("Initializing module"),m.determine.searchFields(),m.bind.events(),m.set.type(),m.create.results(),m.instantiate()},instantiate:function(){m.verbose("Storing instance of module",m),O=m,S.data(k,m)},destroy:function(){m.verbose("Destroying instance"),S.off(w).removeData(k)},refresh:function(){m.debug("Refreshing selector cache"),T=S.find(y.prompt),A=S.find(y.searchButton),E=S.find(y.category),R=S.find(y.results),P=S.find(y.result)},refreshResults:function(){R=S.find(y.results),P=S.find(y.result)},bind:{events:function(){m.verbose("Binding events to search"),g.automatic&&(S.on(m.get.inputEvent()+w,y.prompt,m.event.input),T.attr("autocomplete","off")),S.on("focus"+w,y.prompt,m.event.focus).on("blur"+w,y.prompt,m.event.blur).on("keydown"+w,y.prompt,m.handleKeyboard).on("click"+w,y.searchButton,m.query).on("mousedown"+w,y.results,m.event.result.mousedown).on("mouseup"+w,y.results,m.event.result.mouseup).on("click"+w,y.result,m.event.result.click)}},determine:{searchFields:function(){o&&o.searchFields!==i&&(g.searchFields=o.searchFields)}},event:{input:function(){clearTimeout(m.timer),m.timer=setTimeout(m.query,g.searchDelay)},focus:function(){m.set.focus(),m.has.minimumCharacters()&&(m.query(),m.can.show()&&m.showResults())},blur:function(e){var t=n.activeElement===this,i=function(){m.cancel.query(),m.remove.focus(),m.timer=setTimeout(m.hideResults,g.hideDelay)};t||(m.resultsClicked?(m.debug("Determining if user action caused search to close"),S.one("click.close"+w,y.results,function(e){return m.is.inMessage(e)||D?void T.focus():(D=!1,void(m.is.animating()||m.is.hidden()||i()))})):(m.debug("Input blurred without user action, closing results"),i()))},result:{mousedown:function(){m.resultsClicked=!0},mouseup:function(){m.resultsClicked=!1},click:function(n){m.debug("Search result selected");var i=e(this),o=i.find(y.title).eq(0),a=i.is("a[href]")?i:i.find("a[href]").eq(0),r=a.attr("href")||!1,s=a.attr("target")||!1,l=(o.html(),o.length>0&&o.text()),c=m.get.results(),u=i.data(h.result)||m.get.result(l,c);return e.isFunction(g.onSelect)&&g.onSelect.call(F,u,c)===!1?(m.debug("Custom onSelect callback cancelled default select action"),void(D=!0)):(m.hideResults(),l&&m.set.value(l),void(r&&(m.verbose("Opening search link found in result",a),"_blank"==s||n.ctrlKey?t.open(r):t.location.href=r)))}}},handleKeyboard:function(e){var t,n=S.find(y.result),i=S.find(y.category),o=n.index(n.filter("."+p.active)),a=n.length,r=e.which,s={backspace:8,enter:13,escape:27,upArrow:38,downArrow:40};if(r==s.escape&&(m.verbose("Escape key pressed, blurring search field"),m.trigger.blur()),m.is.visible())if(r==s.enter){if(m.verbose("Enter key pressed, selecting active result"),n.filter("."+p.active).length>0)return m.event.result.click.call(n.filter("."+p.active),e),e.preventDefault(),!1}else r==s.upArrow?(m.verbose("Up key pressed, changing active result"),t=o-1<0?o:o-1,i.removeClass(p.active),n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active),e.preventDefault()):r==s.downArrow&&(m.verbose("Down key pressed, changing active result"),t=o+1>=a?o:o+1,i.removeClass(p.active),n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active),e.preventDefault());else r==s.enter&&(m.verbose("Enter key pressed, executing query"),m.query(),m.set.buttonPressed(),T.one("keyup",m.remove.buttonFocus))},setup:{api:function(t){var n={debug:g.debug,on:!1,cache:!0,action:"search",urlData:{query:t},onSuccess:function(e){m.parse.response.call(F,e,t)},onAbort:function(e){},onFailure:function(){m.displayMessage(x.serverError)},onError:m.error};e.extend(!0,n,g.apiSettings),m.verbose("Setting up API request",n),S.api(n)}},can:{useAPI:function(){return e.fn.api!==i},show:function(){return m.is.focused()&&!m.is.visible()&&!m.is.empty()},transition:function(){return g.transition&&e.fn.transition!==i&&S.transition("is supported")}},is:{animating:function(){return R.hasClass(p.animating)},hidden:function(){return R.hasClass(p.hidden)},inMessage:function(t){return t.target&&e(t.target).closest(y.message).length>0},empty:function(){return""===R.html()},visible:function(){return R.filter(":visible").length>0},focused:function(){return T.filter(":focus").length>0}},trigger:{blur:function(){var e=n.createEvent("HTMLEvents"),t=T[0];t&&(m.verbose("Triggering native blur event"),e.initEvent("blur",!1,!1),t.dispatchEvent(e))}},get:{inputEvent:function(){var e=T[0],t=e!=i&&e.oninput!=i?"input":e!=i&&e.onpropertychange!=i?"propertychange":"keyup";return t},value:function(){return T.val()},results:function(){var e=S.data(h.results);return e},result:function(t,n){var o=["title","id"],a=!1;return t=t!==i?t:m.get.value(),n=n!==i?n:m.get.results(),"category"===g.type?(m.debug("Finding result that matches",t),e.each(n,function(n,i){if(e.isArray(i.results)&&(a=m.search.object(t,i.results,o)[0]))return!1})):(m.debug("Finding result in results object",t),a=m.search.object(t,n,o)[0]),a||!1}},select:{firstResult:function(){m.verbose("Selecting first result"),P.first().addClass(p.active)}},set:{focus:function(){S.addClass(p.focus)},loading:function(){S.addClass(p.loading)},value:function(e){m.verbose("Setting search input value",e),T.val(e)},type:function(e){e=e||g.type,"category"==g.type&&S.addClass(g.type)},buttonPressed:function(){A.addClass(p.pressed)}},remove:{loading:function(){S.removeClass(p.loading)},focus:function(){S.removeClass(p.focus)},buttonPressed:function(){A.removeClass(p.pressed)}},query:function(){var t=m.get.value(),n=m.read.cache(t);m.has.minimumCharacters()?(n?(m.debug("Reading result from cache",t),m.save.results(n.results),m.addResults(n.html),m.inject.id(n.results)):(m.debug("Querying for",t),e.isPlainObject(g.source)||e.isArray(g.source)?m.search.local(t):m.can.useAPI()?m.search.remote(t):m.error(x.source)),g.onSearchQuery.call(F,t)):m.hideResults()},search:{local:function(e){var t,n=m.search.object(e,g.content);m.set.loading(),m.save.results(n),m.debug("Returned local search results",n),t=m.generateResults({results:n}),m.remove.loading(),m.addResults(t),m.inject.id(n),m.write.cache(e,{html:t,results:n})},remote:function(e){S.api("is loading")&&S.api("abort"),m.setup.api(e),S.api("query")},object:function(t,n,o){var a=[],r=[],s=t.toString().replace(v.escape,"\\$&"),l=new RegExp(v.beginsWith+s,"i"),c=function(t,n){var i=e.inArray(n,a)==-1,o=e.inArray(n,r)==-1;i&&o&&t.push(n)};return n=n||g.source,o=o!==i?o:g.searchFields,e.isArray(o)||(o=[o]),n===i||n===!1?(m.error(x.source),[]):(e.each(o,function(i,o){e.each(n,function(e,n){var i="string"==typeof n[o];i&&(n[o].search(l)!==-1?c(a,n):g.searchFullText&&m.fuzzySearch(t,n[o])&&c(r,n))})}),e.merge(a,r))}},fuzzySearch:function(e,t){var n=t.length,i=e.length;if("string"!=typeof e)return!1;if(e=e.toLowerCase(),t=t.toLowerCase(),i>n)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===r)continue e;return!1}return!0},parse:{response:function(e,t){var n=m.generateResults(e);m.verbose("Parsing server response",e),e!==i&&t!==i&&e[b.results]!==i&&(m.addResults(n),m.inject.id(e[b.results]),m.write.cache(t,{html:n,results:e[b.results]}),m.save.results(e[b.results]))}},cancel:{query:function(){m.can.useAPI()&&S.api("abort")}},has:{minimumCharacters:function(){var e=m.get.value(),t=e.length;return t>=g.minCharacters}},clear:{cache:function(e){var t=S.data(h.cache);e?e&&t&&t[e]&&(m.debug("Removing value from cache",e),delete t[e],S.data(h.cache,t)):(m.debug("Clearing cache",e),S.removeData(h.cache))}},read:{cache:function(e){var t=S.data(h.cache);return!!g.cache&&(m.verbose("Checking cache for generated html for query",e),"object"==typeof t&&t[e]!==i&&t[e])}},create:{id:function(e,t){var n,o,a=e+1;return t!==i?(n=String.fromCharCode(97+t),o=n+a,m.verbose("Creating category result id",o)):(o=a,m.verbose("Creating result id",o)),o},results:function(){0===R.length&&(R=e("<div />").addClass(p.results).appendTo(S))}},inject:{result:function(e,t,n){m.verbose("Injecting result into results");var o=n!==i?R.children().eq(n).children(y.result).eq(t):R.children(y.result).eq(t);m.verbose("Injecting results metadata",o),o.data(h.result,e)},id:function(t){m.debug("Injecting unique ids into results");var n=0,o=0;return"category"===g.type?e.each(t,function(t,a){o=0,e.each(a.results,function(e,t){var r=a.results[e];r.id===i&&(r.id=m.create.id(o,n)),m.inject.result(r,o,n),o++}),n++}):e.each(t,function(e,n){var a=t[e];a.id===i&&(a.id=m.create.id(o)),m.inject.result(a,o),o++}),t}},save:{results:function(e){m.verbose("Saving current search results to metadata",e),S.data(h.results,e)}},write:{cache:function(e,t){var n=S.data(h.cache)!==i?S.data(h.cache):{};g.cache&&(m.verbose("Writing generated html to cache",e,t),n[e]=t,S.data(h.cache,n))}},addResults:function(t){return e.isFunction(g.onResultsAdd)&&g.onResultsAdd.call(R,t)===!1?(m.debug("onResultsAdd callback cancelled default action"),!1):void(t?(R.html(t),m.refreshResults(),g.selectFirstResult&&m.select.firstResult(),m.showResults()):m.hideResults())},showResults:function(){m.is.visible()||(m.can.transition()?(m.debug("Showing results with css animations"),R.transition({animation:g.transition+" in",debug:g.debug,verbose:g.verbose,duration:g.duration,queue:!0})):(m.debug("Showing results with javascript"),R.stop().fadeIn(g.duration,g.easing)),g.onResultsOpen.call(R))},hideResults:function(){m.is.visible()&&(m.can.transition()?(m.debug("Hiding results with css animations"),R.transition({animation:g.transition+" out",debug:g.debug,verbose:g.verbose,duration:g.duration,queue:!0})):(m.debug("Hiding results with javascript"),R.stop().fadeOut(g.duration,g.easing)),g.onResultsClose.call(R))},generateResults:function(t){m.debug("Generating html from response",t);var n=g.templates[g.type],i=e.isPlainObject(t[b.results])&&!e.isEmptyObject(t[b.results]),o=e.isArray(t[b.results])&&t[b.results].length>0,a="";return i||o?(g.maxResults>0&&(i?"standard"==g.type&&m.error(x.maxResults):t[b.results]=t[b.results].slice(0,g.maxResults)),e.isFunction(n)?a=n(t,b):m.error(x.noTemplate,!1)):g.showNoResults&&(a=m.displayMessage(x.noResults,"empty")),g.onResults.call(F,t),a},displayMessage:function(e,t){return t=t||"standard",m.debug("Displaying message",e,t),m.addResults(g.templates.message(e,t)),g.templates.message(e,t)},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,g,t);else{if(n===i)return g[t];g[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];m[t]=n}},debug:function(){!g.silent&&g.debug&&(g.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,g.name+":"),m.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),m.verbose.apply(console,arguments)))},error:function(){g.silent||(m.error=Function.prototype.bind.call(console.error,console,g.name+":"),m.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;g.performance&&(t=(new Date).getTime(),i=l||t,n=t-i,l=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:F,"Execution Time":n})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500)},display:function(){var t=g.name+":",n=0;l=!1,clearTimeout(m.performance.timer),e.each(c,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",s&&(t+=" '"+s+"'"),r.length>1&&(t+=" ("+r.length+")"),(console.group!==i||console.table!==i)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),c=[]}},invoke:function(t,n,o){var r,s,l,c=O;return n=n||f,o=F||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},d?(O===i&&m.initialize(),m.invoke(u)):(O!==i&&O.invoke("destroy"),m.initialize())}),a!==i?a:this},e.fn.search.settings={name:"Search",namespace:"search",silent:!1,debug:!1,verbose:!1,performance:!0,type:"standard",minCharacters:1,selectFirstResult:!1,apiSettings:!1,source:!1,searchFields:["title","description"],displayField:"",searchFullText:!0,automatic:!0,hideDelay:0,searchDelay:200,maxResults:7,cache:!0,showNoResults:!0,transition:"scale",duration:200,easing:"easeOutExpo",onSelect:!1,onResultsAdd:!1,onSearchQuery:function(e){},onResults:function(e){},onResultsOpen:function(){},onResultsClose:function(){},className:{animating:"animating",active:"active",empty:"empty",focus:"focus",hidden:"hidden",loading:"loading",results:"results",pressed:"down"},error:{source:"Cannot search. No source used, and Semantic API module was not included",noResults:"Your search returned no results",logging:"Error in debug logging, exiting.",noEndpoint:"No search endpoint was specified",noTemplate:"A valid template name was not specified.",serverError:"There was an issue querying the server.",maxResults:"Results must be an array to use maxResults setting",method:"The method you called is not defined."},metadata:{cache:"cache",results:"results",result:"result"},regExp:{escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,beginsWith:"(?:s|^)"},fields:{categories:"results",categoryName:"name",categoryResults:"results",description:"description",image:"image",price:"price",results:"results",title:"title",url:"url",action:"action",actionText:"text",actionURL:"url"},selector:{prompt:".prompt",searchButton:".search.button",results:".results",message:".results > .message",category:".category",result:".result",title:".title, .name"},templates:{escape:function(e){var t=/[&<>"'`]/g,n=/[&<>"'`]/,i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},o=function(e){return i[e]};return n.test(e)?e.replace(t,o):e},message:function(e,t){var n="";return e!==i&&t!==i&&(n+='<div class="message '+t+'">',n+="empty"==t?'<div class="header">No Results</div class="header"><div class="description">'+e+'</div class="description">':' <div class="description">'+e+"</div>",n+="</div>"),n},category:function(t,n){var o="";e.fn.search.settings.templates.escape;return t[n.categoryResults]!==i&&(e.each(t[n.categoryResults],function(t,a){a[n.results]!==i&&a.results.length>0&&(o+='<div class="category">',a[n.categoryName]!==i&&(o+='<div class="name">'+a[n.categoryName]+"</div>"),e.each(a.results,function(e,t){o+=t[n.url]?'<a class="result" href="'+t[n.url]+'">':'<a class="result">',t[n.image]!==i&&(o+='<div class="image"> <img src="'+t[n.image]+'"></div>'),o+='<div class="content">',t[n.price]!==i&&(o+='<div class="price">'+t[n.price]+"</div>"),t[n.title]!==i&&(o+='<div class="title">'+t[n.title]+"</div>"),t[n.description]!==i&&(o+='<div class="description">'+t[n.description]+"</div>"),o+="</div>",o+="</a>"}),o+="</div>")}),t[n.action]&&(o+='<a href="'+t[n.action][n.actionURL]+'" class="action">'+t[n.action][n.actionText]+"</a>"),o)},standard:function(t,n){var o="";return t[n.results]!==i&&(e.each(t[n.results],function(e,t){o+=t[n.url]?'<a class="result" href="'+t[n.url]+'">':'<a class="result">',t[n.image]!==i&&(o+='<div class="image"> <img src="'+t[n.image]+'"></div>'),o+='<div class="content">',t[n.price]!==i&&(o+='<div class="price">'+t[n.price]+"</div>"),t[n.title]!==i&&(o+='<div class="title">'+t[n.title]+"</div>"),t[n.description]!==i&&(o+='<div class="description">'+t[n.description]+"</div>"),o+="</div>",o+="</a>"}),t[n.action]&&(o+='<a href="'+t[n.action][n.actionURL]+'" class="action">'+t[n.action][n.actionText]+"</a>"),o)}}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.shape=function(o){var a,r=e(this),s=(e("body"),(new Date).getTime()),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1),f=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return r.each(function(){var t,m,g,p=r.selector||"",h=e.isPlainObject(o)?e.extend(!0,{},e.fn.shape.settings,o):e.extend({},e.fn.shape.settings),v=h.namespace,b=h.selector,y=h.error,x=h.className,C="."+v,w="module-"+v,k=e(this),S=k.find(b.sides),T=k.find(b.side),A=!1,R=this,P=k.data(w);g={initialize:function(){g.verbose("Initializing module for",R),g.set.defaultSide(),g.instantiate()},instantiate:function(){g.verbose("Storing instance of module",g),P=g,k.data(w,P)},destroy:function(){g.verbose("Destroying previous module for",R),k.removeData(w).off(C)},refresh:function(){g.verbose("Refreshing selector cache for",R),k=e(R),S=e(this).find(b.shape),T=e(this).find(b.side)},repaint:function(){g.verbose("Forcing repaint event");var e=S[0]||n.createElement("div");e.offsetWidth},animate:function(e,n){g.verbose("Animating box with properties",e),n=n||function(e){g.verbose("Executing animation callback"),e!==i&&e.stopPropagation(),g.reset(),g.set.active()},h.beforeChange.call(m[0]),g.get.transitionEvent()?(g.verbose("Starting CSS animation"),k.addClass(x.animating),S.css(e).one(g.get.transitionEvent(),n),g.set.duration(h.duration),f(function(){k.addClass(x.animating),t.addClass(x.hidden)})):n()},queue:function(e){g.debug("Queueing animation of",e),S.one(g.get.transitionEvent(),function(){g.debug("Executing queued animation"),setTimeout(function(){k.shape(e)},0)})},reset:function(){g.verbose("Animating states reset"),k.removeClass(x.animating).attr("style","").removeAttr("style"),S.attr("style","").removeAttr("style"),T.attr("style","").removeAttr("style").removeClass(x.hidden),m.removeClass(x.animating).attr("style","").removeAttr("style")},is:{complete:function(){return T.filter("."+x.active)[0]==m[0]},animating:function(){return k.hasClass(x.animating)}},set:{defaultSide:function(){t=k.find("."+h.className.active),m=t.next(b.side).length>0?t.next(b.side):k.find(b.side).first(),A=!1,g.verbose("Active side set to",t),g.verbose("Next side set to",m)},duration:function(e){e=e||h.duration,e="number"==typeof e?e+"ms":e,g.verbose("Setting animation duration",e),(h.duration||0===h.duration)&&S.add(T).css({"-webkit-transition-duration":e,"-moz-transition-duration":e,"-ms-transition-duration":e,"-o-transition-duration":e,"transition-duration":e})},currentStageSize:function(){var e=k.find("."+h.className.active),t=e.outerWidth(!0),n=e.outerHeight(!0);k.css({width:t,height:n})},stageSize:function(){var e=k.clone().addClass(x.loading),t=e.find("."+h.className.active),n=A?e.find(b.side).eq(A):t.next(b.side).length>0?t.next(b.side):e.find(b.side).first(),i="next"==h.width?n.outerWidth(!0):"initial"==h.width?k.width():h.width,o="next"==h.height?n.outerHeight(!0):"initial"==h.height?k.height():h.height;t.removeClass(x.active),n.addClass(x.active),e.insertAfter(k),e.remove(),"auto"!=h.width&&(k.css("width",i+h.jitter),g.verbose("Specifying width during animation",i)),"auto"!=h.height&&(k.css("height",o+h.jitter),g.verbose("Specifying height during animation",o))},nextSide:function(e){A=e,m=T.filter(e),A=T.index(m),0===m.length&&(g.set.defaultSide(),g.error(y.side)),g.verbose("Next side manually set to",m)},active:function(){g.verbose("Setting new side to active",m),T.removeClass(x.active),m.addClass(x.active),h.onChange.call(m[0]),g.set.defaultSide()}},flip:{up:function(){if(g.is.complete()&&!g.is.animating()&&!h.allowRepeats)return void g.debug("Side already visible",m);if(g.is.animating())g.queue("flip up");else{g.debug("Flipping up",m);var e=g.get.transform.up();g.set.stageSize(),g.stage.above(),g.animate(e)}},down:function(){if(g.is.complete()&&!g.is.animating()&&!h.allowRepeats)return void g.debug("Side already visible",m);if(g.is.animating())g.queue("flip down");else{g.debug("Flipping down",m);var e=g.get.transform.down();g.set.stageSize(),g.stage.below(),g.animate(e)}},left:function(){if(g.is.complete()&&!g.is.animating()&&!h.allowRepeats)return void g.debug("Side already visible",m);if(g.is.animating())g.queue("flip left");else{g.debug("Flipping left",m);var e=g.get.transform.left();g.set.stageSize(),g.stage.left(),g.animate(e)}},right:function(){if(g.is.complete()&&!g.is.animating()&&!h.allowRepeats)return void g.debug("Side already visible",m);if(g.is.animating())g.queue("flip right");else{g.debug("Flipping right",m);var e=g.get.transform.right();g.set.stageSize(),g.stage.right(),g.animate(e)}},over:function(){return!g.is.complete()||g.is.animating()||h.allowRepeats?void(g.is.animating()?g.queue("flip over"):(g.debug("Flipping over",m),g.set.stageSize(),g.stage.behind(),g.animate(g.get.transform.over()))):void g.debug("Side already visible",m)},back:function(){return!g.is.complete()||g.is.animating()||h.allowRepeats?void(g.is.animating()?g.queue("flip back"):(g.debug("Flipping back",m),g.set.stageSize(),g.stage.behind(),g.animate(g.get.transform.back()))):void g.debug("Side already visible",m)}},get:{transform:{up:function(){var e={y:-((t.outerHeight(!0)-m.outerHeight(!0))/2),z:-(t.outerHeight(!0)/2)};return{transform:"translateY("+e.y+"px) translateZ("+e.z+"px) rotateX(-90deg)"}},down:function(){var e={y:-((t.outerHeight(!0)-m.outerHeight(!0))/2),z:-(t.outerHeight(!0)/2)};return{transform:"translateY("+e.y+"px) translateZ("+e.z+"px) rotateX(90deg)"}},left:function(){var e={x:-((t.outerWidth(!0)-m.outerWidth(!0))/2),z:-(t.outerWidth(!0)/2)};return{transform:"translateX("+e.x+"px) translateZ("+e.z+"px) rotateY(90deg)"}},right:function(){var e={x:-((t.outerWidth(!0)-m.outerWidth(!0))/2),z:-(t.outerWidth(!0)/2)};return{transform:"translateX("+e.x+"px) translateZ("+e.z+"px) rotateY(-90deg)"}},over:function(){var e={x:-((t.outerWidth(!0)-m.outerWidth(!0))/2)};return{transform:"translateX("+e.x+"px) rotateY(180deg)"}},back:function(){var e={x:-((t.outerWidth(!0)-m.outerWidth(!0))/2)};return{transform:"translateX("+e.x+"px) rotateY(-180deg)"}}},transitionEvent:function(){var e,t=n.createElement("element"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in o)if(t.style[e]!==i)return o[e]},nextSide:function(){return t.next(b.side).length>0?t.next(b.side):k.find(b.side).first()}},stage:{above:function(){var e={origin:(t.outerHeight(!0)-m.outerHeight(!0))/2,depth:{active:m.outerHeight(!0)/2,next:t.outerHeight(!0)/2}};g.verbose("Setting the initial animation position as above",m,e),S.css({transform:"translateZ(-"+e.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+e.depth.active+"px)"}),m.addClass(x.animating).css({top:e.origin+"px",transform:"rotateX(90deg) translateZ("+e.depth.next+"px)"})},below:function(){var e={origin:(t.outerHeight(!0)-m.outerHeight(!0))/2,depth:{active:m.outerHeight(!0)/2,next:t.outerHeight(!0)/2}};g.verbose("Setting the initial animation position as below",m,e),S.css({transform:"translateZ(-"+e.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+e.depth.active+"px)"}),m.addClass(x.animating).css({top:e.origin+"px",transform:"rotateX(-90deg) translateZ("+e.depth.next+"px)"})},left:function(){var e={active:t.outerWidth(!0),next:m.outerWidth(!0)},n={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};g.verbose("Setting the initial animation position as left",m,n),S.css({transform:"translateZ(-"+n.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+n.depth.active+"px)"}),m.addClass(x.animating).css({left:n.origin+"px",transform:"rotateY(-90deg) translateZ("+n.depth.next+"px)"})},right:function(){var e={active:t.outerWidth(!0),next:m.outerWidth(!0)},n={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};g.verbose("Setting the initial animation position as left",m,n),S.css({transform:"translateZ(-"+n.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+n.depth.active+"px)"}),m.addClass(x.animating).css({left:n.origin+"px",transform:"rotateY(90deg) translateZ("+n.depth.next+"px)"})},behind:function(){var e={active:t.outerWidth(!0),next:m.outerWidth(!0)},n={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};g.verbose("Setting the initial animation position as behind",m,n),t.css({transform:"rotateY(0deg)"}),m.addClass(x.animating).css({left:n.origin+"px",transform:"rotateY(-180deg)"})}},setting:function(t,n){if(g.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,h,t);else{if(n===i)return h[t];e.isPlainObject(h[t])?e.extend(!0,h[t],n):h[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,g,t);else{if(n===i)return g[t];g[t]=n}},debug:function(){!h.silent&&h.debug&&(h.performance?g.performance.log(arguments):(g.debug=Function.prototype.bind.call(console.info,console,h.name+":"),g.debug.apply(console,arguments)))},verbose:function(){!h.silent&&h.verbose&&h.debug&&(h.performance?g.performance.log(arguments):(g.verbose=Function.prototype.bind.call(console.info,console,h.name+":"),g.verbose.apply(console,arguments)))},error:function(){h.silent||(g.error=Function.prototype.bind.call(console.error,console,h.name+":"),g.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;h.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:R,"Execution Time":n})),clearTimeout(g.performance.timer),g.performance.timer=setTimeout(g.performance.display,500)},display:function(){var t=h.name+":",n=0;s=!1,clearTimeout(g.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",p&&(t+=" '"+p+"'"),r.length>1&&(t+=" ("+r.length+")"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,o){var r,s,l,c=P;return n=n||d,o=R||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},u?(P===i&&g.initialize(),g.invoke(c)):(P!==i&&P.invoke("destroy"),g.initialize())}),a!==i?a:this},e.fn.shape.settings={name:"Shape",silent:!1,debug:!1,verbose:!1,jitter:0,performance:!0,namespace:"shape",width:"initial",height:"initial",beforeChange:function(){},onChange:function(){},allowRepeats:!1,duration:!1,error:{side:"You tried to switch to a side that does not exist.",method:"The method you called is not defined"},className:{animating:"animating",hidden:"hidden",loading:"loading",active:"active"},selector:{sides:".sides",side:".side"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.sidebar=function(o){var a,r=e(this),s=e(t),l=e(n),c=e("html"),u=e("head"),d=r.selector||"",f=(new Date).getTime(),m=[],g=arguments[0],p="string"==typeof g,h=[].slice.call(arguments,1),v=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return r.each(function(){var r,b,y,x,C,w,k=e.isPlainObject(o)?e.extend(!0,{},e.fn.sidebar.settings,o):e.extend({},e.fn.sidebar.settings),S=k.selector,T=k.className,A=k.namespace,R=k.regExp,P=k.error,E="."+A,F="module-"+A,O=e(this),D=e(k.context),q=O.children(S.sidebar),j=D.children(S.fixed),z=D.children(S.pusher),M=this,I=O.data(F);w={initialize:function(){w.debug("Initializing sidebar",o),w.create.id(),C=w.get.transitionEvent(),w.is.ios()&&w.set.ios(),k.delaySetup?v(w.setup.layout):w.setup.layout(),v(function(){w.setup.cache()}),w.instantiate()},instantiate:function(){w.verbose("Storing instance of module",w),I=w,O.data(F,w)},create:{id:function(){y=(Math.random().toString(16)+"000000000").substr(2,8),b="."+y,w.verbose("Creating unique id for element",y)}},destroy:function(){w.verbose("Destroying previous module for",O),O.off(E).removeData(F),w.is.ios()&&w.remove.ios(),D.off(b),s.off(b),l.off(b)},event:{clickaway:function(e){var t=z.find(e.target).length>0||z.is(e.target),n=D.is(e.target);t&&(w.verbose("User clicked on dimmed page"),w.hide()),n&&(w.verbose("User clicked on dimmable context (scaled out page)"),w.hide())},touch:function(e){},containScroll:function(e){M.scrollTop<=0&&(M.scrollTop=1),M.scrollTop+M.offsetHeight>=M.scrollHeight&&(M.scrollTop=M.scrollHeight-M.offsetHeight-1)},scroll:function(t){0===e(t.target).closest(S.sidebar).length&&t.preventDefault()}},bind:{clickaway:function(){w.verbose("Adding clickaway events to context",D),k.closable&&D.on("click"+b,w.event.clickaway).on("touchend"+b,w.event.clickaway)},scrollLock:function(){k.scrollLock&&(w.debug("Disabling page scroll"),s.on("DOMMouseScroll"+b,w.event.scroll)),w.verbose("Adding events to contain sidebar scroll"),l.on("touchmove"+b,w.event.touch),O.on("scroll"+E,w.event.containScroll)}},unbind:{clickaway:function(){w.verbose("Removing clickaway events from context",D),D.off(b)},scrollLock:function(){w.verbose("Removing scroll lock from page"),l.off(b),s.off(b),O.off("scroll"+E)}},add:{inlineCSS:function(){var t,n=w.cache.width||O.outerWidth(),i=w.cache.height||O.outerHeight(),o=w.is.rtl(),a=w.get.direction(),s={left:n,right:-n,top:i,bottom:-i};o&&(w.verbose("RTL detected, flipping widths"),s.left=-n,s.right=n),t="<style>","left"===a||"right"===a?(w.debug("Adding CSS rules for animation distance",n),t+=" .ui.visible."+a+".sidebar ~ .fixed, .ui.visible."+a+".sidebar ~ .pusher {   -webkit-transform: translate3d("+s[a]+"px, 0, 0);           transform: translate3d("+s[a]+"px, 0, 0); }"):"top"!==a&&"bottom"!=a||(t+=" .ui.visible."+a+".sidebar ~ .fixed, .ui.visible."+a+".sidebar ~ .pusher {   -webkit-transform: translate3d(0, "+s[a]+"px, 0);           transform: translate3d(0, "+s[a]+"px, 0); }"),w.is.ie()&&("left"===a||"right"===a?(w.debug("Adding CSS rules for animation distance",n),t+=" body.pushable > .ui.visible."+a+".sidebar ~ .pusher:after {   -webkit-transform: translate3d("+s[a]+"px, 0, 0);           transform: translate3d("+s[a]+"px, 0, 0); }"):"top"!==a&&"bottom"!=a||(t+=" body.pushable > .ui.visible."+a+".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, "+s[a]+"px, 0);           transform: translate3d(0, "+s[a]+"px, 0); }"),t+=" body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"),t+="</style>",r=e(t).appendTo(u),w.debug("Adding sizing css to head",r)}},refresh:function(){w.verbose("Refreshing selector cache"),D=e(k.context),q=D.children(S.sidebar),z=D.children(S.pusher),j=D.children(S.fixed),w.clear.cache()},refreshSidebars:function(){w.verbose("Refreshing other sidebars"),q=D.children(S.sidebar)},repaint:function(){w.verbose("Forcing repaint event"),M.style.display="none";M.offsetHeight;M.scrollTop=M.scrollTop,M.style.display=""},setup:{cache:function(){w.cache={width:O.outerWidth(),height:O.outerHeight(),rtl:"rtl"==O.css("direction")}},layout:function(){0===D.children(S.pusher).length&&(w.debug("Adding wrapper element for sidebar"),w.error(P.pusher),z=e('<div class="pusher" />'),D.children().not(S.omitted).not(q).wrapAll(z),w.refresh()),0!==O.nextAll(S.pusher).length&&O.nextAll(S.pusher)[0]===z[0]||(w.debug("Moved sidebar to correct parent element"),w.error(P.movedSidebar,M),O.detach().prependTo(D),w.refresh()),w.clear.cache(),w.set.pushable(),w.set.direction()}},attachEvents:function(t,n){var i=e(t);n=e.isFunction(w[n])?w[n]:w.toggle,i.length>0?(w.debug("Attaching sidebar events to element",t,n),
i.on("click"+E,n)):w.error(P.notFound,t)},show:function(t){if(t=e.isFunction(t)?t:function(){},w.is.hidden()){if(w.refreshSidebars(),k.overlay&&(w.error(P.overlay),k.transition="overlay"),w.refresh(),w.othersActive())if(w.debug("Other sidebars currently visible"),k.exclusive){if("overlay"!=k.transition)return void w.hideOthers(w.show);w.hideOthers()}else k.transition="overlay";w.pushPage(function(){t.call(M),k.onShow.call(M)}),k.onChange.call(M),k.onVisible.call(M)}else w.debug("Sidebar is already visible")},hide:function(t){t=e.isFunction(t)?t:function(){},(w.is.visible()||w.is.animating())&&(w.debug("Hiding sidebar",t),w.refreshSidebars(),w.pullPage(function(){t.call(M),k.onHidden.call(M)}),k.onChange.call(M),k.onHide.call(M))},othersAnimating:function(){return q.not(O).filter("."+T.animating).length>0},othersVisible:function(){return q.not(O).filter("."+T.visible).length>0},othersActive:function(){return w.othersVisible()||w.othersAnimating()},hideOthers:function(e){var t=q.not(O).filter("."+T.visible),n=t.length,i=0;e=e||function(){},t.sidebar("hide",function(){i++,i==n&&e()})},toggle:function(){w.verbose("Determining toggled direction"),w.is.hidden()?w.show():w.hide()},pushPage:function(t){var n,i,o,a=w.get.transition(),r="overlay"===a||w.othersActive()?O:z;t=e.isFunction(t)?t:function(){},"scale down"==k.transition&&w.scrollToTop(),w.set.transition(a),w.repaint(),n=function(){w.bind.clickaway(),w.add.inlineCSS(),w.set.animating(),w.set.visible()},i=function(){w.set.dimmed()},o=function(e){e.target==r[0]&&(r.off(C+b,o),w.remove.animating(),w.bind.scrollLock(),t.call(M))},r.off(C+b),r.on(C+b,o),v(n),k.dimPage&&!w.othersVisible()&&v(i)},pullPage:function(t){var n,i,o=w.get.transition(),a="overlay"==o||w.othersActive()?O:z;t=e.isFunction(t)?t:function(){},w.verbose("Removing context push state",w.get.direction()),w.unbind.clickaway(),w.unbind.scrollLock(),n=function(){w.set.transition(o),w.set.animating(),w.remove.visible(),k.dimPage&&!w.othersVisible()&&z.removeClass(T.dimmed)},i=function(e){e.target==a[0]&&(a.off(C+b,i),w.remove.animating(),w.remove.transition(),w.remove.inlineCSS(),("scale down"==o||k.returnScroll&&w.is.mobile())&&w.scrollBack(),t.call(M))},a.off(C+b),a.on(C+b,i),v(n)},scrollToTop:function(){w.verbose("Scrolling to top of page to avoid animation issues"),x=e(t).scrollTop(),O.scrollTop(0),t.scrollTo(0,0)},scrollBack:function(){w.verbose("Scrolling back to original page position"),t.scrollTo(0,x)},clear:{cache:function(){w.verbose("Clearing cached dimensions"),w.cache={}}},set:{ios:function(){c.addClass(T.ios)},pushed:function(){D.addClass(T.pushed)},pushable:function(){D.addClass(T.pushable)},dimmed:function(){z.addClass(T.dimmed)},active:function(){O.addClass(T.active)},animating:function(){O.addClass(T.animating)},transition:function(e){e=e||w.get.transition(),O.addClass(e)},direction:function(e){e=e||w.get.direction(),O.addClass(T[e])},visible:function(){O.addClass(T.visible)},overlay:function(){O.addClass(T.overlay)}},remove:{inlineCSS:function(){w.debug("Removing inline css styles",r),r&&r.length>0&&r.remove()},ios:function(){c.removeClass(T.ios)},pushed:function(){D.removeClass(T.pushed)},pushable:function(){D.removeClass(T.pushable)},active:function(){O.removeClass(T.active)},animating:function(){O.removeClass(T.animating)},transition:function(e){e=e||w.get.transition(),O.removeClass(e)},direction:function(e){e=e||w.get.direction(),O.removeClass(T[e])},visible:function(){O.removeClass(T.visible)},overlay:function(){O.removeClass(T.overlay)}},get:{direction:function(){return O.hasClass(T.top)?T.top:O.hasClass(T.right)?T.right:O.hasClass(T.bottom)?T.bottom:T.left},transition:function(){var e,t=w.get.direction();return e=w.is.mobile()?"auto"==k.mobileTransition?k.defaultTransition.mobile[t]:k.mobileTransition:"auto"==k.transition?k.defaultTransition.computer[t]:k.transition,w.verbose("Determined transition",e),e},transitionEvent:function(){var e,t=n.createElement("element"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in o)if(t.style[e]!==i)return o[e]}},is:{ie:function(){var e=!t.ActiveXObject&&"ActiveXObject"in t,n="ActiveXObject"in t;return e||n},ios:function(){var e=navigator.userAgent,t=e.match(R.ios),n=e.match(R.mobileChrome);return!(!t||n)&&(w.verbose("Browser was found to be iOS",e),!0)},mobile:function(){var e=navigator.userAgent,t=e.match(R.mobile);return t?(w.verbose("Browser was found to be mobile",e),!0):(w.verbose("Browser is not mobile, using regular transition",e),!1)},hidden:function(){return!w.is.visible()},visible:function(){return O.hasClass(T.visible)},open:function(){return w.is.visible()},closed:function(){return w.is.hidden()},vertical:function(){return O.hasClass(T.top)},animating:function(){return D.hasClass(T.animating)},rtl:function(){return w.cache.rtl===i&&(w.cache.rtl="rtl"==O.css("direction")),w.cache.rtl}},setting:function(t,n){if(w.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,k,t);else{if(n===i)return k[t];e.isPlainObject(k[t])?e.extend(!0,k[t],n):k[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,w,t);else{if(n===i)return w[t];w[t]=n}},debug:function(){!k.silent&&k.debug&&(k.performance?w.performance.log(arguments):(w.debug=Function.prototype.bind.call(console.info,console,k.name+":"),w.debug.apply(console,arguments)))},verbose:function(){!k.silent&&k.verbose&&k.debug&&(k.performance?w.performance.log(arguments):(w.verbose=Function.prototype.bind.call(console.info,console,k.name+":"),w.verbose.apply(console,arguments)))},error:function(){k.silent||(w.error=Function.prototype.bind.call(console.error,console,k.name+":"),w.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;k.performance&&(t=(new Date).getTime(),i=f||t,n=t-i,f=t,m.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:M,"Execution Time":n})),clearTimeout(w.performance.timer),w.performance.timer=setTimeout(w.performance.display,500)},display:function(){var t=k.name+":",n=0;f=!1,clearTimeout(w.performance.timer),e.each(m,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",d&&(t+=" '"+d+"'"),(console.group!==i||console.table!==i)&&m.length>0&&(console.groupCollapsed(t),console.table?console.table(m):e.each(m,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),m=[]}},invoke:function(t,n,o){var r,s,l,c=I;return n=n||h,o=M||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(w.error(P.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},p?(I===i&&w.initialize(),w.invoke(g)):(I!==i&&w.invoke("destroy"),w.initialize())}),a!==i?a:this},e.fn.sidebar.settings={name:"Sidebar",namespace:"sidebar",silent:!1,debug:!1,verbose:!1,performance:!0,transition:"auto",mobileTransition:"auto",defaultTransition:{computer:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"},mobile:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"}},context:"body",exclusive:!1,closable:!0,dimPage:!0,scrollLock:!1,returnScroll:!1,delaySetup:!1,duration:500,onChange:function(){},onShow:function(){},onHide:function(){},onHidden:function(){},onVisible:function(){},className:{active:"active",animating:"animating",dimmed:"dimmed",ios:"ios",pushable:"pushable",pushed:"pushed",right:"right",top:"top",left:"left",bottom:"bottom",visible:"visible"},selector:{fixed:".fixed",omitted:"script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",pusher:".pusher",sidebar:".ui.sidebar"},regExp:{ios:/(iPad|iPhone|iPod)/g,mobileChrome:/(CriOS)/g,mobile:/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g},error:{method:"The method you called is not defined.",pusher:"Had to add pusher element. For optimal performance make sure body content is inside a pusher element",movedSidebar:"Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",overlay:"The overlay setting is no longer supported, use animation: overlay",notFound:"There were no elements that matched the specified selector"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.sticky=function(o){var a,r=e(this),s=r.selector||"",l=(new Date).getTime(),c=[],u=arguments[0],d="string"==typeof u,f=[].slice.call(arguments,1);return r.each(function(){var r,m,g,p,h,v=e.isPlainObject(o)?e.extend(!0,{},e.fn.sticky.settings,o):e.extend({},e.fn.sticky.settings),b=v.className,y=v.namespace,x=v.error,C="."+y,w="module-"+y,k=e(this),S=e(t),T=e(v.scrollContext),A=(k.selector||"",k.data(w)),R=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)},P=this;h={initialize:function(){h.determineContainer(),h.determineContext(),h.verbose("Initializing sticky",v,r),h.save.positions(),h.checkErrors(),h.bind.events(),v.observeChanges&&h.observeChanges(),h.instantiate()},instantiate:function(){h.verbose("Storing instance of module",h),A=h,k.data(w,h)},destroy:function(){h.verbose("Destroying previous instance"),h.reset(),g&&g.disconnect(),p&&p.disconnect(),S.off("load"+C,h.event.load).off("resize"+C,h.event.resize),T.off("scrollchange"+C,h.event.scrollchange),k.removeData(w)},observeChanges:function(){"MutationObserver"in t&&(g=new MutationObserver(h.event.documentChanged),p=new MutationObserver(h.event.changed),g.observe(n,{childList:!0,subtree:!0}),p.observe(P,{childList:!0,subtree:!0}),p.observe(m[0],{childList:!0,subtree:!0}),h.debug("Setting up mutation observer",p))},determineContainer:function(){r=k.offsetParent()},determineContext:function(){if(m=v.context?e(v.context):r,0===m.length)return void h.error(x.invalidContext,v.context,k)},checkErrors:function(){if(h.is.hidden()&&h.error(x.visible,k),h.cache.element.height>h.cache.context.height)return h.reset(),void h.error(x.elementSize,k)},bind:{events:function(){S.on("load"+C,h.event.load).on("resize"+C,h.event.resize),T.off("scroll"+C).on("scroll"+C,h.event.scroll).on("scrollchange"+C,h.event.scrollchange)}},event:{changed:function(e){clearTimeout(h.timer),h.timer=setTimeout(function(){h.verbose("DOM tree modified, updating sticky menu",e),h.refresh()},100)},documentChanged:function(t){[].forEach.call(t,function(t){t.removedNodes&&[].forEach.call(t.removedNodes,function(t){(t==P||e(t).find(P).length>0)&&(h.debug("Element removed from DOM, tearing down events"),h.destroy())})})},load:function(){h.verbose("Page contents finished loading"),R(h.refresh)},resize:function(){h.verbose("Window resized"),R(h.refresh)},scroll:function(){R(function(){T.triggerHandler("scrollchange"+C,T.scrollTop())})},scrollchange:function(e,t){h.stick(t),v.onScroll.call(P)}},refresh:function(e){h.reset(),v.context||h.determineContext(),e&&h.determineContainer(),h.save.positions(),h.stick(),v.onReposition.call(P)},supports:{sticky:function(){var t=e("<div/>");t[0];return t.addClass(b.supported),t.css("position").match("sticky")}},save:{lastScroll:function(e){h.lastScroll=e},elementScroll:function(e){h.elementScroll=e},positions:function(){var e={height:T.height()},t={margin:{top:parseInt(k.css("margin-top"),10),bottom:parseInt(k.css("margin-bottom"),10)},offset:k.offset(),width:k.outerWidth(),height:k.outerHeight()},n={offset:m.offset(),height:m.outerHeight()};({height:r.outerHeight()});h.is.standardScroll()||(h.debug("Non-standard scroll. Removing scroll offset from element offset"),e.top=T.scrollTop(),e.left=T.scrollLeft(),t.offset.top+=e.top,n.offset.top+=e.top,t.offset.left+=e.left,n.offset.left+=e.left),h.cache={fits:t.height<e.height,scrollContext:{height:e.height},element:{margin:t.margin,top:t.offset.top-t.margin.top,left:t.offset.left,width:t.width,height:t.height,bottom:t.offset.top+t.height},context:{top:n.offset.top,height:n.height,bottom:n.offset.top+n.height}},h.set.containerSize(),h.set.size(),h.stick(),h.debug("Caching element positions",h.cache)}},get:{direction:function(e){var t="down";return e=e||T.scrollTop(),h.lastScroll!==i&&(h.lastScroll<e?t="down":h.lastScroll>e&&(t="up")),t},scrollChange:function(e){return e=e||T.scrollTop(),h.lastScroll?e-h.lastScroll:0},currentElementScroll:function(){return h.elementScroll?h.elementScroll:h.is.top()?Math.abs(parseInt(k.css("top"),10))||0:Math.abs(parseInt(k.css("bottom"),10))||0},elementScroll:function(e){e=e||T.scrollTop();var t=h.cache.element,n=h.cache.scrollContext,i=h.get.scrollChange(e),o=t.height-n.height+v.offset,a=h.get.currentElementScroll(),r=a+i;return a=h.cache.fits||r<0?0:r>o?o:r}},remove:{lastScroll:function(){delete h.lastScroll},elementScroll:function(e){delete h.elementScroll},offset:function(){k.css("margin-top","")}},set:{offset:function(){h.verbose("Setting offset on element",v.offset),k.css("margin-top",v.offset)},containerSize:function(){var e=r.get(0).tagName;"HTML"===e||"body"==e?h.determineContainer():Math.abs(r.outerHeight()-h.cache.context.height)>v.jitter&&(h.debug("Context has padding, specifying exact height for container",h.cache.context.height),r.css({height:h.cache.context.height}))},minimumSize:function(){var e=h.cache.element;r.css("min-height",e.height)},scroll:function(e){h.debug("Setting scroll on element",e),h.elementScroll!=e&&(h.is.top()&&k.css("bottom","").css("top",-e),h.is.bottom()&&k.css("top","").css("bottom",e))},size:function(){0!==h.cache.element.height&&0!==h.cache.element.width&&(P.style.setProperty("width",h.cache.element.width+"px","important"),P.style.setProperty("height",h.cache.element.height+"px","important"))}},is:{standardScroll:function(){return T[0]==t},top:function(){return k.hasClass(b.top)},bottom:function(){return k.hasClass(b.bottom)},initialPosition:function(){return!h.is.fixed()&&!h.is.bound()},hidden:function(){return!k.is(":visible")},bound:function(){return k.hasClass(b.bound)},fixed:function(){return k.hasClass(b.fixed)}},stick:function(e){var t=e||T.scrollTop(),n=h.cache,i=n.fits,o=n.element,a=n.scrollContext,r=n.context,s=h.is.bottom()&&v.pushing?v.bottomOffset:v.offset,e={top:t+s,bottom:t+s+a.height},l=(h.get.direction(e.top),i?0:h.get.elementScroll(e.top)),c=!i,u=0!==o.height;u&&(h.is.initialPosition()?e.top>=r.bottom?(h.debug("Initial element position is bottom of container"),h.bindBottom()):e.top>o.top&&(o.height+e.top-l>=r.bottom?(h.debug("Initial element position is bottom of container"),h.bindBottom()):(h.debug("Initial element position is fixed"),h.fixTop())):h.is.fixed()?h.is.top()?e.top<=o.top?(h.debug("Fixed element reached top of container"),h.setInitialPosition()):o.height+e.top-l>=r.bottom?(h.debug("Fixed element reached bottom of container"),h.bindBottom()):c&&(h.set.scroll(l),h.save.lastScroll(e.top),h.save.elementScroll(l)):h.is.bottom()&&(e.bottom-o.height<=o.top?(h.debug("Bottom fixed rail has reached top of container"),h.setInitialPosition()):e.bottom>=r.bottom?(h.debug("Bottom fixed rail has reached bottom of container"),h.bindBottom()):c&&(h.set.scroll(l),h.save.lastScroll(e.top),h.save.elementScroll(l))):h.is.bottom()&&(e.top<=o.top?(h.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"),h.setInitialPosition()):v.pushing?h.is.bound()&&e.bottom<=r.bottom&&(h.debug("Fixing bottom attached element to bottom of browser."),h.fixBottom()):h.is.bound()&&e.top<=r.bottom-o.height&&(h.debug("Fixing bottom attached element to top of browser."),h.fixTop())))},bindTop:function(){h.debug("Binding element to top of parent container"),h.remove.offset(),k.css({left:"",top:"",marginBottom:""}).removeClass(b.fixed).removeClass(b.bottom).addClass(b.bound).addClass(b.top),v.onTop.call(P),v.onUnstick.call(P)},bindBottom:function(){h.debug("Binding element to bottom of parent container"),h.remove.offset(),k.css({left:"",top:""}).removeClass(b.fixed).removeClass(b.top).addClass(b.bound).addClass(b.bottom),v.onBottom.call(P),v.onUnstick.call(P)},setInitialPosition:function(){h.debug("Returning to initial position"),h.unfix(),h.unbind()},fixTop:function(){h.debug("Fixing element to top of page"),h.set.minimumSize(),h.set.offset(),k.css({left:h.cache.element.left,bottom:"",marginBottom:""}).removeClass(b.bound).removeClass(b.bottom).addClass(b.fixed).addClass(b.top),v.onStick.call(P)},fixBottom:function(){h.debug("Sticking element to bottom of page"),h.set.minimumSize(),h.set.offset(),k.css({left:h.cache.element.left,bottom:"",marginBottom:""}).removeClass(b.bound).removeClass(b.top).addClass(b.fixed).addClass(b.bottom),v.onStick.call(P)},unbind:function(){h.is.bound()&&(h.debug("Removing container bound position on element"),h.remove.offset(),k.removeClass(b.bound).removeClass(b.top).removeClass(b.bottom))},unfix:function(){h.is.fixed()&&(h.debug("Removing fixed position on element"),h.remove.offset(),k.removeClass(b.fixed).removeClass(b.top).removeClass(b.bottom),v.onUnstick.call(P))},reset:function(){h.debug("Resetting elements position"),h.unbind(),h.unfix(),h.resetCSS(),h.remove.offset(),h.remove.lastScroll()},resetCSS:function(){k.css({width:"",height:""}),r.css({height:""})},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,v,t);else{if(n===i)return v[t];v[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,h,t);else{if(n===i)return h[t];h[t]=n}},debug:function(){!v.silent&&v.debug&&(v.performance?h.performance.log(arguments):(h.debug=Function.prototype.bind.call(console.info,console,v.name+":"),h.debug.apply(console,arguments)))},verbose:function(){!v.silent&&v.verbose&&v.debug&&(v.performance?h.performance.log(arguments):(h.verbose=Function.prototype.bind.call(console.info,console,v.name+":"),h.verbose.apply(console,arguments)))},error:function(){v.silent||(h.error=Function.prototype.bind.call(console.error,console,v.name+":"),h.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;v.performance&&(t=(new Date).getTime(),i=l||t,n=t-i,l=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:P,"Execution Time":n})),clearTimeout(h.performance.timer),h.performance.timer=setTimeout(h.performance.display,0)},display:function(){var t=v.name+":",n=0;l=!1,clearTimeout(h.performance.timer),e.each(c,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",s&&(t+=" '"+s+"'"),(console.group!==i||console.table!==i)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),c=[]}},invoke:function(t,n,o){var r,s,l,c=A;return n=n||f,o=P||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},d?(A===i&&h.initialize(),h.invoke(u)):(A!==i&&A.invoke("destroy"),h.initialize())}),a!==i?a:this},e.fn.sticky.settings={name:"Sticky",namespace:"sticky",silent:!1,debug:!1,verbose:!0,performance:!0,pushing:!1,context:!1,scrollContext:t,offset:0,bottomOffset:0,jitter:5,observeChanges:!1,onReposition:function(){},onScroll:function(){},onStick:function(){},onUnstick:function(){},onTop:function(){},onBottom:function(){},error:{container:"Sticky element must be inside a relative container",visible:"Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",method:"The method you called is not defined.",invalidContext:"Context specified does not exist",elementSize:"Sticky element is larger than its container, cannot create sticky."},className:{bound:"bound",fixed:"fixed",supported:"native",top:"top",bottom:"bottom"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.tab=function(o){var a,r=e(e.isFunction(this)?t:this),s=r.selector||"",l=(new Date).getTime(),c=[],u=arguments[0],d="string"==typeof u,f=[].slice.call(arguments,1),m=!1;return r.each(function(){var g,p,h,v,b,y,x=e.isPlainObject(o)?e.extend(!0,{},e.fn.tab.settings,o):e.extend({},e.fn.tab.settings),C=x.className,w=x.metadata,k=x.selector,S=x.error,T="."+x.namespace,A="module-"+x.namespace,R=e(this),P={},E=!0,F=0,O=this,D=R.data(A);b={initialize:function(){b.debug("Initializing tab menu item",R),b.fix.callbacks(),b.determineTabs(),b.debug("Determining tabs",x.context,p),x.auto&&b.set.auto(),b.bind.events(),x.history&&!m&&(b.initializeHistory(),m=!0),b.instantiate()},instantiate:function(){b.verbose("Storing instance of module",b),D=b,R.data(A,b)},destroy:function(){b.debug("Destroying tabs",R),R.removeData(A).off(T)},bind:{events:function(){e.isWindow(O)||(b.debug("Attaching tab activation events to element",R),R.on("click"+T,b.event.click))}},determineTabs:function(){var t;"parent"===x.context?(R.closest(k.ui).length>0?(t=R.closest(k.ui),b.verbose("Using closest UI element as parent",t)):t=R,g=t.parent(),b.verbose("Determined parent element for creating context",g)):x.context?(g=e(x.context),b.verbose("Using selector for tab context",x.context,g)):g=e("body"),x.childrenOnly?(p=g.children(k.tabs),b.debug("Searching tab context children for tabs",g,p)):(p=g.find(k.tabs),b.debug("Searching tab context for tabs",g,p))},fix:{callbacks:function(){e.isPlainObject(o)&&(o.onTabLoad||o.onTabInit)&&(o.onTabLoad&&(o.onLoad=o.onTabLoad,delete o.onTabLoad,b.error(S.legacyLoad,o.onLoad)),o.onTabInit&&(o.onFirstLoad=o.onTabInit,delete o.onTabInit,b.error(S.legacyInit,o.onFirstLoad)),x=e.extend(!0,{},e.fn.tab.settings,o))}},initializeHistory:function(){if(b.debug("Initializing page state"),e.address===i)return b.error(S.state),!1;if("state"==x.historyType){if(b.debug("Using HTML5 to manage state"),x.path===!1)return b.error(S.path),!1;e.address.history(!0).state(x.path)}e.address.bind("change",b.event.history.change)},event:{click:function(t){var n=e(this).data(w.tab);n!==i?(x.history?(b.verbose("Updating page state",t),e.address.value(n)):(b.verbose("Changing tab",t),b.changeTab(n)),t.preventDefault()):b.debug("No tab specified")},history:{change:function(t){var n=t.pathNames.join("/")||b.get.initialPath(),o=x.templates.determineTitle(n)||!1;b.performance.display(),b.debug("History change event",n,t),y=t,n!==i&&b.changeTab(n),o&&e.address.title(o)}}},refresh:function(){h&&(b.debug("Refreshing tab",h),b.changeTab(h))},cache:{read:function(e){return e!==i&&P[e]},add:function(e,t){e=e||h,b.debug("Adding cached content for",e),P[e]=t},remove:function(e){e=e||h,b.debug("Removing cached content for",e),delete P[e]}},set:{auto:function(){var t="string"==typeof x.path?x.path.replace(/\/$/,"")+"/{$tab}":"/{$tab}";b.verbose("Setting up automatic tab retrieval from server",t),e.isPlainObject(x.apiSettings)?x.apiSettings.url=t:x.apiSettings={url:t}},loading:function(e){var t=b.get.tabElement(e),n=t.hasClass(C.loading);n||(b.verbose("Setting loading state for",t),t.addClass(C.loading).siblings(p).removeClass(C.active+" "+C.loading),t.length>0&&x.onRequest.call(t[0],e))},state:function(t){e.address.value(t)}},changeTab:function(n){var i=t.history&&t.history.pushState,o=i&&x.ignoreFirstLoad&&E,a=x.auto||e.isPlainObject(x.apiSettings),r=a&&!o?b.utilities.pathToArray(n):b.get.defaultPathArray(n);n=b.utilities.arrayToPath(r),e.each(r,function(t,i){var s,l,c,u,d=r.slice(0,t+1),f=b.utilities.arrayToPath(d),m=b.is.tab(f),p=t+1==r.length,k=b.get.tabElement(f);if(b.verbose("Looking for tab",i),m){if(b.verbose("Tab was found",i),h=f,v=b.utilities.filterArray(r,d),p?u=!0:(l=r.slice(0,t+2),c=b.utilities.arrayToPath(l),u=!b.is.tab(c),u&&b.verbose("Tab parameters found",l)),u&&a)return o?(b.debug("Ignoring remote content on first tab load",f),E=!1,b.cache.add(n,k.html()),b.activate.all(f),x.onFirstLoad.call(k[0],f,v,y),x.onLoad.call(k[0],f,v,y)):(b.activate.navigation(f),b.fetch.content(f,n)),!1;b.debug("Opened local tab",f),b.activate.all(f),b.cache.read(f)||(b.cache.add(f,!0),b.debug("First time tab loaded calling tab init"),x.onFirstLoad.call(k[0],f,v,y)),x.onLoad.call(k[0],f,v,y)}else{if(n.search("/")!=-1||""===n)return b.error(S.missingTab,R,g,f),!1;if(s=e("#"+n+', a[name="'+n+'"]'),f=s.closest("[data-tab]").data(w.tab),k=b.get.tabElement(f),s&&s.length>0&&f)return b.debug("Anchor link used, opening parent tab",k,s),k.hasClass(C.active)||setTimeout(function(){b.scrollTo(s)},0),b.activate.all(f),b.cache.read(f)||(b.cache.add(f,!0),b.debug("First time tab loaded calling tab init"),x.onFirstLoad.call(k[0],f,v,y)),x.onLoad.call(k[0],f,v,y),!1}})},scrollTo:function(t){var i=!!(t&&t.length>0)&&t.offset().top;i!==!1&&(b.debug("Forcing scroll to an in-page link in a hidden tab",i,t),e(n).scrollTop(i))},update:{content:function(e,t,n){var o=b.get.tabElement(e),a=o[0];n=n!==i?n:x.evaluateScripts,n?(b.debug("Updating HTML and evaluating inline scripts",e,t),o.html(t)):(b.debug("Updating HTML",e,t),a.innerHTML=t)}},fetch:{content:function(t,n){var o,a,r=b.get.tabElement(t),s={dataType:"html",encodeParameters:!1,on:"now",cache:x.alwaysRefresh,headers:{"X-Remote":!0},onSuccess:function(e){"response"==x.cacheType&&b.cache.add(n,e),b.update.content(t,e),t==h?(b.debug("Content loaded",t),b.activate.tab(t)):b.debug("Content loaded in background",t),x.onFirstLoad.call(r[0],t,v,y),x.onLoad.call(r[0],t,v,y),"response"!=x.cacheType&&b.cache.add(n,r.html())},urlData:{tab:n}},l=r.api("get request")||!1,c=l&&"pending"===l.state();n=n||t,a=b.cache.read(n),x.cache&&a?(b.activate.tab(t),b.debug("Adding cached content",n),"once"==x.evaluateScripts?b.update.content(t,a,!1):b.update.content(t,a),x.onLoad.call(r[0],t,v,y)):c?(b.set.loading(t),b.debug("Content is already loading",n)):e.api!==i?(o=e.extend(!0,{},x.apiSettings,s),b.debug("Retrieving remote content",n,o),b.set.loading(t),r.api(o)):b.error(S.api)}},activate:{all:function(e){b.activate.tab(e),b.activate.navigation(e)},tab:function(e){var t=b.get.tabElement(e),n="siblings"==x.deactivate?t.siblings(p):p.not(t),i=t.hasClass(C.active);b.verbose("Showing tab content for",t),i||(t.addClass(C.active),n.removeClass(C.active+" "+C.loading),t.length>0&&x.onVisible.call(t[0],e))},navigation:function(e){var t=b.get.navElement(e),n="siblings"==x.deactivate?t.siblings(r):r.not(t),i=t.hasClass(C.active);b.verbose("Activating tab navigation for",t,e),i||(t.addClass(C.active),n.removeClass(C.active+" "+C.loading))}},deactivate:{all:function(){b.deactivate.navigation(),b.deactivate.tabs()},navigation:function(){r.removeClass(C.active)},tabs:function(){p.removeClass(C.active+" "+C.loading)}},is:{tab:function(e){return e!==i&&b.get.tabElement(e).length>0}},get:{initialPath:function(){return r.eq(0).data(w.tab)||p.eq(0).data(w.tab)},path:function(){return e.address.value()},defaultPathArray:function(e){return b.utilities.pathToArray(b.get.defaultPath(e))},defaultPath:function(e){var t=r.filter("[data-"+w.tab+'^="'+e+'/"]').eq(0),n=t.data(w.tab)||!1;if(n){if(b.debug("Found default tab",n),F<x.maxDepth)return F++,b.get.defaultPath(n);b.error(S.recursion)}else b.debug("No default tabs found for",e,p);return F=0,e},navElement:function(e){return e=e||h,r.filter("[data-"+w.tab+'="'+e+'"]')},tabElement:function(e){var t,n,i,o;return e=e||h,i=b.utilities.pathToArray(e),o=b.utilities.last(i),t=p.filter("[data-"+w.tab+'="'+e+'"]'),n=p.filter("[data-"+w.tab+'="'+o+'"]'),t.length>0?t:n},tab:function(){return h}},utilities:{filterArray:function(t,n){return e.grep(t,function(t){return e.inArray(t,n)==-1})},last:function(t){return!!e.isArray(t)&&t[t.length-1]},pathToArray:function(e){return e===i&&(e=h),"string"==typeof e?e.split("/"):[e]},arrayToPath:function(t){return!!e.isArray(t)&&t.join("/")}},setting:function(t,n){if(b.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,x,t);else{if(n===i)return x[t];e.isPlainObject(x[t])?e.extend(!0,x[t],n):x[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,b,t);else{if(n===i)return b[t];b[t]=n}},debug:function(){!x.silent&&x.debug&&(x.performance?b.performance.log(arguments):(b.debug=Function.prototype.bind.call(console.info,console,x.name+":"),b.debug.apply(console,arguments)))},verbose:function(){!x.silent&&x.verbose&&x.debug&&(x.performance?b.performance.log(arguments):(b.verbose=Function.prototype.bind.call(console.info,console,x.name+":"),b.verbose.apply(console,arguments)))},error:function(){x.silent||(b.error=Function.prototype.bind.call(console.error,console,x.name+":"),b.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;x.performance&&(t=(new Date).getTime(),i=l||t,n=t-i,l=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:O,"Execution Time":n})),clearTimeout(b.performance.timer),b.performance.timer=setTimeout(b.performance.display,500)},display:function(){var t=x.name+":",n=0;l=!1,clearTimeout(b.performance.timer),e.each(c,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",s&&(t+=" '"+s+"'"),(console.group!==i||console.table!==i)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),c=[]}},invoke:function(t,n,o){var r,s,l,c=D;return n=n||f,o=O||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(b.error(S.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},d?(D===i&&b.initialize(),b.invoke(u)):(D!==i&&D.invoke("destroy"),b.initialize())}),a!==i?a:this},e.tab=function(){e(t).tab.apply(this,arguments)},e.fn.tab.settings={name:"Tab",namespace:"tab",silent:!1,debug:!1,verbose:!1,performance:!0,auto:!1,history:!1,historyType:"hash",path:!1,context:!1,childrenOnly:!1,maxDepth:25,deactivate:"siblings",alwaysRefresh:!1,cache:!0,cacheType:"response",ignoreFirstLoad:!1,apiSettings:!1,evaluateScripts:"once",onFirstLoad:function(e,t,n){},onLoad:function(e,t,n){},onVisible:function(e,t,n){},onRequest:function(e,t,n){},templates:{determineTitle:function(e){}},error:{api:"You attempted to load content without API module",method:"The method you called is not defined",missingTab:"Activated tab cannot be found. Tabs are case-sensitive.",noContent:"The tab you specified is missing a content url.",path:"History enabled, but no path was specified",recursion:"Max recursive depth reached",legacyInit:"onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",legacyLoad:"onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",state:"History requires Asual's Address library <https://github.com/asual/jquery-address>"},metadata:{tab:"tab",loaded:"loaded",promise:"promise"},className:{loading:"loading",active:"active"},selector:{tabs:".ui.tab",ui:".ui"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.transition=function(){var o,a=e(this),r=a.selector||"",s=(new Date).getTime(),l=[],c=arguments,u=c[0],d=[].slice.call(arguments,1),f="string"==typeof u;t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return a.each(function(t){var m,g,p,h,v,b,y,x,C,w=e(this),k=this;C={initialize:function(){m=C.get.settings.apply(k,c),h=m.className,p=m.error,v=m.metadata,x="."+m.namespace,
y="module-"+m.namespace,g=w.data(y)||C,b=C.get.animationEndEvent(),f&&(f=C.invoke(u)),f===!1&&(C.verbose("Converted arguments into settings object",m),m.interval?C.delay(m.animate):C.animate(),C.instantiate())},instantiate:function(){C.verbose("Storing instance of module",C),g=C,w.data(y,g)},destroy:function(){C.verbose("Destroying previous module for",k),w.removeData(y)},refresh:function(){C.verbose("Refreshing display type on next animation"),delete C.displayType},forceRepaint:function(){C.verbose("Forcing element repaint");var e=w.parent(),t=w.next();0===t.length?w.detach().appendTo(e):w.detach().insertBefore(t)},repaint:function(){C.verbose("Repainting element");k.offsetWidth},delay:function(e){var n,o,r=C.get.animationDirection();r||(r=C.can.transition()?C.get.direction():"static"),e=e!==i?e:m.interval,n="auto"==m.reverse&&r==h.outward,o=n||1==m.reverse?(a.length-t)*m.interval:t*m.interval,C.debug("Delaying animation by",o),setTimeout(C.animate,o)},animate:function(e){if(m=e||m,!C.is.supported())return C.error(p.support),!1;if(C.debug("Preparing animation",m.animation),C.is.animating()){if(m.queue)return!m.allowRepeats&&C.has.direction()&&C.is.occurring()&&C.queuing!==!0?C.debug("Animation is currently occurring, preventing queueing same animation",m.animation):C.queue(m.animation),!1;if(!m.allowRepeats&&C.is.occurring())return C.debug("Animation is already occurring, will not execute repeated animation",m.animation),!1;C.debug("New animation started, completing previous early",m.animation),g.complete()}C.can.animate()?C.set.animating(m.animation):C.error(p.noAnimation,m.animation,k)},reset:function(){C.debug("Resetting animation to beginning conditions"),C.remove.animationCallbacks(),C.restore.conditions(),C.remove.animating()},queue:function(e){C.debug("Queueing animation of",e),C.queuing=!0,w.one(b+".queue"+x,function(){C.queuing=!1,C.repaint(),C.animate.apply(this,m)})},complete:function(e){C.debug("Animation complete",m.animation),C.remove.completeCallback(),C.remove.failSafe(),C.is.looping()||(C.is.outward()?(C.verbose("Animation is outward, hiding element"),C.restore.conditions(),C.hide()):C.is.inward()?(C.verbose("Animation is outward, showing element"),C.restore.conditions(),C.show()):(C.verbose("Static animation completed"),C.restore.conditions(),m.onComplete.call(k)))},force:{visible:function(){var e=w.attr("style"),t=C.get.userStyle(),n=C.get.displayType(),o=t+"display: "+n+" !important;",a=w.css("display"),r=e===i||""===e;a!==n?(C.verbose("Overriding default display to show element",n),w.attr("style",o)):r&&w.removeAttr("style")},hidden:function(){var e=w.attr("style"),t=w.css("display"),n=e===i||""===e;"none"===t||C.is.hidden()?n&&w.removeAttr("style"):(C.verbose("Overriding default display to hide element"),w.css("display","none"))}},has:{direction:function(t){var n=!1;return t=t||m.animation,"string"==typeof t&&(t=t.split(" "),e.each(t,function(e,t){t!==h.inward&&t!==h.outward||(n=!0)})),n},inlineDisplay:function(){var t=w.attr("style")||"";return e.isArray(t.match(/display.*?;/,""))}},set:{animating:function(e){var t;C.remove.completeCallback(),e=e||m.animation,t=C.get.animationClass(e),C.save.animation(t),C.force.visible(),C.remove.hidden(),C.remove.direction(),C.start.animation(t)},duration:function(e,t){t=t||m.duration,t="number"==typeof t?t+"ms":t,(t||0===t)&&(C.verbose("Setting animation duration",t),w.css({"animation-duration":t}))},direction:function(e){e=e||C.get.direction(),e==h.inward?C.set.inward():C.set.outward()},looping:function(){C.debug("Transition set to loop"),w.addClass(h.looping)},hidden:function(){w.addClass(h.transition).addClass(h.hidden)},inward:function(){C.debug("Setting direction to inward"),w.removeClass(h.outward).addClass(h.inward)},outward:function(){C.debug("Setting direction to outward"),w.removeClass(h.inward).addClass(h.outward)},visible:function(){w.addClass(h.transition).addClass(h.visible)}},start:{animation:function(e){e=e||C.get.animationClass(),C.debug("Starting tween",e),w.addClass(e).one(b+".complete"+x,C.complete),m.useFailSafe&&C.add.failSafe(),C.set.duration(m.duration),m.onStart.call(k)}},save:{animation:function(e){C.cache||(C.cache={}),C.cache.animation=e},displayType:function(e){"none"!==e&&w.data(v.displayType,e)},transitionExists:function(t,n){e.fn.transition.exists[t]=n,C.verbose("Saving existence of transition",t,n)}},restore:{conditions:function(){var e=C.get.currentAnimation();e&&(w.removeClass(e),C.verbose("Removing animation class",C.cache)),C.remove.duration()}},add:{failSafe:function(){var e=C.get.duration();C.timer=setTimeout(function(){w.triggerHandler(b)},e+m.failSafeDelay),C.verbose("Adding fail safe timer",C.timer)}},remove:{animating:function(){w.removeClass(h.animating)},animationCallbacks:function(){C.remove.queueCallback(),C.remove.completeCallback()},queueCallback:function(){w.off(".queue"+x)},completeCallback:function(){w.off(".complete"+x)},display:function(){w.css("display","")},direction:function(){w.removeClass(h.inward).removeClass(h.outward)},duration:function(){w.css("animation-duration","")},failSafe:function(){C.verbose("Removing fail safe timer",C.timer),C.timer&&clearTimeout(C.timer)},hidden:function(){w.removeClass(h.hidden)},visible:function(){w.removeClass(h.visible)},looping:function(){C.debug("Transitions are no longer looping"),C.is.looping()&&(C.reset(),w.removeClass(h.looping))},transition:function(){w.removeClass(h.visible).removeClass(h.hidden)}},get:{settings:function(t,n,i){return"object"==typeof t?e.extend(!0,{},e.fn.transition.settings,t):"function"==typeof i?e.extend({},e.fn.transition.settings,{animation:t,onComplete:i,duration:n}):"string"==typeof n||"number"==typeof n?e.extend({},e.fn.transition.settings,{animation:t,duration:n}):"object"==typeof n?e.extend({},e.fn.transition.settings,n,{animation:t}):"function"==typeof n?e.extend({},e.fn.transition.settings,{animation:t,onComplete:n}):e.extend({},e.fn.transition.settings,{animation:t})},animationClass:function(e){var t=e||m.animation,n=C.can.transition()&&!C.has.direction()?C.get.direction()+" ":"";return h.animating+" "+h.transition+" "+n+t},currentAnimation:function(){return!(!C.cache||C.cache.animation===i)&&C.cache.animation},currentDirection:function(){return C.is.inward()?h.inward:h.outward},direction:function(){return C.is.hidden()||!C.is.visible()?h.inward:h.outward},animationDirection:function(t){var n;return t=t||m.animation,"string"==typeof t&&(t=t.split(" "),e.each(t,function(e,t){t===h.inward?n=h.inward:t===h.outward&&(n=h.outward)})),!!n&&n},duration:function(e){return e=e||m.duration,e===!1&&(e=w.css("animation-duration")||0),"string"==typeof e?e.indexOf("ms")>-1?parseFloat(e):1e3*parseFloat(e):e},displayType:function(){return m.displayType?m.displayType:(w.data(v.displayType)===i&&C.can.transition(!0),w.data(v.displayType))},userStyle:function(e){return e=e||w.attr("style")||"",e.replace(/display.*?;/,"")},transitionExists:function(t){return e.fn.transition.exists[t]},animationStartEvent:function(){var e,t=n.createElement("div"),o={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(e in o)if(t.style[e]!==i)return o[e];return!1},animationEndEvent:function(){var e,t=n.createElement("div"),o={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(e in o)if(t.style[e]!==i)return o[e];return!1}},can:{transition:function(t){var n,o,a,r,s,l,c,u=m.animation,d=C.get.transitionExists(u);if(d===i||t){if(C.verbose("Determining whether animation exists"),n=w.attr("class"),o=w.prop("tagName"),a=e("<"+o+" />").addClass(n).insertAfter(w),r=a.addClass(u).removeClass(h.inward).removeClass(h.outward).addClass(h.animating).addClass(h.transition).css("animationName"),s=a.addClass(h.inward).css("animationName"),c=a.attr("class",n).removeAttr("style").removeClass(h.hidden).removeClass(h.visible).show().css("display"),C.verbose("Determining final display state",c),C.save.displayType(c),a.remove(),r!=s)C.debug("Direction exists for animation",u),l=!0;else{if("none"==r||!r)return void C.debug("No animation defined in css",u);C.debug("Static animation found",u,c),l=!1}C.save.transitionExists(u,l)}return d!==i?d:l},animate:function(){return C.can.transition()!==i}},is:{animating:function(){return w.hasClass(h.animating)},inward:function(){return w.hasClass(h.inward)},outward:function(){return w.hasClass(h.outward)},looping:function(){return w.hasClass(h.looping)},occurring:function(e){return e=e||m.animation,e="."+e.replace(" ","."),w.filter(e).length>0},visible:function(){return w.is(":visible")},hidden:function(){return"hidden"===w.css("visibility")},supported:function(){return b!==!1}},hide:function(){C.verbose("Hiding element"),C.is.animating()&&C.reset(),k.blur(),C.remove.display(),C.remove.visible(),C.set.hidden(),C.force.hidden(),m.onHide.call(k),m.onComplete.call(k)},show:function(e){C.verbose("Showing element",e),C.remove.hidden(),C.set.visible(),C.force.visible(),m.onShow.call(k),m.onComplete.call(k)},toggle:function(){C.is.visible()?C.hide():C.show()},stop:function(){C.debug("Stopping current animation"),w.triggerHandler(b)},stopAll:function(){C.debug("Stopping all animation"),C.remove.queueCallback(),w.triggerHandler(b)},clear:{queue:function(){C.debug("Clearing animation queue"),C.remove.queueCallback()}},enable:function(){C.verbose("Starting animation"),w.removeClass(h.disabled)},disable:function(){C.debug("Stopping animation"),w.addClass(h.disabled)},setting:function(t,n){if(C.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];e.isPlainObject(m[t])?e.extend(!0,m[t],n):m[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,C,t);else{if(n===i)return C[t];C[t]=n}},debug:function(){!m.silent&&m.debug&&(m.performance?C.performance.log(arguments):(C.debug=Function.prototype.bind.call(console.info,console,m.name+":"),C.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?C.performance.log(arguments):(C.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),C.verbose.apply(console,arguments)))},error:function(){m.silent||(C.error=Function.prototype.bind.call(console.error,console,m.name+":"),C.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;m.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:k,"Execution Time":n})),clearTimeout(C.performance.timer),C.performance.timer=setTimeout(C.performance.display,500)},display:function(){var t=m.name+":",n=0;s=!1,clearTimeout(C.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),a.length>1&&(t+=" ("+a.length+")"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,a){var r,s,l,c=g;return n=n||d,a=k||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o]}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s!==i&&s}},C.initialize()}),o!==i?o:this},e.fn.transition.exists={},e.fn.transition.settings={name:"Transition",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document),function(e,t,n,i){"use strict";var t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();e.api=e.fn.api=function(n){var o,a=e(e.isFunction(this)?t:this),r=a.selector||"",s=(new Date).getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return a.each(function(){var a,f,m,g,p,h,v=e.isPlainObject(n)?e.extend(!0,{},e.fn.api.settings,n):e.extend({},e.fn.api.settings),b=v.namespace,y=v.metadata,x=v.selector,C=v.error,w=v.className,k="."+b,S="module-"+b,T=e(this),A=T.closest(x.form),R=v.stateContext?e(v.stateContext):T,P=this,E=R[0],F=T.data(S);h={initialize:function(){u||h.bind.events(),h.instantiate()},instantiate:function(){h.verbose("Storing instance of module",h),F=h,T.data(S,F)},destroy:function(){h.verbose("Destroying previous module for",P),T.removeData(S).off(k)},bind:{events:function(){var e=h.get.event();e?(h.verbose("Attaching API events to element",e),T.on(e+k,h.event.trigger)):"now"==v.on&&(h.debug("Querying API endpoint immediately"),h.query())}},decode:{json:function(e){if(e!==i&&"string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}},read:{cachedResponse:function(e){var n;return t.Storage===i?void h.error(C.noStorage):(n=sessionStorage.getItem(e),h.debug("Using cached response",e,n),n=h.decode.json(n))}},write:{cachedResponse:function(n,o){return o&&""===o?void h.debug("Response empty, not caching",o):t.Storage===i?void h.error(C.noStorage):(e.isPlainObject(o)&&(o=JSON.stringify(o)),sessionStorage.setItem(n,o),void h.verbose("Storing cached response for url",n,o))}},query:function(){if(h.is.disabled())return void h.debug("Element is disabled API request aborted");if(h.is.loading()){if(!v.interruptRequests)return void h.debug("Cancelling request, previous request is still pending");h.debug("Interrupting previous request"),h.abort()}return v.defaultData&&e.extend(!0,v.urlData,h.get.defaultData()),v.serializeForm&&(v.data=h.add.formData(v.data)),f=h.get.settings(),f===!1?(h.cancelled=!0,void h.error(C.beforeSend)):(h.cancelled=!1,m=h.get.templatedURL(),m||h.is.mocked()?(m=h.add.urlData(m),m||h.is.mocked()?(f.url=v.base+m,a=e.extend(!0,{},v,{type:v.method||v.type,data:g,url:v.base+m,beforeSend:v.beforeXHR,success:function(){},failure:function(){},complete:function(){}}),h.debug("Querying URL",a.url),h.verbose("Using AJAX settings",a),"local"===v.cache&&h.read.cachedResponse(m)?(h.debug("Response returned from local cache"),h.request=h.create.request(),void h.request.resolveWith(E,[h.read.cachedResponse(m)])):void(v.throttle?v.throttleFirstRequest||h.timer?(h.debug("Throttling request",v.throttle),clearTimeout(h.timer),h.timer=setTimeout(function(){h.timer&&delete h.timer,h.debug("Sending throttled request",g,a.method),h.send.request()},v.throttle)):(h.debug("Sending request",g,a.method),h.send.request(),h.timer=setTimeout(function(){},v.throttle)):(h.debug("Sending request",g,a.method),h.send.request()))):void 0):void h.error(C.missingURL))},should:{removeError:function(){return v.hideError===!0||"auto"===v.hideError&&!h.is.form()}},is:{disabled:function(){return T.filter(x.disabled).length>0},expectingJSON:function(){return"json"===v.dataType||"jsonp"===v.dataType},form:function(){return T.is("form")||R.is("form")},mocked:function(){return v.mockResponse||v.mockResponseAsync||v.response||v.responseAsync},input:function(){return T.is("input")},loading:function(){return!!h.request&&"pending"==h.request.state()},abortedRequest:function(e){return e&&e.readyState!==i&&0===e.readyState?(h.verbose("XHR request determined to be aborted"),!0):(h.verbose("XHR request was not aborted"),!1)},validResponse:function(t){return h.is.expectingJSON()&&e.isFunction(v.successTest)?(h.debug("Checking JSON returned success",v.successTest,t),v.successTest(t)?(h.debug("Response passed success test",t),!0):(h.debug("Response failed success test",t),!1)):(h.verbose("Response is not JSON, skipping validation",v.successTest,t),!0)}},was:{cancelled:function(){return h.cancelled||!1},succesful:function(){return h.request&&"resolved"==h.request.state()},failure:function(){return h.request&&"rejected"==h.request.state()},complete:function(){return h.request&&("resolved"==h.request.state()||"rejected"==h.request.state())}},add:{urlData:function(t,n){var o,a;return t&&(o=t.match(v.regExp.required),a=t.match(v.regExp.optional),n=n||v.urlData,o&&(h.debug("Looking for required URL variables",o),e.each(o,function(o,a){var r=a.indexOf("$")!==-1?a.substr(2,a.length-3):a.substr(1,a.length-2),s=e.isPlainObject(n)&&n[r]!==i?n[r]:T.data(r)!==i?T.data(r):R.data(r)!==i?R.data(r):n[r];return s===i?(h.error(C.requiredParameter,r,t),t=!1,!1):(h.verbose("Found required variable",r,s),s=v.encodeParameters?h.get.urlEncodedValue(s):s,t=t.replace(a,s),void 0)})),a&&(h.debug("Looking for optional URL variables",o),e.each(a,function(o,a){var r=a.indexOf("$")!==-1?a.substr(3,a.length-4):a.substr(2,a.length-3),s=e.isPlainObject(n)&&n[r]!==i?n[r]:T.data(r)!==i?T.data(r):R.data(r)!==i?R.data(r):n[r];s!==i?(h.verbose("Optional variable Found",r,s),t=t.replace(a,s)):(h.verbose("Optional variable not found",r),t=t.indexOf("/"+a)!==-1?t.replace("/"+a,""):t.replace(a,""))}))),t},formData:function(t){var n,o=e.fn.serializeObject!==i,a=o?A.serializeObject():A.serialize();return t=t||v.data,n=e.isPlainObject(t),n?o?(h.debug("Extending existing data with form data",t,a),t=e.extend(!0,{},t,a)):(h.error(C.missingSerialize),h.debug("Cant extend data. Replacing data with form data",t,a),t=a):(h.debug("Adding form data",a),t=a),t}},send:{request:function(){h.set.loading(),h.request=h.create.request(),h.is.mocked()?h.mockedXHR=h.create.mockedXHR():h.xhr=h.create.xhr(),v.onRequest.call(E,h.request,h.xhr)}},event:{trigger:function(e){h.query(),"submit"!=e.type&&"click"!=e.type||e.preventDefault()},xhr:{always:function(){},done:function(t,n,i){var o=this,a=(new Date).getTime()-p,r=v.loadingDuration-a,s=!!e.isFunction(v.onResponse)&&(h.is.expectingJSON()?v.onResponse.call(o,e.extend(!0,{},t)):v.onResponse.call(o,t));r=r>0?r:0,s&&(h.debug("Modified API response in onResponse callback",v.onResponse,s,t),t=s),r>0&&h.debug("Response completed early delaying state change by",r),setTimeout(function(){h.is.validResponse(t)?h.request.resolveWith(o,[t,i]):h.request.rejectWith(o,[i,"invalid"])},r)},fail:function(e,t,n){var i=this,o=(new Date).getTime()-p,a=v.loadingDuration-o;a=a>0?a:0,a>0&&h.debug("Response completed early delaying state change by",a),setTimeout(function(){h.is.abortedRequest(e)?h.request.rejectWith(i,[e,"aborted",n]):h.request.rejectWith(i,[e,"error",t,n])},a)}},request:{done:function(e,t){h.debug("Successful API Response",e),"local"===v.cache&&m&&(h.write.cachedResponse(m,e),h.debug("Saving server response locally",h.cache)),v.onSuccess.call(E,e,T,t)},complete:function(e,t){var n,i;h.was.succesful()?(i=e,n=t):(n=e,i=h.get.responseFromXHR(n)),h.remove.loading(),v.onComplete.call(E,i,T,n)},fail:function(e,t,n){var o=h.get.responseFromXHR(e),r=h.get.errorFromRequest(o,t,n);return"aborted"==t?(h.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)",t,n),v.onAbort.call(E,t,T,e),!0):("invalid"==t?h.debug("JSON did not pass success test. A server-side error has most likely occurred",o):"error"==t&&e!==i&&(h.debug("XHR produced a server error",t,n),200!=e.status&&n!==i&&""!==n&&h.error(C.statusMessage+n,a.url),v.onError.call(E,r,T,e)),v.errorDuration&&"aborted"!==t&&(h.debug("Adding error state"),h.set.error(),h.should.removeError()&&setTimeout(h.remove.error,v.errorDuration)),h.debug("API Request failed",r,e),void v.onFailure.call(E,o,T,e))}}},create:{request:function(){return e.Deferred().always(h.event.request.complete).done(h.event.request.done).fail(h.event.request.fail)},mockedXHR:function(){var t,n,i,o=!1,a=!1,r=!1,s=v.mockResponse||v.response,l=v.mockResponseAsync||v.responseAsync;return i=e.Deferred().always(h.event.xhr.complete).done(h.event.xhr.done).fail(h.event.xhr.fail),s?(e.isFunction(s)?(h.debug("Using specified synchronous callback",s),n=s.call(E,f)):(h.debug("Using settings specified response",s),n=s),i.resolveWith(E,[n,o,{responseText:n}])):e.isFunction(l)&&(t=function(e){h.debug("Async callback returned response",e),e?i.resolveWith(E,[e,o,{responseText:e}]):i.rejectWith(E,[{responseText:e},a,r])},h.debug("Using specified async response callback",l),l.call(E,f,t)),i},xhr:function(){var t;return t=e.ajax(a).always(h.event.xhr.always).done(h.event.xhr.done).fail(h.event.xhr.fail),h.verbose("Created server request",t,a),t}},set:{error:function(){h.verbose("Adding error state to element",R),R.addClass(w.error)},loading:function(){h.verbose("Adding loading state to element",R),R.addClass(w.loading),p=(new Date).getTime()}},remove:{error:function(){h.verbose("Removing error state from element",R),R.removeClass(w.error)},loading:function(){h.verbose("Removing loading state from element",R),R.removeClass(w.loading)}},get:{responseFromXHR:function(t){return!!e.isPlainObject(t)&&(h.is.expectingJSON()?h.decode.json(t.responseText):t.responseText)},errorFromRequest:function(t,n,o){return e.isPlainObject(t)&&t.error!==i?t.error:v.error[n]!==i?v.error[n]:o},request:function(){return h.request||!1},xhr:function(){return h.xhr||!1},settings:function(){var t;return t=v.beforeSend.call(E,v),t&&(t.success!==i&&(h.debug("Legacy success callback detected",t),h.error(C.legacyParameters,t.success),t.onSuccess=t.success),t.failure!==i&&(h.debug("Legacy failure callback detected",t),h.error(C.legacyParameters,t.failure),t.onFailure=t.failure),t.complete!==i&&(h.debug("Legacy complete callback detected",t),h.error(C.legacyParameters,t.complete),t.onComplete=t.complete)),t===i&&h.error(C.noReturnedValue),t===!1?t:t!==i?e.extend(!0,{},t):e.extend(!0,{},v)},urlEncodedValue:function(e){var n=t.decodeURIComponent(e),i=t.encodeURIComponent(e),o=n!==e;return o?(h.debug("URL value is already encoded, avoiding double encoding",e),e):(h.verbose("Encoding value using encodeURIComponent",e,i),i)},defaultData:function(){var t={};return e.isWindow(P)||(h.is.input()?t.value=T.val():h.is.form()||(t.text=T.text())),t},event:function(){return e.isWindow(P)||"now"==v.on?(h.debug("API called without element, no events attached"),!1):"auto"==v.on?T.is("input")?P.oninput!==i?"input":P.onpropertychange!==i?"propertychange":"keyup":T.is("form")?"submit":"click":v.on},templatedURL:function(e){if(e=e||T.data(y.action)||v.action||!1,m=T.data(y.url)||v.url||!1)return h.debug("Using specified url",m),m;if(e){if(h.debug("Looking up url for action",e,v.api),v.api[e]===i&&!h.is.mocked())return void h.error(C.missingAction,v.action,v.api);m=v.api[e]}else h.is.form()&&(m=T.attr("action")||R.attr("action")||!1,h.debug("No url or action specified, defaulting to form action",m));return m}},abort:function(){var e=h.get.xhr();e&&"resolved"!==e.state()&&(h.debug("Cancelling API request"),e.abort())},reset:function(){h.remove.error(),h.remove.loading()},setting:function(t,n){if(h.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,v,t);else{if(n===i)return v[t];e.isPlainObject(v[t])?e.extend(!0,v[t],n):v[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,h,t);else{if(n===i)return h[t];h[t]=n}},debug:function(){!v.silent&&v.debug&&(v.performance?h.performance.log(arguments):(h.debug=Function.prototype.bind.call(console.info,console,v.name+":"),h.debug.apply(console,arguments)))},verbose:function(){!v.silent&&v.verbose&&v.debug&&(v.performance?h.performance.log(arguments):(h.verbose=Function.prototype.bind.call(console.info,console,v.name+":"),h.verbose.apply(console,arguments)))},error:function(){v.silent||(h.error=Function.prototype.bind.call(console.error,console,v.name+":"),h.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;v.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(h.performance.timer),h.performance.timer=setTimeout(h.performance.display,500)},display:function(){var t=v.name+":",n=0;s=!1,clearTimeout(h.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,a){var r,s,l,c=F;return n=n||d,a=P||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(h.error(C.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s}},u?(F===i&&h.initialize(),h.invoke(c)):(F!==i&&F.invoke("destroy"),h.initialize())}),o!==i?o:this},e.api.settings={name:"API",namespace:"api",debug:!1,verbose:!1,performance:!0,api:{},cache:!0,interruptRequests:!0,on:"auto",stateContext:!1,loadingDuration:0,hideError:"auto",errorDuration:2e3,encodeParameters:!0,action:!1,url:!1,base:"",urlData:{},defaultData:!0,serializeForm:!1,throttle:0,throttleFirstRequest:!0,method:"get",data:{},dataType:"json",mockResponse:!1,mockResponseAsync:!1,response:!1,responseAsync:!1,beforeSend:function(e){return e},beforeXHR:function(e){},onRequest:function(e,t){},onResponse:!1,onSuccess:function(e,t){},onComplete:function(e,t){},onFailure:function(e,t){},onError:function(e,t){},onAbort:function(e,t){},successTest:!1,error:{beforeSend:"The before send function has aborted the request",error:"There was an error with your request",exitConditions:"API Request Aborted. Exit conditions met",JSONParse:"JSON could not be parsed during error handling",legacyParameters:"You are using legacy API success callback names",method:"The method you called is not defined",missingAction:"API action used but no url was defined",missingSerialize:"jquery-serialize-object is required to add form data to an existing data object",missingURL:"No URL specified for api event",noReturnedValue:"The beforeSend callback must return a settings object, beforeSend ignored.",noStorage:"Caching responses locally requires session storage",parseError:"There was an error parsing your request",requiredParameter:"Missing a required URL parameter: ",statusMessage:"Server gave an error: ",timeout:"Your request timed out"},regExp:{required:/\{\$*[A-z0-9]+\}/g,optional:/\{\/\$*[A-z0-9]+\}/g},className:{loading:"loading",error:"error"},selector:{disabled:".disabled",form:"form"},metadata:{action:"action",url:"url"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.state=function(t){var o,a=e(this),r=a.selector||"",s=("ontouchstart"in n.documentElement,(new Date).getTime()),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return a.each(function(){var n,f=e.isPlainObject(t)?e.extend(!0,{},e.fn.state.settings,t):e.extend({},e.fn.state.settings),m=f.error,g=f.metadata,p=f.className,h=f.namespace,v=f.states,b=f.text,y="."+h,x=h+"-module",C=e(this),w=this,k=C.data(x);n={initialize:function(){n.verbose("Initializing module"),f.automatic&&n.add.defaults(),f.context&&""!==r?e(f.context).on(r,"mouseenter"+y,n.change.text).on(r,"mouseleave"+y,n.reset.text).on(r,"click"+y,n.toggle.state):C.on("mouseenter"+y,n.change.text).on("mouseleave"+y,n.reset.text).on("click"+y,n.toggle.state),n.instantiate()},instantiate:function(){n.verbose("Storing instance of module",n),k=n,C.data(x,n)},destroy:function(){n.verbose("Destroying previous module",k),C.off(y).removeData(x)},refresh:function(){n.verbose("Refreshing selector cache"),C=e(w)},add:{defaults:function(){var o=t&&e.isPlainObject(t.states)?t.states:{};e.each(f.defaults,function(t,a){n.is[t]!==i&&n.is[t]()&&(n.verbose("Adding default states",t,w),e.extend(f.states,a,o))})}},is:{active:function(){return C.hasClass(p.active)},loading:function(){return C.hasClass(p.loading)},inactive:function(){return!C.hasClass(p.active)},state:function(e){return p[e]!==i&&C.hasClass(p[e])},enabled:function(){return!C.is(f.filter.active)},disabled:function(){return C.is(f.filter.active)},textEnabled:function(){return!C.is(f.filter.text)},button:function(){return C.is(".button:not(a, .submit)")},input:function(){return C.is("input")},progress:function(){return C.is(".ui.progress")}},allow:function(e){n.debug("Now allowing state",e),v[e]=!0},disallow:function(e){n.debug("No longer allowing",e),v[e]=!1},allows:function(e){return v[e]||!1},enable:function(){C.removeClass(p.disabled)},disable:function(){C.addClass(p.disabled)},setState:function(e){n.allows(e)&&C.addClass(p[e])},removeState:function(e){n.allows(e)&&C.removeClass(p[e])},toggle:{state:function(){var t,o;if(n.allows("active")&&n.is.enabled()){if(n.refresh(),e.fn.api!==i)if(t=C.api("get request"),o=C.api("was cancelled"))n.debug("API Request cancelled by beforesend"),f.activateTest=function(){return!1},f.deactivateTest=function(){return!1};else if(t)return void n.listenTo(t);n.change.state()}}},listenTo:function(t){n.debug("API request detected, waiting for state signal",t),t&&(b.loading&&n.update.text(b.loading),e.when(t).then(function(){"resolved"==t.state()?(n.debug("API request succeeded"),f.activateTest=function(){return!0},f.deactivateTest=function(){return!0}):(n.debug("API request failed"),f.activateTest=function(){return!1},f.deactivateTest=function(){return!1}),n.change.state()}))},change:{state:function(){n.debug("Determining state change direction"),n.is.inactive()?n.activate():n.deactivate(),f.sync&&n.sync(),f.onChange.call(w)},text:function(){n.is.textEnabled()&&(n.is.disabled()?(n.verbose("Changing text to disabled text",b.hover),n.update.text(b.disabled)):n.is.active()?b.hover?(n.verbose("Changing text to hover text",b.hover),n.update.text(b.hover)):b.deactivate&&(n.verbose("Changing text to deactivating text",b.deactivate),n.update.text(b.deactivate)):b.hover?(n.verbose("Changing text to hover text",b.hover),n.update.text(b.hover)):b.activate&&(n.verbose("Changing text to activating text",b.activate),n.update.text(b.activate)))}},activate:function(){f.activateTest.call(w)&&(n.debug("Setting state to active"),C.addClass(p.active),n.update.text(b.active),f.onActivate.call(w))},deactivate:function(){f.deactivateTest.call(w)&&(n.debug("Setting state to inactive"),C.removeClass(p.active),n.update.text(b.inactive),f.onDeactivate.call(w))},sync:function(){n.verbose("Syncing other buttons to current state"),n.is.active()?a.not(C).state("activate"):a.not(C).state("deactivate")},get:{text:function(){return f.selector.text?C.find(f.selector.text).text():C.html()},textFor:function(e){return b[e]||!1}},flash:{text:function(e,t,i){var o=n.get.text();n.debug("Flashing text message",e,t),e=e||f.text.flash,t=t||f.flashDuration,i=i||function(){},n.update.text(e),setTimeout(function(){n.update.text(o),i.call(w)},t)}},reset:{text:function(){var e=b.active||C.data(g.storedText),t=b.inactive||C.data(g.storedText);n.is.textEnabled()&&(n.is.active()&&e?(n.verbose("Resetting active text",e),n.update.text(e)):t&&(n.verbose("Resetting inactive text",e),n.update.text(t)))}},update:{text:function(e){var t=n.get.text();e&&e!==t?(n.debug("Updating text",e),f.selector.text?C.data(g.storedText,e).find(f.selector.text).text(e):C.data(g.storedText,e).html(e)):n.debug("Text is already set, ignoring update",e)}},setting:function(t,o){
if(n.debug("Changing setting",t,o),e.isPlainObject(t))e.extend(!0,f,t);else{if(o===i)return f[t];e.isPlainObject(f[t])?e.extend(!0,f[t],o):f[t]=o}},internal:function(t,o){if(e.isPlainObject(t))e.extend(!0,n,t);else{if(o===i)return n[t];n[t]=o}},debug:function(){!f.silent&&f.debug&&(f.performance?n.performance.log(arguments):(n.debug=Function.prototype.bind.call(console.info,console,f.name+":"),n.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?n.performance.log(arguments):(n.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),n.verbose.apply(console,arguments)))},error:function(){f.silent||(n.error=Function.prototype.bind.call(console.error,console,f.name+":"),n.error.apply(console,arguments))},performance:{log:function(e){var t,i,o;f.performance&&(t=(new Date).getTime(),o=s||t,i=t-o,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:w,"Execution Time":i})),clearTimeout(n.performance.timer),n.performance.timer=setTimeout(n.performance.display,500)},display:function(){var t=f.name+":",o=0;s=!1,clearTimeout(n.performance.timer),e.each(l,function(e,t){o+=t["Execution Time"]}),t+=" "+o+"ms",r&&(t+=" '"+r+"'"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,a,r){var s,l,c,u=k;return a=a||d,r=w||r,"string"==typeof t&&u!==i&&(t=t.split(/[\. ]/),s=t.length-1,e.each(t,function(o,a){var r=o!=s?a+t[o+1].charAt(0).toUpperCase()+t[o+1].slice(1):t;if(e.isPlainObject(u[r])&&o!=s)u=u[r];else{if(u[r]!==i)return l=u[r],!1;if(!e.isPlainObject(u[a])||o==s)return u[a]!==i?(l=u[a],!1):(n.error(m.method,t),!1);u=u[a]}})),e.isFunction(l)?c=l.apply(r,a):l!==i&&(c=l),e.isArray(o)?o.push(c):o!==i?o=[o,c]:c!==i&&(o=c),l}},u?(k===i&&n.initialize(),n.invoke(c)):(k!==i&&k.invoke("destroy"),n.initialize())}),o!==i?o:this},e.fn.state.settings={name:"State",debug:!1,verbose:!1,namespace:"state",performance:!0,onActivate:function(){},onDeactivate:function(){},onChange:function(){},activateTest:function(){return!0},deactivateTest:function(){return!0},automatic:!0,sync:!1,flashDuration:1e3,filter:{text:".loading, .disabled",active:".disabled"},context:!1,error:{beforeSend:"The before send function has cancelled state change",method:"The method you called is not defined."},metadata:{promise:"promise",storedText:"stored-text"},className:{active:"active",disabled:"disabled",error:"error",loading:"loading",success:"success",warning:"warning"},selector:{text:!1},defaults:{input:{disabled:!0,loading:!0,active:!0},button:{disabled:!0,loading:!0,active:!0},progress:{active:!0,success:!0,warning:!0,error:!0}},states:{active:!0,disabled:!0,error:!0,loading:!0,success:!0,warning:!0},text:{disabled:!1,flash:!1,hover:!1,active:!1,inactive:!1,activate:!1,deactivate:!1}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.visibility=function(o){var a,r=e(this),s=r.selector||"",l=(new Date).getTime(),c=[],u=arguments[0],d="string"==typeof u,f=[].slice.call(arguments,1),m=r.length,g=0;return r.each(function(){var r,p,h,v,b=e.isPlainObject(o)?e.extend(!0,{},e.fn.visibility.settings,o):e.extend({},e.fn.visibility.settings),y=b.className,x=b.namespace,C=b.error,w=b.metadata,k="."+x,S="module-"+x,T=e(t),A=e(this),R=e(b.context),P=(A.selector||"",A.data(S)),E=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)},F=this,O=!1;v={initialize:function(){v.debug("Initializing",b),v.setup.cache(),v.should.trackChanges()&&("image"==b.type&&v.setup.image(),"fixed"==b.type&&v.setup.fixed(),b.observeChanges&&v.observeChanges(),v.bind.events()),v.save.position(),v.is.visible()||v.error(C.visible,A),b.initialCheck&&v.checkVisibility(),v.instantiate()},instantiate:function(){v.debug("Storing instance",v),A.data(S,v),P=v},destroy:function(){v.verbose("Destroying previous module"),h&&h.disconnect(),p&&p.disconnect(),T.off("load"+k,v.event.load).off("resize"+k,v.event.resize),R.off("scroll"+k,v.event.scroll).off("scrollchange"+k,v.event.scrollchange),"fixed"==b.type&&(v.resetFixed(),v.remove.placeholder()),A.off(k).removeData(S)},observeChanges:function(){"MutationObserver"in t&&(p=new MutationObserver(v.event.contextChanged),h=new MutationObserver(v.event.changed),p.observe(n,{childList:!0,subtree:!0}),h.observe(F,{childList:!0,subtree:!0}),v.debug("Setting up mutation observer",h))},bind:{events:function(){v.verbose("Binding visibility events to scroll and resize"),b.refreshOnLoad&&T.on("load"+k,v.event.load),T.on("resize"+k,v.event.resize),R.off("scroll"+k).on("scroll"+k,v.event.scroll).on("scrollchange"+k,v.event.scrollchange)}},event:{changed:function(e){v.verbose("DOM tree modified, updating visibility calculations"),v.timer=setTimeout(function(){v.verbose("DOM tree modified, updating sticky menu"),v.refresh()},100)},contextChanged:function(t){[].forEach.call(t,function(t){t.removedNodes&&[].forEach.call(t.removedNodes,function(t){(t==F||e(t).find(F).length>0)&&(v.debug("Element removed from DOM, tearing down events"),v.destroy())})})},resize:function(){v.debug("Window resized"),b.refreshOnResize&&E(v.refresh)},load:function(){v.debug("Page finished loading"),E(v.refresh)},scroll:function(){b.throttle?(clearTimeout(v.timer),v.timer=setTimeout(function(){R.triggerHandler("scrollchange"+k,[R.scrollTop()])},b.throttle)):E(function(){R.triggerHandler("scrollchange"+k,[R.scrollTop()])})},scrollchange:function(e,t){v.checkVisibility(t)}},precache:function(t,i){t instanceof Array||(t=[t]);for(var o=t.length,a=0,r=[],s=n.createElement("img"),l=function(){a++,a>=t.length&&e.isFunction(i)&&i()};o--;)s=n.createElement("img"),s.onload=l,s.onerror=l,s.src=t[o],r.push(s)},enableCallbacks:function(){v.debug("Allowing callbacks to occur"),O=!1},disableCallbacks:function(){v.debug("Disabling all callbacks temporarily"),O=!0},should:{trackChanges:function(){return d?(v.debug("One time query, no need to bind events"),!1):(v.debug("Callbacks being attached"),!0)}},setup:{cache:function(){v.cache={occurred:{},screen:{},element:{}}},image:function(){var e=A.data(w.src);e&&(v.verbose("Lazy loading image",e),b.once=!0,b.observeChanges=!1,b.onOnScreen=function(){v.debug("Image on screen",F),v.precache(e,function(){v.set.image(e,function(){g++,g==m&&b.onAllLoaded.call(this),b.onLoad.call(this)})})})},fixed:function(){v.debug("Setting up fixed"),b.once=!1,b.observeChanges=!1,b.initialCheck=!0,b.refreshOnLoad=!0,o.transition||(b.transition=!1),v.create.placeholder(),v.debug("Added placeholder",r),b.onTopPassed=function(){v.debug("Element passed, adding fixed position",A),v.show.placeholder(),v.set.fixed(),b.transition&&e.fn.transition!==i&&A.transition(b.transition,b.duration)},b.onTopPassedReverse=function(){v.debug("Element returned to position, removing fixed",A),v.hide.placeholder(),v.remove.fixed()}}},create:{placeholder:function(){v.verbose("Creating fixed position placeholder"),r=A.clone(!1).css("display","none").addClass(y.placeholder).insertAfter(A)}},show:{placeholder:function(){v.verbose("Showing placeholder"),r.css("display","block").css("visibility","hidden")}},hide:{placeholder:function(){v.verbose("Hiding placeholder"),r.css("display","none").css("visibility","")}},set:{fixed:function(){v.verbose("Setting element to fixed position"),A.addClass(y.fixed).css({position:"fixed",top:b.offset+"px",left:"auto",zIndex:b.zIndex}),b.onFixed.call(F)},image:function(t,n){A.attr("src",t),b.transition?e.fn.transition!==i?A.transition(b.transition,b.duration,n):A.fadeIn(b.duration,n):A.show()}},is:{onScreen:function(){var e=v.get.elementCalculations();return e.onScreen},offScreen:function(){var e=v.get.elementCalculations();return e.offScreen},visible:function(){return!(!v.cache||!v.cache.element)&&!(0===v.cache.element.width&&0===v.cache.element.offset.top)}},refresh:function(){v.debug("Refreshing constants (width/height)"),"fixed"==b.type&&v.resetFixed(),v.reset(),v.save.position(),b.checkOnRefresh&&v.checkVisibility(),b.onRefresh.call(F)},resetFixed:function(){v.remove.fixed(),v.remove.occurred()},reset:function(){v.verbose("Resetting all cached values"),e.isPlainObject(v.cache)&&(v.cache.screen={},v.cache.element={})},checkVisibility:function(e){v.verbose("Checking visibility of element",v.cache.element),!O&&v.is.visible()&&(v.save.scroll(e),v.save.calculations(),v.passed(),v.passingReverse(),v.topVisibleReverse(),v.bottomVisibleReverse(),v.topPassedReverse(),v.bottomPassedReverse(),v.onScreen(),v.offScreen(),v.passing(),v.topVisible(),v.bottomVisible(),v.topPassed(),v.bottomPassed(),b.onUpdate&&b.onUpdate.call(F,v.get.elementCalculations()))},passed:function(t,n){var o=v.get.elementCalculations();if(t&&n)b.onPassed[t]=n;else{if(t!==i)return v.get.pixelsPassed(t)>o.pixelsPassed;o.passing&&e.each(b.onPassed,function(e,t){o.bottomVisible||o.pixelsPassed>v.get.pixelsPassed(e)?v.execute(t,e):b.once||v.remove.occurred(t)})}},onScreen:function(e){var t=v.get.elementCalculations(),n=e||b.onOnScreen,o="onScreen";if(e&&(v.debug("Adding callback for onScreen",e),b.onOnScreen=e),t.onScreen?v.execute(n,o):b.once||v.remove.occurred(o),e!==i)return t.onOnScreen},offScreen:function(e){var t=v.get.elementCalculations(),n=e||b.onOffScreen,o="offScreen";if(e&&(v.debug("Adding callback for offScreen",e),b.onOffScreen=e),t.offScreen?v.execute(n,o):b.once||v.remove.occurred(o),e!==i)return t.onOffScreen},passing:function(e){var t=v.get.elementCalculations(),n=e||b.onPassing,o="passing";if(e&&(v.debug("Adding callback for passing",e),b.onPassing=e),t.passing?v.execute(n,o):b.once||v.remove.occurred(o),e!==i)return t.passing},topVisible:function(e){var t=v.get.elementCalculations(),n=e||b.onTopVisible,o="topVisible";if(e&&(v.debug("Adding callback for top visible",e),b.onTopVisible=e),t.topVisible?v.execute(n,o):b.once||v.remove.occurred(o),e===i)return t.topVisible},bottomVisible:function(e){var t=v.get.elementCalculations(),n=e||b.onBottomVisible,o="bottomVisible";if(e&&(v.debug("Adding callback for bottom visible",e),b.onBottomVisible=e),t.bottomVisible?v.execute(n,o):b.once||v.remove.occurred(o),e===i)return t.bottomVisible},topPassed:function(e){var t=v.get.elementCalculations(),n=e||b.onTopPassed,o="topPassed";if(e&&(v.debug("Adding callback for top passed",e),b.onTopPassed=e),t.topPassed?v.execute(n,o):b.once||v.remove.occurred(o),e===i)return t.topPassed},bottomPassed:function(e){var t=v.get.elementCalculations(),n=e||b.onBottomPassed,o="bottomPassed";if(e&&(v.debug("Adding callback for bottom passed",e),b.onBottomPassed=e),t.bottomPassed?v.execute(n,o):b.once||v.remove.occurred(o),e===i)return t.bottomPassed},passingReverse:function(e){var t=v.get.elementCalculations(),n=e||b.onPassingReverse,o="passingReverse";if(e&&(v.debug("Adding callback for passing reverse",e),b.onPassingReverse=e),t.passing?b.once||v.remove.occurred(o):v.get.occurred("passing")&&v.execute(n,o),e!==i)return!t.passing},topVisibleReverse:function(e){var t=v.get.elementCalculations(),n=e||b.onTopVisibleReverse,o="topVisibleReverse";if(e&&(v.debug("Adding callback for top visible reverse",e),b.onTopVisibleReverse=e),t.topVisible?b.once||v.remove.occurred(o):v.get.occurred("topVisible")&&v.execute(n,o),e===i)return!t.topVisible},bottomVisibleReverse:function(e){var t=v.get.elementCalculations(),n=e||b.onBottomVisibleReverse,o="bottomVisibleReverse";if(e&&(v.debug("Adding callback for bottom visible reverse",e),b.onBottomVisibleReverse=e),t.bottomVisible?b.once||v.remove.occurred(o):v.get.occurred("bottomVisible")&&v.execute(n,o),e===i)return!t.bottomVisible},topPassedReverse:function(e){var t=v.get.elementCalculations(),n=e||b.onTopPassedReverse,o="topPassedReverse";if(e&&(v.debug("Adding callback for top passed reverse",e),b.onTopPassedReverse=e),t.topPassed?b.once||v.remove.occurred(o):v.get.occurred("topPassed")&&v.execute(n,o),e===i)return!t.onTopPassed},bottomPassedReverse:function(e){var t=v.get.elementCalculations(),n=e||b.onBottomPassedReverse,o="bottomPassedReverse";if(e&&(v.debug("Adding callback for bottom passed reverse",e),b.onBottomPassedReverse=e),t.bottomPassed?b.once||v.remove.occurred(o):v.get.occurred("bottomPassed")&&v.execute(n,o),e===i)return!t.bottomPassed},execute:function(e,t){var n=v.get.elementCalculations(),i=v.get.screenCalculations();e=e||!1,e&&(b.continuous?(v.debug("Callback being called continuously",t,n),e.call(F,n,i)):v.get.occurred(t)||(v.debug("Conditions met",t,n),e.call(F,n,i))),v.save.occurred(t)},remove:{fixed:function(){v.debug("Removing fixed position"),A.removeClass(y.fixed).css({position:"",top:"",left:"",zIndex:""}),b.onUnfixed.call(F)},placeholder:function(){v.debug("Removing placeholder content"),r&&r.remove()},occurred:function(e){if(e){var t=v.cache.occurred;t[e]!==i&&t[e]===!0&&(v.debug("Callback can now be called again",e),v.cache.occurred[e]=!1)}else v.cache.occurred={}}},save:{calculations:function(){v.verbose("Saving all calculations necessary to determine positioning"),v.save.direction(),v.save.screenCalculations(),v.save.elementCalculations()},occurred:function(e){e&&(v.cache.occurred[e]!==i&&v.cache.occurred[e]===!0||(v.verbose("Saving callback occurred",e),v.cache.occurred[e]=!0))},scroll:function(e){e=e+b.offset||R.scrollTop()+b.offset,v.cache.scroll=e},direction:function(){var e,t=v.get.scroll(),n=v.get.lastScroll();return e=t>n&&n?"down":t<n&&n?"up":"static",v.cache.direction=e,v.cache.direction},elementPosition:function(){var e=v.cache.element,t=v.get.screenSize();return v.verbose("Saving element position"),e.fits=e.height<t.height,e.offset=A.offset(),e.width=A.outerWidth(),e.height=A.outerHeight(),v.cache.element=e,e},elementCalculations:function(){var e=v.get.screenCalculations(),t=v.get.elementPosition();return b.includeMargin?(t.margin={},t.margin.top=parseInt(A.css("margin-top"),10),t.margin.bottom=parseInt(A.css("margin-bottom"),10),t.top=t.offset.top-t.margin.top,t.bottom=t.offset.top+t.height+t.margin.bottom):(t.top=t.offset.top,t.bottom=t.offset.top+t.height),t.topVisible=e.bottom>=t.top,t.topPassed=e.top>=t.top,t.bottomVisible=e.bottom>=t.bottom,t.bottomPassed=e.top>=t.bottom,t.pixelsPassed=0,t.percentagePassed=0,t.onScreen=t.topVisible&&!t.bottomPassed,t.passing=t.topPassed&&!t.bottomPassed,t.offScreen=!t.onScreen,t.passing&&(t.pixelsPassed=e.top-t.top,t.percentagePassed=(e.top-t.top)/t.height),v.cache.element=t,v.verbose("Updated element calculations",t),t},screenCalculations:function(){var e=v.get.scroll();return v.save.direction(),v.cache.screen.top=e,v.cache.screen.bottom=e+v.cache.screen.height,v.cache.screen},screenSize:function(){v.verbose("Saving window position"),v.cache.screen={height:R.height()}},position:function(){v.save.screenSize(),v.save.elementPosition()}},get:{pixelsPassed:function(e){var t=v.get.elementCalculations();return e.search("%")>-1?t.height*(parseInt(e,10)/100):parseInt(e,10)},occurred:function(e){return v.cache.occurred!==i&&(v.cache.occurred[e]||!1)},direction:function(){return v.cache.direction===i&&v.save.direction(),v.cache.direction},elementPosition:function(){return v.cache.element===i&&v.save.elementPosition(),v.cache.element},elementCalculations:function(){return v.cache.element===i&&v.save.elementCalculations(),v.cache.element},screenCalculations:function(){return v.cache.screen===i&&v.save.screenCalculations(),v.cache.screen},screenSize:function(){return v.cache.screen===i&&v.save.screenSize(),v.cache.screen},scroll:function(){return v.cache.scroll===i&&v.save.scroll(),v.cache.scroll},lastScroll:function(){return v.cache.screen===i?(v.debug("First scroll event, no last scroll could be found"),!1):v.cache.screen.top}},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,b,t);else{if(n===i)return b[t];b[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,v,t);else{if(n===i)return v[t];v[t]=n}},debug:function(){!b.silent&&b.debug&&(b.performance?v.performance.log(arguments):(v.debug=Function.prototype.bind.call(console.info,console,b.name+":"),v.debug.apply(console,arguments)))},verbose:function(){!b.silent&&b.verbose&&b.debug&&(b.performance?v.performance.log(arguments):(v.verbose=Function.prototype.bind.call(console.info,console,b.name+":"),v.verbose.apply(console,arguments)))},error:function(){b.silent||(v.error=Function.prototype.bind.call(console.error,console,b.name+":"),v.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;b.performance&&(t=(new Date).getTime(),i=l||t,n=t-i,l=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:F,"Execution Time":n})),clearTimeout(v.performance.timer),v.performance.timer=setTimeout(v.performance.display,500)},display:function(){var t=b.name+":",n=0;l=!1,clearTimeout(v.performance.timer),e.each(c,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",s&&(t+=" '"+s+"'"),(console.group!==i||console.table!==i)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),c=[]}},invoke:function(t,n,o){var r,s,l,c=P;return n=n||f,o=F||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(v.error(C.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},d?(P===i&&v.initialize(),P.save.scroll(),P.save.calculations(),v.invoke(u)):(P!==i&&P.invoke("destroy"),v.initialize())}),a!==i?a:this},e.fn.visibility.settings={name:"Visibility",namespace:"visibility",debug:!1,verbose:!1,performance:!0,observeChanges:!0,initialCheck:!0,refreshOnLoad:!0,refreshOnResize:!0,checkOnRefresh:!0,once:!0,continuous:!1,offset:0,includeMargin:!1,context:t,throttle:!1,type:!1,zIndex:"10",transition:"fade in",duration:1e3,onPassed:{},onOnScreen:!1,onOffScreen:!1,onPassing:!1,onTopVisible:!1,onBottomVisible:!1,onTopPassed:!1,onBottomPassed:!1,onPassingReverse:!1,onTopVisibleReverse:!1,onBottomVisibleReverse:!1,onTopPassedReverse:!1,onBottomPassedReverse:!1,onLoad:function(){},onAllLoaded:function(){},onFixed:function(){},onUnfixed:function(){},onUpdate:!1,onRefresh:function(){},metadata:{src:"src"},className:{fixed:"fixed",placeholder:"placeholder"},error:{method:"The method you called is not defined.",visible:"Element is hidden, you must call refresh after element becomes visible"}}}(jQuery,window,document);
/*!
 * # Semantic UI 2.2.3 - Search
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 *
 */

/*!
 * # Semantic UI 2.1.7 - Transition
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(n,e,i,t){"use strict";n.fn.transition=function(){var a,o=n(this),r=o.selector||"",s=(new Date).getTime(),l=[],u=arguments,c=u[0],d=[].slice.call(arguments,1),m="string"==typeof c;e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame||function(n){setTimeout(n,0)};return o.each(function(e){var f,p,g,v,b,y,h,w,C,A=n(this),S=this;C={initialize:function(){f=C.get.settings.apply(S,u),v=f.className,g=f.error,b=f.metadata,w="."+f.namespace,h="module-"+f.namespace,p=A.data(h)||C,y=C.get.animationEndEvent(),m&&(m=C.invoke(c)),m===!1&&(C.verbose("Converted arguments into settings object",f),f.interval?C.delay(f.animate):C.animate(),C.instantiate())},instantiate:function(){C.verbose("Storing instance of module",C),p=C,A.data(h,p)},destroy:function(){C.verbose("Destroying previous module for",S),A.removeData(h)},refresh:function(){C.verbose("Refreshing display type on next animation"),delete C.displayType},forceRepaint:function(){C.verbose("Forcing element repaint");var n=A.parent(),e=A.next();0===e.length?A.detach().appendTo(n):A.detach().insertBefore(e)},repaint:function(){C.verbose("Repainting element");S.offsetWidth},delay:function(n){var i,a,r=C.get.animationDirection();r||(r=C.can.transition()?C.get.direction():"static"),n=n!==t?n:f.interval,i="auto"==f.reverse&&r==v.outward,a=i||1==f.reverse?(o.length-e)*f.interval:e*f.interval,C.debug("Delaying animation by",a),setTimeout(C.animate,a)},animate:function(n){if(f=n||f,!C.is.supported())return C.error(g.support),!1;if(C.debug("Preparing animation",f.animation),C.is.animating()){if(f.queue)return!f.allowRepeats&&C.has.direction()&&C.is.occurring()&&C.queuing!==!0?C.debug("Animation is currently occurring, preventing queueing same animation",f.animation):C.queue(f.animation),!1;if(!f.allowRepeats&&C.is.occurring())return C.debug("Animation is already occurring, will not execute repeated animation",f.animation),!1;C.debug("New animation started, completing previous early",f.animation),p.complete()}C.can.animate()?C.set.animating(f.animation):C.error(g.noAnimation,f.animation,S)},reset:function(){C.debug("Resetting animation to beginning conditions"),C.remove.animationCallbacks(),C.restore.conditions(),C.remove.animating()},queue:function(n){C.debug("Queueing animation of",n),C.queuing=!0,A.one(y+".queue"+w,function(){C.queuing=!1,C.repaint(),C.animate.apply(this,f)})},complete:function(n){C.debug("Animation complete",f.animation),C.remove.completeCallback(),C.remove.failSafe(),C.is.looping()||(C.is.outward()?(C.verbose("Animation is outward, hiding element"),C.restore.conditions(),C.hide()):C.is.inward()?(C.verbose("Animation is outward, showing element"),C.restore.conditions(),C.show()):(C.verbose("Static animation completed"),C.restore.conditions(),f.onComplete.call(S)))},force:{visible:function(){var n=A.attr("style"),e=C.get.userStyle(),i=C.get.displayType(),a=e+"display: "+i+" !important;",o=A.css("display"),r=n===t||""===n;o!==i?(C.verbose("Overriding default display to show element",i),A.attr("style",a)):r&&A.removeAttr("style")},hidden:function(){var n=A.attr("style"),e=A.css("display"),i=n===t||""===n;"none"===e||C.is.hidden()?i&&A.removeAttr("style"):(C.verbose("Overriding default display to hide element"),A.css("display","none"))}},has:{direction:function(e){var i=!1;return e=e||f.animation,"string"==typeof e&&(e=e.split(" "),n.each(e,function(n,e){(e===v.inward||e===v.outward)&&(i=!0)})),i},inlineDisplay:function(){var e=A.attr("style")||"";return n.isArray(e.match(/display.*?;/,""))}},set:{animating:function(n){var e;C.remove.completeCallback(),n=n||f.animation,e=C.get.animationClass(n),C.save.animation(e),C.force.visible(),C.remove.hidden(),C.remove.direction(),C.start.animation(e)},duration:function(n,e){e=e||f.duration,e="number"==typeof e?e+"ms":e,(e||0===e)&&(C.verbose("Setting animation duration",e),A.css({"animation-duration":e}))},direction:function(n){n=n||C.get.direction(),n==v.inward?C.set.inward():C.set.outward()},looping:function(){C.debug("Transition set to loop"),A.addClass(v.looping)},hidden:function(){A.addClass(v.transition).addClass(v.hidden)},inward:function(){C.debug("Setting direction to inward"),A.removeClass(v.outward).addClass(v.inward)},outward:function(){C.debug("Setting direction to outward"),A.removeClass(v.inward).addClass(v.outward)},visible:function(){A.addClass(v.transition).addClass(v.visible)}},start:{animation:function(n){n=n||C.get.animationClass(),C.debug("Starting tween",n),A.addClass(n).one(y+".complete"+w,C.complete),f.useFailSafe&&C.add.failSafe(),C.set.duration(f.duration),f.onStart.call(S)}},save:{animation:function(n){C.cache||(C.cache={}),C.cache.animation=n},displayType:function(n){"none"!==n&&A.data(b.displayType,n)},transitionExists:function(e,i){n.fn.transition.exists[e]=i,C.verbose("Saving existence of transition",e,i)}},restore:{conditions:function(){var n=C.get.currentAnimation();n&&(A.removeClass(n),C.verbose("Removing animation class",C.cache)),C.remove.duration()}},add:{failSafe:function(){var n=C.get.duration();C.timer=setTimeout(function(){A.triggerHandler(y)},n+f.failSafeDelay),C.verbose("Adding fail safe timer",C.timer)}},remove:{animating:function(){A.removeClass(v.animating)},animationCallbacks:function(){C.remove.queueCallback(),C.remove.completeCallback()},queueCallback:function(){A.off(".queue"+w)},completeCallback:function(){A.off(".complete"+w)},display:function(){A.css("display","")},direction:function(){A.removeClass(v.inward).removeClass(v.outward)},duration:function(){A.css("animation-duration","")},failSafe:function(){C.verbose("Removing fail safe timer",C.timer),C.timer&&clearTimeout(C.timer)},hidden:function(){A.removeClass(v.hidden)},visible:function(){A.removeClass(v.visible)},looping:function(){C.debug("Transitions are no longer looping"),C.is.looping()&&(C.reset(),A.removeClass(v.looping))},transition:function(){A.removeClass(v.visible).removeClass(v.hidden)}},get:{settings:function(e,i,t){return"object"==typeof e?n.extend(!0,{},n.fn.transition.settings,e):"function"==typeof t?n.extend({},n.fn.transition.settings,{animation:e,onComplete:t,duration:i}):"string"==typeof i||"number"==typeof i?n.extend({},n.fn.transition.settings,{animation:e,duration:i}):"object"==typeof i?n.extend({},n.fn.transition.settings,i,{animation:e}):"function"==typeof i?n.extend({},n.fn.transition.settings,{animation:e,onComplete:i}):n.extend({},n.fn.transition.settings,{animation:e})},animationClass:function(n){var e=n||f.animation,i=C.can.transition()&&!C.has.direction()?C.get.direction()+" ":"";return v.animating+" "+v.transition+" "+i+e},currentAnimation:function(){return C.cache&&C.cache.animation!==t?C.cache.animation:!1},currentDirection:function(){return C.is.inward()?v.inward:v.outward},direction:function(){return C.is.hidden()||!C.is.visible()?v.inward:v.outward},animationDirection:function(e){var i;return e=e||f.animation,"string"==typeof e&&(e=e.split(" "),n.each(e,function(n,e){e===v.inward?i=v.inward:e===v.outward&&(i=v.outward)})),i?i:!1},duration:function(n){return n=n||f.duration,n===!1&&(n=A.css("animation-duration")||0),"string"==typeof n?n.indexOf("ms")>-1?parseFloat(n):1e3*parseFloat(n):n},displayType:function(){return f.displayType?f.displayType:(A.data(b.displayType)===t&&C.can.transition(!0),A.data(b.displayType))},userStyle:function(n){return n=n||A.attr("style")||"",n.replace(/display.*?;/,"")},transitionExists:function(e){return n.fn.transition.exists[e]},animationStartEvent:function(){var n,e=i.createElement("div"),a={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(n in a)if(e.style[n]!==t)return a[n];return!1},animationEndEvent:function(){var n,e=i.createElement("div"),a={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(n in a)if(e.style[n]!==t)return a[n];return!1}},can:{transition:function(e){var i,a,o,r,s,l,u,c=f.animation,d=C.get.transitionExists(c);if(d===t||e){if(C.verbose("Determining whether animation exists"),i=A.attr("class"),a=A.prop("tagName"),o=n("<"+a+" />").addClass(i).insertAfter(A),r=o.addClass(c).removeClass(v.inward).removeClass(v.outward).addClass(v.animating).addClass(v.transition).css("animationName"),s=o.addClass(v.inward).css("animationName"),u=o.attr("class",i).removeAttr("style").removeClass(v.hidden).removeClass(v.visible).show().css("display"),C.verbose("Determining final display state",u),C.save.displayType(u),o.remove(),r!=s)C.debug("Direction exists for animation",c),l=!0;else{if("none"==r||!r)return void C.debug("No animation defined in css",c);C.debug("Static animation found",c,u),l=!1}C.save.transitionExists(c,l)}return d!==t?d:l},animate:function(){return C.can.transition()!==t}},is:{animating:function(){return A.hasClass(v.animating)},inward:function(){return A.hasClass(v.inward)},outward:function(){return A.hasClass(v.outward)},looping:function(){return A.hasClass(v.looping)},occurring:function(n){return n=n||f.animation,n="."+n.replace(" ","."),A.filter(n).length>0},visible:function(){return A.is(":visible")},hidden:function(){return"hidden"===A.css("visibility")},supported:function(){return y!==!1}},hide:function(){C.verbose("Hiding element"),C.is.animating()&&C.reset(),S.blur(),C.remove.display(),C.remove.visible(),C.set.hidden(),C.force.hidden(),f.onHide.call(S),f.onComplete.call(S)},show:function(n){C.verbose("Showing element",n),C.remove.hidden(),C.set.visible(),C.force.visible(),f.onShow.call(S),f.onComplete.call(S)},toggle:function(){C.is.visible()?C.hide():C.show()},stop:function(){C.debug("Stopping current animation"),A.triggerHandler(y)},stopAll:function(){C.debug("Stopping all animation"),C.remove.queueCallback(),A.triggerHandler(y)},clear:{queue:function(){C.debug("Clearing animation queue"),C.remove.queueCallback()}},enable:function(){C.verbose("Starting animation"),A.removeClass(v.disabled)},disable:function(){C.debug("Stopping animation"),A.addClass(v.disabled)},setting:function(e,i){if(C.debug("Changing setting",e,i),n.isPlainObject(e))n.extend(!0,f,e);else{if(i===t)return f[e];f[e]=i}},internal:function(e,i){if(n.isPlainObject(e))n.extend(!0,C,e);else{if(i===t)return C[e];C[e]=i}},debug:function(){f.debug&&(f.performance?C.performance.log(arguments):(C.debug=Function.prototype.bind.call(console.info,console,f.name+":"),C.debug.apply(console,arguments)))},verbose:function(){f.verbose&&f.debug&&(f.performance?C.performance.log(arguments):(C.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),C.verbose.apply(console,arguments)))},error:function(){C.error=Function.prototype.bind.call(console.error,console,f.name+":"),C.error.apply(console,arguments)},performance:{log:function(n){var e,i,t;f.performance&&(e=(new Date).getTime(),t=s||e,i=e-t,s=e,l.push({Name:n[0],Arguments:[].slice.call(n,1)||"",Element:S,"Execution Time":i})),clearTimeout(C.performance.timer),C.performance.timer=setTimeout(C.performance.display,500)},display:function(){var e=f.name+":",i=0;s=!1,clearTimeout(C.performance.timer),n.each(l,function(n,e){i+=e["Execution Time"]}),e+=" "+i+"ms",r&&(e+=" '"+r+"'"),o.length>1&&(e+=" ("+o.length+")"),(console.group!==t||console.table!==t)&&l.length>0&&(console.groupCollapsed(e),console.table?console.table(l):n.each(l,function(n,e){console.log(e.Name+": "+e["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(e,i,o){var r,s,l,u=p;return i=i||d,o=S||o,"string"==typeof e&&u!==t&&(e=e.split(/[\. ]/),r=e.length-1,n.each(e,function(i,a){var o=i!=r?a+e[i+1].charAt(0).toUpperCase()+e[i+1].slice(1):e;if(n.isPlainObject(u[o])&&i!=r)u=u[o];else{if(u[o]!==t)return s=u[o],!1;if(!n.isPlainObject(u[a])||i==r)return u[a]!==t?(s=u[a],!1):!1;u=u[a]}})),n.isFunction(s)?l=s.apply(o,i):s!==t&&(l=s),n.isArray(a)?a.push(l):a!==t?a=[a,l]:l!==t&&(a=l),s!==t?s:!1}},C.initialize()}),a!==t?a:this},n.fn.transition.exists={},n.fn.transition.settings={name:"Transition",debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document);

!function(e,t,s,n){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.search=function(r){var i,a=e(this),o=a.selector||"",c=(new Date).getTime(),u=[],l=arguments[0],d="string"==typeof l,f=[].slice.call(arguments,1);return e(this).each(function(){var g,h=e.isPlainObject(r)?e.extend(!0,{},e.fn.search.settings,r):e.extend({},e.fn.search.settings),p=h.className,v=h.metadata,m=h.regExp,b=h.fields,y=h.selector,R=h.error,C=h.namespace,w="."+C,x=C+"-module",j=e(this),k=j.find(y.prompt),A=j.find(y.searchButton),E=j.find(y.results),q=j.find(y.result),F=j.find(y.category),S=this,T=j.data(x),D=!1;g={initialize:function(){g.verbose("Initializing module"),g.determine.searchFields(),g.bind.events(),g.set.type(),g.create.results(),g.instantiate()},instantiate:function(){g.verbose("Storing instance of module",g),T=g,j.data(x,g)},destroy:function(){g.verbose("Destroying instance"),j.off(w).removeData(x)},refresh:function(){g.debug("Refreshing selector cache"),k=j.find(y.prompt),A=j.find(y.searchButton),F=j.find(y.category),E=j.find(y.results),q=j.find(y.result)},refreshResults:function(){E=j.find(y.results),q=j.find(y.result)},bind:{events:function(){g.verbose("Binding events to search"),h.automatic&&(j.on(g.get.inputEvent()+w,y.prompt,g.event.input),k.attr("autocomplete","off")),j.on("focus"+w,y.prompt,g.event.focus).on("blur"+w,y.prompt,g.event.blur).on("keydown"+w,y.prompt,g.handleKeyboard).on("click"+w,y.searchButton,g.query).on("mousedown"+w,y.results,g.event.result.mousedown).on("mouseup"+w,y.results,g.event.result.mouseup).on("click"+w,y.result,g.event.result.click)}},determine:{searchFields:function(){r&&r.searchFields!==n&&(h.searchFields=r.searchFields)}},event:{input:function(){clearTimeout(g.timer),g.timer=setTimeout(g.query,h.searchDelay)},focus:function(){g.set.focus(),g.has.minimumCharacters()&&(g.query(),g.can.show()&&g.showResults())},blur:function(e){var t=s.activeElement===this,n=function(){g.cancel.query(),g.remove.focus(),g.timer=setTimeout(g.hideResults,h.hideDelay)};t||(g.resultsClicked?(g.debug("Determining if user action caused search to close"),j.one("click.close"+w,y.results,function(e){return g.is.inMessage(e)||D?void k.focus():(D=!1,void(g.is.animating()||g.is.hidden()||n()))})):(g.debug("Input blurred without user action, closing results"),n()))},result:{mousedown:function(){g.resultsClicked=!0},mouseup:function(){g.resultsClicked=!1},click:function(s){g.debug("Search result selected");var n=e(this),r=n.find(y.title).eq(0),i=n.is("a[href]")?n:n.find("a[href]").eq(0),a=i.attr("href")||!1,o=i.attr("target")||!1,c=(r.html(),r.length>0&&r.text()),u=g.get.results(),l=n.data(v.result)||g.get.result(c,u);return e.isFunction(h.onSelect)&&h.onSelect.call(S,l,u)===!1?(g.debug("Custom onSelect callback cancelled default select action"),void(D=!0)):(g.hideResults(),c&&g.set.value(c),void(a&&(g.verbose("Opening search link found in result",i),"_blank"==o||s.ctrlKey?t.open(a):t.location.href=a)))}}},handleKeyboard:function(e){var t,s=j.find(y.result),n=j.find(y.category),r=s.index(s.filter("."+p.active)),i=s.length,a=e.which,o={backspace:8,enter:13,escape:27,upArrow:38,downArrow:40};if(a==o.escape&&(g.verbose("Escape key pressed, blurring search field"),g.trigger.blur()),g.is.visible())if(a==o.enter){if(g.verbose("Enter key pressed, selecting active result"),s.filter("."+p.active).length>0)return g.event.result.click.call(s.filter("."+p.active),e),e.preventDefault(),!1}else a==o.upArrow?(g.verbose("Up key pressed, changing active result"),t=r-1<0?r:r-1,n.removeClass(p.active),s.removeClass(p.active).eq(t).addClass(p.active).closest(n).addClass(p.active),e.preventDefault()):a==o.downArrow&&(g.verbose("Down key pressed, changing active result"),t=r+1>=i?r:r+1,n.removeClass(p.active),s.removeClass(p.active).eq(t).addClass(p.active).closest(n).addClass(p.active),e.preventDefault());else a==o.enter&&(g.verbose("Enter key pressed, executing query"),g.query(),g.set.buttonPressed(),k.one("keyup",g.remove.buttonFocus))},setup:{api:function(t){var s={debug:h.debug,on:!1,cache:!0,action:"search",urlData:{query:t},onSuccess:function(e){g.parse.response.call(S,e,t)},onAbort:function(e){},onFailure:function(){g.displayMessage(R.serverError)},onError:g.error};e.extend(!0,s,h.apiSettings),g.verbose("Setting up API request",s),j.api(s)}},can:{useAPI:function(){return e.fn.api!==n},show:function(){return g.is.focused()&&!g.is.visible()&&!g.is.empty()},transition:function(){return h.transition&&e.fn.transition!==n&&j.transition("is supported")}},is:{animating:function(){return E.hasClass(p.animating)},hidden:function(){return E.hasClass(p.hidden)},inMessage:function(t){return t.target&&e(t.target).closest(y.message).length>0},empty:function(){return""===E.html()},visible:function(){return E.filter(":visible").length>0},focused:function(){return k.filter(":focus").length>0}},trigger:{blur:function(){var e=s.createEvent("HTMLEvents"),t=k[0];t&&(g.verbose("Triggering native blur event"),e.initEvent("blur",!1,!1),t.dispatchEvent(e))}},get:{inputEvent:function(){var e=k[0],t=e!=n&&e.oninput!=n?"input":e!=n&&e.onpropertychange!=n?"propertychange":"keyup";return t},value:function(){return k.val()},results:function(){var e=j.data(v.results);return e},result:function(t,s){var r=["title","id"],i=!1;return t=t!==n?t:g.get.value(),s=s!==n?s:g.get.results(),"category"===h.type?(g.debug("Finding result that matches",t),e.each(s,function(s,n){if(e.isArray(n.results)&&(i=g.search.object(t,n.results,r)[0]))return!1})):(g.debug("Finding result in results object",t),i=g.search.object(t,s,r)[0]),i||!1}},select:{firstResult:function(){g.verbose("Selecting first result"),q.first().addClass(p.active)}},set:{focus:function(){j.addClass(p.focus)},loading:function(){j.addClass(p.loading)},value:function(e){g.verbose("Setting search input value",e),k.val(e)},type:function(e){e=e||h.type,"category"==h.type&&j.addClass(h.type)},buttonPressed:function(){A.addClass(p.pressed)}},remove:{loading:function(){j.removeClass(p.loading)},focus:function(){j.removeClass(p.focus)},buttonPressed:function(){A.removeClass(p.pressed)}},query:function(){var t=g.get.value(),s=g.read.cache(t);g.has.minimumCharacters()?(s?(g.debug("Reading result from cache",t),g.save.results(s.results),g.addResults(s.html),g.inject.id(s.results)):(g.debug("Querying for",t),e.isPlainObject(h.source)||e.isArray(h.source)?g.search.local(t):g.can.useAPI()?g.search.remote(t):g.error(R.source)),h.onSearchQuery.call(S,t)):g.hideResults()},search:{local:function(e){var t,s=g.search.object(e,h.content);g.set.loading(),g.save.results(s),g.debug("Returned local search results",s),t=g.generateResults({results:s}),g.remove.loading(),g.addResults(t),g.inject.id(s),g.write.cache(e,{html:t,results:s})},remote:function(e){j.api("is loading")&&j.api("abort"),g.setup.api(e),j.api("query")},object:function(t,s,r){var i=[],a=[],o=t.toString().replace(m.escape,"\\$&"),c=new RegExp(m.beginsWith+o,"i"),u=function(t,s){var n=e.inArray(s,i)==-1,r=e.inArray(s,a)==-1;n&&r&&t.push(s)};return s=s||h.source,r=r!==n?r:h.searchFields,e.isArray(r)||(r=[r]),s===n||s===!1?(g.error(R.source),[]):(e.each(r,function(n,r){e.each(s,function(e,s){var n="string"==typeof s[r];n&&(s[r].search(c)!==-1?u(i,s):h.searchFullText&&g.fuzzySearch(t,s[r])&&u(a,s))})}),e.merge(i,a))}},fuzzySearch:function(e,t){var s=t.length,n=e.length;if("string"!=typeof e)return!1;if(e=e.toLowerCase(),t=t.toLowerCase(),n>s)return!1;if(n===s)return e===t;e:for(var r=0,i=0;r<n;r++){for(var a=e.charCodeAt(r);i<s;)if(t.charCodeAt(i++)===a)continue e;return!1}return!0},parse:{response:function(e,t){var s=g.generateResults(e);g.verbose("Parsing server response",e),e!==n&&t!==n&&e[b.results]!==n&&(g.addResults(s),g.inject.id(e[b.results]),g.write.cache(t,{html:s,results:e[b.results]}),g.save.results(e[b.results]))}},cancel:{query:function(){g.can.useAPI()&&j.api("abort")}},has:{minimumCharacters:function(){var e=g.get.value(),t=e.length;return t>=h.minCharacters}},clear:{cache:function(e){var t=j.data(v.cache);e?e&&t&&t[e]&&(g.debug("Removing value from cache",e),delete t[e],j.data(v.cache,t)):(g.debug("Clearing cache",e),j.removeData(v.cache))}},read:{cache:function(e){var t=j.data(v.cache);return!!h.cache&&(g.verbose("Checking cache for generated html for query",e),"object"==typeof t&&t[e]!==n&&t[e])}},create:{id:function(e,t){var s,r,i=e+1;return t!==n?(s=String.fromCharCode(97+t),r=s+i,g.verbose("Creating category result id",r)):(r=i,g.verbose("Creating result id",r)),r},results:function(){0===E.length&&(E=e("<div />").addClass(p.results).appendTo(j))}},inject:{result:function(e,t,s){g.verbose("Injecting result into results");var r=s!==n?E.children().eq(s).children(y.result).eq(t):E.children(y.result).eq(t);g.verbose("Injecting results metadata",r),r.data(v.result,e)},id:function(t){g.debug("Injecting unique ids into results");var s=0,r=0;return"category"===h.type?e.each(t,function(t,i){r=0,e.each(i.results,function(e,t){var a=i.results[e];a.id===n&&(a.id=g.create.id(r,s)),g.inject.result(a,r,s),r++}),s++}):e.each(t,function(e,s){var i=t[e];i.id===n&&(i.id=g.create.id(r)),g.inject.result(i,r),r++}),t}},save:{results:function(e){g.verbose("Saving current search results to metadata",e),j.data(v.results,e)}},write:{cache:function(e,t){var s=j.data(v.cache)!==n?j.data(v.cache):{};h.cache&&(g.verbose("Writing generated html to cache",e,t),s[e]=t,j.data(v.cache,s))}},addResults:function(t){return e.isFunction(h.onResultsAdd)&&h.onResultsAdd.call(E,t)===!1?(g.debug("onResultsAdd callback cancelled default action"),!1):void(t?(E.html(t),g.refreshResults(),h.selectFirstResult&&g.select.firstResult(),g.showResults()):g.hideResults())},showResults:function(){g.is.visible()||(g.can.transition()?(g.debug("Showing results with css animations"),E.transition({animation:h.transition+" in",debug:h.debug,verbose:h.verbose,duration:h.duration,queue:!0})):(g.debug("Showing results with javascript"),E.stop().fadeIn(h.duration,h.easing)),h.onResultsOpen.call(E))},hideResults:function(){g.is.visible()&&(g.can.transition()?(g.debug("Hiding results with css animations"),E.transition({animation:h.transition+" out",debug:h.debug,verbose:h.verbose,duration:h.duration,queue:!0})):(g.debug("Hiding results with javascript"),E.stop().fadeOut(h.duration,h.easing)),h.onResultsClose.call(E))},generateResults:function(t){g.debug("Generating html from response",t);var s=h.templates[h.type],n=e.isPlainObject(t[b.results])&&!e.isEmptyObject(t[b.results]),r=e.isArray(t[b.results])&&t[b.results].length>0,i="";return n||r?(h.maxResults>0&&(n?"standard"==h.type&&g.error(R.maxResults):t[b.results]=t[b.results].slice(0,h.maxResults)),e.isFunction(s)?i=s(t,b):g.error(R.noTemplate,!1)):h.showNoResults&&(i=g.displayMessage(R.noResults,"empty")),h.onResults.call(S,t),i},displayMessage:function(e,t){return t=t||"standard",g.debug("Displaying message",e,t),g.addResults(h.templates.message(e,t)),h.templates.message(e,t)},setting:function(t,s){if(e.isPlainObject(t))e.extend(!0,h,t);else{if(s===n)return h[t];h[t]=s}},internal:function(t,s){if(e.isPlainObject(t))e.extend(!0,g,t);else{if(s===n)return g[t];g[t]=s}},debug:function(){!h.silent&&h.debug&&(h.performance?g.performance.log(arguments):(g.debug=Function.prototype.bind.call(console.info,console,h.name+":"),g.debug.apply(console,arguments)))},verbose:function(){!h.silent&&h.verbose&&h.debug&&(h.performance?g.performance.log(arguments):(g.verbose=Function.prototype.bind.call(console.info,console,h.name+":"),g.verbose.apply(console,arguments)))},error:function(){h.silent||(g.error=Function.prototype.bind.call(console.error,console,h.name+":"),g.error.apply(console,arguments))},performance:{log:function(e){var t,s,n;h.performance&&(t=(new Date).getTime(),n=c||t,s=t-n,c=t,u.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:S,"Execution Time":s})),clearTimeout(g.performance.timer),g.performance.timer=setTimeout(g.performance.display,500)},display:function(){var t=h.name+":",s=0;c=!1,clearTimeout(g.performance.timer),e.each(u,function(e,t){s+=t["Execution Time"]}),t+=" "+s+"ms",o&&(t+=" '"+o+"'"),a.length>1&&(t+=" ("+a.length+")"),(console.group!==n||console.table!==n)&&u.length>0&&(console.groupCollapsed(t),console.table?console.table(u):e.each(u,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),u=[]}},invoke:function(t,s,r){var a,o,c,u=T;return s=s||f,r=S||r,"string"==typeof t&&u!==n&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(s,r){var i=s!=a?r+t[s+1].charAt(0).toUpperCase()+t[s+1].slice(1):t;if(e.isPlainObject(u[i])&&s!=a)u=u[i];else{if(u[i]!==n)return o=u[i],!1;if(!e.isPlainObject(u[r])||s==a)return u[r]!==n&&(o=u[r],!1);u=u[r]}})),e.isFunction(o)?c=o.apply(r,s):o!==n&&(c=o),e.isArray(i)?i.push(c):i!==n?i=[i,c]:c!==n&&(i=c),o}},d?(T===n&&g.initialize(),g.invoke(l)):(T!==n&&T.invoke("destroy"),g.initialize())}),i!==n?i:this},e.fn.search.settings={name:"Search",namespace:"search",silent:!1,debug:!1,verbose:!1,performance:!0,type:"standard",minCharacters:1,selectFirstResult:!1,apiSettings:!1,source:!1,searchFields:["title","description"],displayField:"",searchFullText:!0,automatic:!0,hideDelay:0,searchDelay:200,maxResults:7,cache:!0,showNoResults:!0,transition:"scale",duration:200,easing:"easeOutExpo",onSelect:!1,onResultsAdd:!1,onSearchQuery:function(e){},onResults:function(e){},onResultsOpen:function(){},onResultsClose:function(){},className:{animating:"animating",active:"active",empty:"empty",focus:"focus",hidden:"hidden",loading:"loading",results:"results",pressed:"down"},error:{source:"Cannot search. No source used, and Semantic API module was not included",noResults:"Your search returned no results",logging:"Error in debug logging, exiting.",noEndpoint:"No search endpoint was specified",noTemplate:"A valid template name was not specified.",serverError:"There was an issue querying the server.",maxResults:"Results must be an array to use maxResults setting",method:"The method you called is not defined."},metadata:{cache:"cache",results:"results",result:"result"},regExp:{escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,beginsWith:"(?:s|^)"},fields:{categories:"results",categoryName:"name",categoryResults:"results",description:"description",image:"image",price:"price",results:"results",title:"title",url:"url",action:"action",actionText:"text",actionURL:"url"},selector:{prompt:".prompt",searchButton:".search.button",results:".results",message:".results > .message",category:".category",result:".result",title:".title, .name"},templates:{escape:function(e){var t=/[&<>"'`]/g,s=/[&<>"'`]/,n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},r=function(e){return n[e]};return s.test(e)?e.replace(t,r):e},message:function(e,t){var s="";return e!==n&&t!==n&&(s+='<div class="message '+t+'">',s+="empty"==t?'<div class="header">No Results</div class="header"><div class="description">'+e+'</div class="description">':' <div class="description">'+e+"</div>",s+="</div>"),s},category:function(t,s){var r="";e.fn.search.settings.templates.escape;return t[s.categoryResults]!==n&&(e.each(t[s.categoryResults],function(t,i){i[s.results]!==n&&i.results.length>0&&(r+='<div class="category">',i[s.categoryName]!==n&&(r+='<div class="name">'+i[s.categoryName]+"</div>"),e.each(i.results,function(e,t){r+=t[s.url]?'<a class="result" href="'+t[s.url]+'">':'<a class="result">',t[s.image]!==n&&(r+='<div class="image"> <img src="'+t[s.image]+'"></div>'),r+='<div class="content">',t[s.price]!==n&&(r+='<div class="price">'+t[s.price]+"</div>"),t[s.title]!==n&&(r+='<div class="title">'+t[s.title]+"</div>"),t[s.description]!==n&&(r+='<div class="description">'+t[s.description]+"</div>"),r+="</div>",r+="</a>"}),r+="</div>")}),t[s.action]&&(r+='<a href="'+t[s.action][s.actionURL]+'" class="action">'+t[s.action][s.actionText]+"</a>"),r)},standard:function(t,s){var r="";return t[s.results]!==n&&(e.each(t[s.results],function(e,t){r+=t[s.url]?'<a class="result" href="'+t[s.url]+'">':'<a class="result">',t[s.image]!==n&&(r+='<div class="image"> <img src="'+t[s.image]+'"></div>'),r+='<div class="content">',t[s.price]!==n&&(r+='<div class="price">'+t[s.price]+"</div>"),t[s.title]!==n&&(r+='<div class="title">'+t[s.title]+"</div>"),t[s.description]!==n&&(r+='<div class="description">'+t[s.description]+"</div>"),r+="</div>",r+="</a>"}),t[s.action]&&(r+='<a href="'+t[s.action][s.actionURL]+'" class="action">'+t[s.action][s.actionText]+"</a>"),r)}}}}(jQuery,window,document);

/*!
 * # Semantic UI 2.1.7 - Transition
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(n,e,i,t){"use strict";n.fn.transition=function(){var a,o=n(this),r=o.selector||"",s=(new Date).getTime(),l=[],u=arguments,c=u[0],d=[].slice.call(arguments,1),m="string"==typeof c;e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame||function(n){setTimeout(n,0)};return o.each(function(e){var f,p,g,v,b,y,h,w,C,A=n(this),S=this;C={initialize:function(){f=C.get.settings.apply(S,u),v=f.className,g=f.error,b=f.metadata,w="."+f.namespace,h="module-"+f.namespace,p=A.data(h)||C,y=C.get.animationEndEvent(),m&&(m=C.invoke(c)),m===!1&&(C.verbose("Converted arguments into settings object",f),f.interval?C.delay(f.animate):C.animate(),C.instantiate())},instantiate:function(){C.verbose("Storing instance of module",C),p=C,A.data(h,p)},destroy:function(){C.verbose("Destroying previous module for",S),A.removeData(h)},refresh:function(){C.verbose("Refreshing display type on next animation"),delete C.displayType},forceRepaint:function(){C.verbose("Forcing element repaint");var n=A.parent(),e=A.next();0===e.length?A.detach().appendTo(n):A.detach().insertBefore(e)},repaint:function(){C.verbose("Repainting element");S.offsetWidth},delay:function(n){var i,a,r=C.get.animationDirection();r||(r=C.can.transition()?C.get.direction():"static"),n=n!==t?n:f.interval,i="auto"==f.reverse&&r==v.outward,a=i||1==f.reverse?(o.length-e)*f.interval:e*f.interval,C.debug("Delaying animation by",a),setTimeout(C.animate,a)},animate:function(n){if(f=n||f,!C.is.supported())return C.error(g.support),!1;if(C.debug("Preparing animation",f.animation),C.is.animating()){if(f.queue)return!f.allowRepeats&&C.has.direction()&&C.is.occurring()&&C.queuing!==!0?C.debug("Animation is currently occurring, preventing queueing same animation",f.animation):C.queue(f.animation),!1;if(!f.allowRepeats&&C.is.occurring())return C.debug("Animation is already occurring, will not execute repeated animation",f.animation),!1;C.debug("New animation started, completing previous early",f.animation),p.complete()}C.can.animate()?C.set.animating(f.animation):C.error(g.noAnimation,f.animation,S)},reset:function(){C.debug("Resetting animation to beginning conditions"),C.remove.animationCallbacks(),C.restore.conditions(),C.remove.animating()},queue:function(n){C.debug("Queueing animation of",n),C.queuing=!0,A.one(y+".queue"+w,function(){C.queuing=!1,C.repaint(),C.animate.apply(this,f)})},complete:function(n){C.debug("Animation complete",f.animation),C.remove.completeCallback(),C.remove.failSafe(),C.is.looping()||(C.is.outward()?(C.verbose("Animation is outward, hiding element"),C.restore.conditions(),C.hide()):C.is.inward()?(C.verbose("Animation is outward, showing element"),C.restore.conditions(),C.show()):(C.verbose("Static animation completed"),C.restore.conditions(),f.onComplete.call(S)))},force:{visible:function(){var n=A.attr("style"),e=C.get.userStyle(),i=C.get.displayType(),a=e+"display: "+i+" !important;",o=A.css("display"),r=n===t||""===n;o!==i?(C.verbose("Overriding default display to show element",i),A.attr("style",a)):r&&A.removeAttr("style")},hidden:function(){var n=A.attr("style"),e=A.css("display"),i=n===t||""===n;"none"===e||C.is.hidden()?i&&A.removeAttr("style"):(C.verbose("Overriding default display to hide element"),A.css("display","none"))}},has:{direction:function(e){var i=!1;return e=e||f.animation,"string"==typeof e&&(e=e.split(" "),n.each(e,function(n,e){(e===v.inward||e===v.outward)&&(i=!0)})),i},inlineDisplay:function(){var e=A.attr("style")||"";return n.isArray(e.match(/display.*?;/,""))}},set:{animating:function(n){var e;C.remove.completeCallback(),n=n||f.animation,e=C.get.animationClass(n),C.save.animation(e),C.force.visible(),C.remove.hidden(),C.remove.direction(),C.start.animation(e)},duration:function(n,e){e=e||f.duration,e="number"==typeof e?e+"ms":e,(e||0===e)&&(C.verbose("Setting animation duration",e),A.css({"animation-duration":e}))},direction:function(n){n=n||C.get.direction(),n==v.inward?C.set.inward():C.set.outward()},looping:function(){C.debug("Transition set to loop"),A.addClass(v.looping)},hidden:function(){A.addClass(v.transition).addClass(v.hidden)},inward:function(){C.debug("Setting direction to inward"),A.removeClass(v.outward).addClass(v.inward)},outward:function(){C.debug("Setting direction to outward"),A.removeClass(v.inward).addClass(v.outward)},visible:function(){A.addClass(v.transition).addClass(v.visible)}},start:{animation:function(n){n=n||C.get.animationClass(),C.debug("Starting tween",n),A.addClass(n).one(y+".complete"+w,C.complete),f.useFailSafe&&C.add.failSafe(),C.set.duration(f.duration),f.onStart.call(S)}},save:{animation:function(n){C.cache||(C.cache={}),C.cache.animation=n},displayType:function(n){"none"!==n&&A.data(b.displayType,n)},transitionExists:function(e,i){n.fn.transition.exists[e]=i,C.verbose("Saving existence of transition",e,i)}},restore:{conditions:function(){var n=C.get.currentAnimation();n&&(A.removeClass(n),C.verbose("Removing animation class",C.cache)),C.remove.duration()}},add:{failSafe:function(){var n=C.get.duration();C.timer=setTimeout(function(){A.triggerHandler(y)},n+f.failSafeDelay),C.verbose("Adding fail safe timer",C.timer)}},remove:{animating:function(){A.removeClass(v.animating)},animationCallbacks:function(){C.remove.queueCallback(),C.remove.completeCallback()},queueCallback:function(){A.off(".queue"+w)},completeCallback:function(){A.off(".complete"+w)},display:function(){A.css("display","")},direction:function(){A.removeClass(v.inward).removeClass(v.outward)},duration:function(){A.css("animation-duration","")},failSafe:function(){C.verbose("Removing fail safe timer",C.timer),C.timer&&clearTimeout(C.timer)},hidden:function(){A.removeClass(v.hidden)},visible:function(){A.removeClass(v.visible)},looping:function(){C.debug("Transitions are no longer looping"),C.is.looping()&&(C.reset(),A.removeClass(v.looping))},transition:function(){A.removeClass(v.visible).removeClass(v.hidden)}},get:{settings:function(e,i,t){return"object"==typeof e?n.extend(!0,{},n.fn.transition.settings,e):"function"==typeof t?n.extend({},n.fn.transition.settings,{animation:e,onComplete:t,duration:i}):"string"==typeof i||"number"==typeof i?n.extend({},n.fn.transition.settings,{animation:e,duration:i}):"object"==typeof i?n.extend({},n.fn.transition.settings,i,{animation:e}):"function"==typeof i?n.extend({},n.fn.transition.settings,{animation:e,onComplete:i}):n.extend({},n.fn.transition.settings,{animation:e})},animationClass:function(n){var e=n||f.animation,i=C.can.transition()&&!C.has.direction()?C.get.direction()+" ":"";return v.animating+" "+v.transition+" "+i+e},currentAnimation:function(){return C.cache&&C.cache.animation!==t?C.cache.animation:!1},currentDirection:function(){return C.is.inward()?v.inward:v.outward},direction:function(){return C.is.hidden()||!C.is.visible()?v.inward:v.outward},animationDirection:function(e){var i;return e=e||f.animation,"string"==typeof e&&(e=e.split(" "),n.each(e,function(n,e){e===v.inward?i=v.inward:e===v.outward&&(i=v.outward)})),i?i:!1},duration:function(n){return n=n||f.duration,n===!1&&(n=A.css("animation-duration")||0),"string"==typeof n?n.indexOf("ms")>-1?parseFloat(n):1e3*parseFloat(n):n},displayType:function(){return f.displayType?f.displayType:(A.data(b.displayType)===t&&C.can.transition(!0),A.data(b.displayType))},userStyle:function(n){return n=n||A.attr("style")||"",n.replace(/display.*?;/,"")},transitionExists:function(e){return n.fn.transition.exists[e]},animationStartEvent:function(){var n,e=i.createElement("div"),a={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(n in a)if(e.style[n]!==t)return a[n];return!1},animationEndEvent:function(){var n,e=i.createElement("div"),a={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(n in a)if(e.style[n]!==t)return a[n];return!1}},can:{transition:function(e){var i,a,o,r,s,l,u,c=f.animation,d=C.get.transitionExists(c);if(d===t||e){if(C.verbose("Determining whether animation exists"),i=A.attr("class"),a=A.prop("tagName"),o=n("<"+a+" />").addClass(i).insertAfter(A),r=o.addClass(c).removeClass(v.inward).removeClass(v.outward).addClass(v.animating).addClass(v.transition).css("animationName"),s=o.addClass(v.inward).css("animationName"),u=o.attr("class",i).removeAttr("style").removeClass(v.hidden).removeClass(v.visible).show().css("display"),C.verbose("Determining final display state",u),C.save.displayType(u),o.remove(),r!=s)C.debug("Direction exists for animation",c),l=!0;else{if("none"==r||!r)return void C.debug("No animation defined in css",c);C.debug("Static animation found",c,u),l=!1}C.save.transitionExists(c,l)}return d!==t?d:l},animate:function(){return C.can.transition()!==t}},is:{animating:function(){return A.hasClass(v.animating)},inward:function(){return A.hasClass(v.inward)},outward:function(){return A.hasClass(v.outward)},looping:function(){return A.hasClass(v.looping)},occurring:function(n){return n=n||f.animation,n="."+n.replace(" ","."),A.filter(n).length>0},visible:function(){return A.is(":visible")},hidden:function(){return"hidden"===A.css("visibility")},supported:function(){return y!==!1}},hide:function(){C.verbose("Hiding element"),C.is.animating()&&C.reset(),S.blur(),C.remove.display(),C.remove.visible(),C.set.hidden(),C.force.hidden(),f.onHide.call(S),f.onComplete.call(S)},show:function(n){C.verbose("Showing element",n),C.remove.hidden(),C.set.visible(),C.force.visible(),f.onShow.call(S),f.onComplete.call(S)},toggle:function(){C.is.visible()?C.hide():C.show()},stop:function(){C.debug("Stopping current animation"),A.triggerHandler(y)},stopAll:function(){C.debug("Stopping all animation"),C.remove.queueCallback(),A.triggerHandler(y)},clear:{queue:function(){C.debug("Clearing animation queue"),C.remove.queueCallback()}},enable:function(){C.verbose("Starting animation"),A.removeClass(v.disabled)},disable:function(){C.debug("Stopping animation"),A.addClass(v.disabled)},setting:function(e,i){if(C.debug("Changing setting",e,i),n.isPlainObject(e))n.extend(!0,f,e);else{if(i===t)return f[e];f[e]=i}},internal:function(e,i){if(n.isPlainObject(e))n.extend(!0,C,e);else{if(i===t)return C[e];C[e]=i}},debug:function(){f.debug&&(f.performance?C.performance.log(arguments):(C.debug=Function.prototype.bind.call(console.info,console,f.name+":"),C.debug.apply(console,arguments)))},verbose:function(){f.verbose&&f.debug&&(f.performance?C.performance.log(arguments):(C.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),C.verbose.apply(console,arguments)))},error:function(){C.error=Function.prototype.bind.call(console.error,console,f.name+":"),C.error.apply(console,arguments)},performance:{log:function(n){var e,i,t;f.performance&&(e=(new Date).getTime(),t=s||e,i=e-t,s=e,l.push({Name:n[0],Arguments:[].slice.call(n,1)||"",Element:S,"Execution Time":i})),clearTimeout(C.performance.timer),C.performance.timer=setTimeout(C.performance.display,500)},display:function(){var e=f.name+":",i=0;s=!1,clearTimeout(C.performance.timer),n.each(l,function(n,e){i+=e["Execution Time"]}),e+=" "+i+"ms",r&&(e+=" '"+r+"'"),o.length>1&&(e+=" ("+o.length+")"),(console.group!==t||console.table!==t)&&l.length>0&&(console.groupCollapsed(e),console.table?console.table(l):n.each(l,function(n,e){console.log(e.Name+": "+e["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(e,i,o){var r,s,l,u=p;return i=i||d,o=S||o,"string"==typeof e&&u!==t&&(e=e.split(/[\. ]/),r=e.length-1,n.each(e,function(i,a){var o=i!=r?a+e[i+1].charAt(0).toUpperCase()+e[i+1].slice(1):e;if(n.isPlainObject(u[o])&&i!=r)u=u[o];else{if(u[o]!==t)return s=u[o],!1;if(!n.isPlainObject(u[a])||i==r)return u[a]!==t?(s=u[a],!1):!1;u=u[a]}})),n.isFunction(s)?l=s.apply(o,i):s!==t&&(l=s),n.isArray(a)?a.push(l):a!==t?a=[a,l]:l!==t&&(a=l),s!==t?s:!1}},C.initialize()}),a!==t?a:this},n.fn.transition.exists={},n.fn.transition.settings={name:"Transition",debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document);


/*!
 * # Semantic UI 2.2.3 - Dropdown
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.dropdown=function(a){var o,s=e(this),r=e(n),l=s.selector||"",c="ontouchstart"in n.documentElement,u=(new Date).getTime(),d=[],v=arguments[0],m="string"==typeof v,f=[].slice.call(arguments,1);return s.each(function(h){var g,p,b,w,x,C,S,y,A=e.isPlainObject(a)?e.extend(!0,{},e.fn.dropdown.settings,a):e.extend({},e.fn.dropdown.settings),T=A.className,k=A.message,L=A.fields,I=A.keys,D=A.metadata,q=A.namespace,R=A.regExp,O=A.selector,V=A.error,E=A.templates,F="."+q,M="module-"+q,z=e(this),P=e(A.context),H=z.find(O.text),j=z.find(O.search),U=z.find(O.sizer),N=z.find(O.input),K=z.find(O.icon),B=z.prev().find(O.text).length>0?z.prev().find(O.text):z.prev(),W=z.children(O.menu),$=W.find(O.item),Q=!1,Y=!1,G=!1,J=this,X=z.data(M);y={initialize:function(){y.debug("Initializing dropdown",A),y.is.alreadySetup()?y.setup.reference():(y.setup.layout(),y.refreshData(),y.save.defaults(),y.restore.selected(),y.create.id(),y.bind.events(),y.observeChanges(),y.instantiate())},instantiate:function(){y.verbose("Storing instance of dropdown",y),X=y,z.data(M,y)},destroy:function(){y.verbose("Destroying previous dropdown",z),y.remove.tabbable(),z.off(F).removeData(M),W.off(F),r.off(w),y.disconnect.menuObserver(),y.disconnect.selectObserver()},observeChanges:function(){"MutationObserver"in t&&(C=new MutationObserver(y.event.select.mutation),S=new MutationObserver(y.event.menu.mutation),y.debug("Setting up mutation observer",C,S),y.observe.select(),y.observe.menu())},disconnect:{menuObserver:function(){S&&S.disconnect()},selectObserver:function(){C&&C.disconnect()}},observe:{select:function(){y.has.input()&&C.observe(N[0],{childList:!0,subtree:!0})},menu:function(){y.has.menu()&&S.observe(W[0],{childList:!0,subtree:!0})}},create:{id:function(){x=(Math.random().toString(16)+"000000000").substr(2,8),w="."+x,y.verbose("Creating unique id for element",x)},userChoice:function(t){var n,a,o;return!!(t=t||y.get.userValues())&&(t=e.isArray(t)?t:[t],e.each(t,function(t,s){y.get.item(s)===!1&&(o=A.templates.addition(y.add.variables(k.addResult,s)),a=e("<div />").html(o).attr("data-"+D.value,s).attr("data-"+D.text,s).addClass(T.addition).addClass(T.item),A.hideAdditions&&a.addClass(T.hidden),n=n===i?a:n.add(a),y.verbose("Creating user choices for value",s,a))}),n)},userLabels:function(t){var n=y.get.userValues();n&&(y.debug("Adding user labels",n),e.each(n,function(e,t){y.verbose("Adding custom user value"),y.add.label(t,t)}))},menu:function(){W=e("<div />").addClass(T.menu).appendTo(z)},sizer:function(){U=e("<span />").addClass(T.sizer).insertAfter(j)}},search:function(e){e=e!==i?e:y.get.query(),y.verbose("Searching for query",e),y.has.minCharacters(e)?y.filter(e):y.hide()},select:{firstUnfiltered:function(){y.verbose("Selecting first non-filtered element"),y.remove.selectedItem(),$.not(O.unselectable).not(O.addition+O.hidden).eq(0).addClass(T.selected)},nextAvailable:function(e){e=e.eq(0);var t=e.nextAll(O.item).not(O.unselectable).eq(0),n=e.prevAll(O.item).not(O.unselectable).eq(0),i=t.length>0;i?(y.verbose("Moving selection to",t),t.addClass(T.selected)):(y.verbose("Moving selection to",n),n.addClass(T.selected))}},setup:{api:function(){var e={debug:A.debug,urlData:{value:y.get.value(),query:y.get.query()},on:!1};y.verbose("First request, initializing API"),z.api(e)},layout:function(){z.is("select")&&(y.setup.select(),y.setup.returnedObject()),y.has.menu()||y.create.menu(),y.is.search()&&!y.has.search()&&(y.verbose("Adding search input"),j=e("<input />").addClass(T.search).prop("autocomplete","off").insertBefore(H)),y.is.multiple()&&y.is.searchSelection()&&!y.has.sizer()&&y.create.sizer(),A.allowTab&&y.set.tabbable()},select:function(){var t=y.get.selectValues();y.debug("Dropdown initialized on a select",t),z.is("select")&&(N=z),N.parent(O.dropdown).length>0?(y.debug("UI dropdown already exists. Creating dropdown menu only"),z=N.closest(O.dropdown),y.has.menu()||y.create.menu(),W=z.children(O.menu),y.setup.menu(t)):(y.debug("Creating entire dropdown from select"),z=e("<div />").attr("class",N.attr("class")).addClass(T.selection).addClass(T.dropdown).html(E.dropdown(t)).insertBefore(N),N.hasClass(T.multiple)&&N.prop("multiple")===!1&&(y.error(V.missingMultiple),N.prop("multiple",!0)),N.is("[multiple]")&&y.set.multiple(),N.prop("disabled")&&(y.debug("Disabling dropdown"),z.addClass(T.disabled)),N.removeAttr("class").detach().prependTo(z)),y.refresh()},menu:function(e){W.html(E.menu(e,L)),$=W.find(O.item)},reference:function(){y.debug("Dropdown behavior was called on select, replacing with closest dropdown"),z=z.parent(O.dropdown),y.refresh(),y.setup.returnedObject(),m&&(X=y,y.invoke(v))},returnedObject:function(){var e=s.slice(0,h),t=s.slice(h+1);s=e.add(z).add(t)}},refresh:function(){y.refreshSelectors(),y.refreshData()},refreshItems:function(){$=W.find(O.item)},refreshSelectors:function(){y.verbose("Refreshing selector cache"),H=z.find(O.text),j=z.find(O.search),N=z.find(O.input),K=z.find(O.icon),B=z.prev().find(O.text).length>0?z.prev().find(O.text):z.prev(),W=z.children(O.menu),$=W.find(O.item)},refreshData:function(){y.verbose("Refreshing cached metadata"),$.removeData(D.text).removeData(D.value)},clearData:function(){y.verbose("Clearing metadata"),$.removeData(D.text).removeData(D.value),z.removeData(D.defaultText).removeData(D.defaultValue).removeData(D.placeholderText)},toggle:function(){y.verbose("Toggling menu visibility"),y.is.active()?y.hide():y.show()},show:function(t){if(t=e.isFunction(t)?t:function(){},y.can.show()&&!y.is.active()){if(y.debug("Showing dropdown"),!y.has.message()||y.has.maxSelections()||y.has.allResultsFiltered()||y.remove.message(),y.is.allFiltered())return!0;A.onShow.call(J)!==!1&&y.animate.show(function(){y.can.click()&&y.bind.intent(),y.has.menuSearch()&&y.focusSearch(),y.set.visible(),t.call(J)})}},hide:function(t){t=e.isFunction(t)?t:function(){},y.is.active()&&(y.debug("Hiding dropdown"),A.onHide.call(J)!==!1&&y.animate.hide(function(){y.remove.visible(),t.call(J)}))},hideOthers:function(){y.verbose("Finding other dropdowns to hide"),s.not(z).has(O.menu+"."+T.visible).dropdown("hide")},hideMenu:function(){y.verbose("Hiding menu  instantaneously"),y.remove.active(),y.remove.visible(),W.transition("hide")},hideSubMenus:function(){var e=W.children(O.item).find(O.menu);y.verbose("Hiding sub menus",e),e.transition("hide")},bind:{events:function(){c&&y.bind.touchEvents(),y.bind.keyboardEvents(),y.bind.inputEvents(),y.bind.mouseEvents()},touchEvents:function(){y.debug("Touch device detected binding additional touch events"),y.is.searchSelection()||y.is.single()&&z.on("touchstart"+F,y.event.test.toggle),W.on("touchstart"+F,O.item,y.event.item.mouseenter)},keyboardEvents:function(){y.verbose("Binding keyboard events"),z.on("keydown"+F,y.event.keydown),y.has.search()&&z.on(y.get.inputEvent()+F,O.search,y.event.input),y.is.multiple()&&r.on("keydown"+w,y.event.document.keydown)},inputEvents:function(){y.verbose("Binding input change events"),z.on("change"+F,O.input,y.event.change)},mouseEvents:function(){y.verbose("Binding mouse events"),y.is.multiple()&&z.on("click"+F,O.label,y.event.label.click).on("click"+F,O.remove,y.event.remove.click),y.is.searchSelection()?(z.on("mousedown"+F,y.event.mousedown).on("mouseup"+F,y.event.mouseup).on("mousedown"+F,O.menu,y.event.menu.mousedown).on("mouseup"+F,O.menu,y.event.menu.mouseup).on("click"+F,O.icon,y.event.icon.click).on("focus"+F,O.search,y.event.search.focus).on("click"+F,O.search,y.event.search.focus).on("blur"+F,O.search,y.event.search.blur).on("click"+F,O.text,y.event.text.focus),y.is.multiple()&&z.on("click"+F,y.event.click)):("click"==A.on?z.on("click"+F,O.icon,y.event.icon.click).on("click"+F,y.event.test.toggle):"hover"==A.on?z.on("mouseenter"+F,y.delay.show).on("mouseleave"+F,y.delay.hide):z.on(A.on+F,y.toggle),z.on("mousedown"+F,y.event.mousedown).on("mouseup"+F,y.event.mouseup).on("focus"+F,y.event.focus).on("blur"+F,y.event.blur)),W.on("mouseenter"+F,O.item,y.event.item.mouseenter).on("mouseleave"+F,O.item,y.event.item.mouseleave).on("click"+F,O.item,y.event.item.click)},intent:function(){y.verbose("Binding hide intent event to document"),c&&r.on("touchstart"+w,y.event.test.touch).on("touchmove"+w,y.event.test.touch),r.on("click"+w,y.event.test.hide)}},unbind:{intent:function(){y.verbose("Removing hide intent event from document"),c&&r.off("touchstart"+w).off("touchmove"+w),r.off("click"+w)}},filter:function(e){var t=e!==i?e:y.get.query(),n=function(){y.is.multiple()&&y.filterActive(),y.select.firstUnfiltered(),y.has.allResultsFiltered()?A.onNoResults.call(J,t)?A.allowAdditions?A.hideAdditions&&(y.verbose("User addition with no menu, setting empty style"),y.set.empty(),y.hideMenu()):(y.verbose("All items filtered, showing message",t),y.add.message(k.noResults)):(y.verbose("All items filtered, hiding dropdown",t),y.hideMenu()):(y.remove.empty(),y.remove.message()),A.allowAdditions&&y.add.userSuggestion(e),y.is.searchSelection()&&y.can.show()&&y.is.focusedOnSearch()&&y.show()};A.useLabels&&y.has.maxSelections()||(A.apiSettings?y.can.useAPI()?y.queryRemote(t,function(){n()}):y.error(V.noAPI):(y.filterItems(t),n()))},queryRemote:function(t,n){var i={errorDuration:!1,cache:"local",throttle:A.throttle,urlData:{query:t},onError:function(){y.add.message(k.serverError),n()},onFailure:function(){y.add.message(k.serverError),n()},onSuccess:function(e){y.remove.message(),y.setup.menu({values:e[L.remoteValues]}),n()}};z.api("get request")||y.setup.api(),i=e.extend(!0,{},i,A.apiSettings),z.api("setting",i).api("query")},filterItems:function(t){var n=t!==i?t:y.get.query(),a=null,o=y.escape.regExp(n),s=new RegExp("^"+o,"igm");y.has.query()&&(a=[],y.verbose("Searching for matching values",n),$.each(function(){var t,i,o=e(this);if("both"==A.match||"text"==A.match){if(t=String(y.get.choiceText(o,!1)),t.search(s)!==-1)return a.push(this),!0;if("exact"===A.fullTextSearch&&y.exactSearch(n,t))return a.push(this),!0;if(A.fullTextSearch===!0&&y.fuzzySearch(n,t))return a.push(this),!0}if("both"==A.match||"value"==A.match){if(i=String(y.get.choiceValue(o,t)),i.search(s)!==-1)return a.push(this),!0;if(A.fullTextSearch&&y.fuzzySearch(n,i))return a.push(this),!0}})),y.debug("Showing only matched items",n),y.remove.filteredItem(),a&&$.not(a).addClass(T.filtered)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if(e=e.toLowerCase(),t=t.toLowerCase(),i>n)return!1;if(i===n)return e===t;e:for(var a=0,o=0;a<i;a++){for(var s=e.charCodeAt(a);o<n;)if(t.charCodeAt(o++)===s)continue e;return!1}return!0},exactSearch:function(e,t){return e=e.toLowerCase(),t=t.toLowerCase(),t.indexOf(e)>-1},filterActive:function(){A.useLabels&&$.filter("."+T.active).addClass(T.filtered)},focusSearch:function(e){y.has.search()&&!y.is.focusedOnSearch()&&(e?(z.off("focus"+F,O.search),j.focus(),z.on("focus"+F,O.search,y.event.search.focus)):j.focus())},forceSelection:function(){var e=$.not(T.filtered).filter("."+T.selected).eq(0),t=$.not(T.filtered).filter("."+T.active).eq(0),n=e.length>0?e:t,i=n.length>0;return i?(y.debug("Forcing partial selection to selected item",n),void y.event.item.click.call(n,{},!0)):void(A.allowAdditions?(y.set.selected(y.get.query()),y.remove.searchTerm()):y.remove.searchTerm())},event:{change:function(){G||(y.debug("Input changed, updating selection"),y.set.selected())},focus:function(){A.showOnFocus&&!Q&&y.is.hidden()&&!p&&y.show()},blur:function(e){p=n.activeElement===this,Q||p||(y.remove.activeLabel(),y.hide())},mousedown:function(){y.is.searchSelection()?b=!0:Q=!0},mouseup:function(){y.is.searchSelection()?b=!1:Q=!1},click:function(t){var n=e(t.target);n.is(z)&&(y.is.focusedOnSearch()?y.show():y.focusSearch())},search:{focus:function(){Q=!0,y.is.multiple()&&y.remove.activeLabel(),A.showOnFocus&&y.search()},blur:function(e){p=n.activeElement===this,b||Y||p||(A.forceSelection&&y.forceSelection(),y.hide()),b=!1}},icon:{click:function(e){y.toggle()}},text:{focus:function(e){Q=!0,y.focusSearch()}},input:function(e){(y.is.multiple()||y.is.searchSelection())&&y.set.filtered(),clearTimeout(y.timer),y.timer=setTimeout(y.search,A.delay.search)},label:{click:function(t){var n=e(this),i=z.find(O.label),a=i.filter("."+T.active),o=n.nextAll("."+T.active),s=n.prevAll("."+T.active),r=o.length>0?n.nextUntil(o).add(a).add(n):n.prevUntil(s).add(a).add(n);t.shiftKey?(a.removeClass(T.active),r.addClass(T.active)):t.ctrlKey?n.toggleClass(T.active):(a.removeClass(T.active),n.addClass(T.active)),A.onLabelSelect.apply(this,i.filter("."+T.active))}},remove:{click:function(){var t=e(this).parent();t.hasClass(T.active)?y.remove.activeLabels():y.remove.activeLabels(t)}},test:{toggle:function(e){var t=y.is.multiple()?y.show:y.toggle;y.is.bubbledLabelClick(e)||y.is.bubbledIconClick(e)||y.determine.eventOnElement(e,t)&&e.preventDefault()},touch:function(e){y.determine.eventOnElement(e,function(){"touchstart"==e.type?y.timer=setTimeout(function(){y.hide()},A.delay.touch):"touchmove"==e.type&&clearTimeout(y.timer)}),e.stopPropagation()},hide:function(e){y.determine.eventInModule(e,y.hide)}},select:{mutation:function(e){y.debug("<select> modified, recreating menu"),y.setup.select()}},menu:{mutation:function(t){var n=t[0],i=e(n.addedNodes?n.addedNodes[0]:!1),a=e(n.removedNodes?n.removedNodes[0]:!1),o=i.add(a),s=o.is(O.addition)||o.closest(O.addition).length>0,r=o.is(O.message)||o.closest(O.message).length>0;s||r?(y.debug("Updating item selector cache"),y.refreshItems()):(y.debug("Menu modified, updating selector cache"),y.refresh())},mousedown:function(){Y=!0},mouseup:function(){Y=!1}},item:{mouseenter:function(t){var n=e(t.target),i=e(this),a=i.children(O.menu),o=i.siblings(O.item).children(O.menu),s=a.length>0,r=a.find(n).length>0;!r&&s&&(clearTimeout(y.itemTimer),y.itemTimer=setTimeout(function(){y.verbose("Showing sub-menu",a),e.each(o,function(){y.animate.hide(!1,e(this))}),y.animate.show(!1,a)},A.delay.show),t.preventDefault())},mouseleave:function(t){var n=e(this).children(O.menu);n.length>0&&(clearTimeout(y.itemTimer),y.itemTimer=setTimeout(function(){y.verbose("Hiding sub-menu",n),y.animate.hide(!1,n)},A.delay.hide))},click:function(t,n){var i=e(this),a=e(t?t.target:""),o=i.find(O.menu),s=y.get.choiceText(i),r=y.get.choiceValue(i,s),l=o.length>0,c=o.find(a).length>0;c||l&&!A.allowCategorySelection||(y.is.searchSelection()&&(A.allowAdditions&&y.remove.userAddition(),y.remove.searchTerm(),y.is.focusedOnSearch()||1==n||y.focusSearch(!0)),A.useLabels||(y.remove.filteredItem(),y.set.scrollPosition(i)),y.determine.selectAction.call(this,s,r))}},document:{keydown:function(e){var t=e.which,n=y.is.inObject(t,I);if(n){var i=z.find(O.label),a=i.filter("."+T.active),o=(a.data(D.value),i.index(a)),s=i.length,r=a.length>0,l=a.length>1,c=0===o,u=o+1==s,d=y.is.searchSelection(),v=y.is.focusedOnSearch(),m=y.is.focused(),f=v&&0===y.get.caretPosition();if(d&&!r&&!v)return;t==I.leftArrow?!m&&!f||r?r&&(e.shiftKey?y.verbose("Adding previous label to selection"):(y.verbose("Selecting previous label"),i.removeClass(T.active)),c&&!l?a.addClass(T.active):a.prev(O.siblingLabel).addClass(T.active).end(),e.preventDefault()):(y.verbose("Selecting previous label"),i.last().addClass(T.active)):t==I.rightArrow?(m&&!r&&i.first().addClass(T.active),r&&(e.shiftKey?y.verbose("Adding next label to selection"):(y.verbose("Selecting next label"),i.removeClass(T.active)),u?d?v?i.removeClass(T.active):y.focusSearch():l?a.next(O.siblingLabel).addClass(T.active):a.addClass(T.active):a.next(O.siblingLabel).addClass(T.active),e.preventDefault())):t==I.deleteKey||t==I.backspace?r?(y.verbose("Removing active labels"),u&&d&&!v&&y.focusSearch(),a.last().next(O.siblingLabel).addClass(T.active),y.remove.activeLabels(a),e.preventDefault()):f&&!r&&t==I.backspace&&(y.verbose("Removing last label on input backspace"),a=i.last().addClass(T.active),y.remove.activeLabels(a)):a.removeClass(T.active)}}},keydown:function(e){var t=e.which,n=y.is.inObject(t,I);if(n){var i,a,o=$.not(O.unselectable).filter("."+T.selected).eq(0),s=W.children("."+T.active).eq(0),r=o.length>0?o:s,l=r.length>0?r.siblings(":not(."+T.filtered+")").addBack():W.children(":not(."+T.filtered+")"),c=r.children(O.menu),u=r.closest(O.menu),d=u.hasClass(T.visible)||u.hasClass(T.animating)||u.parent(O.menu).length>0,v=c.length>0,m=r.length>0,f=r.not(O.unselectable).length>0,h=t==I.delimiter&&A.allowAdditions&&y.is.multiple(),g=A.allowAdditions&&A.hideAdditions&&(t==I.enter||h)&&f;if(g&&(y.verbose("Selecting item from keyboard shortcut",r),y.event.item.click.call(r,e),y.is.searchSelection()&&y.remove.searchTerm()),y.is.visible()){if((t==I.enter||h)&&(t==I.enter&&m&&v&&!A.allowCategorySelection?(y.verbose("Pressed enter on unselectable category, opening sub menu"),t=I.rightArrow):f&&(y.verbose("Selecting item from keyboard shortcut",r),y.event.item.click.call(r,e),y.is.searchSelection()&&y.remove.searchTerm()),e.preventDefault()),m&&(t==I.leftArrow&&(a=u[0]!==W[0],a&&(y.verbose("Left key pressed, closing sub-menu"),y.animate.hide(!1,u),r.removeClass(T.selected),u.closest(O.item).addClass(T.selected),e.preventDefault())),t==I.rightArrow&&v&&(y.verbose("Right key pressed, opening sub-menu"),y.animate.show(!1,c),r.removeClass(T.selected),c.find(O.item).eq(0).addClass(T.selected),e.preventDefault())),t==I.upArrow){if(i=m&&d?r.prevAll(O.item+":not("+O.unselectable+")").eq(0):$.eq(0),l.index(i)<0)return y.verbose("Up key pressed but reached top of current menu"),void e.preventDefault();y.verbose("Up key pressed, changing active item"),r.removeClass(T.selected),i.addClass(T.selected),y.set.scrollPosition(i),A.selectOnKeydown&&y.is.single()&&y.set.selectedItem(i),e.preventDefault()}if(t==I.downArrow){if(i=m&&d?i=r.nextAll(O.item+":not("+O.unselectable+")").eq(0):$.eq(0),0===i.length)return y.verbose("Down key pressed but reached bottom of current menu"),void e.preventDefault();y.verbose("Down key pressed, changing active item"),$.removeClass(T.selected),i.addClass(T.selected),y.set.scrollPosition(i),A.selectOnKeydown&&y.is.single()&&y.set.selectedItem(i),e.preventDefault()}t==I.pageUp&&(y.scrollPage("up"),e.preventDefault()),t==I.pageDown&&(y.scrollPage("down"),e.preventDefault()),t==I.escape&&(y.verbose("Escape key pressed, closing dropdown"),y.hide())}else h&&e.preventDefault(),t!=I.downArrow||y.is.visible()||(y.verbose("Down key pressed, showing dropdown"),y.select.firstUnfiltered(),y.show(),e.preventDefault())}else y.has.search()||y.set.selectedLetter(String.fromCharCode(t))}},trigger:{change:function(){var e=n.createEvent("HTMLEvents"),t=N[0];t&&(y.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},determine:{selectAction:function(t,n){y.verbose("Determining action",A.action),e.isFunction(y.action[A.action])?(y.verbose("Triggering preset action",A.action,t,n),y.action[A.action].call(J,t,n,this)):e.isFunction(A.action)?(y.verbose("Triggering user action",A.action,t,n),A.action.call(J,t,n,this)):y.error(V.action,A.action)},eventInModule:function(t,i){var a=e(t.target),o=a.closest(n.documentElement).length>0,s=a.closest(z).length>0;return i=e.isFunction(i)?i:function(){},o&&!s?(y.verbose("Triggering event",i),i(),!0):(y.verbose("Event occurred in dropdown, canceling callback"),!1)},eventOnElement:function(t,i){var a=e(t.target),o=a.closest(O.siblingLabel),s=n.body.contains(t.target),r=0===z.find(o).length,l=0===a.closest(W).length;return i=e.isFunction(i)?i:function(){},s&&r&&l?(y.verbose("Triggering event",i),i(),!0):(y.verbose("Event occurred in dropdown menu, canceling callback"),!1)}},action:{nothing:function(){},activate:function(t,n,a){if(n=n!==i?n:t,y.can.activate(e(a))){if(y.set.selected(n,e(a)),y.is.multiple()&&!y.is.allFiltered())return;y.hideAndClear()}},select:function(t,n,a){if(n=n!==i?n:t,y.can.activate(e(a))){if(y.set.value(n,e(a)),y.is.multiple()&&!y.is.allFiltered())return;y.hideAndClear()}},combo:function(t,n,a){n=n!==i?n:t,y.set.selected(n,e(a)),y.hideAndClear()},hide:function(e,t,n){y.set.value(t,e),y.hideAndClear()}},get:{id:function(){return x},defaultText:function(){return z.data(D.defaultText)},defaultValue:function(){return z.data(D.defaultValue)},placeholderText:function(){return z.data(D.placeholderText)||""},text:function(){return H.text()},query:function(){return e.trim(j.val())},searchWidth:function(e){return e=e!==i?e:j.val(),U.text(e),Math.ceil(U.width()+1)},selectionCount:function(){var t,n=y.get.values();return t=y.is.multiple()?e.isArray(n)?n.length:0:""!==y.get.value()?1:0},transition:function(e){return"auto"==A.transition?y.is.upward(e)?"slide up":"slide down":A.transition},userValues:function(){var t=y.get.values();return!!t&&(t=e.isArray(t)?t:[t],e.grep(t,function(e){return y.get.item(e)===!1}))},uniqueArray:function(t){return e.grep(t,function(n,i){return e.inArray(n,t)===i})},caretPosition:function(){var e,t,i=j.get(0);return"selectionStart"in i?i.selectionStart:n.selection?(i.focus(),e=n.selection.createRange(),t=e.text.length,e.moveStart("character",-i.value.length),e.text.length-t):void 0},value:function(){var t=N.length>0?N.val():z.data(D.value),n=e.isArray(t)&&1===t.length&&""===t[0];return t===i||n?"":t},values:function(){var e=y.get.value();return""===e?"":!y.has.selectInput()&&y.is.multiple()?"string"==typeof e?e.split(A.delimiter):"":e},remoteValues:function(){var t=y.get.values(),n=!1;return t&&("string"==typeof t&&(t=[t]),e.each(t,function(e,t){var i=y.read.remoteData(t);y.verbose("Restoring value from session data",i,t),i&&(n||(n={}),n[t]=i)})),n},choiceText:function(t,n){if(n=n!==i?n:A.preserveHTML,t)return t.find(O.menu).length>0&&(y.verbose("Retrieving text of element with sub-menu"),t=t.clone(),t.find(O.menu).remove(),t.find(O.menuIcon).remove()),t.data(D.text)!==i?t.data(D.text):n?e.trim(t.html()):e.trim(t.text())},choiceValue:function(t,n){return n=n||y.get.choiceText(t),!!t&&(t.data(D.value)!==i?String(t.data(D.value)):"string"==typeof n?e.trim(n.toLowerCase()):String(n))},inputEvent:function(){var e=j[0];return!!e&&(e.oninput!==i?"input":e.onpropertychange!==i?"propertychange":"keyup")},selectValues:function(){var t={};return t.values=[],z.find("option").each(function(){var n=e(this),a=n.html(),o=n.attr("disabled"),s=n.attr("value")!==i?n.attr("value"):a;"auto"===A.placeholder&&""===s?t.placeholder=a:t.values.push({name:a,value:s,disabled:o})}),A.placeholder&&"auto"!==A.placeholder&&(y.debug("Setting placeholder value to",A.placeholder),t.placeholder=A.placeholder),A.sortSelect?(t.values.sort(function(e,t){return e.name>t.name?1:-1}),y.debug("Retrieved and sorted values from select",t)):y.debug("Retrieved values from select",t),t},activeItem:function(){return $.filter("."+T.active)},selectedItem:function(){var e=$.not(O.unselectable).filter("."+T.selected);return e.length>0?e:$.eq(0)},itemWithAdditions:function(e){var t=y.get.item(e),n=y.create.userChoice(e),i=n&&n.length>0;return i&&(t=t.length>0?t.add(n):n),t},item:function(t,n){var a,o,s=!1;return t=t!==i?t:y.get.values()!==i?y.get.values():y.get.text(),a=o?t.length>0:t!==i&&null!==t,o=y.is.multiple()&&e.isArray(t),n=""===t||0===t||(n||!1),a&&$.each(function(){var a=e(this),r=y.get.choiceText(a),l=y.get.choiceValue(a,r);if(null!==l&&l!==i)if(o)e.inArray(String(l),t)===-1&&e.inArray(r,t)===-1||(s=s?s.add(a):a);else if(n){if(y.verbose("Ambiguous dropdown value using strict type check",a,t),l===t||r===t)return s=a,!0}else if(String(l)==String(t)||r==t)return y.verbose("Found select item by value",l,t),s=a,!0}),s}},check:{maxSelections:function(e){return!A.maxSelections||(e=e!==i?e:y.get.selectionCount(),e>=A.maxSelections?(y.debug("Maximum selection count reached"),A.useLabels&&($.addClass(T.filtered),y.add.message(k.maxSelections)),!0):(y.verbose("No longer at maximum selection count"),y.remove.message(),y.remove.filteredItem(),y.is.searchSelection()&&y.filterItems(),!1))}},restore:{defaults:function(){y.clear(),y.restore.defaultText(),y.restore.defaultValue()},defaultText:function(){var e=y.get.defaultText(),t=y.get.placeholderText;e===t?(y.debug("Restoring default placeholder text",e),y.set.placeholderText(e)):(y.debug("Restoring default text",e),y.set.text(e))},placeholderText:function(){y.set.placeholderText()},defaultValue:function(){var e=y.get.defaultValue();e!==i&&(y.debug("Restoring default value",e),""!==e?(y.set.value(e),y.set.selected()):(y.remove.activeItem(),y.remove.selectedItem()))},labels:function(){A.allowAdditions&&(A.useLabels||(y.error(V.labels),A.useLabels=!0),y.debug("Restoring selected values"),y.create.userLabels()),y.check.maxSelections()},selected:function(){y.restore.values(),y.is.multiple()?(y.debug("Restoring previously selected values and labels"),y.restore.labels()):y.debug("Restoring previously selected values")},values:function(){y.set.initialLoad(),A.apiSettings&&A.saveRemoteData&&y.get.remoteValues()?y.restore.remoteValues():y.set.selected(),y.remove.initialLoad()},remoteValues:function(){var t=y.get.remoteValues();y.debug("Recreating selected from session data",t),t&&(y.is.single()?e.each(t,function(e,t){y.set.text(t)}):e.each(t,function(e,t){y.add.label(e,t)}))}},read:{remoteData:function(e){var n;return t.Storage===i?void y.error(V.noStorage):(n=sessionStorage.getItem(e),n!==i&&n)}},save:{defaults:function(){y.save.defaultText(),y.save.placeholderText(),y.save.defaultValue()},defaultValue:function(){var e=y.get.value();y.verbose("Saving default value as",e),z.data(D.defaultValue,e)},defaultText:function(){var e=y.get.text();y.verbose("Saving default text as",e),z.data(D.defaultText,e)},placeholderText:function(){var e;A.placeholder!==!1&&H.hasClass(T.placeholder)&&(e=y.get.text(),y.verbose("Saving placeholder text as",e),z.data(D.placeholderText,e))},remoteData:function(e,n){return t.Storage===i?void y.error(V.noStorage):(y.verbose("Saving remote data to session storage",n,e),void sessionStorage.setItem(n,e))}},clear:function(){y.is.multiple()&&A.useLabels?y.remove.labels():(y.remove.activeItem(),y.remove.selectedItem()),y.set.placeholderText(),y.clearValue()},clearValue:function(){y.set.value("")},scrollPage:function(e,t){var n,i,a,o=t||y.get.selectedItem(),s=o.closest(O.menu),r=s.outerHeight(),l=s.scrollTop(),c=$.eq(0).outerHeight(),u=Math.floor(r/c),d=(s.prop("scrollHeight"),"up"==e?l-c*u:l+c*u),v=$.not(O.unselectable);a="up"==e?v.index(o)-u:v.index(o)+u,n="up"==e?a>=0:a<v.length,i=n?v.eq(a):"up"==e?v.first():v.last(),i.length>0&&(y.debug("Scrolling page",e,i),o.removeClass(T.selected),i.addClass(T.selected),A.selectOnKeydown&&y.is.single()&&y.set.selectedItem(i),s.scrollTop(d))},set:{filtered:function(){var e=y.is.multiple(),t=y.is.searchSelection(),n=e&&t,i=t?y.get.query():"",a="string"==typeof i&&i.length>0,o=y.get.searchWidth(),s=""!==i;e&&a&&(y.verbose("Adjusting input width",o,A.glyphWidth),j.css("width",o)),a||n&&s?(y.verbose("Hiding placeholder text"),H.addClass(T.filtered)):(!e||n&&!s)&&(y.verbose("Showing placeholder text"),H.removeClass(T.filtered))},empty:function(){z.addClass(T.empty)},loading:function(){z.addClass(T.loading)},placeholderText:function(e){e=e||y.get.placeholderText(),y.debug("Setting placeholder text",e),y.set.text(e),H.addClass(T.placeholder)},tabbable:function(){y.has.search()?(y.debug("Added tabindex to searchable dropdown"),j.val("").attr("tabindex",0),W.attr("tabindex",-1)):(y.debug("Added tabindex to dropdown"),z.attr("tabindex")===i&&(z.attr("tabindex",0),W.attr("tabindex",-1)))},initialLoad:function(){y.verbose("Setting initial load"),g=!0},activeItem:function(e){A.allowAdditions&&e.filter(O.addition).length>0?e.addClass(T.filtered):e.addClass(T.active)},partialSearch:function(e){var t=y.get.query().length;j.val(e.substr(0,t))},scrollPosition:function(e,t){var n,a,o,s,r,l,c,u,d,v=5;e=e||y.get.selectedItem(),n=e.closest(O.menu),a=e&&e.length>0,t=t!==i&&t,e&&n.length>0&&a&&(s=e.position().top,n.addClass(T.loading),l=n.scrollTop(),r=n.offset().top,s=e.offset().top,o=l-r+s,t||(c=n.height(),d=l+c<o+v,u=o-v<l),y.debug("Scrolling to active item",o),(t||u||d)&&n.scrollTop(o),n.removeClass(T.loading))},text:function(e){"select"!==A.action&&("combo"==A.action?(y.debug("Changing combo button text",e,B),A.preserveHTML?B.html(e):B.text(e)):(e!==y.get.placeholderText()&&H.removeClass(T.placeholder),y.debug("Changing text",e,H),H.removeClass(T.filtered),A.preserveHTML?H.html(e):H.text(e)))},selectedItem:function(e){var t=y.get.choiceValue(e),n=y.get.choiceText(e,!1);y.debug("Setting user selection to item",e),y.remove.activeItem(),y.set.partialSearch(n),y.set.activeItem(e),y.set.selected(t,e),y.set.text(n)},selectedLetter:function(t){var n,i=$.filter("."+T.selected),a=i.length>0&&y.has.firstLetter(i,t),o=!1;a&&(n=i.nextAll($).eq(0),y.has.firstLetter(n,t)&&(o=n)),o||$.each(function(){if(y.has.firstLetter(e(this),t))return o=e(this),!1}),o&&(y.verbose("Scrolling to next value with letter",t),y.set.scrollPosition(o),i.removeClass(T.selected),o.addClass(T.selected),A.selectOnKeydown&&y.is.single()&&y.set.selectedItem(o))},direction:function(e){"auto"==A.direction?y.is.onScreen(e)?y.remove.upward(e):y.set.upward(e):"upward"==A.direction&&y.set.upward(e)},upward:function(e){var t=e||z;t.addClass(T.upward)},value:function(e,t,n){var a=y.escape.value(e),o=N.length>0,s=(!y.has.value(e),y.get.values()),r=e!==i?String(e):e;if(o){if(!A.allowReselection&&r==s&&(y.verbose("Skipping value update already same value",e,s),!y.is.initialLoad()))return;y.is.single()&&y.has.selectInput()&&y.can.extendSelect()&&(y.debug("Adding user option",e),y.add.optionValue(e)),y.debug("Updating input value",a,s),G=!0,N.val(a),A.fireOnInit===!1&&y.is.initialLoad()?y.debug("Input native change event ignored on initial load"):y.trigger.change(),G=!1}else y.verbose("Storing value in metadata",a,N),a!==s&&z.data(D.value,r);A.fireOnInit===!1&&y.is.initialLoad()?y.verbose("No callback on initial load",A.onChange):A.onChange.call(J,e,t,n)},active:function(){z.addClass(T.active)},multiple:function(){z.addClass(T.multiple)},visible:function(){z.addClass(T.visible)},exactly:function(e,t){y.debug("Setting selected to exact values"),y.clear(),y.set.selected(e,t)},selected:function(t,n){var i=y.is.multiple();n=A.allowAdditions?n||y.get.itemWithAdditions(t):n||y.get.item(t),n&&(y.debug("Setting selected menu item to",n),y.is.multiple()&&y.remove.searchWidth(),y.is.single()?(y.remove.activeItem(),y.remove.selectedItem()):A.useLabels&&y.remove.selectedItem(),n.each(function(){var t=e(this),a=y.get.choiceText(t),o=y.get.choiceValue(t,a),s=t.hasClass(T.filtered),r=t.hasClass(T.active),l=t.hasClass(T.addition),c=i&&1==n.length;i?!r||l?(A.apiSettings&&A.saveRemoteData&&y.save.remoteData(a,o),A.useLabels?(y.add.value(o,a,t),y.add.label(o,a,c),y.set.activeItem(t),y.filterActive(),y.select.nextAvailable(n)):(y.add.value(o,a,t),y.set.text(y.add.variables(k.count)),y.set.activeItem(t))):s||(y.debug("Selected active value, removing label"),y.remove.selected(o)):(A.apiSettings&&A.saveRemoteData&&y.save.remoteData(a,o),y.set.text(a),y.set.value(o,a,t),t.addClass(T.active).addClass(T.selected))}))}},add:{label:function(t,n,i){var a,o=y.is.searchSelection()?j:H,s=y.escape.value(t);return a=e("<a />").addClass(T.label).attr("data-value",s).html(E.label(s,n)),a=A.onLabelCreate.call(a,s,n),y.has.label(t)?void y.debug("Label already exists, skipping",s):(A.label.variation&&a.addClass(A.label.variation),void(i===!0?(y.debug("Animating in label",a),a.addClass(T.hidden).insertBefore(o).transition(A.label.transition,A.label.duration)):(y.debug("Adding selection label",a),a.insertBefore(o))))},message:function(t){var n=W.children(O.message),i=A.templates.message(y.add.variables(t));n.length>0?n.html(i):n=e("<div/>").html(i).addClass(T.message).appendTo(W)},optionValue:function(t){var n=y.escape.value(t),i=N.find('option[value="'+n+'"]'),a=i.length>0;a||(y.disconnect.selectObserver(),y.is.single()&&(y.verbose("Removing previous user addition"),N.find("option."+T.addition).remove()),e("<option/>").prop("value",n).addClass(T.addition).html(t).appendTo(N),
y.verbose("Adding user addition as an <option>",t),y.observe.select())},userSuggestion:function(e){var t,n=W.children(O.addition),i=y.get.item(e),a=i&&i.not(O.addition).length,o=n.length>0;if(!A.useLabels||!y.has.maxSelections()){if(""===e||a)return void n.remove();o?(n.data(D.value,e).data(D.text,e).attr("data-"+D.value,e).attr("data-"+D.text,e).removeClass(T.filtered),A.hideAdditions||(t=A.templates.addition(y.add.variables(k.addResult,e)),n.html(t)),y.verbose("Replacing user suggestion with new value",n)):(n=y.create.userChoice(e),n.prependTo(W),y.verbose("Adding item choice to menu corresponding with user choice addition",n)),A.hideAdditions&&!y.is.allFiltered()||n.addClass(T.selected).siblings().removeClass(T.selected),y.refreshItems()}},variables:function(e,t){var n,i,a=e.search("{count}")!==-1,o=e.search("{maxCount}")!==-1,s=e.search("{term}")!==-1;return y.verbose("Adding templated variables to message",e),a&&(n=y.get.selectionCount(),e=e.replace("{count}",n)),o&&(n=y.get.selectionCount(),e=e.replace("{maxCount}",A.maxSelections)),s&&(i=t||y.get.query(),e=e.replace("{term}",i)),e},value:function(t,n,i){var a,o=y.get.values();return""===t?void y.debug("Cannot select blank values from multiselect"):(e.isArray(o)?(a=o.concat([t]),a=y.get.uniqueArray(a)):a=[t],y.has.selectInput()?y.can.extendSelect()&&(y.debug("Adding value to select",t,a,N),y.add.optionValue(t)):(a=a.join(A.delimiter),y.debug("Setting hidden input to delimited value",a,N)),A.fireOnInit===!1&&y.is.initialLoad()?y.verbose("Skipping onadd callback on initial load",A.onAdd):A.onAdd.call(J,t,n,i),y.set.value(a,t,n,i),void y.check.maxSelections())}},remove:{active:function(){z.removeClass(T.active)},activeLabel:function(){z.find(O.label).removeClass(T.active)},empty:function(){z.removeClass(T.empty)},loading:function(){z.removeClass(T.loading)},initialLoad:function(){g=!1},upward:function(e){var t=e||z;t.removeClass(T.upward)},visible:function(){z.removeClass(T.visible)},activeItem:function(){$.removeClass(T.active)},filteredItem:function(){A.useLabels&&y.has.maxSelections()||(A.useLabels&&y.is.multiple()?$.not("."+T.active).removeClass(T.filtered):$.removeClass(T.filtered),y.remove.empty())},optionValue:function(e){var t=y.escape.value(e),n=N.find('option[value="'+t+'"]'),i=n.length>0;i&&n.hasClass(T.addition)&&(C&&(C.disconnect(),y.verbose("Temporarily disconnecting mutation observer")),n.remove(),y.verbose("Removing user addition as an <option>",t),C&&C.observe(N[0],{childList:!0,subtree:!0}))},message:function(){W.children(O.message).remove()},searchWidth:function(){j.css("width","")},searchTerm:function(){y.verbose("Cleared search term"),j.val(""),y.set.filtered()},userAddition:function(){$.filter(O.addition).remove()},selected:function(t,n){return!!(n=A.allowAdditions?n||y.get.itemWithAdditions(t):n||y.get.item(t))&&void n.each(function(){var t=e(this),n=y.get.choiceText(t),i=y.get.choiceValue(t,n);y.is.multiple()?A.useLabels?(y.remove.value(i,n,t),y.remove.label(i)):(y.remove.value(i,n,t),0===y.get.selectionCount()?y.set.placeholderText():y.set.text(y.add.variables(k.count))):y.remove.value(i,n,t),t.removeClass(T.filtered).removeClass(T.active),A.useLabels&&t.removeClass(T.selected)})},selectedItem:function(){$.removeClass(T.selected)},value:function(e,t,n){var i,a=y.get.values();y.has.selectInput()?(y.verbose("Input is <select> removing selected option",e),i=y.remove.arrayValue(e,a),y.remove.optionValue(e)):(y.verbose("Removing from delimited values",e),i=y.remove.arrayValue(e,a),i=i.join(A.delimiter)),A.fireOnInit===!1&&y.is.initialLoad()?y.verbose("No callback on initial load",A.onRemove):A.onRemove.call(J,e,t,n),y.set.value(i,t,n),y.check.maxSelections()},arrayValue:function(t,n){return e.isArray(n)||(n=[n]),n=e.grep(n,function(e){return t!=e}),y.verbose("Removed value from delimited string",t,n),n},label:function(e,t){var n=z.find(O.label),i=n.filter('[data-value="'+e+'"]');y.verbose("Removing label",i),i.remove()},activeLabels:function(e){e=e||z.find(O.label).filter("."+T.active),y.verbose("Removing active label selections",e),y.remove.labels(e)},labels:function(t){t=t||z.find(O.label),y.verbose("Removing labels",t),t.each(function(){var t=e(this),n=t.data(D.value),a=n!==i?String(n):n,o=y.is.userValue(a);return A.onLabelRemove.call(t,n)===!1?void y.debug("Label remove callback cancelled removal"):(y.remove.message(),void(o?(y.remove.value(a),y.remove.label(a)):y.remove.selected(a)))})},tabbable:function(){y.has.search()?(y.debug("Searchable dropdown initialized"),j.removeAttr("tabindex"),W.removeAttr("tabindex")):(y.debug("Simple selection dropdown initialized"),z.removeAttr("tabindex"),W.removeAttr("tabindex"))}},has:{menuSearch:function(){return y.has.search()&&j.closest(W).length>0},search:function(){return j.length>0},sizer:function(){return U.length>0},selectInput:function(){return N.is("select")},minCharacters:function(e){return!A.minCharacters||(e=e!==i?String(e):String(y.get.query()),e.length>=A.minCharacters)},firstLetter:function(e,t){var n,i;return!(!e||0===e.length||"string"!=typeof t)&&(n=y.get.choiceText(e,!1),t=t.toLowerCase(),i=String(n).charAt(0).toLowerCase(),t==i)},input:function(){return N.length>0},items:function(){return $.length>0},menu:function(){return W.length>0},message:function(){return 0!==W.children(O.message).length},label:function(e){var t=y.escape.value(e),n=z.find(O.label);return n.filter('[data-value="'+t+'"]').length>0},maxSelections:function(){return A.maxSelections&&y.get.selectionCount()>=A.maxSelections},allResultsFiltered:function(){var e=$.not(O.addition);return e.filter(O.unselectable).length===e.length},userSuggestion:function(){return W.children(O.addition).length>0},query:function(){return""!==y.get.query()},value:function(t){var n=y.get.values(),i=e.isArray(n)?n&&e.inArray(t,n)!==-1:n==t;return!!i}},is:{active:function(){return z.hasClass(T.active)},bubbledLabelClick:function(t){return e(t.target).is("select, input")&&z.closest("label").length>0},bubbledIconClick:function(t){return e(t.target).closest(K).length>0},alreadySetup:function(){return z.is("select")&&z.parent(O.dropdown).length>0&&0===z.prev().length},animating:function(e){return e?e.transition&&e.transition("is animating"):W.transition&&W.transition("is animating")},disabled:function(){return z.hasClass(T.disabled)},focused:function(){return n.activeElement===z[0]},focusedOnSearch:function(){return n.activeElement===j[0]},allFiltered:function(){return(y.is.multiple()||y.has.search())&&!(0==A.hideAdditions&&y.has.userSuggestion())&&!y.has.message()&&y.has.allResultsFiltered()},hidden:function(e){return!y.is.visible(e)},initialLoad:function(){return g},onScreen:function(e){var t,n=e||W,i=!0,a={};return n.addClass(T.loading),t={context:{scrollTop:P.scrollTop(),height:P.outerHeight()},menu:{offset:n.offset(),height:n.outerHeight()}},a={above:t.context.scrollTop<=t.menu.offset.top-t.menu.height,below:t.context.scrollTop+t.context.height>=t.menu.offset.top+t.menu.height},a.below?(y.verbose("Dropdown can fit in context downward",a),i=!0):a.below||a.above?(y.verbose("Dropdown cannot fit below, opening upward",a),i=!1):(y.verbose("Dropdown cannot fit in either direction, favoring downward",a),i=!0),n.removeClass(T.loading),i},inObject:function(t,n){var i=!1;return e.each(n,function(e,n){if(n==t)return i=!0,!0}),i},multiple:function(){return z.hasClass(T.multiple)},single:function(){return!y.is.multiple()},selectMutation:function(t){var n=!1;return e.each(t,function(t,i){if(i.target&&e(i.target).is("select"))return n=!0,!0}),n},search:function(){return z.hasClass(T.search)},searchSelection:function(){return y.has.search()&&1===j.parent(O.dropdown).length},selection:function(){return z.hasClass(T.selection)},userValue:function(t){return e.inArray(t,y.get.userValues())!==-1},upward:function(e){var t=e||z;return t.hasClass(T.upward)},visible:function(e){return e?e.hasClass(T.visible):W.hasClass(T.visible)}},can:{activate:function(e){return!!A.useLabels||(!y.has.maxSelections()||!(!y.has.maxSelections()||!e.hasClass(T.active)))},click:function(){return c||"click"==A.on},extendSelect:function(){return A.allowAdditions||A.apiSettings},show:function(){return!y.is.disabled()&&(y.has.items()||y.has.message())},useAPI:function(){return e.fn.api!==i}},animate:{show:function(t,n){var a,o=n||W,s=n?function(){}:function(){y.hideSubMenus(),y.hideOthers(),y.set.active()};t=e.isFunction(t)?t:function(){},y.verbose("Doing menu show animation",o),y.set.direction(n),a=y.get.transition(n),y.is.selection()&&y.set.scrollPosition(y.get.selectedItem(),!0),(y.is.hidden(o)||y.is.animating(o))&&("none"==a?(s(),o.transition("show"),t.call(J)):e.fn.transition!==i&&z.transition("is supported")?o.transition({animation:a+" in",debug:A.debug,verbose:A.verbose,duration:A.duration,queue:!0,onStart:s,onComplete:function(){t.call(J)}}):y.error(V.noTransition,a))},hide:function(t,n){var a=n||W,o=(n?.9*A.duration:A.duration,n?function(){}:function(){y.can.click()&&y.unbind.intent(),y.remove.active()}),s=y.get.transition(n);t=e.isFunction(t)?t:function(){},(y.is.visible(a)||y.is.animating(a))&&(y.verbose("Doing menu hide animation",a),"none"==s?(o(),a.transition("hide"),t.call(J)):e.fn.transition!==i&&z.transition("is supported")?a.transition({animation:s+" out",duration:A.duration,debug:A.debug,verbose:A.verbose,queue:!0,onStart:o,onComplete:function(){"auto"==A.direction&&y.remove.upward(n),t.call(J)}}):y.error(V.transition))}},hideAndClear:function(){y.remove.searchTerm(),y.has.maxSelections()||(y.has.search()?y.hide(function(){y.remove.filteredItem()}):y.hide())},delay:{show:function(){y.verbose("Delaying show event to ensure user intent"),clearTimeout(y.timer),y.timer=setTimeout(y.show,A.delay.show)},hide:function(){y.verbose("Delaying hide event to ensure user intent"),clearTimeout(y.timer),y.timer=setTimeout(y.hide,A.delay.hide)}},escape:{value:function(t){var n=e.isArray(t),i="string"==typeof t,a=!i&&!n,o=i&&t.search(R.quote)!==-1,s=[];return y.has.selectInput()&&!a&&o?(y.debug("Encoding quote values for use in select",t),n?(e.each(t,function(e,t){s.push(t.replace(R.quote,"&quot;"))}),s):t.replace(R.quote,"&quot;")):t},regExp:function(e){return e=String(e),e.replace(R.escape,"\\$&")}},setting:function(t,n){if(y.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,A,t);else{if(n===i)return A[t];e.isPlainObject(A[t])?e.extend(!0,A[t],n):A[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,y,t);else{if(n===i)return y[t];y[t]=n}},debug:function(){!A.silent&&A.debug&&(A.performance?y.performance.log(arguments):(y.debug=Function.prototype.bind.call(console.info,console,A.name+":"),y.debug.apply(console,arguments)))},verbose:function(){!A.silent&&A.verbose&&A.debug&&(A.performance?y.performance.log(arguments):(y.verbose=Function.prototype.bind.call(console.info,console,A.name+":"),y.verbose.apply(console,arguments)))},error:function(){A.silent||(y.error=Function.prototype.bind.call(console.error,console,A.name+":"),y.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;A.performance&&(t=(new Date).getTime(),i=u||t,n=t-i,u=t,d.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:J,"Execution Time":n})),clearTimeout(y.performance.timer),y.performance.timer=setTimeout(y.performance.display,500)},display:function(){var t=A.name+":",n=0;u=!1,clearTimeout(y.performance.timer),e.each(d,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",l&&(t+=" '"+l+"'"),(console.group!==i||console.table!==i)&&d.length>0&&(console.groupCollapsed(t),console.table?console.table(d):e.each(d,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),d=[]}},invoke:function(t,n,a){var s,r,l,c=X;return n=n||f,a=J||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),s=t.length-1,e.each(t,function(n,a){var o=n!=s?a+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[o])&&n!=s)c=c[o];else{if(c[o]!==i)return r=c[o],!1;if(!e.isPlainObject(c[a])||n==s)return c[a]!==i?(r=c[a],!1):(y.error(V.method,t),!1);c=c[a]}})),e.isFunction(r)?l=r.apply(a,n):r!==i&&(l=r),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),r}},m?(X===i&&y.initialize(),y.invoke(v)):(X!==i&&X.invoke("destroy"),y.initialize())}),o!==i?o:s},e.fn.dropdown.settings={silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",action:"activate",apiSettings:!1,selectOnKeydown:!0,minCharacters:0,saveRemoteData:!0,throttle:200,context:t,direction:"auto",keepOnScreen:!0,match:"both",fullTextSearch:!1,placeholder:"auto",preserveHTML:!0,sortSelect:!1,forceSelection:!0,allowAdditions:!1,hideAdditions:!0,maxSelections:!1,useLabels:!0,delimiter:",",showOnFocus:!0,allowReselection:!1,allowTab:!0,allowCategorySelection:!1,fireOnInit:!1,transition:"auto",duration:200,glyphWidth:1.037,label:{transition:"scale",duration:200,variation:!1},delay:{hide:300,show:200,search:20,touch:50},onChange:function(e,t,n){},onAdd:function(e,t,n){},onRemove:function(e,t,n){},onLabelSelect:function(e){},onLabelCreate:function(t,n){return e(this)},onLabelRemove:function(e){return!0},onNoResults:function(e){return!0},onShow:function(){},onHide:function(){},name:"Dropdown",namespace:"dropdown",message:{addResult:"Add <b>{term}</b>",count:"{count} selected",maxSelections:"Max {maxCount} selections",noResults:"No results found.",serverError:"There was an error contacting the server"},error:{action:"You called a dropdown action that was not defined",alreadySetup:"Once a select has been initialized behaviors must be called on the created ui dropdown",labels:"Allowing user additions currently requires the use of labels.",missingMultiple:"<select> requires multiple property to be set to correctly preserve multiple values",method:"The method you called is not defined.",noAPI:"The API module is required to load resources remotely",noStorage:"Saving remote data requires session storage",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s]/g,quote:/"/g},metadata:{defaultText:"defaultText",defaultValue:"defaultValue",placeholderText:"placeholder",text:"text",value:"value"},fields:{remoteValues:"results",values:"values",disabled:"disabled",name:"name",value:"value",text:"text"},keys:{backspace:8,delimiter:188,deleteKey:46,enter:13,escape:27,pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},selector:{addition:".addition",dropdown:".ui.dropdown",hidden:".hidden",icon:"> .dropdown.icon",input:'> input[type="hidden"], > select',item:".item",label:"> .label",remove:"> .label > .delete.icon",siblingLabel:".label",menu:".menu",message:".message",menuIcon:".dropdown.icon",search:"input.search, .menu > .search > input, .menu input.search",sizer:"> input.sizer",text:"> .text:not(.icon)",unselectable:".disabled, .filtered"},className:{active:"active",addition:"addition",animating:"animating",disabled:"disabled",empty:"empty",dropdown:"ui dropdown",filtered:"filtered",hidden:"hidden transition",item:"item",label:"ui label",loading:"loading",menu:"menu",message:"message",multiple:"multiple",placeholder:"default",sizer:"sizer",search:"search",selected:"selected",selection:"selection",upward:"upward",visible:"visible"}},e.fn.dropdown.settings.templates={dropdown:function(t){var n=t.placeholder||!1,i=(t.values||{},"");return i+='<i class="dropdown icon"></i>',i+=t.placeholder?'<div class="default text">'+n+"</div>":'<div class="text"></div>',i+='<div class="menu">',e.each(t.values,function(e,t){i+=t.disabled?'<div class="disabled item" data-value="'+t.value+'">'+t.name+"</div>":'<div class="item" data-value="'+t.value+'">'+t.name+"</div>"}),i+="</div>"},menu:function(t,n){var i=t[n.values]||{},a="";return e.each(i,function(e,t){var i=t[n.text]?'data-text="'+t[n.text]+'"':"",o=t[n.disabled]?"disabled ":"";a+='<div class="'+o+'item" data-value="'+t[n.value]+'"'+i+">",a+=t[n.name],a+="</div>"}),a},label:function(e,t){return t+'<i class="delete icon"></i>'},message:function(e){return e},addition:function(e){return e}}}(jQuery,window,document);
/*!
 * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!function(t,i,e,s){function o(i,e){var h=this;"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this,e)),this.$element=t(i),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var r=(this.position+"").toLowerCase().match(/\S+/g)||[];if(r.length<1&&r.push("center"),1==r.length&&r.push(r[0]),("top"==r[0]||"bottom"==r[0]||"left"==r[1]||"right"==r[1])&&(r=[r[1],r[0]]),this.positionX!=s&&(r[0]=this.positionX.toLowerCase()),this.positionY!=s&&(r[1]=this.positionY.toLowerCase()),h.positionX=r[0],h.positionY=r[1],"left"!=this.positionX&&"right"!=this.positionX&&(this.positionX=isNaN(parseInt(this.positionX))?"center":parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(this.positionY=isNaN(parseInt(this.positionY))?"center":parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/))return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:"url("+this.imageSrc+")",backgroundSize:"cover",backgroundPosition:this.position}),this;this.$mirror=t("<div />").prependTo("body");var a=this.$element.find(">.parallax-slider"),n=!1;0==a.length?this.$slider=t("<img />").prependTo(this.$mirror):(this.$slider=a.prependTo(this.$mirror),n=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){h.naturalHeight&&h.naturalWidth||(h.naturalHeight=this.naturalHeight||this.height||1,h.naturalWidth=this.naturalWidth||this.width||1),h.aspectRatio=h.naturalWidth/h.naturalHeight,o.isSetup||o.setup(),o.sliders.push(h),o.isFresh=!1,o.requestRender()}),n||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||a.length>0)&&this.$slider.trigger("load")}function h(s){return this.each(function(){var h=t(this),r="object"==typeof s&&s;this==i||this==e||h.is("body")?o.configure(r):h.data("px.parallax")?"object"==typeof s&&t.extend(h.data("px.parallax"),r):(r=t.extend({},h.data(),r),h.data("px.parallax",new o(this,r))),"string"==typeof s&&("destroy"==s?o.destroy(this):o[s]())})}!function(){for(var t=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!i.requestAnimationFrame;++s)i.requestAnimationFrame=i[e[s]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[s]+"CancelAnimationFrame"]||i[e[s]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e){var s=(new Date).getTime(),o=Math.max(0,16-(s-t)),h=i.setTimeout(function(){e(s+o)},o);return t=s+o,h}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(o.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t=o.winHeight,i=o.docHeight,e=Math.min(this.boxOffsetTop,i-t),s=Math.max(this.boxOffsetTop+this.boxHeight-t,0),h=this.boxHeight+(e-s)*(1-this.speed)|0,r=(this.boxOffsetTop-e)*(1-this.speed)|0;if(h*this.aspectRatio>=this.boxWidth){this.imageWidth=h*this.aspectRatio|0,this.imageHeight=h,this.offsetBaseTop=r;var a=this.imageWidth-this.boxWidth;this.offsetLeft="left"==this.positionX?0:"right"==this.positionX?-a:isNaN(this.positionX)?-a/2|0:Math.max(this.positionX,-a)}else{this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0;var a=this.imageHeight-h;this.offsetBaseTop="top"==this.positionY?r:"bottom"==this.positionY?r-a:isNaN(this.positionY)?r-a/2|0:r+Math.max(this.positionY,-a)}},render:function(){var t=o.scrollTop,i=o.scrollLeft,e=this.overScrollFix?o.overScroll:0,s=t+o.winHeight;this.boxOffsetBottom>t&&this.boxOffsetTop<=s?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d(0px, 0px, 0px)",visibility:this.visibility,top:this.mirrorTop-e,left:this.mirrorLeft,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d(0px, 0px, 0px)",position:"absolute",top:this.offsetTop,left:this.offsetLeft,height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(o,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){if(!this.isReady){var s=t(e),h=t(i),r=function(){o.winHeight=h.height(),o.winWidth=h.width(),o.docHeight=s.height(),o.docWidth=s.width()},a=function(){var t=h.scrollTop(),i=o.docHeight-o.winHeight,e=o.docWidth-o.winWidth;o.scrollTop=Math.max(0,Math.min(i,t)),o.scrollLeft=Math.max(0,Math.min(e,h.scrollLeft())),o.overScroll=Math.max(t-i,Math.min(t,0))};h.on("resize.px.parallax load.px.parallax",function(){r(),o.isFresh=!1,o.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){a(),o.requestRender()}),r(),a(),this.isReady=!0}},configure:function(i){"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this.prototype,i))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;this.isBusy||(this.isBusy=!0,i.requestAnimationFrame(function(){t.render(),t.isBusy=!1}))},destroy:function(e){var s,h=t(e).data("px.parallax");for(h.$mirror.remove(),s=0;s<this.sliders.length;s+=1)this.sliders[s]==h&&this.sliders.splice(s,1);t(e).data("px.parallax",!1),0===this.sliders.length&&(t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),this.isReady=!1,o.isSetup=!1)}});var r=t.fn.parallax;t.fn.parallax=h,t.fn.parallax.Constructor=o,t.fn.parallax.noConflict=function(){return t.fn.parallax=r,this},t(e).on("ready.px.parallax.data-api",function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document);
!function($){

	"use strict";

	var Typed = function(el, options){

		// chosen element to manipulate text
		this.el = $(el);
		// options
		this.options = $.extend({}, $.fn.typed.defaults, options);

		// text content of element
		this.text = this.el.text();

		// typing speed
		this.typeSpeed = this.options.typeSpeed;

		// add a delay before typing starts
		this.startDelay = this.options.startDelay;

		// amount of time to wait before backspacing
		this.backDelay = this.options.backDelay;

		// input strings of text
		this.strings = this.options.strings;

		// character number position of current string
		this.strPos = 0;

		// current array position
		this.arrayPos = 0;

		// current string based on current values[] array position
		this.string = this.strings[this.arrayPos];

		// number to stop backspacing on.
		// default 0, can change depending on how many chars
		// you want to remove at the time
		this.stopNum = 0;

		// Looping logic
		this.loop = this.options.loop;
		this.loopCount = this.options.loopCount;
		this.curLoop = 1;
		if (this.loop === false){
			// number in which to stop going through array
			// set to strings[] array (length - 1) to stop deleting after last string is typed
			this.stopArray = this.strings.length-1;
		}
		else{
			this.stopArray = this.strings.length;
		}

		// All systems go!
		this.build();
	}

	Typed.prototype =  {

		constructor: Typed

		, init: function(){
			// begin the loop w/ first current string (global self.string)
			// current string will be passed as an argument each time after this
			var self  = this;
			setTimeout(function() {
				// Start typing
				self.typewrite(self.string, self.strPos)
			}, self.startDelay);
		}

		, build: function(){
			// Insert cursor
			//this.el.after("<span id=\"typed-cursor\">|</span>");
			this.init();
		}

		// pass current string state to each function
		, typewrite: function(curString, curStrPos){

			// varying values for setTimeout during typing
			// can't be global since number changes each time loop is executed
			var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
			var self = this;

			// ------------- optional ------------- //
			// backpaces a certain string faster
			// ------------------------------------ //
			// if (self.arrayPos == 1){
			// 	self.backDelay = 50;
			// }
			// else{ self.backDelay = 500; }

			// containg entire typing function in a timeout
			setTimeout(function() {

				// make sure array position is less than array length
				if (self.arrayPos < self.strings.length){

					// start typing each new char into existing string
					// curString is function arg
					// CUSTOM PLACEHOLDER TEXT
					self.el.attr("placeholder", curString.substr(0, curStrPos));

					// check if current character number is the string's length
					// and if the current array position is less than the stopping point
					// if so, backspace after backDelay setting
					if (curStrPos > curString.length && self.arrayPos < self.stopArray){
						clearTimeout(clear);
						var clear = setTimeout(function(){
							self.backspace(curString, curStrPos);
						}, self.backDelay);
					}

					// else, keep typing
					else{
						// add characters one by one
						curStrPos++;
						// loop the function
						self.typewrite(curString, curStrPos);
						// if the array position is at the stopping position
						// finish code, on to next task
						if (self.loop === false){
							if (self.arrayPos === self.stopArray && curStrPos === curString.length){
								// animation that occurs on the last typed string
								// fires callback function
								var clear = self.options.callback();
								clearTimeout(clear);
							}
						}
					}
				}
				// if the array position is greater than array length
				// and looping is active, reset array pos and start over.
				else if (self.loop === true && self.loopCount === false){
					self.arrayPos = 0;
					self.init();
				}
				else if(self.loopCount !== false && self.curLoop < self.loopCount){
					self.arrayPos = 0;
					self.curLoop = self.curLoop+1;
					self.init();
				}

				// humanized value for typing
			}, humanize);

		}

		, backspace: function(curString, curStrPos){

			// varying values for setTimeout during typing
			// can't be global since number changes each time loop is executed
			var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
			var self = this;

			setTimeout(function() {

				// ----- this part is optional ----- //
				// check string array position
				// on the first string, only delete one word
				// the stopNum actually represents the amount of chars to
				// keep in the current string. In my case it's 14.
				// if (self.arrayPos == 1){
				//	self.stopNum = 14;
				// }
				//every other time, delete the whole typed string
				// else{
				//	self.stopNum = 0;
				// }

				// ----- continue important stuff ----- //
				// replace text with current text + typed characters
				// CUSTOM PLACEHOLDER TEXT
				self.el.attr("placeholder", curString.substr(0, curStrPos));

				// if the number (id of character in current string) is
				// less than the stop number, keep going
				if (curStrPos > self.stopNum){
					// subtract characters one by one
					curStrPos--;
					// loop the function
					self.backspace(curString, curStrPos);
				}
				// if the stop number has been reached, increase
				// array position to next string
				else if (curStrPos <= self.stopNum){
					clearTimeout(clear);
					var clear = self.arrayPos = self.arrayPos+1;
					// must pass new array position in this instance
					// instead of using global arrayPos
					self.typewrite(self.strings[self.arrayPos], curStrPos);
				}

				// humanized value for typing
			}, humanize);

		}

	}

	$.fn.typed = function (option) {
		return this.each(function () {
			var $this = $(this)
				, data = $this.data('typed')
				, options = typeof option == 'object' && option
			if (!data) $this.data('typed', (data = new Typed(this, options)))
			if (typeof option == 'string') data[option]()
		});
	}

	$.fn.typed.defaults = {
		strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
		// typing and backspacing speed
		typeSpeed: 0,
		// time before typing starts
		startDelay: 0,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: false,
		// false = infinite
		loopCount: false,
		// ending callback function
		callback: function(){ null }
	}


}(window.jQuery);
/*! nouislider - 9.0.0 - 2016-09-29 21:44:02 */

(function (factory) {

    if ( typeof define === 'function' && define.amd ) {

        // AMD. Register as an anonymous module.
        define([], factory);

    } else if ( typeof exports === 'object' ) {

        // Node/CommonJS
        module.exports = factory();

    } else {

        // Browser globals
        window.noUiSlider = factory();
    }

}(function( ){

    'use strict';


    // Creates a node, adds it to target, returns the new node.
    function addNodeTo ( target, className ) {
        var div = document.createElement('div');
        addClass(div, className);
        target.appendChild(div);
        return div;
    }

    // Removes duplicates from an array.
    function unique ( array ) {
        return array.filter(function(a){
            return !this[a] ? this[a] = true : false;
        }, {});
    }

    // Round a value to the closest 'to'.
    function closest ( value, to ) {
        return Math.round(value / to) * to;
    }

    // Current position of an element relative to the document.
    function offset ( elem, orientation ) {

        var rect = elem.getBoundingClientRect(),
            doc = elem.ownerDocument,
            docElem = doc.documentElement,
            pageOffset = getPageOffset();

        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if ( /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) ) {
            pageOffset.x = 0;
        }

        return orientation ? (rect.top + pageOffset.y - docElem.clientTop) : (rect.left + pageOffset.x - docElem.clientLeft);
    }

    // Checks whether a value is numerical.
    function isNumeric ( a ) {
        return typeof a === 'number' && !isNaN( a ) && isFinite( a );
    }

    // Sets a class and removes it after [duration] ms.
    function addClassFor ( element, className, duration ) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function(){
                removeClass(element, className);
            }, duration);
        }
    }

    // Limits a value to 0 - 100
    function limit ( a ) {
        return Math.max(Math.min(a, 100), 0);
    }

    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray ( a ) {
        return Array.isArray(a) ? a : [a];
    }

    // Counts decimals
    function countDecimals ( numStr ) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }

    // http://youmightnotneedjquery.com/#add_class
    function addClass ( el, className ) {
        if ( el.classList ) {
            el.classList.add(className);
        } else {
            el.className += ' ' + className;
        }
    }

    // http://youmightnotneedjquery.com/#remove_class
    function removeClass ( el, className ) {
        if ( el.classList ) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass ( el, className ) {
        return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className);
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset ( ) {

        var supportPageOffset = window.pageXOffset !== undefined,
            isCSS1Compat = ((document.compatMode || "") === "CSS1Compat"),
            x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
            y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

        return {
            x: x,
            y: y
        };
    }

    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions ( ) {

        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled ? {
            start: 'pointerdown',
            move: 'pointermove',
            end: 'pointerup'
        } : window.navigator.msPointerEnabled ? {
            start: 'MSPointerDown',
            move: 'MSPointerMove',
            end: 'MSPointerUp'
        } : {
            start: 'mousedown touchstart',
            move: 'mousemove touchmove',
            end: 'mouseup touchend'
        };
    }


// Value calculation

    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio ( pa, pb ) {
        return (100 / (pb - pa));
    }

    // (percentage) How many percent is this value of this range?
    function fromPercentage ( range, value ) {
        return (value * 100) / ( range[1] - range[0] );
    }

    // (percentage) Where is this value on this range?
    function toPercentage ( range, value ) {
        return fromPercentage( range, range[0] < 0 ?
        value + Math.abs(range[0]) :
        value - range[0] );
    }

    // (value) How much is this percentage on this range?
    function isPercentage ( range, value ) {
        return ((value * ( range[1] - range[0] )) / 100) + range[0];
    }


// Range conversion

    function getJ ( value, arr ) {

        var j = 1;

        while ( value >= arr[j] ){
            j += 1;
        }

        return j;
    }

    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping ( xVal, xPct, value ) {

        if ( value >= xVal.slice(-1)[0] ){
            return 100;
        }

        var j = getJ( value, xVal ), va, vb, pa, pb;

        va = xVal[j-1];
        vb = xVal[j];
        pa = xPct[j-1];
        pb = xPct[j];

        return pa + (toPercentage([va, vb], value) / subRangeRatio (pa, pb));
    }

    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping ( xVal, xPct, value ) {

        // There is no range group that fits 100
        if ( value >= 100 ){
            return xVal.slice(-1)[0];
        }

        var j = getJ( value, xPct ), va, vb, pa, pb;

        va = xVal[j-1];
        vb = xVal[j];
        pa = xPct[j-1];
        pb = xPct[j];

        return isPercentage([va, vb], (value - pa) * subRangeRatio (pa, pb));
    }

    // (percentage) Get the step that applies at a certain value.
    function getStep ( xPct, xSteps, snap, value ) {

        if ( value === 100 ) {
            return value;
        }

        var j = getJ( value, xPct ), a, b;

        // If 'snap' is set, steps are used as fixed points on the slider.
        if ( snap ) {

            a = xPct[j-1];
            b = xPct[j];

            // Find the closest position, a or b.
            if ((value - a) > ((b-a)/2)){
                return b;
            }

            return a;
        }

        if ( !xSteps[j-1] ){
            return value;
        }

        return xPct[j-1] + closest(
                value - xPct[j-1],
                xSteps[j-1]
            );
    }


// Entry parsing

    function handleEntryPoint ( index, value, that ) {

        var percentage;

        // Wrap numerical input in an array.
        if ( typeof value === "number" ) {
            value = [value];
        }

        // Reject any invalid input, by testing whether value is an array.
        if ( Object.prototype.toString.call( value ) !== '[object Array]' ){
            throw new Error("noUiSlider: 'range' contains invalid value.");
        }

        // Covert min/max syntax to 0 and 100.
        if ( index === 'min' ) {
            percentage = 0;
        } else if ( index === 'max' ) {
            percentage = 100;
        } else {
            percentage = parseFloat( index );
        }

        // Check for correct input.
        if ( !isNumeric( percentage ) || !isNumeric( value[0] ) ) {
            throw new Error("noUiSlider: 'range' value isn't numeric.");
        }

        // Store values.
        that.xPct.push( percentage );
        that.xVal.push( value[0] );

        // NaN will evaluate to false too, but to keep
        // logging clear, set step explicitly. Make sure
        // not to override the 'step' setting with false.
        if ( !percentage ) {
            if ( !isNaN( value[1] ) ) {
                that.xSteps[0] = value[1];
            }
        } else {
            that.xSteps.push( isNaN(value[1]) ? false : value[1] );
        }

        that.xHighestCompleteStep.push(0);
    }

    function handleStepPoint ( i, n, that ) {

        // Ignore 'false' stepping.
        if ( !n ) {
            return true;
        }

        // Factor to range ratio
        that.xSteps[i] = fromPercentage([
                that.xVal[i]
                ,that.xVal[i+1]
            ], n) / subRangeRatio (
                that.xPct[i],
                that.xPct[i+1] );

        var totalSteps = (that.xVal[i+1] - that.xVal[i]) / that.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = that.xVal[i] + (that.xNumSteps[i] * highestStep);

        that.xHighestCompleteStep[i] = step;
    }


// Interface

    // The interface to Spectrum handles all direction-based
    // conversions, so the above values are unaware.

    function Spectrum ( entry, snap, direction, singleStep ) {

        this.xPct = [];
        this.xVal = [];
        this.xSteps = [ singleStep || false ];
        this.xNumSteps = [ false ];
        this.xHighestCompleteStep = [];

        this.snap = snap;
        this.direction = direction;

        var index, ordered = [ /* [0, 'min'], [1, '50%'], [2, 'max'] */ ];

        // Map the object keys to an array.
        for ( index in entry ) {
            if ( entry.hasOwnProperty(index) ) {
                ordered.push([entry[index], index]);
            }
        }

        // Sort all entries by value (numeric sort).
        if ( ordered.length && typeof ordered[0][0] === "object" ) {
            ordered.sort(function(a, b) { return a[0][0] - b[0][0]; });
        } else {
            ordered.sort(function(a, b) { return a[0] - b[0]; });
        }


        // Convert all entries to subranges.
        for ( index = 0; index < ordered.length; index++ ) {
            handleEntryPoint(ordered[index][1], ordered[index][0], this);
        }

        // Store the actual step values.
        // xSteps is sorted in the same order as xPct and xVal.
        this.xNumSteps = this.xSteps.slice(0);

        // Convert all numeric steps to the percentage of the subrange they represent.
        for ( index = 0; index < this.xNumSteps.length; index++ ) {
            handleStepPoint(index, this.xNumSteps[index], this);
        }
    }

    Spectrum.prototype.getMargin = function ( value ) {

        var step = this.xNumSteps[0];

        if ( step && (value % step) ) {
            throw new Error("noUiSlider: 'limit' and 'margin' must be divisible by step.");
        }

        return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
    };

    Spectrum.prototype.toStepping = function ( value ) {

        value = toStepping( this.xVal, this.xPct, value );

        return value;
    };

    Spectrum.prototype.fromStepping = function ( value ) {

        return fromStepping( this.xVal, this.xPct, value );
    };

    Spectrum.prototype.getStep = function ( value ) {

        value = getStep(this.xPct, this.xSteps, this.snap, value );

        return value;
    };

    Spectrum.prototype.getNearbySteps = function ( value ) {

        var j = getJ(value, this.xPct);

        return {
            stepBefore: { startValue: this.xVal[j-2], step: this.xNumSteps[j-2], highestStep: this.xHighestCompleteStep[j-2] },
            thisStep: { startValue: this.xVal[j-1], step: this.xNumSteps[j-1], highestStep: this.xHighestCompleteStep[j-1] },
            stepAfter: { startValue: this.xVal[j-0], step: this.xNumSteps[j-0], highestStep: this.xHighestCompleteStep[j-0] }
        };
    };

    Spectrum.prototype.countStepDecimals = function () {
        var stepDecimals = this.xNumSteps.map(countDecimals);
        return Math.max.apply(null, stepDecimals);
    };

    // Outside testing
    Spectrum.prototype.convert = function ( value ) {
        return this.getStep(this.toStepping(value));
    };

    /*	Every input option is tested and parsed. This'll prevent
     endless validation in internal methods. These tests are
     structured with an item for every option available. An
     option can be marked as required by setting the 'r' flag.
     The testing function is provided with three arguments:
     - The provided value for the option;
     - A reference to the options object;
     - The name for the option;

     The testing function returns false when an error is detected,
     or true when everything is OK. It can also modify the option
     object, to make sure all values can be correctly looped elsewhere. */

    var defaultFormatter = { 'to': function( value ){
        return value !== undefined && value.toFixed(2);
    }, 'from': Number };

    function testStep ( parsed, entry ) {

        if ( !isNumeric( entry ) ) {
            throw new Error("noUiSlider: 'step' is not numeric.");
        }

        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }

    function testRange ( parsed, entry ) {

        // Filter incorrect input.
        if ( typeof entry !== 'object' || Array.isArray(entry) ) {
            throw new Error("noUiSlider: 'range' is not an object.");
        }

        // Catch missing start or end.
        if ( entry.min === undefined || entry.max === undefined ) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        }

        // Catch equal start or end.
        if ( entry.min === entry.max ) {
            throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
        }

        parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.dir, parsed.singleStep);
    }

    function testStart ( parsed, entry ) {

        entry = asArray(entry);

        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if ( !Array.isArray( entry ) || !entry.length ) {
            throw new Error("noUiSlider: 'start' option is incorrect.");
        }

        // Store the number of handles.
        parsed.handles = entry.length;

        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }

    function testSnap ( parsed, entry ) {

        // Enforce 100% stepping within subranges.
        parsed.snap = entry;

        if ( typeof entry !== 'boolean' ){
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
        }
    }

    function testAnimate ( parsed, entry ) {

        // Enforce 100% stepping within subranges.
        parsed.animate = entry;

        if ( typeof entry !== 'boolean' ){
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
        }
    }

    function testAnimationDuration ( parsed, entry ) {

        parsed.animationDuration = entry;

        if ( typeof entry !== 'number' ){
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        }
    }

    function testConnect ( parsed, entry ) {

        var connect = [false];
        var i;

        if ( entry === true || entry === false ) {

            for ( i = 1; i < parsed.handles; i++ ) {
                connect.push(entry);
            }

            connect.push(false);
        }

        else if ( !Array.isArray( entry ) || !entry.length || entry.length !== parsed.handles + 1 ) {
            throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }

        else {
            connect = entry;
        }

        parsed.connect = connect;
    }

    function testOrientation ( parsed, entry ) {

        // Set orientation to an a numerical value for easy
        // array selection.
        switch ( entry ){
            case 'horizontal':
                parsed.ort = 0;
                break;
            case 'vertical':
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }

    function testMargin ( parsed, entry ) {

        if ( !isNumeric(entry) ){
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        }

        // Issue #582
        if ( entry === 0 ) {
            return;
        }

        parsed.margin = parsed.spectrum.getMargin(entry);

        if ( !parsed.margin ) {
            throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.");
        }
    }

    function testLimit ( parsed, entry ) {

        if ( !isNumeric(entry) ){
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        }

        parsed.limit = parsed.spectrum.getMargin(entry);

        if ( !parsed.limit || parsed.handles < 2 ) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
    }

    function testDirection ( parsed, entry ) {

        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch ( entry ) {
            case 'ltr':
                parsed.dir = 0;
                break;
            case 'rtl':
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }

    function testBehaviour ( parsed, entry ) {

        // Make sure the input is a string.
        if ( typeof entry !== 'string' ) {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        }

        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf('tap') >= 0;
        var drag = entry.indexOf('drag') >= 0;
        var fixed = entry.indexOf('fixed') >= 0;
        var snap = entry.indexOf('snap') >= 0;
        var hover = entry.indexOf('hover') >= 0;

        if ( fixed ) {

            if ( parsed.handles !== 2 ) {
                throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            }

            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }

        parsed.events = {
            tap: tap || snap,
            drag: drag,
            fixed: fixed,
            snap: snap,
            hover: hover
        };
    }

    function testTooltips ( parsed, entry ) {

        if ( entry === false ) {
            return;
        }

        else if ( entry === true ) {

            parsed.tooltips = [];

            for ( var i = 0; i < parsed.handles; i++ ) {
                parsed.tooltips.push(true);
            }
        }

        else {

            parsed.tooltips = asArray(entry);

            if ( parsed.tooltips.length !== parsed.handles ) {
                throw new Error("noUiSlider: must pass a formatter for all handles.");
            }

            parsed.tooltips.forEach(function(formatter){
                if ( typeof formatter !== 'boolean' && (typeof formatter !== 'object' || typeof formatter.to !== 'function') ) {
                    throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }
            });
        }
    }

    function testFormat ( parsed, entry ) {

        parsed.format = entry;

        // Any object with a to and from method is supported.
        if ( typeof entry.to === 'function' && typeof entry.from === 'function' ) {
            return true;
        }

        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
    }

    function testCssPrefix ( parsed, entry ) {

        if ( entry !== undefined && typeof entry !== 'string' && entry !== false ) {
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        }

        parsed.cssPrefix = entry;
    }

    function testCssClasses ( parsed, entry ) {

        if ( entry !== undefined && typeof entry !== 'object' ) {
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        }

        if ( typeof parsed.cssPrefix === 'string' ) {
            parsed.cssClasses = {};

            for ( var key in entry ) {
                if ( !entry.hasOwnProperty(key) ) { continue; }

                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            }
        } else {
            parsed.cssClasses = entry;
        }
    }

    function testUseRaf ( parsed, entry ) {
        if ( entry === true || entry === false ) {
            parsed.useRequestAnimationFrame = entry;
        } else {
            throw new Error("noUiSlider: 'useRequestAnimationFrame' option should be true (default) or false.");
        }
    }

    // Test all developer settings and parse to assumption-safe values.
    function testOptions ( options ) {

        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);

        var parsed = {
            margin: 0,
            limit: 0,
            animate: true,
            animationDuration: 300,
            format: defaultFormatter
        }, tests;

        // Tests are executed in the order they are presented here.
        tests = {
            'step': { r: false, t: testStep },
            'start': { r: true, t: testStart },
            'connect': { r: true, t: testConnect },
            'direction': { r: true, t: testDirection },
            'snap': { r: false, t: testSnap },
            'animate': { r: false, t: testAnimate },
            'animationDuration': { r: false, t: testAnimationDuration },
            'range': { r: true, t: testRange },
            'orientation': { r: false, t: testOrientation },
            'margin': { r: false, t: testMargin },
            'limit': { r: false, t: testLimit },
            'behaviour': { r: true, t: testBehaviour },
            'format': { r: false, t: testFormat },
            'tooltips': { r: false, t: testTooltips },
            'cssPrefix': { r: false, t: testCssPrefix },
            'cssClasses': { r: false, t: testCssClasses },
            'useRequestAnimationFrame': { r: false, t: testUseRaf }
        };

        var defaults = {
            'connect': false,
            'direction': 'ltr',
            'behaviour': 'tap',
            'orientation': 'horizontal',
            'cssPrefix' : 'noUi-',
            'cssClasses': {
                target: 'target',
                base: 'base',
                origin: 'origin',
                handle: 'handle',
                horizontal: 'horizontal',
                vertical: 'vertical',
                background: 'background',
                connect: 'connect',
                ltr: 'ltr',
                rtl: 'rtl',
                draggable: 'draggable',
                drag: 'state-drag',
                tap: 'state-tap',
                active: 'active',
                tooltip: 'tooltip',
                pips: 'pips',
                pipsHorizontal: 'pips-horizontal',
                pipsVertical: 'pips-vertical',
                marker: 'marker',
                markerHorizontal: 'marker-horizontal',
                markerVertical: 'marker-vertical',
                markerNormal: 'marker-normal',
                markerLarge: 'marker-large',
                markerSub: 'marker-sub',
                value: 'value',
                valueHorizontal: 'value-horizontal',
                valueVertical: 'value-vertical',
                valueNormal: 'value-normal',
                valueLarge: 'value-large',
                valueSub: 'value-sub'
            },
            'useRequestAnimationFrame': true
        };

        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function( name ){

            // If the option isn't set, but it is required, throw an error.
            if ( options[name] === undefined && defaults[name] === undefined ) {

                if ( tests[name].r ) {
                    throw new Error("noUiSlider: '" + name + "' is required.");
                }

                return true;
            }

            tests[name].t( parsed, options[name] === undefined ? defaults[name] : options[name] );
        });

        // Forward pips options
        parsed.pips = options.pips;

        var styles = [['left', 'top'], ['right', 'bottom']];

        // Pre-define the styles.
        parsed.style = styles[parsed.dir][parsed.ort];
        parsed.styleOposite = styles[parsed.dir?0:1][parsed.ort];

        return parsed;
    }


    function closure ( target, options, originalOptions ){

        var actions = getActions( );

        // All variables local to 'closure' are prefixed with 'scope_'
        var scope_Target = target;
        var scope_Locations = [];
        var scope_Base;
        var scope_Handles;
        var scope_HandleNumbers = [];
        var scope_Connects;
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Events = {};
        var scope_Self;


        // Append a origin to the base
        function addOrigin ( base, handleNumber ) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            handle.setAttribute('data-handle', handleNumber);
            return origin;
        }

        // Insert nodes for connect elements
        function addConnect ( base, add ) {

            if ( !add ) {
                return false;
            }

            return addNodeTo(base, options.cssClasses.connect);
        }

        // Add handles to the slider base.
        function addElements ( connectOptions, base ) {

            scope_Handles = [];
            scope_Connects = [];

            scope_Connects.push(addConnect(base, connectOptions[0]));

            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]

            for ( var i = 0; i < options.handles; i++ ) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(base, connectOptions[i + 1]));
            }
        }

        // Initialize a single slider.
        function addSlider ( target ) {

            // Apply classes and data to the target.
            addClass(target, options.cssClasses.target);

            if ( options.dir === 0 ) {
                addClass(target, options.cssClasses.ltr);
            } else {
                addClass(target, options.cssClasses.rtl);
            }

            if ( options.ort === 0 ) {
                addClass(target, options.cssClasses.horizontal);
            } else {
                addClass(target, options.cssClasses.vertical);
            }

            scope_Base = addNodeTo(target, options.cssClasses.base);
        }


        function addTooltip ( handle, handleNumber ) {

            if ( !options.tooltips[handleNumber] ) {
                return false;
            }

            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }

        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips ( ) {

            // Tooltips are added with options.tooltips in original order.
            var tips = scope_Handles.map(addTooltip);

            bindEvent('update', function(values, handleNumber, unencoded) {

                if ( !tips[handleNumber] ) {
                    return;
                }

                var formattedValue = values[handleNumber];

                if ( options.tooltips[handleNumber] !== true ) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }

                tips[handleNumber].innerHTML = formattedValue;
            });
        }


        function getGroup ( mode, values, stepped ) {

            // Use the range.
            if ( mode === 'range' || mode === 'steps' ) {
                return scope_Spectrum.xVal;
            }

            if ( mode === 'count' ) {

                // Divide 0 - 100 in 'count' parts.
                var spread = ( 100 / (values-1) ), v, i = 0;
                values = [];

                // List these parts and have them handled as 'positions'.
                while ((v=i++*spread) <= 100 ) {
                    values.push(v);
                }

                mode = 'positions';
            }

            if ( mode === 'positions' ) {

                // Map all percentages to on-range values.
                return values.map(function( value ){
                    return scope_Spectrum.fromStepping( stepped ? scope_Spectrum.getStep( value ) : value );
                });
            }

            if ( mode === 'values' ) {

                // If the value must be stepped, it needs to be converted to a percentage first.
                if ( stepped ) {

                    return values.map(function( value ){

                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping( scope_Spectrum.getStep( scope_Spectrum.toStepping( value ) ) );
                    });

                }

                // Otherwise, we can simply use the values.
                return values;
            }
        }

        function generateSpread ( density, mode, group ) {

            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return (value + increment).toFixed(7) / 1;
            }

            var indexes = {},
                firstInRange = scope_Spectrum.xVal[0],
                lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length-1],
                ignoreFirst = false,
                ignoreLast = false,
                prevPct = 0;

            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(group.slice().sort(function(a, b){ return a - b; }));

            // Make sure the range starts with the first element.
            if ( group[0] !== firstInRange ) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }

            // Likewise for the last one.
            if ( group[group.length - 1] !== lastInRange ) {
                group.push(lastInRange);
                ignoreLast = true;
            }

            group.forEach(function ( current, index ) {

                // Get the current step and the lower + upper positions.
                var step, i, q,
                    low = current,
                    high = group[index+1],
                    newPct, pctDifference, pctPos, type,
                    steps, realSteps, stepsize;

                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if ( mode === 'steps' ) {
                    step = scope_Spectrum.xNumSteps[ index ];
                }

                // Default to a 'full' step.
                if ( !step ) {
                    step = high-low;
                }

                // Low can be 0, so test for false. If high is undefined,
                // we are at the last subrange. Index 0 is already handled.
                if ( low === false || high === undefined ) {
                    return;
                }

                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);

                // Find all steps in the subrange.
                for ( i = low; i <= high; i = safeIncrement(i, step) ) {

                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping( i );
                    pctDifference = newPct - prevPct;

                    steps = pctDifference / density;
                    realSteps = Math.round(steps);

                    // This ratio represents the ammount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-devided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepsize = pctDifference/realSteps;

                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for ( q = 1; q <= realSteps; q += 1 ) {

                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + ( q * stepsize );
                        indexes[pctPos.toFixed(5)] = ['x', 0];
                    }

                    // Determine the point type.
                    type = (group.indexOf(i) > -1) ? 1 : ( mode === 'steps' ? 2 : 0 );

                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if ( !index && ignoreFirst ) {
                        type = 0;
                    }

                    if ( !(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }

                    // Update the percentage count.
                    prevPct = newPct;
                }
            });

            return indexes;
        }

        function addMarking ( spread, filterFunc, formatter ) {

            var element = document.createElement('div'),
                out = '',
                valueSizeClasses = [
                    options.cssClasses.valueNormal,
                    options.cssClasses.valueLarge,
                    options.cssClasses.valueSub
                ],
                markerSizeClasses = [
                    options.cssClasses.markerNormal,
                    options.cssClasses.markerLarge,
                    options.cssClasses.markerSub
                ],
                valueOrientationClasses = [
                    options.cssClasses.valueHorizontal,
                    options.cssClasses.valueVertical
                ],
                markerOrientationClasses = [
                    options.cssClasses.markerHorizontal,
                    options.cssClasses.markerVertical
                ];

            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

            function getClasses( type, source ){
                var a = source === options.cssClasses.value,
                    orientationClasses = a ? valueOrientationClasses : markerOrientationClasses,
                    sizeClasses = a ? valueSizeClasses : markerSizeClasses;

                return source + ' ' + orientationClasses[options.ort] + ' ' + sizeClasses[type];
            }

            function getTags( offset, source, values ) {
                return 'class="' + getClasses(values[1], source) + '" style="' + options.style + ': ' + offset + '%"';
            }

            function addSpread ( offset, values ){

                // Apply the filter function, if it is set.
                values[1] = (values[1] && filterFunc) ? filterFunc(values[0], values[1]) : values[1];

                // Add a marker for every point
                out += '<div ' + getTags(offset, options.cssClasses.marker, values) + '></div>';

                // Values are only appended for points marked '1' or '2'.
                if ( values[1] ) {
                    out += '<div ' + getTags(offset, options.cssClasses.value, values) + '>' + formatter.to(values[0]) + '</div>';
                }
            }

            // Append all points.
            Object.keys(spread).forEach(function(a){
                addSpread(a, spread[a]);
            });

            element.innerHTML = out;

            return element;
        }

        function pips ( grid ) {

            var mode = grid.mode,
                density = grid.density || 1,
                filter = grid.filter || false,
                values = grid.values || false,
                stepped = grid.stepped || false,
                group = getGroup( mode, values, stepped ),
                spread = generateSpread( density, mode, group ),
                format = grid.format || {
                        to: Math.round
                    };

            return scope_Target.appendChild(addMarking(
                spread,
                filter,
                format
            ));
        }


        // Shorthand for base dimensions.
        function baseSize ( ) {
            var rect = scope_Base.getBoundingClientRect(), alt = 'offset' + ['Width', 'Height'][options.ort];
            return options.ort === 0 ? (rect.width||scope_Base[alt]) : (rect.height||scope_Base[alt]);
        }

        // Handler for attaching events trough a proxy.
        function attachEvent ( events, element, callback, data ) {

            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList

            var method = function ( e ){

                if ( scope_Target.hasAttribute('disabled') ) {
                    return false;
                }

                // Stop if an active 'tap' transition is taking place.
                if ( hasClass(scope_Target, options.cssClasses.tap) ) {
                    return false;
                }

                e = fixEvent(e, data.pageOffset);

                // Ignore right or middle clicks on start #454
                if ( events === actions.start && e.buttons !== undefined && e.buttons > 1 ) {
                    return false;
                }

                // Ignore right or middle clicks on start #454
                if ( data.hover && e.buttons ) {
                    return false;
                }

                e.calcPoint = e.points[ options.ort ];

                // Call the event handler with the event [ and additional data ].
                callback ( e, data );
            };

            var methods = [];

            // Bind a closure on the target for every event type.
            events.split(' ').forEach(function( eventName ){
                element.addEventListener(eventName, method, false);
                methods.push([eventName, method]);
            });

            return methods;
        }

        // Provide a clean event with standardized offset values.
        function fixEvent ( e, pageOffset ) {

            // Prevent scrolling and panning on touch events, while
            // attempting to slide. The tap event also depends on this.
            e.preventDefault();

            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf('touch') === 0,
                mouse = e.type.indexOf('mouse') === 0,
                pointer = e.type.indexOf('pointer') === 0,
                x,y, event = e;

            // IE10 implemented pointer events with a prefix;
            if ( e.type.indexOf('MSPointer') === 0 ) {
                pointer = true;
            }

            if ( touch ) {

                // Fix bug when user touches with two or more fingers on mobile devices.
                // It's useful when you have two or more sliders on one page,
                // that can be touched simultaneously.
                // #649, #663, #668
                if ( event.touches.length > 1 ) {
                    return false;
                }

                // noUiSlider supports one movement at a time,
                // so we can select the first 'changedTouch'.
                x = e.changedTouches[0].pageX;
                y = e.changedTouches[0].pageY;
            }

            pageOffset = pageOffset || getPageOffset();

            if ( mouse || pointer ) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }

            event.pageOffset = pageOffset;
            event.points = [x, y];
            event.cursor = mouse || pointer; // Fix #435

            return event;
        }

        function calcPointToPercentage ( calcPoint ) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = ( location * 100 ) / baseSize();
            return options.dir ? 100 - proposal : proposal;
        }

        function getClosestHandle ( proposal ) {

            var closest = 100;
            var handleNumber = false;

            scope_Handles.forEach(function(handle, index){

                // Disabled handles are ignored
                if ( handle.hasAttribute('disabled') ) {
                    return;
                }

                var pos = Math.abs(scope_Locations[index] - proposal);

                if ( pos < closest ) {
                    handleNumber = index;
                    closest = pos;
                }
            });

            return handleNumber;
        }

        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles ( upward, proposal, locations, handleNumbers ) {

            var proposals = locations.slice();

            var b = [!upward, upward];
            var f = [upward, !upward];

            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();

            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if ( upward ) {
                handleNumbers.reverse();
            }

            // Step 1: get the maximum percentage that any of the handles can move
            if ( handleNumbers.length > 1 ) {

                handleNumbers.forEach(function(handleNumber, o) {

                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o]);

                    // Stop if one of the handles can't move.
                    if ( to === false ) {
                        proposal = 0;
                    } else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }

            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }

            var state = false;

            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function(handleNumber, o) {
                state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
            });

            // Step 3: If a handle moved, fire events
            if ( state ) {
                handleNumbers.forEach(function(handleNumber){
                    fireEvent('update', handleNumber);
                    fireEvent('slide', handleNumber);
                });
            }
        }

        // External event handling
        function fireEvent ( eventName, handleNumber, tap ) {

            Object.keys(scope_Events).forEach(function( targetEvent ) {

                var eventType = targetEvent.split('.')[0];

                if ( eventName === eventType ) {
                    scope_Events[targetEvent].forEach(function( callback ) {

                        callback.call(
                            // Use the slider public API as the scope ('this')
                            scope_Self,
                            // Return values as array, so arg_1[arg_2] is always valid.
                            scope_Values.map(options.format.to),
                            // Handle index, 0 or 1
                            handleNumber,
                            // Unformatted slider values
                            scope_Values.slice(),
                            // Event is fired by tap, true or false
                            tap || false,
                            // Left offset of the handle, in relation to the slider
                            scope_Locations.slice()
                        );
                    });
                }
            });
        }


        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave ( event, data ) {
            if ( event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null ){
                eventEnd (event, data);
            }
        }

        // Handle movement on document for handle and range drag.
        function eventMove ( event, data ) {

            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if ( navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0 ) {
                return eventEnd(event, data);
            }

            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);

            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;

            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
        }

        // Unbind move events on document, call callbacks.
        function eventEnd ( event, data ) {

            // The handle is no longer active, so remove the class.
            var active = scope_Base.querySelector( '.' + options.cssClasses.active );

            if ( active !== null ) {
                removeClass(active, options.cssClasses.active);
            }

            // Remove cursor styles and text-selection events bound to the body.
            if ( event.cursor ) {
                document.body.style.cursor = '';
                document.body.removeEventListener('selectstart', document.body.noUiListener);
            }

            // Unbind the move and end events, which are added on 'start'.
            document.documentElement.noUiListeners.forEach(function( c ) {
                document.documentElement.removeEventListener(c[0], c[1]);
            });

            // Remove dragging class.
            removeClass(scope_Target, options.cssClasses.drag);

            setZindex();

            data.handleNumbers.forEach(function(handleNumber){
                fireEvent('set', handleNumber);
                fireEvent('change', handleNumber);
                fireEvent('end', handleNumber);
            });
        }

        // Bind move events on document.
        function eventStart ( event, data ) {

            // Mark the handle as 'active' so it can be styled.
            if ( data.handleNumbers.length === 1 ) {

                var handle = scope_Handles[data.handleNumbers[0]];

                // Ignore 'disabled' handles
                if ( handle.hasAttribute('disabled') ) {
                    return false;
                }

                addClass(handle.children[0], options.cssClasses.active);
            }

            // Fix #551, where a handle gets selected instead of dragged.
            event.preventDefault();

            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();

            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, document.documentElement, eventMove, {
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice()
            });

            var endEvent = attachEvent(actions.end, document.documentElement, eventEnd, {
                handleNumbers: data.handleNumbers
            });

            var outEvent = attachEvent("mouseout", document.documentElement, documentLeave, {
                handleNumbers: data.handleNumbers
            });

            document.documentElement.noUiListeners = moveEvent.concat(endEvent, outEvent);

            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if ( event.cursor ) {

                // Prevent the 'I' cursor and extend the range-drag cursor.
                document.body.style.cursor = getComputedStyle(event.target).cursor;

                // Mark the target with a dragging state.
                if ( scope_Handles.length > 1 ) {
                    addClass(scope_Target, options.cssClasses.drag);
                }

                var f = function(){
                    return false;
                };

                document.body.noUiListener = f;

                // Prevent text selection when dragging the handles.
                document.body.addEventListener('selectstart', f, false);
            }

            data.handleNumbers.forEach(function(handleNumber){
                fireEvent('start', handleNumber);
            });
        }

        // Move closest handle to tapped location.
        function eventTap ( event ) {

            // The tap event shouldn't propagate up
            event.stopPropagation();

            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);

            // Tackle the case that all handles are 'disabled'.
            if ( handleNumber === false ) {
                return false;
            }

            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if ( !options.events.snap ) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }

            setHandle(handleNumber, proposal, true, true);

            setZindex();

            fireEvent('slide', handleNumber, true);
            fireEvent('set', handleNumber, true);
            fireEvent('change', handleNumber, true);
            fireEvent('update', handleNumber, true);

            if ( options.events.snap ) {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }

        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover ( event ) {

            var proposal = calcPointToPercentage(event.calcPoint);

            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);

            Object.keys(scope_Events).forEach(function( targetEvent ) {
                if ( 'hover' === targetEvent.split('.')[0] ) {
                    scope_Events[targetEvent].forEach(function( callback ) {
                        callback.call( scope_Self, value );
                    });
                }
            });
        }

        // Attach events to several slider parts.
        function bindSliderEvents ( behaviour ) {

            // Attach the standard drag event to the handles.
            if ( !behaviour.fixed ) {

                scope_Handles.forEach(function( handle, index ){

                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent ( actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index]
                    });
                });
            }

            // Attach the tap event to the slider base.
            if ( behaviour.tap ) {
                attachEvent (actions.start, scope_Base, eventTap, {});
            }

            // Fire hover events
            if ( behaviour.hover ) {
                attachEvent (actions.move, scope_Base, eventHover, { hover: true });
            }

            // Make the range draggable.
            if ( behaviour.drag ){

                scope_Connects.forEach(function( connect, index ){

                    if ( connect === false || index === 0 || index === scope_Connects.length - 1 ) {
                        return;
                    }

                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];

                    addClass(connect, options.cssClasses.draggable);

                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if ( behaviour.fixed ) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }

                    eventHolders.forEach(function( eventHolder ) {
                        attachEvent ( actions.start, eventHolder, eventStart, {
                            handles: [handleBefore, handleAfter],
                            handleNumbers: [index - 1, index]
                        });
                    });
                });
            }
        }


        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition ( reference, handleNumber, to, lookBackward, lookForward ) {

            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if ( scope_Handles.length > 1 ) {

                if ( lookBackward && handleNumber > 0 ) {
                    to = Math.max(to, reference[handleNumber - 1] + options.margin);
                }

                if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
                    to = Math.min(to, reference[handleNumber + 1] - options.margin);
                }
            }

            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmoveable.
            if ( scope_Handles.length > 1 && options.limit ) {

                if ( lookBackward && handleNumber > 0 ) {
                    to = Math.min(to, reference[handleNumber - 1] + options.limit);
                }

                if ( lookForward && handleNumber < scope_Handles.length - 1 ) {
                    to = Math.max(to, reference[handleNumber + 1] - options.limit);
                }
            }

            to = scope_Spectrum.getStep(to);

            // Limit percentage to the 0 - 100 range
            to = limit(to);

            // Return false if handle can't move
            if ( to === reference[handleNumber] ) {
                return false;
            }

            return to;
        }

        function toPct ( pct ) {
            return pct + '%';
        }

        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition ( handleNumber, to ) {

            // Update locations.
            scope_Locations[handleNumber] = to;

            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);

            // Called synchronously or on the next animationFrame
            var stateUpdate = function() {
                scope_Handles[handleNumber].style[options.style] = toPct(to);
                updateConnect(handleNumber);
                updateConnect(handleNumber + 1);
            };

            // Set the handle to the new position.
            // Use requestAnimationFrame for efficient painting.
            // No significant effect in Chrome, Edge sees dramatic performace improvements.
            // Option to disable is useful for unit tests, and single-step debugging.
            if ( window.requestAnimationFrame && options.useRequestAnimationFrame ) {
                window.requestAnimationFrame(stateUpdate);
            } else {
                stateUpdate();
            }
        }

        function setZindex ( ) {

            scope_HandleNumbers.forEach(function(handleNumber){
                // Handles before the slider middle are stacked later = higher,
                // Handles after the middle later is lower
                // [[7] [8] .......... | .......... [5] [4]
                var dir = (scope_Locations[handleNumber] > 50 ? -1 : 1);
                var zIndex = 3 + (scope_Handles.length + (dir * handleNumber));
                scope_Handles[handleNumber].childNodes[0].style.zIndex = zIndex;
            });
        }

        // Test suggested values and apply margin, step.
        function setHandle ( handleNumber, to, lookBackward, lookForward ) {

            to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward);

            if ( to === false ) {
                return false;
            }

            updateHandlePosition(handleNumber, to);

            return true;
        }

        // Updates style attribute for connect nodes
        function updateConnect ( index ) {

            // Skip connects set to false
            if ( !scope_Connects[index] ) {
                return;
            }

            var l = 0;
            var h = 100;

            if ( index !== 0 ) {
                l = scope_Locations[index - 1];
            }

            if ( index !== scope_Connects.length - 1 ) {
                h = scope_Locations[index];
            }

            scope_Connects[index].style[options.style] = toPct(l);
            scope_Connects[index].style[options.styleOposite] = toPct(100 - h);
        }

        // ...
        function setValue ( to, handleNumber ) {

            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if ( to === null || to === false ) {
                return;
            }

            // If a formatted number was passed, attemt to decode it.
            if ( typeof to === 'number' ) {
                to = String(to);
            }

            to = options.format.from(to);

            // Request an update for all links if the value was invalid.
            // Do so too if setting the handle fails.
            if ( to !== false && !isNaN(to) ) {
                setHandle(handleNumber, scope_Spectrum.toStepping(to), false, false);
            }
        }

        // Set the slider value.
        function valueSet ( input, fireSetEvent ) {

            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;

            // Event fires by default
            fireSetEvent = (fireSetEvent === undefined ? true : !!fireSetEvent);

            values.forEach(setValue);

            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if ( options.animate && !isInit ) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }

            // Now that all base values are set, apply constraints
            scope_HandleNumbers.forEach(function(handleNumber){
                setHandle(handleNumber, scope_Locations[handleNumber], true, false);
            });

            setZindex();

            scope_HandleNumbers.forEach(function(handleNumber){

                fireEvent('update', handleNumber);

                // Fire the event only for handles that received a new value, as per #579
                if ( values[handleNumber] !== null && fireSetEvent ) {
                    fireEvent('set', handleNumber);
                }
            });
        }

        function valueReset ( fireSetEvent ) {
            valueSet(options.start, fireSetEvent);
        }

        // Get the slider value.
        function valueGet ( ) {

            var values = scope_Values.map(options.format.to);

            // If only one handle is used, return a single value.
            if ( values.length === 1 ){
                return values[0];
            }

            return values;
        }

        // Removes classes from the root and empties it.
        function destroy ( ) {

            for ( var key in options.cssClasses ) {
                if ( !options.cssClasses.hasOwnProperty(key) ) { continue; }
                removeClass(scope_Target, options.cssClasses[key]);
            }

            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }

            delete scope_Target.noUiSlider;
        }

        // Get the current step size for the slider.
        function getCurrentStep ( ) {

            // Check all locations, map them to their stepping point.
            // Get the step point, then find it in the input list.
            return scope_Locations.map(function( location, index ){

                var nearbySteps = scope_Spectrum.getNearbySteps( location );
                var value = scope_Values[index];
                var increment = nearbySteps.thisStep.step;
                var decrement = null;

                // If the next value in this step moves into the next step,
                // the increment is the start of the next step - the current value
                if ( increment !== false ) {
                    if ( value + increment > nearbySteps.stepAfter.startValue ) {
                        increment = nearbySteps.stepAfter.startValue - value;
                    }
                }

                // If the value is beyond the starting point
                if ( value > nearbySteps.thisStep.startValue ) {
                    decrement = nearbySteps.thisStep.step;
                }

                else if ( nearbySteps.stepBefore.step === false ) {
                    decrement = false;
                }

                // If a handle is at the start of a step, it always steps back into the previous step first
                else {
                    decrement = value - nearbySteps.stepBefore.highestStep;
                }

                // Now, if at the slider edges, there is not in/decrement
                if ( location === 100 ) {
                    increment = null;
                }

                else if ( location === 0 ) {
                    decrement = null;
                }

                // As per #391, the comparison for the decrement step can have some rounding issues.
                var stepDecimals = scope_Spectrum.countStepDecimals();

                // Round per #391
                if ( increment !== null && increment !== false ) {
                    increment = Number(increment.toFixed(stepDecimals));
                }

                if ( decrement !== null && decrement !== false ) {
                    decrement = Number(decrement.toFixed(stepDecimals));
                }

                return [decrement, increment];
            });
        }

        // Attach an event to this slider, possibly including a namespace
        function bindEvent ( namespacedEvent, callback ) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);

            // If the event bound is 'update,' fire it immediately for all handles.
            if ( namespacedEvent.split('.')[0] === 'update' ) {
                scope_Handles.forEach(function(a, index){
                    fireEvent('update', index);
                });
            }
        }

        // Undo attachment of event
        function removeEvent ( namespacedEvent ) {

            var event = namespacedEvent && namespacedEvent.split('.')[0],
                namespace = event && namespacedEvent.substring(event.length);

            Object.keys(scope_Events).forEach(function( bind ){

                var tEvent = bind.split('.')[0],
                    tNamespace = bind.substring(tEvent.length);

                if ( (!event || event === tEvent) && (!namespace || namespace === tNamespace) ) {
                    delete scope_Events[bind];
                }
            });
        }

        // Updateable: margin, limit, step, range, animate, snap
        function updateOptions ( optionsToUpdate, fireSetEvent ) {

            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated, 'direction' cannot, due to event binding.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();

            var updateAble = ['margin', 'limit', 'range', 'animate', 'snap', 'step', 'format'];

            // Only change options that we're actually passed to update.
            updateAble.forEach(function(name){
                if ( optionsToUpdate[name] !== undefined ) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });

            var newOptions = testOptions(originalOptions);

            // Load new options into the slider state
            updateAble.forEach(function(name){
                if ( optionsToUpdate[name] !== undefined ) {
                    options[name] = newOptions[name];
                }
            });

            // Save current spectrum direction as testOptions in testRange call
            // doesn't rely on current direction
            newOptions.spectrum.direction = scope_Spectrum.direction;
            scope_Spectrum = newOptions.spectrum;

            // Limit and margin depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;

            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(optionsToUpdate.start || v, fireSetEvent);
        }

        // Throw an error if the slider was already initialized.
        if ( scope_Target.noUiSlider ) {
            throw new Error('Slider was already initialized.');
        }

        // Create the base element, initialise HTML and set classes.
        // Add handles and connect elements.
        addSlider(scope_Target);
        addElements(options.connect, scope_Base);

        scope_Self = {
            destroy: destroy,
            steps: getCurrentStep,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function(a, b, c) { moveHandles(a, b, scope_Locations, c); },
            options: originalOptions, // Issue #600, #678
            updateOptions: updateOptions,
            target: scope_Target, // Issue #597
            pips: pips // Issue #594
        };

        // Attach user events.
        bindSliderEvents(options.events);

        // Use the public value method to set the start values.
        valueSet(options.start);

        if ( options.pips ) {
            pips(options.pips);
        }

        if ( options.tooltips ) {
            tooltips();
        }

        return scope_Self;

    }


    // Run the standard initializer
    function initialize ( target, originalOptions ) {

        if ( !target.nodeName ) {
            throw new Error('noUiSlider.create requires a single element.');
        }

        // Test the options and create the slider environment;
        var options = testOptions( originalOptions, target );
        var api = closure( target, options, originalOptions );

        target.noUiSlider = api;

        return api;
    }

    // Use an object instead of a function for future expansibility;
    return {
        create: initialize
    };

}));
/*!
 * # Semantic UI 2.2.3 - Tab
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,a,n){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.tab=function(i){var o,r=e(e.isFunction(this)?t:this),s=r.selector||"",c=(new Date).getTime(),l=[],d=arguments[0],u="string"==typeof d,b=[].slice.call(arguments,1),g=!1;return r.each(function(){var f,h,p,m,v,y,T=e.isPlainObject(i)?e.extend(!0,{},e.fn.tab.settings,i):e.extend({},e.fn.tab.settings),L=T.className,x=T.metadata,A=T.selector,P=T.error,C="."+T.namespace,F="module-"+T.namespace,S=e(this),j={},E=!0,k=0,w=this,I=S.data(F);v={initialize:function(){v.debug("Initializing tab menu item",S),v.fix.callbacks(),v.determineTabs(),v.debug("Determining tabs",T.context,h),T.auto&&v.set.auto(),v.bind.events(),T.history&&!g&&(v.initializeHistory(),g=!0),v.instantiate()},instantiate:function(){v.verbose("Storing instance of module",v),I=v,S.data(F,v)},destroy:function(){v.debug("Destroying tabs",S),S.removeData(F).off(C)},bind:{events:function(){e.isWindow(w)||(v.debug("Attaching tab activation events to element",S),S.on("click"+C,v.event.click))}},determineTabs:function(){var t;"parent"===T.context?(S.closest(A.ui).length>0?(t=S.closest(A.ui),v.verbose("Using closest UI element as parent",t)):t=S,f=t.parent(),v.verbose("Determined parent element for creating context",f)):T.context?(f=e(T.context),v.verbose("Using selector for tab context",T.context,f)):f=e("body"),T.childrenOnly?(h=f.children(A.tabs),v.debug("Searching tab context children for tabs",f,h)):(h=f.find(A.tabs),v.debug("Searching tab context for tabs",f,h))},fix:{callbacks:function(){e.isPlainObject(i)&&(i.onTabLoad||i.onTabInit)&&(i.onTabLoad&&(i.onLoad=i.onTabLoad,delete i.onTabLoad,v.error(P.legacyLoad,i.onLoad)),i.onTabInit&&(i.onFirstLoad=i.onTabInit,delete i.onTabInit,v.error(P.legacyInit,i.onFirstLoad)),T=e.extend(!0,{},e.fn.tab.settings,i))}},initializeHistory:function(){if(v.debug("Initializing page state"),e.address===n)return v.error(P.state),!1;if("state"==T.historyType){if(v.debug("Using HTML5 to manage state"),T.path===!1)return v.error(P.path),!1;e.address.history(!0).state(T.path)}e.address.bind("change",v.event.history.change)},event:{click:function(t){var a=e(this).data(x.tab);a!==n?(T.history?(v.verbose("Updating page state",t),e.address.value(a)):(v.verbose("Changing tab",t),v.changeTab(a)),t.preventDefault()):v.debug("No tab specified")},history:{change:function(t){var a=t.pathNames.join("/")||v.get.initialPath(),i=T.templates.determineTitle(a)||!1;v.performance.display(),v.debug("History change event",a,t),y=t,a!==n&&v.changeTab(a),i&&e.address.title(i)}}},refresh:function(){p&&(v.debug("Refreshing tab",p),v.changeTab(p))},cache:{read:function(e){return e!==n&&j[e]},add:function(e,t){e=e||p,v.debug("Adding cached content for",e),j[e]=t},remove:function(e){e=e||p,v.debug("Removing cached content for",e),delete j[e]}},set:{auto:function(){var t="string"==typeof T.path?T.path.replace(/\/$/,"")+"/{$tab}":"/{$tab}";v.verbose("Setting up automatic tab retrieval from server",t),e.isPlainObject(T.apiSettings)?T.apiSettings.url=t:T.apiSettings={url:t}},loading:function(e){var t=v.get.tabElement(e),a=t.hasClass(L.loading);a||(v.verbose("Setting loading state for",t),t.addClass(L.loading).siblings(h).removeClass(L.active+" "+L.loading),t.length>0&&T.onRequest.call(t[0],e))},state:function(t){e.address.value(t)}},changeTab:function(a){var n=t.history&&t.history.pushState,i=n&&T.ignoreFirstLoad&&E,o=T.auto||e.isPlainObject(T.apiSettings),r=o&&!i?v.utilities.pathToArray(a):v.get.defaultPathArray(a);a=v.utilities.arrayToPath(r),e.each(r,function(t,n){var s,c,l,d,u=r.slice(0,t+1),b=v.utilities.arrayToPath(u),g=v.is.tab(b),h=t+1==r.length,A=v.get.tabElement(b);if(v.verbose("Looking for tab",n),g){if(v.verbose("Tab was found",n),p=b,m=v.utilities.filterArray(r,u),h?d=!0:(c=r.slice(0,t+2),l=v.utilities.arrayToPath(c),d=!v.is.tab(l),d&&v.verbose("Tab parameters found",c)),d&&o)return i?(v.debug("Ignoring remote content on first tab load",b),E=!1,v.cache.add(a,A.html()),v.activate.all(b),T.onFirstLoad.call(A[0],b,m,y),T.onLoad.call(A[0],b,m,y)):(v.activate.navigation(b),v.fetch.content(b,a)),!1;v.debug("Opened local tab",b),v.activate.all(b),v.cache.read(b)||(v.cache.add(b,!0),v.debug("First time tab loaded calling tab init"),T.onFirstLoad.call(A[0],b,m,y)),T.onLoad.call(A[0],b,m,y)}else{if(a.search("/")!=-1||""===a)return v.error(P.missingTab,S,f,b),!1;if(s=e("#"+a+', a[name="'+a+'"]'),b=s.closest("[data-tab]").data(x.tab),A=v.get.tabElement(b),s&&s.length>0&&b)return v.debug("Anchor link used, opening parent tab",A,s),A.hasClass(L.active)||setTimeout(function(){v.scrollTo(s)},0),v.activate.all(b),v.cache.read(b)||(v.cache.add(b,!0),v.debug("First time tab loaded calling tab init"),T.onFirstLoad.call(A[0],b,m,y)),T.onLoad.call(A[0],b,m,y),!1}})},scrollTo:function(t){var n=!!(t&&t.length>0)&&t.offset().top;n!==!1&&(v.debug("Forcing scroll to an in-page link in a hidden tab",n,t),e(a).scrollTop(n))},update:{content:function(e,t,a){var i=v.get.tabElement(e),o=i[0];a=a!==n?a:T.evaluateScripts,a?(v.debug("Updating HTML and evaluating inline scripts",e,t),i.html(t)):(v.debug("Updating HTML",e,t),o.innerHTML=t)}},fetch:{content:function(t,a){var i,o,r=v.get.tabElement(t),s={dataType:"html",encodeParameters:!1,on:"now",cache:T.alwaysRefresh,headers:{"X-Remote":!0},onSuccess:function(e){"response"==T.cacheType&&v.cache.add(a,e),v.update.content(t,e),t==p?(v.debug("Content loaded",t),v.activate.tab(t)):v.debug("Content loaded in background",t),T.onFirstLoad.call(r[0],t,m,y),T.onLoad.call(r[0],t,m,y),"response"!=T.cacheType&&v.cache.add(a,r.html())},urlData:{tab:a}},c=r.api("get request")||!1,l=c&&"pending"===c.state();a=a||t,o=v.cache.read(a),T.cache&&o?(v.activate.tab(t),v.debug("Adding cached content",a),"once"==T.evaluateScripts?v.update.content(t,o,!1):v.update.content(t,o),T.onLoad.call(r[0],t,m,y)):l?(v.set.loading(t),v.debug("Content is already loading",a)):e.api!==n?(i=e.extend(!0,{},T.apiSettings,s),v.debug("Retrieving remote content",a,i),v.set.loading(t),r.api(i)):v.error(P.api)}},activate:{all:function(e){v.activate.tab(e),v.activate.navigation(e)},tab:function(e){var t=v.get.tabElement(e),a="siblings"==T.deactivate?t.siblings(h):h.not(t),n=t.hasClass(L.active);v.verbose("Showing tab content for",t),n||(t.addClass(L.active),a.removeClass(L.active+" "+L.loading),t.length>0&&T.onVisible.call(t[0],e))},navigation:function(e){var t=v.get.navElement(e),a="siblings"==T.deactivate?t.siblings(r):r.not(t),n=t.hasClass(L.active);v.verbose("Activating tab navigation for",t,e),n||(t.addClass(L.active),a.removeClass(L.active+" "+L.loading))}},deactivate:{all:function(){v.deactivate.navigation(),v.deactivate.tabs()},navigation:function(){r.removeClass(L.active)},tabs:function(){h.removeClass(L.active+" "+L.loading)}},is:{tab:function(e){return e!==n&&v.get.tabElement(e).length>0}},get:{initialPath:function(){return r.eq(0).data(x.tab)||h.eq(0).data(x.tab)},path:function(){return e.address.value()},defaultPathArray:function(e){return v.utilities.pathToArray(v.get.defaultPath(e))},defaultPath:function(e){var t=r.filter("[data-"+x.tab+'^="'+e+'/"]').eq(0),a=t.data(x.tab)||!1;if(a){if(v.debug("Found default tab",a),k<T.maxDepth)return k++,v.get.defaultPath(a);v.error(P.recursion)}else v.debug("No default tabs found for",e,h);return k=0,e},navElement:function(e){return e=e||p,r.filter("[data-"+x.tab+'="'+e+'"]')},tabElement:function(e){var t,a,n,i;return e=e||p,n=v.utilities.pathToArray(e),i=v.utilities.last(n),t=h.filter("[data-"+x.tab+'="'+e+'"]'),a=h.filter("[data-"+x.tab+'="'+i+'"]'),t.length>0?t:a},tab:function(){return p}},utilities:{filterArray:function(t,a){return e.grep(t,function(t){return e.inArray(t,a)==-1})},last:function(t){return!!e.isArray(t)&&t[t.length-1]},pathToArray:function(e){return e===n&&(e=p),"string"==typeof e?e.split("/"):[e]},arrayToPath:function(t){return!!e.isArray(t)&&t.join("/")}},setting:function(t,a){if(v.debug("Changing setting",t,a),e.isPlainObject(t))e.extend(!0,T,t);else{if(a===n)return T[t];e.isPlainObject(T[t])?e.extend(!0,T[t],a):T[t]=a}},internal:function(t,a){if(e.isPlainObject(t))e.extend(!0,v,t);else{if(a===n)return v[t];v[t]=a}},debug:function(){!T.silent&&T.debug&&(T.performance?v.performance.log(arguments):(v.debug=Function.prototype.bind.call(console.info,console,T.name+":"),v.debug.apply(console,arguments)))},verbose:function(){!T.silent&&T.verbose&&T.debug&&(T.performance?v.performance.log(arguments):(v.verbose=Function.prototype.bind.call(console.info,console,T.name+":"),v.verbose.apply(console,arguments)))},error:function(){T.silent||(v.error=Function.prototype.bind.call(console.error,console,T.name+":"),v.error.apply(console,arguments))},performance:{log:function(e){var t,a,n;T.performance&&(t=(new Date).getTime(),n=c||t,a=t-n,c=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:w,"Execution Time":a})),clearTimeout(v.performance.timer),v.performance.timer=setTimeout(v.performance.display,500)},display:function(){var t=T.name+":",a=0;c=!1,clearTimeout(v.performance.timer),e.each(l,function(e,t){a+=t["Execution Time"]}),t+=" "+a+"ms",s&&(t+=" '"+s+"'"),(console.group!==n||console.table!==n)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,a,i){var r,s,c,l=I;return a=a||b,i=w||i,"string"==typeof t&&l!==n&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(a,i){var o=a!=r?i+t[a+1].charAt(0).toUpperCase()+t[a+1].slice(1):t;if(e.isPlainObject(l[o])&&a!=r)l=l[o];else{if(l[o]!==n)return s=l[o],!1;if(!e.isPlainObject(l[i])||a==r)return l[i]!==n?(s=l[i],!1):(v.error(P.method,t),!1);l=l[i]}})),e.isFunction(s)?c=s.apply(i,a):s!==n&&(c=s),e.isArray(o)?o.push(c):o!==n?o=[o,c]:c!==n&&(o=c),s}},u?(I===n&&v.initialize(),v.invoke(d)):(I!==n&&I.invoke("destroy"),v.initialize())}),o!==n?o:this},e.tab=function(){e(t).tab.apply(this,arguments)},e.fn.tab.settings={name:"Tab",namespace:"tab",silent:!1,debug:!1,verbose:!1,performance:!0,auto:!1,history:!1,historyType:"hash",path:!1,context:!1,childrenOnly:!1,maxDepth:25,deactivate:"siblings",alwaysRefresh:!1,cache:!0,cacheType:"response",ignoreFirstLoad:!1,apiSettings:!1,evaluateScripts:"once",onFirstLoad:function(e,t,a){},onLoad:function(e,t,a){},onVisible:function(e,t,a){},onRequest:function(e,t,a){},templates:{determineTitle:function(e){}},error:{api:"You attempted to load content without API module",method:"The method you called is not defined",missingTab:"Activated tab cannot be found. Tabs are case-sensitive.",noContent:"The tab you specified is missing a content url.",path:"History enabled, but no path was specified",recursion:"Max recursive depth reached",legacyInit:"onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",legacyLoad:"onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",state:"History requires Asual's Address library <https://github.com/asual/jquery-address>"},metadata:{tab:"tab",loaded:"loaded",promise:"promise"},className:{loading:"loading",active:"active"},selector:{tabs:".ui.tab",ui:".ui"}}}(jQuery,window,document);
/*! jQuery Validation Plugin - v1.15.1 - 7/22/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return!c.settings.submitHandler||(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&null!=j.form){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0]);var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)a[b]&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(a){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0]),!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);if("function"==typeof f.normalizer){if(i=f.normalizer.call(b,i),"string"!=typeof i)throw new TypeError("The normalizer should return a string value.");delete f.normalizer}for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(a){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",a),a instanceof TypeError&&(a.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),a}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{boolean:function(a){return a},string:function(b,c){return!!a(b,c.form).length},function:function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)})});
/*! tooltipster v4.1.6 */!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){function b(a){this.$container,this.constraints=null,this.__$tooltip,this.__init(a)}function c(b,c){var d=!0;return a.each(b,function(a,e){return void 0===c[a]||b[a]!==c[a]?(d=!1,!1):void 0}),d}function d(b){var c=b.attr("id"),d=c?h.window.document.getElementById(c):null;return d?d===b[0]:a.contains(h.window.document.body,b[0])}function e(){if(!g)return!1;var a=g.document.body||g.document.documentElement,b=a.style,c="transition",d=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof b[c])return!0;c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}var f={animation:"fade",animationDuration:350,content:null,contentAsHTML:!1,contentCloning:!1,debug:!0,delay:300,delayTouch:[300,500],functionInit:null,functionBefore:null,functionReady:null,functionAfter:null,functionFormat:null,IEmin:6,interactive:!1,multiple:!1,parent:"body",plugins:["sideTip"],repositionOnScroll:!1,restoration:"none",selfDestruction:!0,theme:[],timer:0,trackerInterval:500,trackOrigin:!1,trackTooltip:!1,trigger:"hover",triggerClose:{click:!1,mouseleave:!1,originClick:!1,scroll:!1,tap:!1,touchleave:!1},triggerOpen:{click:!1,mouseenter:!1,tap:!1,touchstart:!1},updateAnimation:"rotate",zIndex:9999999},g="undefined"!=typeof window?window:null,h={hasTouchCapability:!(!g||!("ontouchstart"in g||g.DocumentTouch&&g.document instanceof g.DocumentTouch||g.navigator.maxTouchPoints)),hasTransitions:e(),IE:!1,semVer:"4.1.6",window:g},i=function(){this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__instancesLatestArr=[],this.__plugins={},this._env=h};i.prototype={__bridge:function(b,c,d){if(!c[d]){var e=function(){};e.prototype=b;var g=new e;g.__init&&g.__init(c),a.each(b,function(a,b){0!=a.indexOf("__")&&(c[a]?f.debug&&console.log("The "+a+" method of the "+d+" plugin conflicts with another plugin or native methods"):(c[a]=function(){return g[a].apply(g,Array.prototype.slice.apply(arguments))},c[a].bridged=g))}),c[d]=g}return this},__setWindow:function(a){return h.window=a,this},_getRuler:function(a){return new b(a)},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_plugin:function(b){var c=this;if("string"==typeof b){var d=b,e=null;return d.indexOf(".")>0?e=c.__plugins[d]:a.each(c.__plugins,function(a,b){return b.name.substring(b.name.length-d.length-1)=="."+d?(e=b,!1):void 0}),e}if(b.name.indexOf(".")<0)throw new Error("Plugins must be namespaced");return c.__plugins[b.name]=b,b.core&&c.__bridge(b.core,c,b.name),this},_trigger:function(){var a=Array.prototype.slice.apply(arguments);return"string"==typeof a[0]&&(a[0]={type:a[0]}),this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,a),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,a),this},instances:function(b){var c=[],d=b||".tooltipstered";return a(d).each(function(){var b=a(this),d=b.data("tooltipster-ns");d&&a.each(d,function(a,d){c.push(b.data(d))})}),c},instancesLatest:function(){return this.__instancesLatestArr},off:function(){return this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},origins:function(b){var c=b?b+" ":"";return a(c+".tooltipstered").toArray()},setDefaults:function(b){return a.extend(f,b),this},triggerHandler:function(){return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.tooltipster=new i,a.Tooltipster=function(b,c){this.__callbacks={close:[],open:[]},this.__closingTime,this.__Content,this.__contentBcr,this.__destroyed=!1,this.__destroying=!1,this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__enabled=!0,this.__garbageCollector,this.__Geometry,this.__lastPosition,this.__namespace="tooltipster-"+Math.round(1e6*Math.random()),this.__options,this.__$originParents,this.__pointerIsOverOrigin=!1,this.__previousThemes=[],this.__state="closed",this.__timeouts={close:[],open:null},this.__touchEvents=[],this.__tracker=null,this._$origin,this._$tooltip,this.__init(b,c)},a.Tooltipster.prototype={__init:function(b,c){var d=this;if(d._$origin=a(b),d.__options=a.extend(!0,{},f,c),d.__optionsFormat(),!h.IE||h.IE>=d.__options.IEmin){var e=null;if(void 0===d._$origin.data("tooltipster-initialTitle")&&(e=d._$origin.attr("title"),void 0===e&&(e=null),d._$origin.data("tooltipster-initialTitle",e)),null!==d.__options.content)d.__contentSet(d.__options.content);else{var g,i=d._$origin.attr("data-tooltip-content");i&&(g=a(i)),g&&g[0]?d.__contentSet(g.first()):d.__contentSet(e)}d._$origin.removeAttr("title").addClass("tooltipstered"),d.__prepareOrigin(),d.__prepareGC(),a.each(d.__options.plugins,function(a,b){d._plug(b)}),h.hasTouchCapability&&a("body").on("touchmove."+d.__namespace+"-triggerOpen",function(a){d._touchRecordEvent(a)}),d._on("created",function(){d.__prepareTooltip()})._on("repositioned",function(a){d.__lastPosition=a.position})}else d.__options.disabled=!0},__contentInsert:function(){var a=this,b=a._$tooltip.find(".tooltipster-content"),c=a.__Content,d=function(a){c=a};return a._trigger({type:"format",content:a.__Content,format:d}),a.__options.functionFormat&&(c=a.__options.functionFormat.call(a,a,{origin:a._$origin[0]},a.__Content)),"string"!=typeof c||a.__options.contentAsHTML?b.empty().append(c):b.text(c),a},__contentSet:function(b){return b instanceof a&&this.__options.contentCloning&&(b=b.clone(!0)),this.__Content=b,this._trigger({type:"updated",content:b}),this},__destroyError:function(){throw new Error("This tooltip has been destroyed and cannot execute your method call.")},__geometry:function(){var b=this,c=b._$origin,d=b._$origin.is("area");if(d){var e=b._$origin.parent().attr("name");c=a('img[usemap="#'+e+'"]')}var f=c[0].getBoundingClientRect(),g=a(h.window.document),i=a(h.window),j=c,k={available:{document:null,window:null},document:{size:{height:g.height(),width:g.width()}},window:{scroll:{left:h.window.scrollX||h.window.document.documentElement.scrollLeft,top:h.window.scrollY||h.window.document.documentElement.scrollTop},size:{height:i.height(),width:i.width()}},origin:{fixedLineage:!1,offset:{},size:{height:f.bottom-f.top,width:f.right-f.left},usemapImage:d?c[0]:null,windowOffset:{bottom:f.bottom,left:f.left,right:f.right,top:f.top}}};if(d){var l=b._$origin.attr("shape"),m=b._$origin.attr("coords");if(m&&(m=m.split(","),a.map(m,function(a,b){m[b]=parseInt(a)})),"default"!=l)switch(l){case"circle":var n=m[0],o=m[1],p=m[2],q=o-p,r=n-p;k.origin.size.height=2*p,k.origin.size.width=k.origin.size.height,k.origin.windowOffset.left+=r,k.origin.windowOffset.top+=q;break;case"rect":var s=m[0],t=m[1],u=m[2],v=m[3];k.origin.size.height=v-t,k.origin.size.width=u-s,k.origin.windowOffset.left+=s,k.origin.windowOffset.top+=t;break;case"poly":for(var w=0,x=0,y=0,z=0,A="even",B=0;B<m.length;B++){var C=m[B];"even"==A?(C>y&&(y=C,0===B&&(w=y)),w>C&&(w=C),A="odd"):(C>z&&(z=C,1==B&&(x=z)),x>C&&(x=C),A="even")}k.origin.size.height=z-x,k.origin.size.width=y-w,k.origin.windowOffset.left+=w,k.origin.windowOffset.top+=x}}var D=function(a){k.origin.size.height=a.height,k.origin.windowOffset.left=a.left,k.origin.windowOffset.top=a.top,k.origin.size.width=a.width};for(b._trigger({type:"geometry",edit:D,geometry:{height:k.origin.size.height,left:k.origin.windowOffset.left,top:k.origin.windowOffset.top,width:k.origin.size.width}}),k.origin.windowOffset.right=k.origin.windowOffset.left+k.origin.size.width,k.origin.windowOffset.bottom=k.origin.windowOffset.top+k.origin.size.height,k.origin.offset.left=k.origin.windowOffset.left+k.window.scroll.left,k.origin.offset.top=k.origin.windowOffset.top+k.window.scroll.top,k.origin.offset.bottom=k.origin.offset.top+k.origin.size.height,k.origin.offset.right=k.origin.offset.left+k.origin.size.width,k.available.document={bottom:{height:k.document.size.height-k.origin.offset.bottom,width:k.document.size.width},left:{height:k.document.size.height,width:k.origin.offset.left},right:{height:k.document.size.height,width:k.document.size.width-k.origin.offset.right},top:{height:k.origin.offset.top,width:k.document.size.width}},k.available.window={bottom:{height:Math.max(k.window.size.height-Math.max(k.origin.windowOffset.bottom,0),0),width:k.window.size.width},left:{height:k.window.size.height,width:Math.max(k.origin.windowOffset.left,0)},right:{height:k.window.size.height,width:Math.max(k.window.size.width-Math.max(k.origin.windowOffset.right,0),0)},top:{height:Math.max(k.origin.windowOffset.top,0),width:k.window.size.width}};"html"!=j[0].tagName.toLowerCase();){if("fixed"==j.css("position")){k.origin.fixedLineage=!0;break}j=j.parent()}return k},__optionsFormat:function(){return"number"==typeof this.__options.animationDuration&&(this.__options.animationDuration=[this.__options.animationDuration,this.__options.animationDuration]),"number"==typeof this.__options.delay&&(this.__options.delay=[this.__options.delay,this.__options.delay]),"number"==typeof this.__options.delayTouch&&(this.__options.delayTouch=[this.__options.delayTouch,this.__options.delayTouch]),"string"==typeof this.__options.theme&&(this.__options.theme=[this.__options.theme]),"string"==typeof this.__options.parent&&(this.__options.parent=a(this.__options.parent)),"hover"==this.__options.trigger?(this.__options.triggerOpen={mouseenter:!0,touchstart:!0},this.__options.triggerClose={mouseleave:!0,originClick:!0,touchleave:!0}):"click"==this.__options.trigger&&(this.__options.triggerOpen={click:!0,tap:!0},this.__options.triggerClose={click:!0,tap:!0}),this._trigger("options"),this},__prepareGC:function(){var b=this;return b.__options.selfDestruction?b.__garbageCollector=setInterval(function(){var c=(new Date).getTime();b.__touchEvents=a.grep(b.__touchEvents,function(a,b){return c-a.time>6e4}),d(b._$origin)||b.destroy()},2e4):clearInterval(b.__garbageCollector),b},__prepareOrigin:function(){var a=this;if(a._$origin.off("."+a.__namespace+"-triggerOpen"),h.hasTouchCapability&&a._$origin.on("touchstart."+a.__namespace+"-triggerOpen touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen",function(b){a._touchRecordEvent(b)}),a.__options.triggerOpen.click||a.__options.triggerOpen.tap&&h.hasTouchCapability){var b="";a.__options.triggerOpen.click&&(b+="click."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.tap&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&a._open(b)})}if(a.__options.triggerOpen.mouseenter||a.__options.triggerOpen.touchstart&&h.hasTouchCapability){var b="";a.__options.triggerOpen.mouseenter&&(b+="mouseenter."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.touchstart&&h.hasTouchCapability&&(b+="touchstart."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){!a._touchIsTouchEvent(b)&&a._touchIsEmulatedEvent(b)||(a.__pointerIsOverOrigin=!0,a._openShortly(b))})}if(a.__options.triggerClose.mouseleave||a.__options.triggerClose.touchleave&&h.hasTouchCapability){var b="";a.__options.triggerClose.mouseleave&&(b+="mouseleave."+a.__namespace+"-triggerOpen "),a.__options.triggerClose.touchleave&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&(a.__pointerIsOverOrigin=!1)})}return a},__prepareTooltip:function(){var b=this,c=b.__options.interactive?"auto":"";return b._$tooltip.attr("id",b.__namespace).css({"pointer-events":c,zIndex:b.__options.zIndex}),a.each(b.__previousThemes,function(a,c){b._$tooltip.removeClass(c)}),a.each(b.__options.theme,function(a,c){b._$tooltip.addClass(c)}),b.__previousThemes=a.merge([],b.__options.theme),b},__scrollHandler:function(b){var c=this;if(c.__options.triggerClose.scroll)c._close(b);else{if(b.target===h.window.document)c.__Geometry.origin.fixedLineage||c.__options.repositionOnScroll&&c.reposition(b);else{var d=c.__geometry(),e=!1;if("fixed"!=c._$origin.css("position")&&c.__$originParents.each(function(b,c){var f=a(c),g=f.css("overflow-x"),h=f.css("overflow-y");if("visible"!=g||"visible"!=h){var i=c.getBoundingClientRect();if("visible"!=g&&(d.origin.windowOffset.left<i.left||d.origin.windowOffset.right>i.right))return e=!0,!1;if("visible"!=h&&(d.origin.windowOffset.top<i.top||d.origin.windowOffset.bottom>i.bottom))return e=!0,!1}return"fixed"==f.css("position")?!1:void 0}),e)c._$tooltip.css("visibility","hidden");else if(c._$tooltip.css("visibility","visible"),c.__options.repositionOnScroll)c.reposition(b);else{var f=d.origin.offset.left-c.__Geometry.origin.offset.left,g=d.origin.offset.top-c.__Geometry.origin.offset.top;c._$tooltip.css({left:c.__lastPosition.coord.left+f,top:c.__lastPosition.coord.top+g})}}c._trigger({type:"scroll",event:b})}return c},__stateSet:function(a){return this.__state=a,this._trigger({type:"state",state:a}),this},__timeoutsClear:function(){return clearTimeout(this.__timeouts.open),this.__timeouts.open=null,a.each(this.__timeouts.close,function(a,b){clearTimeout(b)}),this.__timeouts.close=[],this},__trackerStart:function(){var a=this,b=a._$tooltip.find(".tooltipster-content");return a.__options.trackTooltip&&(a.__contentBcr=b[0].getBoundingClientRect()),a.__tracker=setInterval(function(){if(d(a._$origin)&&d(a._$tooltip)){if(a.__options.trackOrigin){var e=a.__geometry(),f=!1;c(e.origin.size,a.__Geometry.origin.size)&&(a.__Geometry.origin.fixedLineage?c(e.origin.windowOffset,a.__Geometry.origin.windowOffset)&&(f=!0):c(e.origin.offset,a.__Geometry.origin.offset)&&(f=!0)),f||(a.__options.triggerClose.mouseleave?a._close():a.reposition())}if(a.__options.trackTooltip){var g=b[0].getBoundingClientRect();g.height===a.__contentBcr.height&&g.width===a.__contentBcr.width||(a.reposition(),a.__contentBcr=g)}}else a._close()},a.__options.trackerInterval),a},_close:function(b,c){var d=this,e=!0;if(d._trigger({type:"close",event:b,stop:function(){e=!1}}),e||d.__destroying){c&&d.__callbacks.close.push(c),d.__callbacks.open=[],d.__timeoutsClear();var f=function(){a.each(d.__callbacks.close,function(a,c){c.call(d,d,{event:b,origin:d._$origin[0]})}),d.__callbacks.close=[]};if("closed"!=d.__state){var g=!0,i=new Date,j=i.getTime(),k=j+d.__options.animationDuration[1];if("disappearing"==d.__state&&k>d.__closingTime&&(g=!1),g){d.__closingTime=k,"disappearing"!=d.__state&&d.__stateSet("disappearing");var l=function(){clearInterval(d.__tracker),d._trigger({type:"closing",event:b}),d._$tooltip.off("."+d.__namespace+"-triggerClose").removeClass("tooltipster-dying"),a(h.window).off("."+d.__namespace+"-triggerClose"),d.__$originParents.each(function(b,c){a(c).off("scroll."+d.__namespace+"-triggerClose")}),d.__$originParents=null,a("body").off("."+d.__namespace+"-triggerClose"),d._$origin.off("."+d.__namespace+"-triggerClose"),d._off("dismissable"),d.__stateSet("closed"),d._trigger({type:"after",event:b}),d.__options.functionAfter&&d.__options.functionAfter.call(d,d,{event:b,origin:d._$origin[0]}),f()};h.hasTransitions?(d._$tooltip.css({"-moz-animation-duration":d.__options.animationDuration[1]+"ms","-ms-animation-duration":d.__options.animationDuration[1]+"ms","-o-animation-duration":d.__options.animationDuration[1]+"ms","-webkit-animation-duration":d.__options.animationDuration[1]+"ms","animation-duration":d.__options.animationDuration[1]+"ms","transition-duration":d.__options.animationDuration[1]+"ms"}),d._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"),d.__options.animationDuration[1]>0&&d._$tooltip.delay(d.__options.animationDuration[1]),d._$tooltip.queue(l)):d._$tooltip.stop().fadeOut(d.__options.animationDuration[1],l)}}else f()}return d},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_open:function(b,c){var e=this;if(!e.__destroying&&d(e._$origin)&&e.__enabled){var f=!0;if("closed"==e.__state&&(e._trigger({type:"before",event:b,stop:function(){f=!1}}),f&&e.__options.functionBefore&&(f=e.__options.functionBefore.call(e,e,{event:b,origin:e._$origin[0]}))),f!==!1&&null!==e.__Content){c&&e.__callbacks.open.push(c),e.__callbacks.close=[],e.__timeoutsClear();var g,i=function(){"stable"!=e.__state&&e.__stateSet("stable"),a.each(e.__callbacks.open,function(a,b){b.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}),e.__callbacks.open=[]};if("closed"!==e.__state)g=0,"disappearing"===e.__state?(e.__stateSet("appearing"),h.hasTransitions?(e._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i)):e._$tooltip.stop().fadeIn(i)):"stable"==e.__state&&i();else{if(e.__stateSet("appearing"),g=e.__options.animationDuration[0],e.__contentInsert(),e.reposition(b,!0),h.hasTransitions?(e._$tooltip.addClass("tooltipster-"+e.__options.animation).addClass("tooltipster-initial").css({"-moz-animation-duration":e.__options.animationDuration[0]+"ms","-ms-animation-duration":e.__options.animationDuration[0]+"ms","-o-animation-duration":e.__options.animationDuration[0]+"ms","-webkit-animation-duration":e.__options.animationDuration[0]+"ms","animation-duration":e.__options.animationDuration[0]+"ms","transition-duration":e.__options.animationDuration[0]+"ms"}),setTimeout(function(){"closed"!=e.__state&&(e._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i))},0)):e._$tooltip.css("display","none").fadeIn(e.__options.animationDuration[0],i),e.__trackerStart(),a(h.window).on("resize."+e.__namespace+"-triggerClose",function(b){var c=a(document.activeElement);(c.is("input")||c.is("textarea"))&&a.contains(e._$tooltip[0],c[0])||e.reposition(b)}).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)}),e.__$originParents=e._$origin.parents(),e.__$originParents.each(function(b,c){a(c).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)})}),e.__options.triggerClose.mouseleave||e.__options.triggerClose.touchleave&&h.hasTouchCapability){e._on("dismissable",function(a){a.dismissable?a.delay?(m=setTimeout(function(){e._close(a.event)},a.delay),e.__timeouts.close.push(m)):e._close(a):clearTimeout(m)});var j=e._$origin,k="",l="",m=null;e.__options.interactive&&(j=j.add(e._$tooltip)),e.__options.triggerClose.mouseleave&&(k+="mouseenter."+e.__namespace+"-triggerClose ",l+="mouseleave."+e.__namespace+"-triggerClose "),e.__options.triggerClose.touchleave&&h.hasTouchCapability&&(k+="touchstart."+e.__namespace+"-triggerClose",l+="touchend."+e.__namespace+"-triggerClose touchcancel."+e.__namespace+"-triggerClose"),j.on(l,function(a){if(e._touchIsTouchEvent(a)||!e._touchIsEmulatedEvent(a)){var b="mouseleave"==a.type?e.__options.delay:e.__options.delayTouch;e._trigger({delay:b[1],dismissable:!0,event:a,type:"dismissable"})}}).on(k,function(a){!e._touchIsTouchEvent(a)&&e._touchIsEmulatedEvent(a)||e._trigger({dismissable:!1,event:a,type:"dismissable"})})}e.__options.triggerClose.originClick&&e._$origin.on("click."+e.__namespace+"-triggerClose",function(a){e._touchIsTouchEvent(a)||e._touchIsEmulatedEvent(a)||e._close(a)}),(e.__options.triggerClose.click||e.__options.triggerClose.tap&&h.hasTouchCapability)&&setTimeout(function(){if("closed"!=e.__state){var b="";e.__options.triggerClose.click&&(b+="click."+e.__namespace+"-triggerClose "),e.__options.triggerClose.tap&&h.hasTouchCapability&&(b+="touchend."+e.__namespace+"-triggerClose"),a("body").on(b,function(b){e._touchIsMeaningfulEvent(b)&&(e._touchRecordEvent(b),e.__options.interactive&&a.contains(e._$tooltip[0],b.target)||e._close(b))}),e.__options.triggerClose.tap&&h.hasTouchCapability&&a("body").on("touchstart."+e.__namespace+"-triggerClose",function(a){e._touchRecordEvent(a)})}},0),e._trigger("ready"),e.__options.functionReady&&e.__options.functionReady.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}if(e.__options.timer>0){var m=setTimeout(function(){e._close()},e.__options.timer+g);e.__timeouts.close.push(m)}}}return e},_openShortly:function(a){var b=this,c=!0;if("stable"!=b.__state&&"appearing"!=b.__state&&!b.__timeouts.open&&(b._trigger({type:"start",event:a,stop:function(){c=!1}}),c)){var d=0==a.type.indexOf("touch")?b.__options.delayTouch:b.__options.delay;d[0]?b.__timeouts.open=setTimeout(function(){b.__timeouts.open=null,b.__pointerIsOverOrigin&&b._touchIsMeaningfulEvent(a)?(b._trigger("startend"),b._open(a)):b._trigger("startcancel")},d[0]):(b._trigger("startend"),b._open(a))}return b},_optionsExtract:function(b,c){var d=this,e=a.extend(!0,{},c),f=d.__options[b];return f||(f={},a.each(c,function(a,b){var c=d.__options[a];void 0!==c&&(f[a]=c)})),a.each(e,function(b,c){void 0!==f[b]&&("object"!=typeof c||c instanceof Array||null==c||"object"!=typeof f[b]||f[b]instanceof Array||null==f[b]?e[b]=f[b]:a.extend(e[b],f[b]))}),e},_plug:function(b){var c=a.tooltipster._plugin(b);if(!c)throw new Error('The "'+b+'" plugin is not defined');return c.instance&&a.tooltipster.__bridge(c.instance,this,c.name),this},_touchIsEmulatedEvent:function(a){for(var b=!1,c=(new Date).getTime(),d=this.__touchEvents.length-1;d>=0;d--){var e=this.__touchEvents[d];if(!(c-e.time<500))break;e.target===a.target&&(b=!0)}return b},_touchIsMeaningfulEvent:function(a){return this._touchIsTouchEvent(a)&&!this._touchSwiped(a.target)||!this._touchIsTouchEvent(a)&&!this._touchIsEmulatedEvent(a)},_touchIsTouchEvent:function(a){return 0==a.type.indexOf("touch")},_touchRecordEvent:function(a){return this._touchIsTouchEvent(a)&&(a.time=(new Date).getTime(),this.__touchEvents.push(a)),this},_touchSwiped:function(a){for(var b=!1,c=this.__touchEvents.length-1;c>=0;c--){var d=this.__touchEvents[c];if("touchmove"==d.type){b=!0;break}if("touchstart"==d.type&&a===d.target)break}return b},_trigger:function(){var b=Array.prototype.slice.apply(arguments);return"string"==typeof b[0]&&(b[0]={type:b[0]}),b[0].instance=this,b[0].origin=this._$origin?this._$origin[0]:null,b[0].tooltip=this._$tooltip?this._$tooltip[0]:null,this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,b),a.tooltipster._trigger.apply(a.tooltipster,b),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,b),this},_unplug:function(b){var c=this;if(c[b]){var d=a.tooltipster._plugin(b);d.instance&&a.each(d.instance,function(a,d){c[a]&&c[a].bridged===c[b]&&delete c[a]}),c[b].__destroy&&c[b].__destroy(),delete c[b]}return c},close:function(a){return this.__destroyed?this.__destroyError():this._close(null,a),this},content:function(a){var b=this;if(void 0===a)return b.__Content;if(b.__destroyed)b.__destroyError();else if(b.__contentSet(a),null!==b.__Content){if("closed"!==b.__state&&(b.__contentInsert(),b.reposition(),b.__options.updateAnimation))if(h.hasTransitions){var c=b.__options.updateAnimation;b._$tooltip.addClass("tooltipster-update-"+c),setTimeout(function(){"closed"!=b.__state&&b._$tooltip.removeClass("tooltipster-update-"+c)},1e3)}else b._$tooltip.fadeTo(200,.5,function(){"closed"!=b.__state&&b._$tooltip.fadeTo(200,1)})}else b._close();return b},destroy:function(){var b=this;return b.__destroyed?b.__destroyError():b.__destroying||(b.__destroying=!0,b._close(null,function(){b._trigger("destroy"),b.__destroying=!1,b.__destroyed=!0,b._$origin.removeData(b.__namespace).off("."+b.__namespace+"-triggerOpen"),a("body").off("."+b.__namespace+"-triggerOpen");var c=b._$origin.data("tooltipster-ns");if(c)if(1===c.length){var d=null;"previous"==b.__options.restoration?d=b._$origin.data("tooltipster-initialTitle"):"current"==b.__options.restoration&&(d="string"==typeof b.__Content?b.__Content:a("<div></div>").append(b.__Content).html()),d&&b._$origin.attr("title",d),b._$origin.removeClass("tooltipstered"),b._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else c=a.grep(c,function(a,c){return a!==b.__namespace}),b._$origin.data("tooltipster-ns",c);b._trigger("destroyed"),b._off(),b.off(),b.__Content=null,b.__$emitterPrivate=null,b.__$emitterPublic=null,b.__options.parent=null,b._$origin=null,b._$tooltip=null,a.tooltipster.__instancesLatestArr=a.grep(a.tooltipster.__instancesLatestArr,function(a,c){return b!==a}),clearInterval(b.__garbageCollector)})),b},disable:function(){return this.__destroyed?(this.__destroyError(),this):(this._close(),this.__enabled=!1,this)},elementOrigin:function(){return this.__destroyed?void this.__destroyError():this._$origin[0]},elementTooltip:function(){return this._$tooltip?this._$tooltip[0]:null},enable:function(){return this.__enabled=!0,this},hide:function(a){return this.close(a)},instance:function(){return this},off:function(){return this.__destroyed||this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},open:function(a){return this.__destroyed||this.__destroying?this.__destroyError():this._open(null,a),this},option:function(b,c){return void 0===c?this.__options[b]:(this.__destroyed?this.__destroyError():(this.__options[b]=c,this.__optionsFormat(),a.inArray(b,["trigger","triggerClose","triggerOpen"])>=0&&this.__prepareOrigin(),"selfDestruction"===b&&this.__prepareGC()),this)},reposition:function(a,b){var c=this;return c.__destroyed?c.__destroyError():"closed"!=c.__state&&d(c._$origin)&&(b||d(c._$tooltip))&&(b||c._$tooltip.detach(),c.__Geometry=c.__geometry(),c._trigger({type:"reposition",event:a,helper:{geo:c.__Geometry}})),c},show:function(a){return this.open(a)},status:function(){return{destroyed:this.__destroyed,destroying:this.__destroying,enabled:this.__enabled,open:"closed"!==this.__state,state:this.__state}},triggerHandler:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.fn.tooltipster=function(){var b=Array.prototype.slice.apply(arguments),c="You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";if(0===this.length)return this;if("string"==typeof b[0]){var d="#*$~&";return this.each(function(){var e=a(this).data("tooltipster-ns"),f=e?a(this).data(e[0]):null;if(!f)throw new Error("You called Tooltipster's \""+b[0]+'" method on an uninitialized element');if("function"!=typeof f[b[0]])throw new Error('Unknown method "'+b[0]+'"');this.length>1&&"content"==b[0]&&(b[1]instanceof a||"object"==typeof b[1]&&null!=b[1]&&b[1].tagName)&&!f.__options.contentCloning&&f.__options.debug&&console.log(c);var g=f[b[0]](b[1],b[2]);return g!==f||"instance"===b[0]?(d=g,!1):void 0}),"#*$~&"!==d?d:this}a.tooltipster.__instancesLatestArr=[];var e=b[0]&&void 0!==b[0].multiple,g=e&&b[0].multiple||!e&&f.multiple,h=b[0]&&void 0!==b[0].content,i=h&&b[0].content||!h&&f.content,j=b[0]&&void 0!==b[0].contentCloning,k=j&&b[0].contentCloning||!j&&f.contentCloning,l=b[0]&&void 0!==b[0].debug,m=l&&b[0].debug||!l&&f.debug;return this.length>1&&(i instanceof a||"object"==typeof i&&null!=i&&i.tagName)&&!k&&m&&console.log(c),this.each(function(){var c=!1,d=a(this),e=d.data("tooltipster-ns"),f=null;e?g?c=!0:m&&(console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."),console.log(this)):c=!0,c&&(f=new a.Tooltipster(this,b[0]),e||(e=[]),e.push(f.__namespace),d.data("tooltipster-ns",e),d.data(f.__namespace,f),f.__options.functionInit&&f.__options.functionInit.call(f,f,{origin:this}),f._trigger("init")),a.tooltipster.__instancesLatestArr.push(f)}),this},b.prototype={__init:function(b){this.__$tooltip=b,this.__$tooltip.css({left:0,overflow:"hidden",position:"absolute",top:0}).find(".tooltipster-content").css("overflow","auto"),this.$container=a('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo("body")},__forceRedraw:function(){var a=this.__$tooltip.parent();this.__$tooltip.detach(),this.__$tooltip.appendTo(a)},constrain:function(a,b){return this.constraints={width:a,height:b},this.__$tooltip.css({display:"block",height:"",overflow:"auto",width:a}),this},destroy:function(){this.__$tooltip.detach().find(".tooltipster-content").css({display:"",overflow:""}),this.$container.remove()},free:function(){return this.constraints=null,this.__$tooltip.css({display:"",height:"",overflow:"visible",width:""}),this},measure:function(){this.__forceRedraw();var a=this.__$tooltip[0].getBoundingClientRect(),b={size:{height:a.height||a.bottom,width:a.width||a.right}};if(this.constraints){var c=this.__$tooltip.find(".tooltipster-content"),d=this.__$tooltip.outerHeight(),e=c[0].getBoundingClientRect(),f={height:d<=this.constraints.height,width:a.width<=this.constraints.width&&e.width>=c[0].scrollWidth-1};b.fits=f.height&&f.width}return h.IE&&h.IE<=11&&b.size.width!==h.window.document.documentElement.clientWidth&&(b.size.width=Math.ceil(b.size.width)+1),b}};var j=navigator.userAgent.toLowerCase();-1!=j.indexOf("msie")?h.IE=parseInt(j.split("msie")[1]):-1!==j.toLowerCase().indexOf("trident")&&-1!==j.indexOf(" rv:11")?h.IE=11:-1!=j.toLowerCase().indexOf("edge/")&&(h.IE=parseInt(j.toLowerCase().split("edge/")[1]));var k="tooltipster.sideTip";return a.tooltipster._plugin({name:k,instance:{__defaults:function(){return{arrow:!0,distance:6,functionPosition:null,maxWidth:null,minIntersection:16,minWidth:0,position:null,side:"top",viewportAware:!0}},__init:function(a){var b=this;b.__instance=a,b.__namespace="tooltipster-sideTip-"+Math.round(1e6*Math.random()),b.__previousState="closed",b.__options,b.__optionsFormat(),b.__instance._on("state."+b.__namespace,function(a){"closed"==a.state?b.__close():"appearing"==a.state&&"closed"==b.__previousState&&b.__create(),b.__previousState=a.state}),b.__instance._on("options."+b.__namespace,function(){b.__optionsFormat()}),b.__instance._on("reposition."+b.__namespace,function(a){b.__reposition(a.event,a.helper)})},__close:function(){this.__instance.content()instanceof a&&this.__instance.content().detach(),this.__instance._$tooltip.remove(),this.__instance._$tooltip=null},__create:function(){var b=a('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');this.__options.arrow||b.find(".tooltipster-box").css("margin",0).end().find(".tooltipster-arrow").hide(),this.__options.minWidth&&b.css("min-width",this.__options.minWidth+"px"),this.__options.maxWidth&&b.css("max-width",this.__options.maxWidth+"px"),this.__instance._$tooltip=b,this.__instance._trigger("created")},__destroy:function(){this.__instance._off("."+self.__namespace)},__optionsFormat:function(){var b=this;if(b.__options=b.__instance._optionsExtract(k,b.__defaults()),
b.__options.position&&(b.__options.side=b.__options.position),"object"!=typeof b.__options.distance&&(b.__options.distance=[b.__options.distance]),b.__options.distance.length<4&&(void 0===b.__options.distance[1]&&(b.__options.distance[1]=b.__options.distance[0]),void 0===b.__options.distance[2]&&(b.__options.distance[2]=b.__options.distance[0]),void 0===b.__options.distance[3]&&(b.__options.distance[3]=b.__options.distance[1]),b.__options.distance={top:b.__options.distance[0],right:b.__options.distance[1],bottom:b.__options.distance[2],left:b.__options.distance[3]}),"string"==typeof b.__options.side){var c={top:"bottom",right:"left",bottom:"top",left:"right"};b.__options.side=[b.__options.side,c[b.__options.side]],"left"==b.__options.side[0]||"right"==b.__options.side[0]?b.__options.side.push("top","bottom"):b.__options.side.push("right","left")}6===a.tooltipster._env.IE&&b.__options.arrow!==!0&&(b.__options.arrow=!1)},__reposition:function(b,c){var d,e=this,f=e.__targetFind(c),g=[];e.__instance._$tooltip.detach();var h=e.__instance._$tooltip.clone(),i=a.tooltipster._getRuler(h),j=!1,k=e.__instance.option("animation");switch(k&&h.removeClass("tooltipster-"+k),a.each(["window","document"],function(d,k){var l=null;if(e.__instance._trigger({container:k,helper:c,satisfied:j,takeTest:function(a){l=a},results:g,type:"positionTest"}),1==l||0!=l&&0==j&&("window"!=k||e.__options.viewportAware))for(var d=0;d<e.__options.side.length;d++){var m={horizontal:0,vertical:0},n=e.__options.side[d];"top"==n||"bottom"==n?m.vertical=e.__options.distance[n]:m.horizontal=e.__options.distance[n],e.__sideChange(h,n),a.each(["natural","constrained"],function(a,d){if(l=null,e.__instance._trigger({container:k,event:b,helper:c,mode:d,results:g,satisfied:j,side:n,takeTest:function(a){l=a},type:"positionTest"}),1==l||0!=l&&0==j){var h={container:k,distance:m,fits:null,mode:d,outerSize:null,side:n,size:null,target:f[n],whole:null},o="natural"==d?i.free():i.constrain(c.geo.available[k][n].width-m.horizontal,c.geo.available[k][n].height-m.vertical),p=o.measure();if(h.size=p.size,h.outerSize={height:p.size.height+m.vertical,width:p.size.width+m.horizontal},"natural"==d?c.geo.available[k][n].width>=h.outerSize.width&&c.geo.available[k][n].height>=h.outerSize.height?h.fits=!0:h.fits=!1:h.fits=p.fits,"window"==k&&(h.fits?"top"==n||"bottom"==n?h.whole=c.geo.origin.windowOffset.right>=e.__options.minIntersection&&c.geo.window.size.width-c.geo.origin.windowOffset.left>=e.__options.minIntersection:h.whole=c.geo.origin.windowOffset.bottom>=e.__options.minIntersection&&c.geo.window.size.height-c.geo.origin.windowOffset.top>=e.__options.minIntersection:h.whole=!1),g.push(h),h.whole)j=!0;else if("natural"==h.mode&&(h.fits||h.size.width<=c.geo.available[k][n].width))return!1}})}}),e.__instance._trigger({edit:function(a){g=a},event:b,helper:c,results:g,type:"positionTested"}),g.sort(function(a,b){if(a.whole&&!b.whole)return-1;if(!a.whole&&b.whole)return 1;if(a.whole&&b.whole){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}if(a.fits&&!b.fits)return-1;if(!a.fits&&b.fits)return 1;if(a.fits&&b.fits){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}return"document"==a.container&&"bottom"==a.side&&"natural"==a.mode?-1:1}),d=g[0],d.coord={},d.side){case"left":case"right":d.coord.top=Math.floor(d.target-d.size.height/2);break;case"bottom":case"top":d.coord.left=Math.floor(d.target-d.size.width/2)}switch(d.side){case"left":d.coord.left=c.geo.origin.windowOffset.left-d.outerSize.width;break;case"right":d.coord.left=c.geo.origin.windowOffset.right+d.distance.horizontal;break;case"top":d.coord.top=c.geo.origin.windowOffset.top-d.outerSize.height;break;case"bottom":d.coord.top=c.geo.origin.windowOffset.bottom+d.distance.vertical}"window"==d.container?"top"==d.side||"bottom"==d.side?d.coord.left<0?c.geo.origin.windowOffset.right-this.__options.minIntersection>=0?d.coord.left=0:d.coord.left=c.geo.origin.windowOffset.right-this.__options.minIntersection-1:d.coord.left>c.geo.window.size.width-d.size.width&&(c.geo.origin.windowOffset.left+this.__options.minIntersection<=c.geo.window.size.width?d.coord.left=c.geo.window.size.width-d.size.width:d.coord.left=c.geo.origin.windowOffset.left+this.__options.minIntersection+1-d.size.width):d.coord.top<0?c.geo.origin.windowOffset.bottom-this.__options.minIntersection>=0?d.coord.top=0:d.coord.top=c.geo.origin.windowOffset.bottom-this.__options.minIntersection-1:d.coord.top>c.geo.window.size.height-d.size.height&&(c.geo.origin.windowOffset.top+this.__options.minIntersection<=c.geo.window.size.height?d.coord.top=c.geo.window.size.height-d.size.height:d.coord.top=c.geo.origin.windowOffset.top+this.__options.minIntersection+1-d.size.height):(d.coord.left>c.geo.window.size.width-d.size.width&&(d.coord.left=c.geo.window.size.width-d.size.width),d.coord.left<0&&(d.coord.left=0)),e.__sideChange(h,d.side),c.tooltipClone=h[0],c.tooltipParent=e.__instance.option("parent").parent[0],c.mode=d.mode,c.whole=d.whole,c.origin=e.__instance._$origin[0],c.tooltip=e.__instance._$tooltip[0],delete d.container,delete d.fits,delete d.mode,delete d.outerSize,delete d.whole,d.distance=d.distance.horizontal||d.distance.vertical;var l=a.extend(!0,{},d);if(e.__instance._trigger({edit:function(a){d=a},event:b,helper:c,position:l,type:"position"}),e.__options.functionPosition){var m=e.__options.functionPosition.call(e,e.__instance,c,l);m&&(d=m)}i.destroy();var n,o;"top"==d.side||"bottom"==d.side?(n={prop:"left",val:d.target-d.coord.left},o=d.size.width-this.__options.minIntersection):(n={prop:"top",val:d.target-d.coord.top},o=d.size.height-this.__options.minIntersection),n.val<this.__options.minIntersection?n.val=this.__options.minIntersection:n.val>o&&(n.val=o);var p;p=c.geo.origin.fixedLineage?c.geo.origin.windowOffset:{left:c.geo.origin.windowOffset.left+c.geo.window.scroll.left,top:c.geo.origin.windowOffset.top+c.geo.window.scroll.top},d.coord={left:p.left+(d.coord.left-c.geo.origin.windowOffset.left),top:p.top+(d.coord.top-c.geo.origin.windowOffset.top)},e.__sideChange(e.__instance._$tooltip,d.side),c.geo.origin.fixedLineage?e.__instance._$tooltip.css("position","fixed"):e.__instance._$tooltip.css("position",""),e.__instance._$tooltip.css({left:d.coord.left,top:d.coord.top,height:d.size.height,width:d.size.width}).find(".tooltipster-arrow").css({left:"",top:""}).css(n.prop,n.val),e.__instance._$tooltip.appendTo(e.__instance.option("parent")),e.__instance._trigger({type:"repositioned",event:b,position:d})},__sideChange:function(a,b){a.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-"+b)},__targetFind:function(a){var b={},c=this.__instance._$origin[0].getClientRects();if(c.length>1){var d=this.__instance._$origin.css("opacity");1==d&&(this.__instance._$origin.css("opacity",.99),c=this.__instance._$origin[0].getClientRects(),this.__instance._$origin.css("opacity",1))}if(c.length<2)b.top=Math.floor(a.geo.origin.windowOffset.left+a.geo.origin.size.width/2),b.bottom=b.top,b.left=Math.floor(a.geo.origin.windowOffset.top+a.geo.origin.size.height/2),b.right=b.left;else{var e=c[0];b.top=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil(c.length/2)-1]:c[0],b.right=Math.floor(e.top+(e.bottom-e.top)/2),e=c[c.length-1],b.bottom=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil((c.length+1)/2)-1]:c[c.length-1],b.left=Math.floor(e.top+(e.bottom-e.top)/2)}return b}}}),a});
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
    var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function () {
    }, u = !!window.jQuery, v = a(window), w = function (a, c) {
        b.ev.on(o + a + p, c)
    }, x = function (b, c, d, e) {
        var f = document.createElement("div");
        return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
    }, y = function (c, d) {
        b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    }, z = function (c) {
        return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
    }, A = function () {
        a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
    }, B = function () {
        var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== a.transition)return !0;
        for (; b.length;)if (b.pop() + "Transition"in a)return !0;
        return !1
    };
    t.prototype = {
        constructor: t, init: function () {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        }, open: function (c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                    b.index = e;
                    break
                }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen)return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function () {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(), n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        }, close: function () {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
                b._close()
            }, b.st.removalDelay)) : b._close())
        }, _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {marginRight: ""};
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        }, updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        }, updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        }, appendContent: function (a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        }, parseEl: function (c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {el: a(e)} : (d = e.type, e = {data: e, src: e.src}), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)if (e.el.hasClass("mfp-" + f[g])) {
                    d = f[g];
                    break
                }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        }, addGroup: function (a, c) {
            var d = function (d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        }, _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)if (a.isFunction(g)) {
                    if (!g.call(b))return !0
                } else if (v.width() < g)return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        }, updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {status: a, text: d};
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        }, _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick;
                if (d && e)return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0])return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d)return !0
                } else if (e && a.contains(document, c))return !0;
                return !1
            }
        }, _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        }, _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        }, _hasScrollBar: function (a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        }, _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        }, _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        }, _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
                if (void 0 === d || d === !1)return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        }, _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function (b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function () {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function (b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close"><span>&#215;</span></button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function (c) {
        A();
        var d = a(this);
        if ("string" == typeof c)if ("open" === c) {
            var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
            f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({mfpEl: e}, d, f)
        } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline", G = function () {
        E && (D.after(E.addClass(C)).detach(), E = null)
    };
    a.magnificPopup.registerModule(F, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
        proto: {
            initInline: function () {
                b.types.push(F), w(h + "." + F, function () {
                    G()
                })
            }, getInline: function (c, d) {
                if (G(), c.src) {
                    var e = b.st.inline, f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax", J = function () {
        H && a(document.body).removeClass(H)
    }, K = function () {
        J(), b.req && b.req.abort()
    };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            }, getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src, success: function (d, e, f) {
                        var g = {data: d, xhr: f};
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    }, error: function () {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function (c) {
        if (c.data && void 0 !== c.data.title)return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d))return d.call(b, c);
            if (c.el)return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"><span>&#215;</span></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var c = b.st.image, d = ".image";
                b.types.push("image"), w(m + d, function () {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function () {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            }, resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            }, _onImageHasSize: function (a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            }, findImageSize: function (a) {
                var c = 0, d = a.img[0], e = function (f) {
                    L && clearInterval(L), L = setInterval(function () {
                        return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                    }, f)
                };
                e(1)
            }, getImage: function (c, d) {
                var e = 0, f = function () {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                }, g = function () {
                    c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                }, h = b.st.image, i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function () {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (a) {
                return a.is("img") ? a : a.find("img")
            }
        }, proto: {
            initZoom: function () {
                var a, c = b.st.zoom, d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration, j = function (a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + c.duration / 1e3 + "s " + c.easing, e = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }, f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                    }, k = function () {
                        b.content.css("visibility", "visible")
                    };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a)return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                                f.css(b._getOffset(!0)), e = setTimeout(function () {
                                    k(), setTimeout(function () {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a)return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function () {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            }, _allowZoom: function () {
                return "image" === b.currItem.type
            }, _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1
            }, _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f};
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe", Q = "//about:blank", R = function (a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");
            c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"><span>&#215;</span></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                b.types.push(P), w("BeforeChange", function (a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function () {
                    R()
                })
            }, getIframe: function (c, d) {
                var e = c.src, f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function (a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a
    }, T = function (a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var c = b.st.gallery, e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function (a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function (a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function (a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function () {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup, e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s), f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function () {
                            b.prev()
                        }), f.click(function () {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function () {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function () {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            }, next: function () {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            }, prev: function () {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            }, goTo: function (a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            }, preloadNearbyImages: function () {
                var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++)b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++)b._preloadItem(b.index - a)
            }, _preloadItem: function (c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
                        d.hasSize = !0
                    }).on("error.mfploader", function () {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina, c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
                        b.img.css({"max-width": b.img[0].naturalWidth / c, width: "100%"})
                    }), w("ElementParse." + U, function (b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});
/*! sly 1.6.1 - 8th Aug 2015 | https://github.com/darsain/sly */
!function(a,b,c){"use strict";function d(b,p,q){function K(c){var d=0,e=Gb.length;if(yb.old=a.extend({},yb),wb=tb?0:ub[rb.horizontal?"width":"height"](),Bb=zb[rb.horizontal?"width":"height"](),xb=tb?b:vb[rb.horizontal?"outerWidth":"outerHeight"](),Gb.length=0,yb.start=0,yb.end=H(xb-wb,0),Rb){d=Ib.length,Hb=vb.children(rb.itemSelector),Ib.length=0;var f,g=j(vb,rb.horizontal?"paddingLeft":"paddingTop"),h=j(vb,rb.horizontal?"paddingRight":"paddingBottom"),i="border-box"===a(Hb).css("boxSizing"),l="none"!==Hb.css("float"),m=0,n=Hb.length-1;xb=0,Hb.each(function(b,c){var d=a(c),e=c.getBoundingClientRect(),i=G(rb.horizontal?e.width||e.right-e.left:e.height||e.bottom-e.top),k=j(d,rb.horizontal?"marginLeft":"marginTop"),o=j(d,rb.horizontal?"marginRight":"marginBottom"),p=i+k+o,q=!k||!o,r={};r.el=c,r.size=q?i:p,r.half=r.size/2,r.start=xb+(q?k:0),r.center=r.start-G(wb/2-r.size/2),r.end=r.start-wb+r.size,b||(xb+=g),xb+=p,rb.horizontal||l||o&&k&&b>0&&(xb-=I(k,o)),b===n&&(r.end+=h,xb+=h,m=q?o:0),Ib.push(r),f=r}),vb[0].style[rb.horizontal?"width":"height"]=(i?xb:xb-g-h)+"px",xb-=m,Ib.length?(yb.start=Ib[0][Pb?"center":"start"],yb.end=Pb?f.center:xb>wb?f.end:yb.start):yb.start=yb.end=0}if(yb.center=G(yb.end/2+yb.start/2),V(),Ab.length&&Bb>0&&(rb.dynamicHandle?(Cb=yb.start===yb.end?Bb:G(Bb*wb/xb),Cb=k(Cb,rb.minHandleSize,Bb),Ab[0].style[rb.horizontal?"width":"height"]=Cb+"px"):Cb=Ab[rb.horizontal?"outerWidth":"outerHeight"](),Db.end=Bb-Cb,ec||N()),!tb&&wb>0){var o=yb.start,p="";if(Rb)a.each(Ib,function(a,b){Pb?Gb.push(b.center):b.start+b.size>o&&o<=yb.end&&(o=b.start,Gb.push(o),o+=wb,o>yb.end&&o<yb.end+wb&&Gb.push(yb.end))});else for(;o-wb<yb.end;)Gb.push(o),o+=wb;if(Eb[0]&&e!==Gb.length){for(var q=0;q<Gb.length;q++)p+=rb.pageBuilder.call(sb,q);Fb=Eb.html(p).children(),Fb.eq(Jb.activePage).addClass(rb.activeClass)}}if(Jb.slideeSize=xb,Jb.frameSize=wb,Jb.sbSize=Bb,Jb.handleSize=Cb,Rb){c&&null!=rb.startAt&&(T(rb.startAt),sb[Qb?"toCenter":"toStart"](rb.startAt));var r=Ib[Jb.activeItem];L(Qb&&r?r.center:k(yb.dest,yb.start,yb.end))}else c?null!=rb.startAt&&L(rb.startAt,1):L(k(yb.dest,yb.start,yb.end));ob("load")}function L(a,b,c){if(Rb&&cc.released&&!c){var d=U(a),e=a>yb.start&&a<yb.end;Qb?(e&&(a=Ib[d.centerItem].center),Pb&&rb.activateMiddle&&T(d.centerItem)):e&&(a=Ib[d.firstItem].start)}cc.init&&cc.slidee&&rb.elasticBounds?a>yb.end?a=yb.end+(a-yb.end)/6:a<yb.start&&(a=yb.start+(a-yb.start)/6):a=k(a,yb.start,yb.end),ac.start=+new Date,ac.time=0,ac.from=yb.cur,ac.to=a,ac.delta=a-yb.cur,ac.tweesing=cc.tweese||cc.init&&!cc.slidee,ac.immediate=!ac.tweesing&&(b||cc.init&&cc.slidee||!rb.speed),cc.tweese=0,a!==yb.dest&&(yb.dest=a,ob("change"),ec||M()),Z(),V(),W(),O()}function M(){if(sb.initialized){if(!ec)return ec=t(M),void(cc.released&&ob("moveStart"));ac.immediate?yb.cur=ac.to:ac.tweesing?(ac.tweeseDelta=ac.to-yb.cur,D(ac.tweeseDelta)<.1?yb.cur=ac.to:yb.cur+=ac.tweeseDelta*(cc.released?rb.swingSpeed:rb.syncSpeed)):(ac.time=I(+new Date-ac.start,rb.speed),yb.cur=ac.from+ac.delta*a.easing[rb.easing](ac.time/rb.speed,ac.time,0,1,rb.speed)),ac.to===yb.cur?(yb.cur=ac.to,cc.tweese=ec=0):ec=t(M),ob("move"),tb||(m?vb[0].style[m]=n+(rb.horizontal?"translateX":"translateY")+"("+-yb.cur+"px)":vb[0].style[rb.horizontal?"left":"top"]=-G(yb.cur)+"px"),!ec&&cc.released&&ob("moveEnd"),N()}}function N(){Ab.length&&(Db.cur=yb.start===yb.end?0:((cc.init&&!cc.slidee?yb.dest:yb.cur)-yb.start)/(yb.end-yb.start)*Db.end,Db.cur=k(G(Db.cur),Db.start,Db.end),_b.hPos!==Db.cur&&(_b.hPos=Db.cur,m?Ab[0].style[m]=n+(rb.horizontal?"translateX":"translateY")+"("+Db.cur+"px)":Ab[0].style[rb.horizontal?"left":"top"]=Db.cur+"px"))}function O(){Fb[0]&&_b.page!==Jb.activePage&&(_b.page=Jb.activePage,Fb.removeClass(rb.activeClass).eq(Jb.activePage).addClass(rb.activeClass),ob("activePage",_b.page))}function P(){bc.speed&&yb.cur!==(bc.speed>0?yb.end:yb.start)||sb.stop(),hc=cc.init?t(P):0,bc.now=+new Date,bc.pos=yb.cur+(bc.now-bc.lastTime)/1e3*bc.speed,L(cc.init?bc.pos:G(bc.pos)),cc.init||yb.cur!==yb.dest||ob("moveEnd"),bc.lastTime=bc.now}function Q(a,b,d){if("boolean"===e(b)&&(d=b,b=c),b===c)L(yb[a],d);else{if(Qb&&"center"!==a)return;var f=sb.getPos(b);f&&L(f[a],d,!Qb)}}function R(a){return null!=a?i(a)?a>=0&&a<Ib.length?a:-1:Hb.index(a):-1}function S(a){return R(i(a)&&0>a?a+Ib.length:a)}function T(a,b){var c=R(a);return!Rb||0>c?!1:((_b.active!==c||b)&&(Hb.eq(Jb.activeItem).removeClass(rb.activeClass),Hb.eq(c).addClass(rb.activeClass),_b.active=Jb.activeItem=c,W(),ob("active",c)),c)}function U(a){a=k(i(a)?a:yb.dest,yb.start,yb.end);var b={},c=Pb?0:wb/2;if(!tb)for(var d=0,e=Gb.length;e>d;d++){if(a>=yb.end||d===Gb.length-1){b.activePage=Gb.length-1;break}if(a<=Gb[d]+c){b.activePage=d;break}}if(Rb){for(var f=!1,g=!1,h=!1,j=0,l=Ib.length;l>j;j++)if(f===!1&&a<=Ib[j].start+Ib[j].half&&(f=j),h===!1&&a<=Ib[j].center+Ib[j].half&&(h=j),j===l-1||a<=Ib[j].end+Ib[j].half){g=j;break}b.firstItem=i(f)?f:0,b.centerItem=i(h)?h:b.firstItem,b.lastItem=i(g)?g:b.centerItem}return b}function V(b){a.extend(Jb,U(b))}function W(){var a=yb.dest<=yb.start,b=yb.dest>=yb.end,c=(a?1:0)|(b?2:0);if(_b.slideePosState!==c&&(_b.slideePosState=c,Yb.is("button,input")&&Yb.prop("disabled",a),Zb.is("button,input")&&Zb.prop("disabled",b),Yb.add(Vb)[a?"addClass":"removeClass"](rb.disabledClass),Zb.add(Ub)[b?"addClass":"removeClass"](rb.disabledClass)),_b.fwdbwdState!==c&&cc.released&&(_b.fwdbwdState=c,Vb.is("button,input")&&Vb.prop("disabled",a),Ub.is("button,input")&&Ub.prop("disabled",b)),Rb&&null!=Jb.activeItem){var d=0===Jb.activeItem,e=Jb.activeItem>=Ib.length-1,f=(d?1:0)|(e?2:0);_b.itemsButtonState!==f&&(_b.itemsButtonState=f,Wb.is("button,input")&&Wb.prop("disabled",d),Xb.is("button,input")&&Xb.prop("disabled",e),Wb[d?"addClass":"removeClass"](rb.disabledClass),Xb[e?"addClass":"removeClass"](rb.disabledClass))}}function X(a,b,c){if(a=S(a),b=S(b),a>-1&&b>-1&&a!==b&&(!c||b!==a-1)&&(c||b!==a+1)){Hb.eq(a)[c?"insertAfter":"insertBefore"](Ib[b].el);var d=b>a?a:c?b:b-1,e=a>b?a:c?b+1:b,f=a>b;null!=Jb.activeItem&&(a===Jb.activeItem?_b.active=Jb.activeItem=c?f?b+1:b:f?b:b-1:Jb.activeItem>d&&Jb.activeItem<e&&(_b.active=Jb.activeItem+=f?1:-1)),K()}}function Y(a,b){for(var c=0,d=$b[a].length;d>c;c++)if($b[a][c]===b)return c;return-1}function Z(){cc.released&&!sb.isPaused&&sb.resume()}function $(a){return G(k(a,Db.start,Db.end)/Db.end*(yb.end-yb.start))+yb.start}function _(){cc.history[0]=cc.history[1],cc.history[1]=cc.history[2],cc.history[2]=cc.history[3],cc.history[3]=cc.delta}function ab(a){cc.released=0,cc.source=a,cc.slidee="slidee"===a}function bb(b){var c="touchstart"===b.type,d=b.data.source,e="slidee"===d;cc.init||!c&&eb(b.target)||("handle"!==d||rb.dragHandle&&Db.start!==Db.end)&&(!e||(c?rb.touchDragging:rb.mouseDragging&&b.which<2))&&(c||f(b),ab(d),cc.init=0,cc.$source=a(b.target),cc.touch=c,cc.pointer=c?b.originalEvent.touches[0]:b,cc.initX=cc.pointer.pageX,cc.initY=cc.pointer.pageY,cc.initPos=e?yb.cur:Db.cur,cc.start=+new Date,cc.time=0,cc.path=0,cc.delta=0,cc.locked=0,cc.history=[0,0,0,0],cc.pathToLock=e?c?30:10:0,u.on(c?x:w,cb),sb.pause(1),(e?vb:Ab).addClass(rb.draggedClass),ob("moveStart"),e&&(fc=setInterval(_,10)))}function cb(a){if(cc.released="mouseup"===a.type||"touchend"===a.type,cc.pointer=cc.touch?a.originalEvent[cc.released?"changedTouches":"touches"][0]:a,cc.pathX=cc.pointer.pageX-cc.initX,cc.pathY=cc.pointer.pageY-cc.initY,cc.path=E(F(cc.pathX,2)+F(cc.pathY,2)),cc.delta=rb.horizontal?cc.pathX:cc.pathY,cc.released||!(cc.path<1)){if(!cc.init){if(cc.path<rb.dragThreshold)return cc.released?db():c;if(!(rb.horizontal?D(cc.pathX)>D(cc.pathY):D(cc.pathX)<D(cc.pathY)))return db();cc.init=1}f(a),!cc.locked&&cc.path>cc.pathToLock&&cc.slidee&&(cc.locked=1,cc.$source.on(z,g)),cc.released&&(db(),rb.releaseSwing&&cc.slidee&&(cc.swing=(cc.delta-cc.history[0])/40*300,cc.delta+=cc.swing,cc.tweese=D(cc.swing)>10)),L(cc.slidee?G(cc.initPos-cc.delta):$(cc.initPos+cc.delta))}}function db(){clearInterval(fc),cc.released=!0,u.off(cc.touch?x:w,cb),(cc.slidee?vb:Ab).removeClass(rb.draggedClass),setTimeout(function(){cc.$source.off(z,g)}),yb.cur===yb.dest&&cc.init&&ob("moveEnd"),sb.resume(1),cc.init=0}function eb(b){return~a.inArray(b.nodeName,B)||a(b).is(rb.interactive)}function fb(){sb.stop(),u.off("mouseup",fb)}function gb(a){switch(f(a),this){case Ub[0]:case Vb[0]:sb.moveBy(Ub.is(this)?rb.moveBy:-rb.moveBy),u.on("mouseup",fb);break;case Wb[0]:sb.prev();break;case Xb[0]:sb.next();break;case Yb[0]:sb.prevPage();break;case Zb[0]:sb.nextPage()}}function hb(a){return dc.curDelta=(rb.horizontal?a.deltaY||a.deltaX:a.deltaY)||-a.wheelDelta,dc.curDelta/=1===a.deltaMode?3:100,Rb?(o=+new Date,dc.last<o-dc.resetTime&&(dc.delta=0),dc.last=o,dc.delta+=dc.curDelta,D(dc.delta)<1?dc.finalDelta=0:(dc.finalDelta=G(dc.delta/1),dc.delta%=1),dc.finalDelta):dc.curDelta}function ib(a){a.originalEvent[r]=sb;var b=+new Date;if(J+rb.scrollHijack>b&&Sb[0]!==document&&Sb[0]!==window)return void(J=b);if(rb.scrollBy&&yb.start!==yb.end){var c=hb(a.originalEvent);(rb.scrollTrap||c>0&&yb.dest<yb.end||0>c&&yb.dest>yb.start)&&f(a,1),sb.slideBy(rb.scrollBy*c)}}function jb(a){rb.clickBar&&a.target===zb[0]&&(f(a),L($((rb.horizontal?a.pageX-zb.offset().left:a.pageY-zb.offset().top)-Cb/2)))}function kb(a){if(rb.keyboardNavBy)switch(a.which){case rb.horizontal?37:38:f(a),sb["pages"===rb.keyboardNavBy?"prevPage":"prev"]();break;case rb.horizontal?39:40:f(a),sb["pages"===rb.keyboardNavBy?"nextPage":"next"]()}}function lb(a){return eb(this)?void(a.originalEvent[r+"ignore"]=!0):void(this.parentNode!==vb[0]||a.originalEvent[r+"ignore"]||sb.activate(this))}function mb(){this.parentNode===Eb[0]&&sb.activatePage(Fb.index(this))}function nb(a){rb.pauseOnHover&&sb["mouseenter"===a.type?"pause":"resume"](2)}function ob(a,b){if($b[a]){for(qb=$b[a].length,C.length=0,pb=0;qb>pb;pb++)C.push($b[a][pb]);for(pb=0;qb>pb;pb++)C[pb].call(sb,a,b)}}if(!(this instanceof d))return new d(b,p,q);var pb,qb,rb=a.extend({},d.defaults,p),sb=this,tb=i(b),ub=a(b),vb=rb.slidee?a(rb.slidee).eq(0):ub.children().eq(0),wb=0,xb=0,yb={start:0,center:0,end:0,cur:0,dest:0},zb=a(rb.scrollBar).eq(0),Ab=zb.children().eq(0),Bb=0,Cb=0,Db={start:0,end:0,cur:0},Eb=a(rb.pagesBar),Fb=0,Gb=[],Hb=0,Ib=[],Jb={firstItem:0,lastItem:0,centerItem:0,activeItem:null,activePage:0},Kb=new l(ub[0]),Lb=new l(vb[0]),Mb=new l(zb[0]),Nb=new l(Ab[0]),Ob="basic"===rb.itemNav,Pb="forceCentered"===rb.itemNav,Qb="centered"===rb.itemNav||Pb,Rb=!tb&&(Ob||Qb||Pb),Sb=rb.scrollSource?a(rb.scrollSource):ub,Tb=rb.dragSource?a(rb.dragSource):ub,Ub=a(rb.forward),Vb=a(rb.backward),Wb=a(rb.prev),Xb=a(rb.next),Yb=a(rb.prevPage),Zb=a(rb.nextPage),$b={},_b={},ac={},bc={},cc={released:1},dc={last:0,delta:0,resetTime:200},ec=0,fc=0,gc=0,hc=0;tb||(b=ub[0]),sb.initialized=0,sb.frame=b,sb.slidee=vb[0],sb.pos=yb,sb.rel=Jb,sb.items=Ib,sb.pages=Gb,sb.isPaused=0,sb.options=rb,sb.dragging=cc,sb.reload=function(){K()},sb.getPos=function(a){if(Rb){var b=R(a);return-1!==b?Ib[b]:!1}var c=vb.find(a).eq(0);if(c[0]){var d=rb.horizontal?c.offset().left-vb.offset().left:c.offset().top-vb.offset().top,e=c[rb.horizontal?"outerWidth":"outerHeight"]();return{start:d,center:d-wb/2+e/2,end:d-wb+e,size:e}}return!1},sb.moveBy=function(a){bc.speed=a,!cc.init&&bc.speed&&yb.cur!==(bc.speed>0?yb.end:yb.start)&&(bc.lastTime=+new Date,bc.startPos=yb.cur,ab("button"),cc.init=1,ob("moveStart"),s(hc),P())},sb.stop=function(){"button"===cc.source&&(cc.init=0,cc.released=1)},sb.prev=function(){sb.activate(null==Jb.activeItem?0:Jb.activeItem-1)},sb.next=function(){sb.activate(null==Jb.activeItem?0:Jb.activeItem+1)},sb.prevPage=function(){sb.activatePage(Jb.activePage-1)},sb.nextPage=function(){sb.activatePage(Jb.activePage+1)},sb.slideBy=function(a,b){a&&(Rb?sb[Qb?"toCenter":"toStart"](k((Qb?Jb.centerItem:Jb.firstItem)+rb.scrollBy*a,0,Ib.length)):L(yb.dest+a,b))},sb.slideTo=function(a,b){L(a,b)},sb.toStart=function(a,b){Q("start",a,b)},sb.toEnd=function(a,b){Q("end",a,b)},sb.toCenter=function(a,b){Q("center",a,b)},sb.getIndex=R,sb.activate=function(a,b){var c=T(a);rb.smart&&c!==!1&&(Qb?sb.toCenter(c,b):c>=Jb.lastItem?sb.toStart(c,b):c<=Jb.firstItem?sb.toEnd(c,b):Z())},sb.activatePage=function(a,b){i(a)&&L(Gb[k(a,0,Gb.length-1)],b)},sb.resume=function(a){rb.cycleBy&&rb.cycleInterval&&("items"!==rb.cycleBy||Ib[0]&&null!=Jb.activeItem)&&!(a<sb.isPaused)&&(sb.isPaused=0,gc?gc=clearTimeout(gc):ob("resume"),gc=setTimeout(function(){switch(ob("cycle"),rb.cycleBy){case"items":sb.activate(Jb.activeItem>=Ib.length-1?0:Jb.activeItem+1);break;case"pages":sb.activatePage(Jb.activePage>=Gb.length-1?0:Jb.activePage+1)}},rb.cycleInterval))},sb.pause=function(a){a<sb.isPaused||(sb.isPaused=a||100,gc&&(gc=clearTimeout(gc),ob("pause")))},sb.toggle=function(){sb[gc?"pause":"resume"]()},sb.set=function(b,c){a.isPlainObject(b)?a.extend(rb,b):rb.hasOwnProperty(b)&&(rb[b]=c)},sb.add=function(b,c){var d=a(b);Rb?(null==c||!Ib[0]||c>=Ib.length?d.appendTo(vb):Ib.length&&d.insertBefore(Ib[c].el),null!=Jb.activeItem&&c<=Jb.activeItem&&(_b.active=Jb.activeItem+=d.length)):vb.append(d),K()},sb.remove=function(b){if(Rb){var c=S(b);if(c>-1){Hb.eq(c).remove();var d=c===Jb.activeItem;null!=Jb.activeItem&&c<Jb.activeItem&&(_b.active=--Jb.activeItem),K(),d&&(_b.active=null,sb.activate(Jb.activeItem))}}else a(b).remove(),K()},sb.moveAfter=function(a,b){X(a,b,1)},sb.moveBefore=function(a,b){X(a,b)},sb.on=function(a,b){if("object"===e(a))for(var c in a)a.hasOwnProperty(c)&&sb.on(c,a[c]);else if("function"===e(b))for(var d=a.split(" "),f=0,g=d.length;g>f;f++)$b[d[f]]=$b[d[f]]||[],-1===Y(d[f],b)&&$b[d[f]].push(b);else if("array"===e(b))for(var h=0,i=b.length;i>h;h++)sb.on(a,b[h])},sb.one=function(a,b){function c(){b.apply(sb,arguments),sb.off(a,c)}sb.on(a,c)},sb.off=function(a,b){if(b instanceof Array)for(var c=0,d=b.length;d>c;c++)sb.off(a,b[c]);else for(var e=a.split(" "),f=0,g=e.length;g>f;f++)if($b[e[f]]=$b[e[f]]||[],null==b)$b[e[f]].length=0;else{var h=Y(e[f],b);-1!==h&&$b[e[f]].splice(h,1)}},sb.destroy=function(){return d.removeInstance(b),Sb.add(Ab).add(zb).add(Eb).add(Ub).add(Vb).add(Wb).add(Xb).add(Yb).add(Zb).off("."+r),u.off("keydown",kb),Wb.add(Xb).add(Yb).add(Zb).removeClass(rb.disabledClass),Hb&&null!=Jb.activeItem&&Hb.eq(Jb.activeItem).removeClass(rb.activeClass),Eb.empty(),tb||(ub.off("."+r),Kb.restore(),Lb.restore(),Mb.restore(),Nb.restore(),a.removeData(b,r)),Ib.length=Gb.length=0,_b={},sb.initialized=0,sb},sb.init=function(){if(!sb.initialized){if(d.getInstance(b))throw new Error("There is already a Sly instance on this element");d.storeInstance(b,sb),sb.on(q);var a=["overflow","position"],c=["position","webkitTransform","msTransform","transform","left","top","width","height"];Kb.save.apply(Kb,a),Mb.save.apply(Mb,a),Lb.save.apply(Lb,c),Nb.save.apply(Nb,c);var e=Ab;return tb||(e=e.add(vb),ub.css("overflow","hidden"),m||"static"!==ub.css("position")||ub.css("position","relative")),m?n&&e.css(m,n):("static"===zb.css("position")&&zb.css("position","relative"),e.css({position:"absolute"})),rb.forward&&Ub.on(A,gb),rb.backward&&Vb.on(A,gb),rb.prev&&Wb.on(z,gb),rb.next&&Xb.on(z,gb),rb.prevPage&&Yb.on(z,gb),rb.nextPage&&Zb.on(z,gb),Sb.on(y,ib),zb[0]&&zb.on(z,jb),Rb&&rb.activateOn&&ub.on(rb.activateOn+"."+r,"*",lb),Eb[0]&&rb.activatePageOn&&Eb.on(rb.activatePageOn+"."+r,"*",mb),Tb.on(v,{source:"slidee"},bb),Ab&&Ab.on(v,{source:"handle"},bb),u.on("keydown",kb),tb||(ub.on("mouseenter."+r+" mouseleave."+r,nb),ub.on("scroll."+r,h)),sb.initialized=1,K(!0),rb.cycleBy&&!tb&&sb[rb.startPaused?"pause":"resume"](),sb}}}function e(a){return null==a?String(a):"object"==typeof a||"function"==typeof a?Object.prototype.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof a}function f(a,b){a.preventDefault(),b&&a.stopPropagation()}function g(b){f(b,1),a(this).off(b.type,g)}function h(){this.scrollLeft=0,this.scrollTop=0}function i(a){return!isNaN(parseFloat(a))&&isFinite(a)}function j(a,b){return 0|G(String(a.css(b)).replace(/[^\-0-9.]/g,""))}function k(a,b,c){return b>a?b:a>c?c:a}function l(a){var b={};return b.style={},b.save=function(){if(a&&a.nodeType){for(var c=0;c<arguments.length;c++)b.style[arguments[c]]=a.style[arguments[c]];return b}},b.restore=function(){if(a&&a.nodeType){for(var c in b.style)b.style.hasOwnProperty(c)&&(a.style[c]=b.style[c]);return b}},b}var m,n,o,p="sly",q="Sly",r=p,s=b.cancelAnimationFrame||b.cancelRequestAnimationFrame,t=b.requestAnimationFrame,u=a(document),v="touchstart."+r+" mousedown."+r,w="mousemove."+r+" mouseup."+r,x="touchmove."+r+" touchend."+r,y=(document.implementation.hasFeature("Event.wheel","3.0")?"wheel.":"mousewheel.")+r,z="click."+r,A="mousedown."+r,B=["INPUT","SELECT","BUTTON","TEXTAREA"],C=[],D=Math.abs,E=Math.sqrt,F=Math.pow,G=Math.round,H=Math.max,I=Math.min,J=0;u.on(y,function(a){var b=a.originalEvent[r],c=+new Date;(!b||b.options.scrollHijack<c-J)&&(J=c)}),d.getInstance=function(b){return a.data(b,r)},d.storeInstance=function(b,c){return a.data(b,r,c)},d.removeInstance=function(b){return a.removeData(b,r)},function(a){function b(a){var b=(new Date).getTime(),d=Math.max(0,16-(b-c)),e=setTimeout(a,d);return c=b,e}t=a.requestAnimationFrame||a.webkitRequestAnimationFrame||b;var c=(new Date).getTime(),d=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.clearTimeout;s=function(b){d.call(a,b)}}(window),function(){function a(a){for(var d=0,e=b.length;e>d;d++){var f=b[d]?b[d]+a.charAt(0).toUpperCase()+a.slice(1):a;if(null!=c.style[f])return f}}var b=["","Webkit","Moz","ms","O"],c=document.createElement("div");m=a("transform"),n=a("perspective")?"translateZ(0) ":""}(),b[q]=d,a.fn[p]=function(b,c){var f,g;return a.isPlainObject(b)||(("string"===e(b)||b===!1)&&(f=b===!1?"destroy":b,g=Array.prototype.slice.call(arguments,1)),b={}),this.each(function(a,e){var h=d.getInstance(e);h||f?h&&f&&h[f]&&h[f].apply(h,g):h=new d(e,b,c).init()})},d.defaults={slidee:null,horizontal:!1,itemNav:null,itemSelector:null,smart:!1,activateOn:null,activateMiddle:!1,scrollSource:null,scrollBy:0,scrollHijack:300,scrollTrap:!1,dragSource:null,mouseDragging:!1,touchDragging:!1,releaseSwing:!1,swingSpeed:.2,elasticBounds:!1,dragThreshold:3,interactive:null,scrollBar:null,dragHandle:!1,dynamicHandle:!1,minHandleSize:50,clickBar:!1,syncSpeed:.5,pagesBar:null,activatePageOn:null,pageBuilder:function(a){return"<li>"+(a+1)+"</li>"},forward:null,backward:null,prev:null,next:null,prevPage:null,nextPage:null,cycleBy:null,cycleInterval:5e3,pauseOnHover:!1,startPaused:!1,moveBy:300,speed:0,easing:"swing",startAt:null,keyboardNavBy:null,draggedClass:"dragged",activeClass:"active",disabledClass:"disabled"}}(jQuery,window);/**
 * Created by Анатолий on 06.10.2016.
 */

// 'use strict';
//
// var Header = {
//
//     init: function() {
//         this.events();
//     },
//
//     fixed: function() {
//         jQuery('.header-top').addClass('fixed');
//     },
//
//     hideMenu: function() {
//         $('.header-menu').css({
//             'visibility':'hidden',
//             'opacity':'0'
//         });
//         $('.bg-fix').css({
//             'visibility':'hidden',
//             'opacity':'0'
//         });
//         jQuery('body').removeClass('menu-open');
//
//     },
//
//     events: function() {
//
//             Header.fixed();
//
//         //
//         jQuery('#js-open-menu').mouseover(function(event) {
//
//             event.preventDefault();
//             jQuery('body').addClass('menu-open');
//              $(this).addClass('is-active');
//
//         })
//
//
//         jQuery('.header-nav').on('click', '#js-close-menu', function(event) {
//             event.preventDefault();
//             Header.hideMenu();
//         });
//
//         jQuery('.js-menu-toggle').click(function(event) {
//             event.preventDefault();
//
//             var element = jQuery(this),
//                 data_parent = element.data('parent'),
//                 data_menu = element.data('menu'),
//                 menu = element.closest(data_parent).find(data_menu);
//
//             element.toggleClass('active');
//             menu.slideToggle();
//         });
//
//     }
// };



'use strict';

(function ($) {


    var methods = {

        init : function(options) {
            return this.each(function() {
                //var settings = $.extend({}, options);
                var self = $(this);

                self.find('.counter-nav').click(function(event) {
                    event.preventDefault();

                    var val,
                        $this = $(this),
                        oper = $this.attr('data-rel'),
                        obj = $this.closest('.counter').find('.counter-val'),
                        obj_input = ( obj.get(0).tagName == 'INPUT' ) ? true : false;

                    (obj_input) ? val = parseInt( obj.val() ) : val = parseInt( obj.html() );

                    ( isNaN(val) ) ? val = 0 : false;

                    switch ( oper ) {
                        case "+1":
                            val++;
                            break;
                        case "-1":
                            if ( val > 1 ) {
                                val--;
                                break;
                            }
                    }

                    ( val==1 ) ? $this.closest('.counter').find('.counter-nav.prev').addClass('default') : $this.closest('.counter').find('.counter-nav.prev').removeClass('default');

                    (obj_input) ? obj.val( val ) : obj.html( val );
                });

                self.find('input.counter-val').keyup(function() {
                    var val = $(this).val().replace(/[^0-9]/, '');
                    $(this).val(val);
                });

            });
        }
    };

    $.fn.counter = function (method) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод с именем ' +  method + ' не существует для jQuery.counter' );
        }
    };

})(jQuery);

'use strict';


var MobileMenu = {
    show : function( element ) {
        element.addClass('x close active');
        jQuery('.mobile-container').addClass('show');
        jQuery('body').addClass('overflow');
        $('.mobile-nav-bt').addClass('disable');
    },

    hide : function( element ) {
        element.removeClass('x close active');
        jQuery('.mobile-container').removeClass('show');
        jQuery('body').removeClass('overflow');
        $('.mobile-nav-bt').removeClass('disable');
    },

    events : function() {
        jQuery('.mobile-nav-bt').click(function( event ) {
            event.stopPropagation();
        });

        jQuery('.mobile-container').click(function( event ) {
            event.stopPropagation();
        });

        jQuery('html').click(function() {
            MobileMenu.hide( jQuery('.mobile-nav-bt') );
        });
    }
}

jQuery(function() {
    MobileMenu.events();

    jQuery('#open-mob-menu').click(function(e) {
        e.preventDefault();
        ( jQuery(this).hasClass('active') ) ? MobileMenu.hide( jQuery(this) ) : MobileMenu.show( jQuery('.mobile-container') );
    });
});


var Catalog = {
    show : function( element ) {
        // var container = jQuery('.mobile-inside');
        element.addClass('close active');
        jQuery('.catalog-aside').addClass('show');
        jQuery('body').addClass('overflow');
    },

    hide : function( element ) {
        // var container = $('.mobile-inside');
        element.removeClass('close active');
        jQuery('.catalog-aside').removeClass('show');
        jQuery('body').removeClass('overflow');
    },

    events : function() {
        jQuery('.mob-filter').click(function( event ) {
            event.preventDefault();
            event.stopPropagation();
        });
    }
}

jQuery(function() {
    Catalog.events();

    jQuery('.mob-filter').click(function() {

        ( jQuery(this).hasClass('active') ) ? Catalog.hide( jQuery(this) ) : Catalog.show( jQuery(this) );
    });
});

function setHeighMobi() {
    var footerHeight = $('.mobile-menu__footer').outerHeight();
    var headerHheight = $('.mobile-menu__header').outerHeight();
    var screenHeight = $(window).height();

    if ($(window).width() < 1025) {
        var calc = screenHeight - headerHheight - footerHeight;
        $('.mobile-menu__body').css('height', calc + 'px');
    }
};

setHeighMobi();


function resizeCatalog() {
    var headerHeight  = $('.header-top').outerHeight();
    $('.catalog-aside').css('margin-top', headerHeight + 'px');

}

if($(window).width()<767) {
    resizeCatalog();
    $(window).resize(resizeCatalog);
}


jQuery(window).resize(setHeighMobi);





/*


    jQuery Masked Input Plugin


    Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)


    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)


    Version: 1.4.1


*/


!function(factory) {


    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : factory("object" == typeof exports ? require("jquery") : jQuery);


}(function($) {


    var caretTimeoutId, ua = navigator.userAgent, iPhone = /iphone/i.test(ua), chrome = /chrome/i.test(ua), android = /android/i.test(ua);


    $.mask = {


        definitions: {


            "9": "[0-9]",


            a: "[A-Za-z]",


            "*": "[A-Za-z0-9]"


        },


        autoclear: !0,


        dataName: "rawMaskFn",


        placeholder: "_"


    }, $.fn.extend({


        caret: function(begin, end) {


            var range;


            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof begin ? (end = "number" == typeof end ? end : begin,


            this.each(function() {


                this.setSelectionRange ? this.setSelectionRange(begin, end) : this.createTextRange && (range = this.createTextRange(),


                range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin),


                range.select());


            })) : (this[0].setSelectionRange ? (begin = this[0].selectionStart, end = this[0].selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(),


            begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length),


            {


                begin: begin,


                end: end


            });


        },


        unmask: function() {


            return this.trigger("unmask");


        },


        mask: function(mask, settings) {


            var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;


            if (!mask && this.length > 0) {


                input = $(this[0]);


                var fn = input.data($.mask.dataName);


                return fn ? fn() : void 0;


            }


            return settings = $.extend({


                autoclear: $.mask.autoclear,


                placeholder: $.mask.placeholder,


                completed: null


            }, settings), defs = $.mask.definitions, tests = [], partialPosition = len = mask.length,


            firstNonMaskPos = null, $.each(mask.split(""), function(i, c) {


                "?" == c ? (len--, partialPosition = i) : defs[c] ? (tests.push(new RegExp(defs[c])),


                null === firstNonMaskPos && (firstNonMaskPos = tests.length - 1), partialPosition > i && (lastRequiredNonMaskPos = tests.length - 1)) : tests.push(null);


            }), this.trigger("unmask").each(function() {


                function tryFireCompleted() {


                    if (settings.completed) {


                        for (var i = firstNonMaskPos; lastRequiredNonMaskPos >= i; i++) if (tests[i] && buffer[i] === getPlaceholder(i)) return;


                        settings.completed.call(input);


                    }


                }


                function getPlaceholder(i) {


                    return settings.placeholder.charAt(i < settings.placeholder.length ? i : 0);


                }


                function seekNext(pos) {


                    for (;++pos < len && !tests[pos]; ) ;


                    return pos;


                }


                function seekPrev(pos) {


                    for (;--pos >= 0 && !tests[pos]; ) ;


                    return pos;


                }


                function shiftL(begin, end) {


                    var i, j;


                    if (!(0 > begin)) {


                        for (i = begin, j = seekNext(end); len > i; i++) if (tests[i]) {


                            if (!(len > j && tests[i].test(buffer[j]))) break;


                            buffer[i] = buffer[j], buffer[j] = getPlaceholder(j), j = seekNext(j);


                        }


                        writeBuffer(), input.caret(Math.max(firstNonMaskPos, begin));


                    }


                }


                function shiftR(pos) {


                    var i, c, j, t;


                    for (i = pos, c = getPlaceholder(pos); len > i; i++) if (tests[i]) {


                        if (j = seekNext(i), t = buffer[i], buffer[i] = c, !(len > j && tests[j].test(t))) break;


                        c = t;


                    }


                }


                function androidInputEvent() {


                    var curVal = input.val(), pos = input.caret();


                    if (oldVal && oldVal.length && oldVal.length > curVal.length) {


                        for (checkVal(!0); pos.begin > 0 && !tests[pos.begin - 1]; ) pos.begin--;


                        if (0 === pos.begin) for (;pos.begin < firstNonMaskPos && !tests[pos.begin]; ) pos.begin++;


                        input.caret(pos.begin, pos.begin);


                    } else {


                        for (checkVal(!0); pos.begin < len && !tests[pos.begin]; ) pos.begin++;


                        input.caret(pos.begin, pos.begin);


                    }


                    tryFireCompleted();


                }


                function blurEvent() {


                    checkVal(), input.val() != focusText && input.change();


                }


                function keydownEvent(e) {


                    if (!input.prop("readonly")) {


                        var pos, begin, end, k = e.which || e.keyCode;


                        oldVal = input.val(), 8 === k || 46 === k || iPhone && 127 === k ? (pos = input.caret(),


                        begin = pos.begin, end = pos.end, end - begin === 0 && (begin = 46 !== k ? seekPrev(begin) : end = seekNext(begin - 1),


                        end = 46 === k ? seekNext(end) : end), clearBuffer(begin, end), shiftL(begin, end - 1),


                        e.preventDefault()) : 13 === k ? blurEvent.call(this, e) : 27 === k && (input.val(focusText),


                        input.caret(0, checkVal()), e.preventDefault());


                    }


                }


                function keypressEvent(e) {


                    if (!input.prop("readonly")) {


                        var p, c, next, k = e.which || e.keyCode, pos = input.caret();


                        if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > k) && k && 13 !== k) {


                            if (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)),


                            p = seekNext(pos.begin - 1), len > p && (c = String.fromCharCode(k), tests[p].test(c))) {


                                if (shiftR(p), buffer[p] = c, writeBuffer(), next = seekNext(p), android) {


                                    var proxy = function() {


                                        $.proxy($.fn.caret, input, next)();


                                    };


                                    setTimeout(proxy, 0);


                                } else input.caret(next);


                                pos.begin <= lastRequiredNonMaskPos && tryFireCompleted();


                            }


                            e.preventDefault();


                        }


                    }


                }


                function clearBuffer(start, end) {


                    var i;


                    for (i = start; end > i && len > i; i++) tests[i] && (buffer[i] = getPlaceholder(i));


                }


                function writeBuffer() {


                    input.val(buffer.join(""));


                }


                function checkVal(allow) {


                    var i, c, pos, test = input.val(), lastMatch = -1;


                    for (i = 0, pos = 0; len > i; i++) if (tests[i]) {


                        for (buffer[i] = getPlaceholder(i); pos++ < test.length; ) if (c = test.charAt(pos - 1),


                        tests[i].test(c)) {


                            buffer[i] = c, lastMatch = i;


                            break;


                        }


                        if (pos > test.length) {


                            clearBuffer(i + 1, len);


                            break;


                        }


                    } else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);


                    return allow ? writeBuffer() : partialPosition > lastMatch + 1 ? settings.autoclear || buffer.join("") === defaultBuffer ? (input.val() && input.val(""),


                    clearBuffer(0, len)) : writeBuffer() : (writeBuffer(), input.val(input.val().substring(0, lastMatch + 1))),


                    partialPosition ? i : firstNonMaskPos;


                }


                var input = $(this), buffer = $.map(mask.split(""), function(c, i) {


                    return "?" != c ? defs[c] ? getPlaceholder(i) : c : void 0;


                }), defaultBuffer = buffer.join(""), focusText = input.val();


                input.data($.mask.dataName, function() {


                    return $.map(buffer, function(c, i) {


                        return tests[i] && c != getPlaceholder(i) ? c : null;


                    }).join("");


                }), input.one("unmask", function() {


                    input.off(".mask").removeData($.mask.dataName);


                }).on("focus.mask", function() {


                    if (!input.prop("readonly")) {


                        clearTimeout(caretTimeoutId);


                        var pos;


                        focusText = input.val(), pos = checkVal(), caretTimeoutId = setTimeout(function() {


                            input.get(0) === document.activeElement && (writeBuffer(), pos == mask.replace("?", "").length ? input.caret(0, pos) : input.caret(pos));


                        }, 10);


                    }


                }).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function() {


                    input.prop("readonly") || setTimeout(function() {


                        var pos = checkVal(!0);


                        input.caret(pos), tryFireCompleted();


                    }, 0);


                }), chrome && android && input.off("input.mask").on("input.mask", androidInputEvent),


                checkVal();


            });


        }


    });


});



'use strict';

// swich elements

function swapElements(elm1, elm2) {
  var parent1, next1,
      parent2, next2;

  parent1 = elm1.parentNode;
  next1   = elm1.nextSibling;
  parent2 = elm2.parentNode;
  next2   = elm2.nextSibling;

  parent1.insertBefore(elm2, next1);
  parent2.insertBefore(elm1, next2);
}

var swElems = $('.book-slider__right-block');

if ($(window).width() < 800) {
  for (var i = 0; i < swElems.length; i++) {
    swapElements($('.book-slider__right-block')[i], $('.book-slider__left-block')[i]);
  }
}




//columns equall height
function setEqualHeight(columns) {
    if ($(window).width() > 1025) {
        var tallestcolumn = 0;
        columns.each(
            function () {

                var currentHeight = $(this).height();
                if (currentHeight > tallestcolumn) {
                    tallestcolumn = currentHeight;
                }
            }
        );
        columns.height(tallestcolumn);
    }
}


setEqualHeight($('.catalog .row'));

$(window).resize(function (e) {
    setEqualHeight($('.catalog .row'));
})


$(document).ready(function () {

    var showChar = 700;
    var ellipsestext = "...";
    var moretext = "Читать Далее";
    var lesstext = "Скрыть";
    $('.body-review').each(function() {
        var content = $(this).html();

        if(content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar-1, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $('.all-img-link').on('click', function(){
        $('.thumb').trigger('click');
    });

    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parents('.body-review').find('.morecontent span').toggle();
        $(this).parents('.body-review').find('.moreellipses').toggle();
        return false;
    });

    //typed
    $(function () {
        $('.prompt').typed({
            strings: ['Гарри Поттер и проклятое дитя'],
            typeSpeed: 50,
            cursorChar: '|',
            showCursor: true,
            loop: true,
          });
      });

    //slick
    $('.book-slider').slick({
        responsive: [
            { breakpoint: 480,
                settings: {
                    arrows: false,
                  }, },
        ],
      });
    $('.popular__slider').slick({
        dots: true,
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            { breakpoint: 767,
                settings: {
                  rows: 1,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                }, },
        ],
      });

    function slyMenu() {
      var $frame = $('#nonitembased');
      var $wrap = $frame.parent();

      // Call Sly on frame
      $frame.sly({
          speed: 300,
          activatePageOn: 'click',
          scrollBar: $wrap.find('.scrollbar-mobi'),
          mouseDragging: 1,
          touchDragging: 1,
          scrollBy: 100,
          dragHandle: 1,
          dynamicHandle: 1,
        });

        $(window).resize(function(e) {
            $frame.sly('reload');
        });
    };

    if ($(window).width() < 769) {
        slyMenu();

    }


    //scroll slider

    function initMainSly() {
      var $frame = $('#basic');
      var $slidee = $frame.children('ul').eq(0);
      var $wrap = $frame.parent();

      // Call Sly on frame
      $frame.sly({
          horizontal: 1,
          itemNav: 'basic',
          smart: 1,
          activateOn: 'click',
          mouseDragging: 1,
          touchDragging: 1,
          releaseSwing: 1,
          startAt: 3,
          scrollBar: $('.scrollbar'),
          scrollBy: 0,
          pagesBar: $wrap.find('.pages'),
          activatePageOn: 'click',
          speed: 300,
          elasticBounds: 1,
          dragHandle: 1,
          dynamicHandle: false,
        });

        $(window).resize(function(e) {
            $frame.sly('reload');
        });
    }

    initMainSly();





    function getslideOffset() {
      if ($('.book-slider').length) {
        var elOffset = $('.book-slider .container')[0].offsetLeft;
        $('.book-slider .slick-prev').css('left', elOffset + 20 + 'px');
        $('.book-slider .slick-next').css('right', elOffset + 20 + 'px');

      }
    }

    getslideOffset();


    $(window).resize(getslideOffset);

    // initialize tooltipster on text input elements
    // tooltip
    $('.forget-but').mouseover(function (e) {
        $('body').addClass('tooltips');
      });

    $('.forget-but').tooltipster({
        trigger: 'hover',
      });

    var width = $(window).width();
    // if (width < 767) {
    $('.order-form input').tooltipster({
        onlyOne: false,
        delay: 0,
        position: 'bottom',
      });
    // } else {
    // $('.order-form input').tooltipster({
    //       trigger: 'custom',
    //       onlyOne: false,
    //       delay: 0,
    //       position: 'right',
    //     });
    // }

    if (width < 767) {
      $('.signup input').tooltipster({
            trigger: 'custom',
            onlyOne: false,
            delay: 0,
            position: 'bottom',

          });
    } else {
      $('.signup input').tooltipster({
            trigger: 'custom',
            onlyOne: false,
            delay: 0,
            position: 'right',
          });
    }

    if (width < 767) {
      $('.reg-form input').tooltipster({
            trigger: 'custom',
            onlyOne: false,
            delay: 0,
            position: 'bottom',

          });
    } else {
      $('.reg-form input').tooltipster({
          trigger: 'custom',
          onlyOne: false,
          delay: 0,
          position: 'right',
        });
    }


    // initialize validate plugin on the form

    jQuery.extend(jQuery.validator.messages, {
      required: 'Заполните выделенное поле',
      email: 'Неправильный формат email',
      password: 'Слишком простой пароль',
      minlength: jQuery.validator.format('Пожалуйста введите миннимум {0} символов.'),
      digits: 'Введите только цифры',
    });
    $('.signup').validate({
        onsubmit: true,
        errorPlacement: function (error, element) {
          $('body').addClass('tooltips');
          var lastError = $(element).data('lastError'),
              newError = $(error).text();

          $(element).data('lastError', newError);

          if (newError !== '' && newError !== lastError) {
            $(element).tooltipster('content', newError);
            $(element).tooltipster('show');
          }
        },

        success: function (label, element) {
            $('body').removeClass('tooltips');
            $(element).tooltipster('hide');
            $(element).parent('div').addClass('sc');
          },

        rules: {
            login: {
                required: true,
              },
            password: {
                required: true,
                minlength: 5,
              },

          },
        submitHandler: function (form) {
            return false;
          },
      });

    $('.reg-form').validate({
        onsubmit: true,
        errorPlacement: function (error, element) {
          $('body').addClass('tooltips');
          var lastError = $(element).data('lastError'),
              newError = $(error).text();

          $(element).data('lastError', newError);

          if (newError !== '' && newError !== lastError) {
            $(element).tooltipster('content', newError);
            $(element).tooltipster('show');
          }
        },

        success: function (label, element) {
            $('body').removeClass('tooltips');
            $(element).tooltipster('hide');
            $(element).parent('div').addClass('sc');
          },

        rules: {
            login: {
                required: true,
              },
            email: {
                required: true,
                email: true,
              },
            password: {
                required: true,
                minlength: 5,
              },

          },
        submitHandler: function (form) {
            return false;
          },
      });

    $('.order-form').validate({
        onsubmit: true,

        errorPlacement: function (error, element) {
          $('body').addClass('tooltips');
          var lastError = $(element).data('lastError'),
              newError = $(error).text();

          $(element).data('lastError', newError);

          if (newError !== '' && newError !== lastError) {
            $(element).tooltipster('content', newError);
            $(element).tooltipster('show');
          }
        },

        success: function (label, element) {
          $(element).tooltipster('hide');
        },

        // errorPlacement: function (error, element) {
        //     console.log($(error).text());
        //     $('body').addClass('tooltips');
        //     $(element).parent('div').removeClass('sc');
        //     console.log(element);
        //     // $(element).tooltipster('content', $(error).text());
        //     // $(element).tooltipster('open');
        //   },
        //
        // success: function (label, element) {
        //     $('body').removeClass('tooltips');
        //     // $(element).tooltipster('hide');
        //     $(element).parent('div').addClass('sc');
        //   },

        rules: {
            email: {
                required: true,
                email: true,
              },
            fio: {
                required: true,
                minlength: 2,
              },
            tel: {
                required: true,
                minlength: 8,
                digits: true,
              },
            usloviya: {
                required: true,
              },
            waypay: {
              required: true,
              minlength: 5,
            },
          },
        submitHandler: function (form) {
            return false;
          },
      });

  });

//popup
$('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in',
    callbacks: {
        open: function () {
            $('body').addClass('popup-open');
            $('.mfp-wrap').scroll(function (e) {
                $(this).find('.cook_write').tooltipster('reposition');
              });

            $.magnificPopup.instance.close = function () {
                $('body').removeClass('tooltips');
                $('body').removeClass('popup-open');
                $('.signup input, .reg-form input').tooltipster('hide');
                $.magnificPopup.proto.close.call(this);
              };
          },
      },
  });

$('.close-but').click(function () {
    $.magnificPopup.close();
  });

//show-hide inputs
$('.show_fild').on('click', function (e) {
    e.preventDefault();
    $(this).next().slideToggle('fast');

  });

//fit slide width
if ($(window).width() < 767) {
  var winWidth = $(window).width() - 30;
  $('.frame .col-inline-4').width(winWidth);

}

//dropdown
$('.ui.dropdown').dropdown();

//accordion catalog
$('.anchor-title').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $(this).parent().find('.accordion__item').toggle('fast');

  });

$(window).scroll(function () {
  if ($(window).width() > 767) {
    var sticky = $('.header-top');
    var scroll = $(window).scrollTop();
    if (scroll >= 90) {
      sticky.addClass('scrolling');
    } else sticky.removeClass('scrolling');
  };
});

$('.search').on('click', function (e) {
    e.preventDefault();

    $(this).parents('.search-form').toggleClass('open');
    $('body').toggleClass('open-search');
  });


//counter
$(function () {
    $('.counter').counter();
  });

//tabs
$('.tabular.menu .item').tab();

// rate price

if ($('#input-number-l').length && $('#input-number-h').length) {

  var html5Slider = document.getElementById('range');

  noUiSlider.create(html5Slider, {
      start: [25, 100],
      connect: true,
      range: {
          min: 0,
          max: 200,
        },
    });

  var inputNumberl = document.getElementById('input-number-l');
  var inputNumberh = document.getElementById('input-number-h');

  html5Slider.noUiSlider.on('update', function (values, handle) {

      var value = values[handle];

      if (handle) {
        inputNumberl.value = value;
      } else {
        inputNumberh.value = value;
      }
    });

  inputNumberl.addEventListener('change', function () {
      html5Slider.noUiSlider.set([this.value, null]);
    });

  inputNumberh.addEventListener('change', function () {
      html5Slider.noUiSlider.set([null, this.value]);
    });
}



/* scroll effect */



