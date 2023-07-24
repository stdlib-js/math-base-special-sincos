// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,u=n.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(f.call(r,t)||u.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=a.value,r.__proto__=c):r[t]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,t,a.get),p&&i&&i.call(r,t,a.set),r};function c(r,t,n){a(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var l,y=2147483647,p=2146435072,s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,b=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",w=s&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,i;if(null==r)return v.call(r);n=r[d],i=d,t=null!=(o=r)&&b.call(o,i);try{r[d]=void 0}catch(t){return v.call(r)}return e=v.call(r),t?r[d]=n:delete r[d],e}:function(r){return v.call(r)},A="function"==typeof Uint32Array,_="function"==typeof Uint32Array?Uint32Array:null,m="function"==typeof Uint32Array?Uint32Array:void 0;l=function(){var r,t,n;if("function"!=typeof _)return!1;try{t=new _(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(A&&n instanceof Uint32Array||"[object Uint32Array]"===w(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?m:function(){throw new Error("not implemented")};var h,U=l,g="function"==typeof Float64Array,j="function"==typeof Float64Array?Float64Array:null,N="function"==typeof Float64Array?Float64Array:void 0;h=function(){var r,t,n;if("function"!=typeof j)return!1;try{t=new j([1,3.14,-3.14,NaN]),n=t,r=(g&&n instanceof Float64Array||"[object Float64Array]"===w(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?N:function(){throw new Error("not implemented")};var I,O=h,S="function"==typeof Uint8Array,E="function"==typeof Uint8Array?Uint8Array:null,F="function"==typeof Uint8Array?Uint8Array:void 0;I=function(){var r,t,n;if("function"!=typeof E)return!1;try{t=new E(t=[1,3.14,-3.14,256,257]),n=t,r=(S&&n instanceof Uint8Array||"[object Uint8Array]"===w(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?F:function(){throw new Error("not implemented")};var T,H=I,G="function"==typeof Uint16Array,P="function"==typeof Uint16Array?Uint16Array:null,L="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var r,t,n;if("function"!=typeof P)return!1;try{t=new P(t=[1,3.14,-3.14,65536,65537]),n=t,r=(G&&n instanceof Uint16Array||"[object Uint16Array]"===w(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?L:function(){throw new Error("not implemented")};var V,W={uint16:T,uint8:H};(V=new W.uint16(1))[0]=4660;var k=52===new W.uint8(V.buffer)[0],x=!0===k?1:0,M=new O(1),Y=new U(M.buffer);function C(r){return M[0]=r,Y[x]}var q,z,B=!0===k?0:1,D=new O(1),J=new U(D.buffer);!0===k?(q=1,z=0):(q=0,z=1);var K={HIGH:q,LOW:z},Q=new O(1),R=new U(Q.buffer),X=K.HIGH,Z=K.LOW;function $(r,t){return R[X]=r,R[Z]=t,Q[0]}var rr,tr,nr=Math.floor,er=Number.POSITIVE_INFINITY,or=Number.NEGATIVE_INFINITY;function ir(r){return r!=r}function fr(r){return r===er||r===or}!0===k?(rr=1,tr=0):(rr=0,tr=1);var ur={HIGH:rr,LOW:tr},ar=new O(1),cr=new U(ar.buffer),lr=ur.HIGH,yr=ur.LOW;function pr(r,t,n,e){return ar[0]=r,t[e]=cr[lr],t[e+n]=cr[yr],t}function sr(r){return pr(r,[0,0],1,0)}c(sr,"assign",pr);var vr=[0,0];function br(r,t,n,e){return ir(r)||fr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}c((function(r){return br(r,[0,0],1,0)}),"assign",br);var dr=[0,0],wr=[0,0];function Ar(r,t){var n,e,o,i,f,u;return 0===t||0===r||ir(r)||fr(r)?r:(br(r,dr,1,0),t+=dr[1],t+=function(r){var t=C(r);return(t=(t&p)>>>20)-1023|0}(r=dr[0]),t<-1074?(o=0,i=r,sr.assign(o,vr,1,0),f=vr[0],f&=y,u=C(i),$(f|=u&=2147483648,vr[1])):t>1023?r<0?or:er:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,sr.assign(r,wr,1,0),n=wr[0],n&=2148532223,e*$(n|=t+1023<<20,wr[1])))}function _r(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var mr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],hr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ur=16777216,gr=5.960464477539063e-8,jr=_r(20),Nr=_r(20),Ir=_r(20),Or=_r(20);function Sr(r,t,n,e,o,i,f,u,a){var c,l,y,p,s,v,b,d,w;for(p=i,w=e[n],d=n,s=0;d>0;s++)l=gr*w|0,Or[s]=w-Ur*l|0,w=e[d-1]+l,d-=1;if(w=Ar(w,o),w-=8*nr(.125*w),w-=b=0|w,y=0,o>0?(b+=s=Or[n-1]>>24-o,Or[n-1]-=s<<24-o,y=Or[n-1]>>23-o):0===o?y=Or[n-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,s=0;s<n;s++)d=Or[s],0===c?0!==d&&(c=1,Or[s]=16777216-d):Or[s]=16777215-d;if(o>0)switch(o){case 1:Or[n-1]&=8388607;break;case 2:Or[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=Ar(1,o)))}if(0===w){for(d=0,s=n-1;s>=i;s--)d|=Or[s];if(0===d){for(v=1;0===Or[i-v];v++);for(s=n+1;s<=n+v;s++){for(a[u+s]=mr[f+s],l=0,d=0;d<=u;d++)l+=r[d]*a[u+(s-d)];e[s]=l}return Sr(r,t,n+=v,e,o,i,f,u,a)}}if(0===w)for(n-=1,o-=24;0===Or[n];)n-=1,o-=24;else(w=Ar(w,-o))>=Ur?(l=gr*w|0,Or[n]=w-Ur*l|0,o+=24,Or[n+=1]=l):Or[n]=0|w;for(l=Ar(1,o),s=n;s>=0;s--)e[s]=l*Or[s],l*=gr;for(s=n;s>=0;s--){for(l=0,v=0;v<=p&&v<=n-s;v++)l+=hr[v]*e[s+v];Ir[n-s]=l}for(l=0,s=n;s>=0;s--)l+=Ir[s];for(t[0]=0===y?l:-l,l=Ir[0]-l,s=1;s<=n;s++)l+=Ir[s];return t[1]=0===y?l:-l,7&b}function Er(r,t,n,e){var o,i,f,u,a,c,l;for((i=(n-3)/24|0)<0&&(i=0),u=n-24*(i+1),c=i-(f=e-1),l=f+4,a=0;a<=l;a++)jr[a]=c<0?0:mr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=f;c++)o+=r[c]*jr[f+(a-c)];Nr[a]=o}return Sr(r,t,4,Nr,u,4,i,f,jr)}var Fr=Math.round;function Tr(r,t,n){var e,o,i,f,u;return i=r-1.5707963267341256*(e=Fr(.6366197723675814*r)),f=6077100506506192e-26*e,u=t>>20|0,n[0]=i-f,u-(C(n[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=i)-(i=o-(f=6077100506303966e-26*e))-f),n[0]=i-f,u-(C(n[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=i)-(i=o-(f=20222662487111665e-37*e))-f),n[0]=i-f)),n[1]=i-n[0]-f,e}var Hr=1.5707963267341256,Gr=6077100506506192e-26,Pr=2*Gr,Lr=3*Gr,Vr=4*Gr,Wr=[0,0,0],kr=[0,0];function xr(r,t){var n,e,o,i,f,u,a;if((o=2147483647&C(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Tr(r,o,t):o<=1073928572?r>0?(a=r-Hr,t[0]=a-Gr,t[1]=a-t[0]-Gr,1):(a=r+Hr,t[0]=a+Gr,t[1]=a-t[0]+Gr,-1):r>0?(a=r-2*Hr,t[0]=a-Pr,t[1]=a-t[0]-Pr,2):(a=r+2*Hr,t[0]=a+Pr,t[1]=a-t[0]+Pr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Tr(r,o,t):r>0?(a=r-3*Hr,t[0]=a-Lr,t[1]=a-t[0]-Lr,3):(a=r+3*Hr,t[0]=a+Lr,t[1]=a-t[0]+Lr,-3):1075388923===o?Tr(r,o,t):r>0?(a=r-4*Hr,t[0]=a-Vr,t[1]=a-t[0]-Vr,4):(a=r+4*Hr,t[0]=a+Vr,t[1]=a-t[0]+Vr,-4);if(o<1094263291)return Tr(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return D[0]=r,J[B]}(r),a=$(o-((e=(o>>20)-1046)<<20|0),n),f=0;f<2;f++)Wr[f]=0|a,a=16777216*(a-Wr[f]);for(Wr[2]=a,i=3;0===Wr[i-1];)i-=1;return u=Er(Wr,kr,e,i),r<0?(t[0]=-kr[0],t[1]=-kr[1],-u):(t[0]=kr[0],t[1]=kr[1],u)}var Mr=-.16666666666666632;function Yr(r,t,n,e,o){var i,f,u,a,c;return f=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(a=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),u=c*r,n[o]=0===t?r+u*(Mr+c*f):r-(c*(.5*t-u*f)-t-u*Mr),f=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),f+=a*a*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),a=1-(i=.5*c),n[o+e]=a+(1-a-i+(c*f-r*t)),n}var Cr=[0,0];function qr(r,t,n,e){var o,i;if(o=C(r),(o&=y)<=1072243195)return o<1044381696&&0==(0|r)&&(t[e]=r,t[e+n]=0),Yr(r,0,t,n,e);if(o>=p)return t[e]=NaN,t[e+n]=NaN,t;switch(i=xr(r,Cr),Yr(Cr[0],Cr[1],t,n,e),3&i){case 1:return o=t[e+n],t[e+n]=-t[e],t[e]=o,t;case 2:return t[e]*=-1,t[e+n]*=-1,t;case 3:return o=-t[e+n],t[e+n]=t[e],t[e]=o,t;default:return t}}function zr(r){return qr(r,[0,0],1,0)}return c(zr,"assign",qr),zr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).sincos=t();
//# sourceMappingURL=index.js.map
