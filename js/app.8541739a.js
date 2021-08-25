(function(e){function t(t){for(var r,a,c=t[0],l=t[1],s=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/tic-tac-toe-vue-ts/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"2a84":function(e,t,n){"use strict";n("ce03")},6730:function(e,t,n){},"75ef":function(e,t,n){"use strict";n("6730")},"769c":function(e,t,n){},c0d9:function(e,t,n){"use strict";n("769c")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),i={class:"header"},o=Object(r["d"])("h1",{class:"headline"},"Tic Tac Toe",-1),a={class:"toggles"};function c(e,t,n,c,l,s){var u=Object(r["l"])("toggle-turn"),d=Object(r["l"])("board");return Object(r["h"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("header",i,[o,Object(r["d"])("div",a,[Object(r["e"])(u,{onToggleChange:e.changePlayer,disabled:e.disabled},null,8,["onToggleChange","disabled"]),Object(r["e"])(u,{onToggleChange:e.changeDifficulty,levels:"levels",disabled:e.disabled},null,8,["onToggleChange","disabled"])])]),Object(r["e"])(d,{class:"playground",onDisableChoice:e.disableSwitching,player:e.player,levelUp:e.difficultyHard},null,8,["onDisableChoice","player","levelUp"])],64)}Object(r["j"])("data-v-6637c5c2");var l=["order"];function s(e,t,n,i,o,a){return Object(r["h"])(),Object(r["c"])("main",null,[(Object(r["h"])(),Object(r["c"])("section",{class:Object(r["g"])(["board",e.player]),ref:"board",key:e.boardKey},[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["k"])(e.cells,(function(n,i){return Object(r["h"])(),Object(r["c"])("div",{class:"cell",onClickOnce:t[0]||(t[0]=function(){return e.fillCell&&e.fillCell.apply(e,arguments)}),key:i,order:i},null,40,l)})),128))],2))])}Object(r["i"])();n("cb29"),n("a9e3"),n("a434"),n("d81d"),n("4de4"),n("159b");function u(e){var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=t.map((function(t){return"xWin"===d(t,e)})).some((function(e){return e})),r=t.map((function(t){return"oWin"===d(t,e)})).some((function(e){return e}));return{xWin:n,oWin:r,draw:f(e)}}function d(e,t){var n=t[e[0]],r=t[e[1]],i=t[e[2]],o="x"===n&&"x"===r&&"x"===i,a="o"===n&&"o"===r&&"o"===i;return o?"xWin":a?"oWin":null}var f=function(e){return e.every((function(e){return""!==e}))},h={X:10,O:-10,draw:0},b={X:-10,O:10,draw:0};function p(e){throw new Error("Unexpected value ".concat(e,". Should have been never."))}var v=function(e){switch(e){case"x":return"o";case"o":return"x";default:return p(e)}};function g(e,t){var n=t.map((function(e,t){if(""===e)return t}));n=n.filter((function(e){return void 0!==e}));var r=n[Math.floor(Math.random()*n.length)];if("number"===typeof r)return r}function y(e,t){var n=-1/0,r=-1;return t.forEach((function(i,o,a){if(""===i){a[o]=e;var c=O(t,!1,e);a[o]="",c>n&&(n=c,r=o)}})),r}function O(e,t,n){var r=u(e),i=r.xWin,o=r.oWin,a=r.draw;if("x"===n){if(i)return h["X"];if(o)return h["O"];if(a)return h["draw"]}if("o"===n){if(i)return b["X"];if(o)return b["O"];if(a)return b["draw"]}if(t){var c=-1/0;return e.forEach((function(t,r,i){if(""===t){i[r]=n;var o=O(e,!1,n);i[r]="",c=Math.max(o,c)}})),c}var l=1/0;return e.forEach((function(t,r,i){if(""===t){i[r]=v(n);var o=O(e,!0,n);i[r]="",l=Math.min(o,l)}})),l}var m=Object(r["f"])({data:function(){return{boardKey:0,gameEnded:!1,cells:["","","","","","","","",""],cellsNodes:[]}},props:{player:String,levelUp:Boolean},methods:{restartBoard:function(){this.cells.fill(""),this.$emit("disableChoice",!1),this.gameEnded=!1,this.boardKey+=1},setupBoardNodes:function(){var e=this.$refs.board;this.cellsNodes=e.childNodes},fillCell:function(e){var t;this.$emit("disableChoice",!0);var n=e.target,r=Number(null===(t=n.attributes.getNamedItem("order"))||void 0===t?void 0:t.value),i=""===this.cells[r];"turn-x"===this.player&&i&&(n.classList.add("x"),this.cells[r]="x",this.checkForWin(),!this.gameEnded&&this.moveByComputer("o",this.levelUp),this.checkForWin()),"turn-o"===this.player&&i&&(n.classList.add("o"),this.cells[r]="o",this.checkForWin(),!this.gameEnded&&this.moveByComputer("x",this.levelUp),this.checkForWin())},moveByComputer:function(e,t){var n=t?y(e,this.cells):g(e,this.cells);"number"===typeof n&&(this.cells.splice(n,1,e),this.cellsNodes[n+1].classList.add(e))},checkForWin:function(){var e="",t="You win! Restart the game?",n="You lost the game. Restart?",r="Game ended in a draw. Restart?",i=u(this.cells),o=i.xWin,a=i.oWin,c=i.draw;o&&!this.gameEnded&&("turn-x"===this.player&&(e=t),"turn-o"===this.player&&(e=n),this.gameEnded=!0,this.showPopup(e)),a&&!this.gameEnded&&("turn-o"===this.player&&(e=t),"turn-x"===this.player&&(e=n),this.gameEnded=!0,this.showPopup(e)),c&&!this.gameEnded&&(e=r,this.gameEnded=!0,this.showPopup(e))},showPopup:function(e){var t=this;setTimeout((function(){var n=confirm(e);n&&t.restartBoard()}),0)}},mounted:function(){this.setupBoardNodes()},updated:function(){this.setupBoardNodes()}});n("75ef");m.render=s,m.__scopeId="data-v-6637c5c2";var j=m;Object(r["j"])("data-v-9a1dd100");var x={class:"toggle-button-cover"},w={class:"button-cover"},C={class:"button r"},k=["disabled"],W=Object(r["d"])("div",{class:"layer"},null,-1);function E(e,t,n,i,o,a){return Object(r["h"])(),Object(r["c"])("div",x,[Object(r["d"])("div",w,[Object(r["d"])("div",C,[Object(r["d"])("input",{type:"checkbox",class:"checkbox",onChange:t[0]||(t[0]=function(t){return e.$emit("toggleChange",t.target.checked)}),disabled:e.disabled},null,40,k),Object(r["d"])("div",{class:Object(r["g"])(["knobs",e.levels])},null,2),W])])])}Object(r["i"])();var P=Object(r["f"])({props:{disabled:Boolean,levels:String}});n("2a84");P.render=E,P.__scopeId="data-v-9a1dd100";var T=P,B=Object(r["f"])({name:"App",components:{Board:j,ToggleTurn:T},data:function(){return{player:"turn-x",disabled:!1,difficultyHard:!1}},methods:{changePlayer:function(e){this.player=e?"turn-o":"turn-x"},changeDifficulty:function(e){this.difficultyHard=e},disableSwitching:function(e){this.disabled=e}}});n("c0d9");B.render=c;var S=B;n("e008");Object(r["b"])(S).mount("#app")},ce03:function(e,t,n){},e008:function(e,t,n){}});
//# sourceMappingURL=app.8541739a.js.map