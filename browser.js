// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"";r=t&&"symbol"==typeof Symbol.toStringTag?function(r){var t,i,f,u,a;if(null==r)return n.call(r);i=r[o],a=o,t=null!=(u=r)&&e.call(u,a);try{r[o]=void 0}catch(t){return n.call(r)}return f=n.call(r),t?r[o]=i:delete r[o],f}:function(r){return n.call(r)};var i,f=r,u="function"==typeof Uint32Array,a="function"==typeof Uint32Array?Uint32Array:null,c="function"==typeof Uint32Array?Uint32Array:void 0;i=function(){var r,t,n;if("function"!=typeof a)return!1;try{t=new a(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(u&&n instanceof Uint32Array||"[object Uint32Array]"===f(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?c:function(){throw new Error("not implemented")};var l,y=i,p="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;l=function(){var r,t,n;if("function"!=typeof v)return!1;try{t=new v([1,3.14,-3.14,NaN]),n=t,r=(p&&n instanceof Float64Array||"[object Float64Array]"===f(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?b:function(){throw new Error("not implemented")};var s,d=l,w="function"==typeof Uint8Array,A="function"==typeof Uint8Array?Uint8Array:null,_="function"==typeof Uint8Array?Uint8Array:void 0;s=function(){var r,t,n;if("function"!=typeof A)return!1;try{t=new A(t=[1,3.14,-3.14,256,257]),n=t,r=(w&&n instanceof Uint8Array||"[object Uint8Array]"===f(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m,h=s,U="function"==typeof Uint16Array,g="function"==typeof Uint16Array?Uint16Array:null,j="function"==typeof Uint16Array?Uint16Array:void 0;m=function(){var r,t,n;if("function"!=typeof g)return!1;try{t=new g(t=[1,3.14,-3.14,65536,65537]),n=t,r=(U&&n instanceof Uint16Array||"[object Uint16Array]"===f(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?j:function(){throw new Error("not implemented")};var N,I={uint16:m,uint8:h};(N=new I.uint16(1))[0]=4660;var O=52===new I.uint8(N.buffer)[0],S=!0===O?1:0,E=new d(1),F=new y(E.buffer);function T(r){return E[0]=r,F[S]}var H,G,P=!0===O?0:1,L=new d(1),V=new y(L.buffer);!0===O?(H=1,G=0):(H=0,G=1);var W={HIGH:H,LOW:G},k=new d(1),x=new y(k.buffer),M=W.HIGH,Y=W.LOW;function C(r,t){return x[M]=r,x[Y]=t,k[0]}var q,z,B=Math.floor,D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY;function K(r){return r!=r}function Q(r){return r===D||r===J}!0===O?(q=1,z=0):(q=0,z=1);var R={HIGH:q,LOW:z},X=new d(1),Z=new y(X.buffer),$=R.HIGH,rr=R.LOW;function tr(r,t){return X[0]=t,r[0]=Z[$],r[1]=Z[rr],r}function nr(r,t){return 1===arguments.length?tr([0,0],r):tr(r,t)}var er,or=[0,0],ir="function"==typeof Object.defineProperty?Object.defineProperty:null,fr=Object.defineProperty,ur=Object.prototype,ar=ur.toString,cr=ur.__defineGetter__,lr=ur.__defineSetter__,yr=ur.__lookupGetter__,pr=ur.__lookupSetter__;function vr(r,t,n,e){return K(r)||Q(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}er=function(){try{return ir({},"x",{}),!0}catch(r){return!1}}()?fr:function(r,t,n){var e,o,i,f;if("object"!=typeof r||null===r||"[object Array]"===ar.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===ar.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(yr.call(r,t)||pr.call(r,t)?(e=r.__proto__,r.__proto__=ur,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,f="set"in n,o&&(i||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&cr&&cr.call(r,t,n.get),f&&lr&&lr.call(r,t,n.set),r},er((function(r){return vr(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:vr});var br=[0,0],sr=[0,0];function dr(r,t){var n,e,o,i,f;return 0===t||0===r||K(r)||Q(r)?r:(vr(r,br,1,0),t+=br[1],t+=function(r){var t=T(r);return(t=(2146435072&t)>>>20)-1023|0}(r=br[0]),t<-1074?(o=r,nr(or,0),i=or[0],i&=2147483647,f=T(o),C(i|=f&=2147483648,or[1])):t>1023?r<0?J:D:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,nr(sr,r),n=sr[0],n&=2148532223,e*C(n|=t+1023<<20,sr[1])))}function wr(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var Ar=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],_r=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],mr=16777216,hr=5.960464477539063e-8,Ur=wr(20),gr=wr(20),jr=wr(20),Nr=wr(20);function Ir(r,t,n,e,o,i,f,u,a){var c,l,y,p,v,b,s,d,w;for(p=i,w=e[n],d=n,v=0;d>0;v++)l=hr*w|0,Nr[v]=w-mr*l|0,w=e[d-1]+l,d-=1;if(w=dr(w,o),w-=8*B(.125*w),w-=s=0|w,y=0,o>0?(s+=v=Nr[n-1]>>24-o,Nr[n-1]-=v<<24-o,y=Nr[n-1]>>23-o):0===o?y=Nr[n-1]>>23:w>=.5&&(y=2),y>0){for(s+=1,c=0,v=0;v<n;v++)d=Nr[v],0===c?0!==d&&(c=1,Nr[v]=16777216-d):Nr[v]=16777215-d;if(o>0)switch(o){case 1:Nr[n-1]&=8388607;break;case 2:Nr[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=dr(1,o)))}if(0===w){for(d=0,v=n-1;v>=i;v--)d|=Nr[v];if(0===d){for(b=1;0===Nr[i-b];b++);for(v=n+1;v<=n+b;v++){for(a[u+v]=Ar[f+v],l=0,d=0;d<=u;d++)l+=r[d]*a[u+(v-d)];e[v]=l}return Ir(r,t,n+=b,e,o,i,f,u,a)}}if(0===w)for(n-=1,o-=24;0===Nr[n];)n-=1,o-=24;else(w=dr(w,-o))>=mr?(l=hr*w|0,Nr[n]=w-mr*l|0,o+=24,Nr[n+=1]=l):Nr[n]=0|w;for(l=dr(1,o),v=n;v>=0;v--)e[v]=l*Nr[v],l*=hr;for(v=n;v>=0;v--){for(l=0,b=0;b<=p&&b<=n-v;b++)l+=_r[b]*e[v+b];jr[n-v]=l}for(l=0,v=n;v>=0;v--)l+=jr[v];for(t[0]=0===y?l:-l,l=jr[0]-l,v=1;v<=n;v++)l+=jr[v];return t[1]=0===y?l:-l,7&s}function Or(r,t,n,e){var o,i,f,u,a,c,l;for((i=(n-3)/24|0)<0&&(i=0),u=n-24*(i+1),c=i-(f=e-1),l=f+4,a=0;a<=l;a++)Ur[a]=c<0?0:Ar[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=f;c++)o+=r[c]*Ur[f+(a-c)];gr[a]=o}return Ir(r,t,4,gr,u,4,i,f,Ur)}var Sr=Math.round;function Er(r,t,n){var e,o,i,f,u;return i=r-1.5707963267341256*(e=Sr(.6366197723675814*r)),f=6077100506506192e-26*e,u=t>>20|0,n[0]=i-f,u-(T(n[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=i)-(i=o-(f=6077100506303966e-26*e))-f),n[0]=i-f,u-(T(n[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=i)-(i=o-(f=20222662487111665e-37*e))-f),n[0]=i-f)),n[1]=i-n[0]-f,e}var Fr=1.5707963267341256,Tr=6077100506506192e-26,Hr=2*Tr,Gr=3*Tr,Pr=4*Tr,Lr=[0,0,0],Vr=[0,0];function Wr(r,t){var n,e,o,i,f,u,a;if((o=2147483647&T(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Er(r,o,t):o<=1073928572?r>0?(a=r-Fr,t[0]=a-Tr,t[1]=a-t[0]-Tr,1):(a=r+Fr,t[0]=a+Tr,t[1]=a-t[0]+Tr,-1):r>0?(a=r-2*Fr,t[0]=a-Hr,t[1]=a-t[0]-Hr,2):(a=r+2*Fr,t[0]=a+Hr,t[1]=a-t[0]+Hr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Er(r,o,t):r>0?(a=r-3*Fr,t[0]=a-Gr,t[1]=a-t[0]-Gr,3):(a=r+3*Fr,t[0]=a+Gr,t[1]=a-t[0]+Gr,-3):1075388923===o?Er(r,o,t):r>0?(a=r-4*Fr,t[0]=a-Pr,t[1]=a-t[0]-Pr,4):(a=r+4*Fr,t[0]=a+Pr,t[1]=a-t[0]+Pr,-4);if(o<1094263291)return Er(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return L[0]=r,V[P]}(r),a=C(o-((e=(o>>20)-1046)<<20|0),n),f=0;f<2;f++)Lr[f]=0|a,a=16777216*(a-Lr[f]);for(Lr[2]=a,i=3;0===Lr[i-1];)i-=1;return u=Or(Lr,Vr,e,i),r<0?(t[0]=-Vr[0],t[1]=-Vr[1],-u):(t[0]=Vr[0],t[1]=Vr[1],u)}var kr=-.16666666666666632;function xr(r,t,n){var e,o,i,f,u;return o=.00833333333332249+(u=t*t)*(27557313707070068e-22*u-.0001984126982985795)+u*(f=u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),i=u*t,r[0]=0===n?t+i*(kr+u*o):t-(u*(.5*n-i*o)-n-i*kr),o=u*(.0416666666666666+u*(2480158728947673e-20*u-.001388888888887411)),o+=f*f*(u*(2.087572321298175e-9+-11359647557788195e-27*u)-2.7557314351390663e-7),f=1-(e=.5*u),r[1]=f+(1-f-e+(u*o-t*n)),r}var Mr=[0,0];function Yr(r,t){var n,e;if(n=T(t),(n&=2147483647)<=1072243195)return n<1044381696&&0==(0|t)&&(r[0]=t,r[1]=0),xr(r,t,0);if(n>=2146435072)return r[0]=NaN,r[1]=NaN,r;switch(e=Wr(t,Mr),xr(r,Mr[0],Mr[1]),3&e){case 1:return n=r[1],r[1]=-r[0],r[0]=n,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return n=-r[1],r[1]=r[0],r[0]=n,r;default:return r}}return function(r,t){return 1===arguments.length?Yr([0,0],r):Yr(r,t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).sincos=t();
//# sourceMappingURL=browser.js.map
