// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,u=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,w,"$1e"),n=l.call(n,v,"e"),n=l.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,y,"e-0$1"),r.alternate&&(n=l.call(n,d,"$1."),n=l.call(n,g,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):u.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=isNaN,E=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,a,o,f,u,s,l,p,y,d,g;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",u=1,s=0;s<r.length;s++)if("string"==typeof(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,_(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,d=n.padRight,g=void 0,(g=y-p.length)<0?p:p=d?p+m(g):m(g)+p)),f+=n.arg||"",u+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function N(r){var e,t;if("string"!=typeof r)throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return I.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===j.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};function H(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W,C=2147483647,L=2146435072,P="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),R=Object.prototype.toString,Z=Object.prototype.hasOwnProperty,M="function"==typeof Symbol?Symbol:void 0,X="function"==typeof M?M.toStringTag:"",Y=P&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return R.call(r);t=r[X],a=X,e=null!=(i=r)&&Z.call(i,a);try{r[X]=void 0}catch(e){return R.call(r)}return n=R.call(r),e?r[X]=t:delete r[X],n}:function(r){return R.call(r)},z="function"==typeof Uint32Array,q="function"==typeof Uint32Array?Uint32Array:null,B="function"==typeof Uint32Array?Uint32Array:void 0;W=function(){var r,e,t;if("function"!=typeof q)return!1;try{e=new q(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(z&&t instanceof Uint32Array||"[object Uint32Array]"===Y(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?B:function(){throw new Error("not implemented")};var D,J=W,K="function"==typeof Float64Array,Q="function"==typeof Float64Array?Float64Array:null,rr="function"==typeof Float64Array?Float64Array:void 0;D=function(){var r,e,t;if("function"!=typeof Q)return!1;try{e=new Q([1,3.14,-3.14,NaN]),t=e,r=(K&&t instanceof Float64Array||"[object Float64Array]"===Y(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er,tr=D,nr="function"==typeof Uint8Array,ir="function"==typeof Uint8Array?Uint8Array:null,ar="function"==typeof Uint8Array?Uint8Array:void 0;er=function(){var r,e,t;if("function"!=typeof ir)return!1;try{e=new ir(e=[1,3.14,-3.14,256,257]),t=e,r=(nr&&t instanceof Uint8Array||"[object Uint8Array]"===Y(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or,cr=er,fr="function"==typeof Uint16Array,ur="function"==typeof Uint16Array?Uint16Array:null,sr="function"==typeof Uint16Array?Uint16Array:void 0;or=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,65536,65537]),t=e,r=(fr&&t instanceof Uint16Array||"[object Uint16Array]"===Y(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr={uint16:or,uint8:cr};(lr=new pr.uint16(1))[0]=4660;var yr=52===new pr.uint8(lr.buffer)[0],dr=!0===yr?1:0,gr=new tr(1),hr=new J(gr.buffer);function vr(r){return gr[0]=r,hr[dr]}var wr,br,mr=1048575,Ar=!0===yr?0:1,_r=new tr(1),Er=new J(_r.buffer);!0===yr?(wr=1,br=0):(wr=0,br=1);var Ur={HIGH:wr,LOW:br},Ir=new tr(1),Sr=new J(Ir.buffer),kr=Ur.HIGH,xr=Ur.LOW;function Nr(r,e){return Sr[kr]=r,Sr[xr]=e,Ir[0]}var Fr=Math.floor,jr=Number.POSITIVE_INFINITY,Tr=Number.NEGATIVE_INFINITY,Or=1023,Vr=1023,$r=-1023,Gr=-1074;function Hr(r){return r!=r}function Wr(r){return r===jr||r===Tr}var Cr,Lr,Pr=2147483648;!0===yr?(Cr=1,Lr=0):(Cr=0,Lr=1);var Rr={HIGH:Cr,LOW:Lr},Zr=new tr(1),Mr=new J(Zr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function zr(r,e,t,n){return Zr[0]=r,e[n]=Mr[Xr],e[n+t]=Mr[Yr],e}function qr(r){return zr(r,[0,0],1,0)}H(qr,"assign",zr);var Br=[0,0],Dr=22250738585072014e-324,Jr=4503599627370496;function Kr(r,e,t,n){return Hr(r)||Wr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<Dr?(e[n]=r*Jr,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}H((function(r){return Kr(r,[0,0],1,0)}),"assign",Kr);var Qr=2220446049250313e-31,re=2148532223,ee=[0,0],te=[0,0];function ne(r,e){var t,n,i,a,o,c;return 0===e||0===r||Hr(r)||Wr(r)?r:(Kr(r,ee,1,0),r=ee[0],e+=ee[1],e+=function(r){var e=vr(r);return(e=(e&L)>>>20)-Or|0}(r),e<Gr?(i=0,a=r,qr.assign(i,Br,1,0),o=Br[0],o&=C,c=vr(a),Nr(o|=c&=Pr,Br[1])):e>Vr?r<0?Tr:jr:(e<=$r?(e+=52,n=Qr):n=1,qr.assign(r,te,1,0),t=te[0],t&=re,n*Nr(t|=e+Or<<20,te[1])))}function ie(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ae=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],oe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ce=16777216,fe=5.960464477539063e-8,ue=ie(20),se=ie(20),le=ie(20),pe=ie(20);function ye(r,e,t,n,i,a,o,c,f){var u,s,l,p,y,d,g,h,v;for(p=a,v=n[t],h=t,y=0;h>0;y++)s=fe*v|0,pe[y]=v-ce*s|0,v=n[h-1]+s,h-=1;if(v=ne(v,i),v-=8*Fr(.125*v),v-=g=0|v,l=0,i>0?(g+=y=pe[t-1]>>24-i,pe[t-1]-=y<<24-i,l=pe[t-1]>>23-i):0===i?l=pe[t-1]>>23:v>=.5&&(l=2),l>0){for(g+=1,u=0,y=0;y<t;y++)h=pe[y],0===u?0!==h&&(u=1,pe[y]=16777216-h):pe[y]=16777215-h;if(i>0)switch(i){case 1:pe[t-1]&=8388607;break;case 2:pe[t-1]&=4194303}2===l&&(v=1-v,0!==u&&(v-=ne(1,i)))}if(0===v){for(h=0,y=t-1;y>=a;y--)h|=pe[y];if(0===h){for(d=1;0===pe[a-d];d++);for(y=t+1;y<=t+d;y++){for(f[c+y]=ae[o+y],s=0,h=0;h<=c;h++)s+=r[h]*f[c+(y-h)];n[y]=s}return ye(r,e,t+=d,n,i,a,o,c,f)}}if(0===v)for(t-=1,i-=24;0===pe[t];)t-=1,i-=24;else(v=ne(v,-i))>=ce?(s=fe*v|0,pe[t]=v-ce*s|0,i+=24,pe[t+=1]=s):pe[t]=0|v;for(s=ne(1,i),y=t;y>=0;y--)n[y]=s*pe[y],s*=fe;for(y=t;y>=0;y--){for(s=0,d=0;d<=p&&d<=t-y;d++)s+=oe[d]*n[y+d];le[t-y]=s}for(s=0,y=t;y>=0;y--)s+=le[y];for(e[0]=0===l?s:-s,s=le[0]-s,y=1;y<=t;y++)s+=le[y];return e[1]=0===l?s:-s,7&g}function de(r,e,t,n){var i,a,o,c,f,u,s;for((a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),u=a-(o=n-1),s=o+4,f=0;f<=s;f++)ue[f]=u<0?0:ae[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*ue[o+(f-u)];se[f]=i}return ye(r,e,4,se,c,4,a,o,ue)}var ge=Math.round,he=.6366197723675814,ve=1.5707963267341256,we=6077100506506192e-26,be=6077100506303966e-26,me=20222662487959506e-37,Ae=20222662487111665e-37,_e=84784276603689e-45,Ee=2047;function Ue(r,e,t){var n,i,a,o,c;return a=r-(n=ge(r*he))*ve,o=n*we,c=e>>20|0,t[0]=a-o,c-(vr(t[0])>>20&Ee)>16&&(o=n*me-((i=a)-(a=i-(o=n*be))-o),t[0]=a-o,c-(vr(t[0])>>20&Ee)>49&&(o=n*_e-((i=a)-(a=i-(o=n*Ae))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var Ie=0,Se=16777216,ke=1.5707963267341256,xe=6077100506506192e-26,Ne=2*xe,Fe=3*xe,je=4*xe,Te=598523,Oe=1072243195,Ve=1073928572,$e=1074752122,Ge=1074977148,He=1075183036,We=1075388923,Ce=1075594811,Le=1094263291,Pe=[0,0,0],Re=[0,0];function Ze(r,e){var t,n,i,a,o,c,f;if((i=vr(r)&C|0)<=Oe)return e[0]=r,e[1]=0,0;if(i<=$e)return(i&mr)===Te?Ue(r,i,e):i<=Ve?r>0?(f=r-ke,e[0]=f-xe,e[1]=f-e[0]-xe,1):(f=r+ke,e[0]=f+xe,e[1]=f-e[0]+xe,-1):r>0?(f=r-2*ke,e[0]=f-Ne,e[1]=f-e[0]-Ne,2):(f=r+2*ke,e[0]=f+Ne,e[1]=f-e[0]+Ne,-2);if(i<=Ce)return i<=He?i===Ge?Ue(r,i,e):r>0?(f=r-3*ke,e[0]=f-Fe,e[1]=f-e[0]-Fe,3):(f=r+3*ke,e[0]=f+Fe,e[1]=f-e[0]+Fe,-3):i===We?Ue(r,i,e):r>0?(f=r-4*ke,e[0]=f-je,e[1]=f-e[0]-je,4):(f=r+4*ke,e[0]=f+je,e[1]=f-e[0]+je,-4);if(i<Le)return Ue(r,i,e);if(i>=L)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return _r[0]=r,Er[Ar]}(r),f=Nr(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)Pe[o]=0|f,f=(f-Pe[o])*Se;for(Pe[2]=f,a=3;Pe[a-1]===Ie;)a-=1;return c=de(Pe,Re,n,a),r<0?(e[0]=-Re[0],e[1]=-Re[1],-c):(e[0]=Re[0],e[1]=Re[1],c)}var Me=-.16666666666666632,Xe=.00833333333332249,Ye=-.0001984126982985795,ze=27557313707070068e-22,qe=-2.5050760253406863e-8,Be=1.58969099521155e-10,De=.0416666666666666,Je=-.001388888888887411,Ke=2480158728947673e-20,Qe=-2.7557314351390663e-7,rt=2.087572321298175e-9,et=-11359647557788195e-27;function tt(r,e,t,n,i){var a,o,c,f,u;return o=Xe+(u=r*r)*(Ye+u*ze)+u*(f=u*u)*(qe+u*Be),c=u*r,t[i]=0===e?r+c*(Me+u*o):r-(u*(.5*e-c*o)-e-c*Me),o=u*(De+u*(Je+u*Ke)),o+=f*f*(Qe+u*(rt+u*et)),f=1-(a=.5*u),t[i+n]=f+(1-f-a+(u*o-r*e)),t}var nt=1072243195,it=1044381696,at=[0,0];function ot(r,e,t,n){var i,a;if(i=vr(r),(i&=C)<=nt)return i<it&&0==(0|r)&&(e[n]=r,e[n+t]=0),tt(r,0,e,t,n);if(i>=L)return e[n]=NaN,e[n+t]=NaN,e;switch(a=Ze(r,at),tt(at[0],at[1],e,t,n),3&a){case 1:return i=e[n+t],e[n+t]=-e[n],e[n]=i,e;case 2:return e[n]*=-1,e[n+t]*=-1,e;case 3:return i=-e[n+t],e[n+t]=e[n],e[n]=i,e;default:return e}}function ct(r){return ot(r,[0,0],1,0)}return H(ct,"assign",ot),ct},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).sincos=e();
//# sourceMappingURL=browser.js.map
