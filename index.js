// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,f=e.__defineSetter__,u=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(u.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),p&&f&&f.call(r,t,n.set),r};function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,s=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"",d=p&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,i;if(null==r)return v.call(r);n=r[b],i=b,t=null!=(o=r)&&s.call(o,i);try{r[b]=void 0}catch(t){return v.call(r)}return e=v.call(r),t?r[b]=n:delete r[b],e}:function(r){return v.call(r)},w="function"==typeof Uint32Array,_="function"==typeof Uint32Array?Uint32Array:null,A="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,t,n;if("function"!=typeof _)return!1;try{t=new _(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(w&&n instanceof Uint32Array||"[object Uint32Array]"===d(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?A:function(){throw new Error("not implemented")};var m,h=y,U="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,j="function"==typeof Float64Array?Float64Array:void 0;m=function(){var r,t,n;if("function"!=typeof g)return!1;try{t=new g([1,3.14,-3.14,NaN]),n=t,r=(U&&n instanceof Float64Array||"[object Float64Array]"===d(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?j:function(){throw new Error("not implemented")};var N,I=m,O="function"==typeof Uint8Array,S="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;N=function(){var r,t,n;if("function"!=typeof S)return!1;try{t=new S(t=[1,3.14,-3.14,256,257]),n=t,r=(O&&n instanceof Uint8Array||"[object Uint8Array]"===d(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=N,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,P="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,t,n;if("function"!=typeof G)return!1;try{t=new G(t=[1,3.14,-3.14,65536,65537]),n=t,r=(H&&n instanceof Uint16Array||"[object Uint16Array]"===d(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?P:function(){throw new Error("not implemented")};var x,L={uint16:F,uint8:T};(x=new L.uint16(1))[0]=4660;var M=52===new L.uint8(x.buffer)[0],V=!0===M?1:0,W=new I(1),k=new h(W.buffer);function Y(r){return W[0]=r,k[V]}var C,q,z=!0===M?0:1,B=new I(1),D=new h(B.buffer);!0===M?(C=1,q=0):(C=0,q=1);var J={HIGH:C,LOW:q},K=new I(1),Q=new h(K.buffer),R=J.HIGH,X=J.LOW;function Z(r,t){return Q[R]=r,Q[X]=t,K[0]}var $,rr,tr=Math.floor,nr=Number.POSITIVE_INFINITY,er=Number.NEGATIVE_INFINITY;function or(r){return r!=r}function ir(r){return r===nr||r===er}!0===M?($=1,rr=0):($=0,rr=1);var fr={HIGH:$,LOW:rr},ur=new I(1),ar=new h(ur.buffer),cr=fr.HIGH,lr=fr.LOW;function yr(r,t){return ur[0]=t,r[0]=ar[cr],r[1]=ar[lr],r}function pr(r,t){return 1===arguments.length?yr([0,0],r):yr(r,t)}var vr=[0,0];function sr(r,t,n,e){return or(r)||ir(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return sr(r,[0,0],1,0)}),"assign",sr);var br=[0,0],dr=[0,0];function wr(r,t){var n,e,o,i,f;return 0===t||0===r||or(r)||ir(r)?r:(sr(r,br,1,0),t+=br[1],t+=function(r){var t=Y(r);return(t=(2146435072&t)>>>20)-1023|0}(r=br[0]),t<-1074?(o=r,pr(vr,0),i=vr[0],i&=2147483647,f=Y(o),Z(i|=f&=2147483648,vr[1])):t>1023?r<0?er:nr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,pr(dr,r),n=dr[0],n&=2148532223,e*Z(n|=t+1023<<20,dr[1])))}function _r(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var Ar=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],mr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],hr=16777216,Ur=5.960464477539063e-8,gr=_r(20),jr=_r(20),Nr=_r(20),Ir=_r(20);function Or(r,t,n,e,o,i,f,u,a){var c,l,y,p,v,s,b,d,w;for(p=i,w=e[n],d=n,v=0;d>0;v++)l=Ur*w|0,Ir[v]=w-hr*l|0,w=e[d-1]+l,d-=1;if(w=wr(w,o),w-=8*tr(.125*w),w-=b=0|w,y=0,o>0?(b+=v=Ir[n-1]>>24-o,Ir[n-1]-=v<<24-o,y=Ir[n-1]>>23-o):0===o?y=Ir[n-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,v=0;v<n;v++)d=Ir[v],0===c?0!==d&&(c=1,Ir[v]=16777216-d):Ir[v]=16777215-d;if(o>0)switch(o){case 1:Ir[n-1]&=8388607;break;case 2:Ir[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=wr(1,o)))}if(0===w){for(d=0,v=n-1;v>=i;v--)d|=Ir[v];if(0===d){for(s=1;0===Ir[i-s];s++);for(v=n+1;v<=n+s;v++){for(a[u+v]=Ar[f+v],l=0,d=0;d<=u;d++)l+=r[d]*a[u+(v-d)];e[v]=l}return Or(r,t,n+=s,e,o,i,f,u,a)}}if(0===w)for(n-=1,o-=24;0===Ir[n];)n-=1,o-=24;else(w=wr(w,-o))>=hr?(l=Ur*w|0,Ir[n]=w-hr*l|0,o+=24,Ir[n+=1]=l):Ir[n]=0|w;for(l=wr(1,o),v=n;v>=0;v--)e[v]=l*Ir[v],l*=Ur;for(v=n;v>=0;v--){for(l=0,s=0;s<=p&&s<=n-v;s++)l+=mr[s]*e[v+s];Nr[n-v]=l}for(l=0,v=n;v>=0;v--)l+=Nr[v];for(t[0]=0===y?l:-l,l=Nr[0]-l,v=1;v<=n;v++)l+=Nr[v];return t[1]=0===y?l:-l,7&b}function Sr(r,t,n,e){var o,i,f,u,a,c,l;for((i=(n-3)/24|0)<0&&(i=0),u=n-24*(i+1),c=i-(f=e-1),l=f+4,a=0;a<=l;a++)gr[a]=c<0?0:Ar[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=f;c++)o+=r[c]*gr[f+(a-c)];jr[a]=o}return Or(r,t,4,jr,u,4,i,f,gr)}var Er=Math.round;function Fr(r,t,n){var e,o,i,f,u;return i=r-1.5707963267341256*(e=Er(.6366197723675814*r)),f=6077100506506192e-26*e,u=t>>20|0,n[0]=i-f,u-(Y(n[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=i)-(i=o-(f=6077100506303966e-26*e))-f),n[0]=i-f,u-(Y(n[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=i)-(i=o-(f=20222662487111665e-37*e))-f),n[0]=i-f)),n[1]=i-n[0]-f,e}var Tr=1.5707963267341256,Hr=6077100506506192e-26,Gr=2*Hr,Pr=3*Hr,xr=4*Hr,Lr=[0,0,0],Mr=[0,0];function Vr(r,t){var n,e,o,i,f,u,a;if((o=2147483647&Y(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Fr(r,o,t):o<=1073928572?r>0?(a=r-Tr,t[0]=a-Hr,t[1]=a-t[0]-Hr,1):(a=r+Tr,t[0]=a+Hr,t[1]=a-t[0]+Hr,-1):r>0?(a=r-2*Tr,t[0]=a-Gr,t[1]=a-t[0]-Gr,2):(a=r+2*Tr,t[0]=a+Gr,t[1]=a-t[0]+Gr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Fr(r,o,t):r>0?(a=r-3*Tr,t[0]=a-Pr,t[1]=a-t[0]-Pr,3):(a=r+3*Tr,t[0]=a+Pr,t[1]=a-t[0]+Pr,-3):1075388923===o?Fr(r,o,t):r>0?(a=r-4*Tr,t[0]=a-xr,t[1]=a-t[0]-xr,4):(a=r+4*Tr,t[0]=a+xr,t[1]=a-t[0]+xr,-4);if(o<1094263291)return Fr(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return B[0]=r,D[z]}(r),a=Z(o-((e=(o>>20)-1046)<<20|0),n),f=0;f<2;f++)Lr[f]=0|a,a=16777216*(a-Lr[f]);for(Lr[2]=a,i=3;0===Lr[i-1];)i-=1;return u=Sr(Lr,Mr,e,i),r<0?(t[0]=-Mr[0],t[1]=-Mr[1],-u):(t[0]=Mr[0],t[1]=Mr[1],u)}var Wr=-.16666666666666632;function kr(r,t,n,e,o){var i,f,u,a,c;return f=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(a=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),u=c*r,n[o]=0===t?r+u*(Wr+c*f):r-(c*(.5*t-u*f)-t-u*Wr),f=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),f+=a*a*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),a=1-(i=.5*c),n[o+e]=a+(1-a-i+(c*f-r*t)),n}var Yr=[0,0];function Cr(r,t,n,e){var o,i;if(o=Y(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(t[e]=r,t[e+n]=0),kr(r,0,t,n,e);if(o>=2146435072)return t[e]=NaN,t[e+n]=NaN,t;switch(i=Vr(r,Yr),kr(Yr[0],Yr[1],t,n,e),3&i){case 1:return o=t[e+n],t[e+n]=-t[e],t[e]=o,t;case 2:return t[e]*=-1,t[e+n]*=-1,t;case 3:return o=-t[e+n],t[e+n]=t[e],t[e]=o,t;default:return t}}function qr(r){return Cr(r,[0,0],1,0)}l(qr,"assign",Cr),r.assign=Cr,r.default=qr,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).sincos={});
//# sourceMappingURL=index.js.map
