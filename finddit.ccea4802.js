parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"/ExT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={search:function(t,e,n){return fetch("https://cors-anywhere.herokuapp.com/https://www.reddit.com/search.json?q=".concat(t,"&sort=").concat(n,"&limit=").concat(e)).then(function(t){return t.json()}).then(function(t){return t.data.children.map(function(t){return t.data})}).catch(function(t){return console.log(t)})}};exports.default=t;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("./reddit_api"));function t(e){return e&&e.__esModule?e:{default:e}}var n=document.getElementById("search-form"),a=document.getElementById("search-input");function r(e,t){var n=document.createElement("div");n.className="alert ".concat(t),n.appendChild(document.createTextNode(e));var a=document.getElementById("search-container"),r=document.getElementById("search");a.insertBefore(n,r),setTimeout(function(){return document.querySelector(".alert").remove()},3e3)}function c(e,t){var n=e.indexOf(" ",t);return-1==n?e:e.substring(0,n)}n.addEventListener("submit",function(t){var n=a.value,d=document.querySelector('input[name="sortby"]:checked').value,s=document.getElementById("limit").value;""===n&&r("Please add a search term","alert-danger"),a.value="",e.default.search(n,s,d).then(function(e){console.log("Entering...");var t='<div class="card-columns">';e.forEach(function(e){t+='<div class="card">';var n=e.preview?e.preview.images[0].source.url:null;n&&(t+='<img src="'.concat(n,'" class="card-img-top" alt="...">')),t+='\n                    <div class="card-body">\n                        <h5 class="card-title">'.concat(e.title,'</h5>\n                        <p class="card-text">').concat(c(e.selftext,200),'</p>\n                        <a href="').concat(e.url,'" target="_blank" class="btn btn-primary">Read More</a>\n                        <hr>\n                        <span class="badge badge-secondary">Subreddit: ').concat(e.subreddit,'</span>\n                        <span class="badge badge-dark">Score: ').concat(e.score,"</span>\n                    </div>\n                "),t+="</div>"}),t+="</div>",document.getElementById("results").innerHTML=t,console.log("Exiting...")}),t.preventDefault()});
},{"./reddit_api":"/ExT"}]},{},["Focm"], null)
//# sourceMappingURL=/finddit.ccea4802.js.map