// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),t=Object.prototype.toString,e=t,o=function(n){return e.call(n)},f=Object.prototype.hasOwnProperty,u=function(n,r){return null!=n&&f.call(n,r)},i="function"==typeof Symbol?Symbol.toStringTag:"",a=u,c=i,y=t,l=o,p=function(n){var r,t,e;if(null==n)return y.call(n);t=n[c],r=a(n,c);try{n[c]=void 0}catch(r){return y.call(n)}return e=y.call(n),r?n[c]=t:delete n[c],e},A=r&&"symbol"==typeof Symbol.toStringTag?p:l,s=A,v="function"==typeof Uint32Array,b="function"==typeof Uint32Array?Uint32Array:null,w=function(n){return v&&n instanceof Uint32Array||"[object Uint32Array]"===s(n)},d=b,h=function(){var n,r;if("function"!=typeof d)return!1;try{r=new d(r=[1,3.14,-3.14,4294967296,4294967297]),n=w(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},U="function"==typeof Uint32Array?Uint32Array:void 0,m=function(){throw new Error("not implemented")},N=h()?U:m,I=A,g="function"==typeof Float64Array,F="function"==typeof Float64Array?Float64Array:null,S=function(n){return g&&n instanceof Float64Array||"[object Float64Array]"===I(n)},H=F,O=function(){var n,r;if("function"!=typeof H)return!1;try{r=new H([1,3.14,-3.14,NaN]),n=S(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},T="function"==typeof Float64Array?Float64Array:void 0,j=function(){throw new Error("not implemented")},E=O()?T:j,G=A,L="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,M=function(n){return L&&n instanceof Uint8Array||"[object Uint8Array]"===G(n)},x=W,P=function(){var n,r;if("function"!=typeof x)return!1;try{r=new x(r=[1,3.14,-3.14,256,257]),n=M(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},V="function"==typeof Uint8Array?Uint8Array:void 0,Y=function(){throw new Error("not implemented")},_=P()?V:Y,k=A,q="function"==typeof Uint16Array,z="function"==typeof Uint16Array?Uint16Array:null,B=function(n){return q&&n instanceof Uint16Array||"[object Uint16Array]"===k(n)},C=z,D=function(){var n,r;if("function"!=typeof C)return!1;try{r=new C(r=[1,3.14,-3.14,65536,65537]),n=B(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},J="function"==typeof Uint16Array?Uint16Array:void 0,K=function(){throw new Error("not implemented")},Q={uint16:D()?J:K,uint8:_};(n=new Q.uint16(1))[0]=4660;var R,X,Z=52===new Q.uint8(n.buffer)[0],$=N,nn=!0===Z?1:0,rn=new E(1),tn=new $(rn.buffer),en=function(n){return rn[0]=n,tn[nn]},on=N,fn=!0===Z?0:1,un=new E(1),an=new on(un.buffer),cn=function(n){return un[0]=n,an[fn]};!0===Z?(R=1,X=0):(R=0,X=1);var yn,ln,pn=N,An={HIGH:R,LOW:X},sn=new E(1),vn=new pn(sn.buffer),bn=An.HIGH,wn=An.LOW,dn=function(n,r){return vn[bn]=n,vn[wn]=r,sn[0]},hn=dn,Un=Math.floor,mn=Number.POSITIVE_INFINITY,Nn=Number.NEGATIVE_INFINITY,In=function(n){return n!=n},gn=mn,Fn=Nn,Sn=function(n){return n===gn||n===Fn};!0===Z?(yn=1,ln=0):(yn=0,ln=1);var Hn=N,On={HIGH:yn,LOW:ln},Tn=new E(1),jn=new Hn(Tn.buffer),En=On.HIGH,Gn=On.LOW,Ln=function(n,r){return Tn[0]=r,n[0]=jn[En],n[1]=jn[Gn],n},Wn=function(n,r){return 1===arguments.length?Ln([0,0],n):Ln(n,r)},Mn=Wn,xn=en,Pn=hn,Vn=[0,0],Yn=Sn,_n=In,kn=function(n){return Math.abs(n)},qn=function(n,r){return _n(r)||Yn(r)?(n[0]=r,n[1]=0,n):0!==r&&kn(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},zn=function(n,r){return 1===arguments.length?qn([0,0],n):qn(n,r)},Bn=en,Cn=function(n){var r=Bn(n);return(r=(2146435072&r)>>>20)-1023|0},Dn=mn,Jn=Nn,Kn=In,Qn=Sn,Rn=function(n,r){var t,e;return Mn(Vn,n),t=Vn[0],t&=2147483647,e=xn(r),Pn(t|=e&=2147483648,Vn[1])},Xn=zn,Zn=Cn,$n=Wn,nr=hn,rr=[0,0],tr=[0,0],er=function(n,r){var t,e;return 0===r||0===n||Kn(n)||Qn(n)?n:(Xn(rr,n),r+=rr[1],(r+=Zn(n=rr[0]))<-1074?Rn(0,n):r>1023?n<0?Jn:Dn:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,$n(tr,n),t=tr[0],t&=2148532223,e*nr(t|=r+1023<<20,tr[1])))},or=function(n,r){var t,e;for(t=[],e=0;e<r;e++)t.push(n);return t},fr=Un,ur=er,ir=function(n){return or(0,n)},ar=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],cr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],yr=16777216,lr=5.960464477539063e-8,pr=ir(20),Ar=ir(20),sr=ir(20),vr=ir(20);function br(n,r,t,e,o,f,u,i,a){var c,y,l,p,A,s,v,b,w;for(p=f,w=e[t],b=t,A=0;b>0;A++)y=lr*w|0,vr[A]=w-yr*y|0,w=e[b-1]+y,b-=1;if(w=ur(w,o),w-=8*fr(.125*w),w-=v=0|w,l=0,o>0?(v+=A=vr[t-1]>>24-o,vr[t-1]-=A<<24-o,l=vr[t-1]>>23-o):0===o?l=vr[t-1]>>23:w>=.5&&(l=2),l>0){for(v+=1,c=0,A=0;A<t;A++)b=vr[A],0===c?0!==b&&(c=1,vr[A]=16777216-b):vr[A]=16777215-b;if(o>0)switch(o){case 1:vr[t-1]&=8388607;break;case 2:vr[t-1]&=4194303}2===l&&(w=1-w,0!==c&&(w-=ur(1,o)))}if(0===w){for(b=0,A=t-1;A>=f;A--)b|=vr[A];if(0===b){for(s=1;0===vr[f-s];s++);for(A=t+1;A<=t+s;A++){for(a[i+A]=ar[u+A],y=0,b=0;b<=i;b++)y+=n[b]*a[i+(A-b)];e[A]=y}return br(n,r,t+=s,e,o,f,u,i,a)}}if(0===w)for(t-=1,o-=24;0===vr[t];)t-=1,o-=24;else(w=ur(w,-o))>=yr?(y=lr*w|0,vr[t]=w-yr*y|0,o+=24,vr[t+=1]=y):vr[t]=0|w;for(y=ur(1,o),A=t;A>=0;A--)e[A]=y*vr[A],y*=lr;for(A=t;A>=0;A--){for(y=0,s=0;s<=p&&s<=t-A;s++)y+=cr[s]*e[A+s];sr[t-A]=y}for(y=0,A=t;A>=0;A--)y+=sr[A];for(r[0]=0===l?y:-y,y=sr[0]-y,A=1;A<=t;A++)y+=sr[A];return r[1]=0===l?y:-y,7&v}var wr=function(n,r,t,e){var o,f,u,i,a,c,y;for((f=(t-3)/24|0)<0&&(f=0),i=t-24*(f+1),c=f-(u=e-1),y=u+4,a=0;a<=y;a++)pr[a]=c<0?0:ar[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=u;c++)o+=n[c]*pr[u+(a-c)];Ar[a]=o}return br(n,r,4,Ar,i,4,f,u,pr)},dr=Math.round,hr=en,Ur=en,mr=cn,Nr=hn,Ir=wr,gr=function(n,r,t){var e,o,f,u,i;return f=n-1.5707963267341256*(e=dr(.6366197723675814*n)),u=6077100506506192e-26*e,i=r>>20|0,t[0]=f-u,i-(hr(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=f)-(f=o-(u=6077100506303966e-26*e))-u),t[0]=f-u,i-(hr(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=f)-(f=o-(u=20222662487111665e-37*e))-u),t[0]=f-u)),t[1]=f-t[0]-u,e},Fr=1.5707963267341256,Sr=6077100506506192e-26,Hr=2*Sr,Or=3*Sr,Tr=4*Sr,jr=[0,0,0],Er=[0,0],Gr=function(n,r){var t,e,o,f,u,i,a;if((o=2147483647&Ur(n)|0)<=1072243195)return r[0]=n,r[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?gr(n,o,r):o<=1073928572?n>0?(a=n-Fr,r[0]=a-Sr,r[1]=a-r[0]-Sr,1):(a=n+Fr,r[0]=a+Sr,r[1]=a-r[0]+Sr,-1):n>0?(a=n-2*Fr,r[0]=a-Hr,r[1]=a-r[0]-Hr,2):(a=n+2*Fr,r[0]=a+Hr,r[1]=a-r[0]+Hr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?gr(n,o,r):n>0?(a=n-3*Fr,r[0]=a-Or,r[1]=a-r[0]-Or,3):(a=n+3*Fr,r[0]=a+Or,r[1]=a-r[0]+Or,-3):1075388923===o?gr(n,o,r):n>0?(a=n-4*Fr,r[0]=a-Tr,r[1]=a-r[0]-Tr,4):(a=n+4*Fr,r[0]=a+Tr,r[1]=a-r[0]+Tr,-4);if(o<1094263291)return gr(n,o,r);if(o>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(t=mr(n),a=Nr(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)jr[u]=0|a,a=16777216*(a-jr[u]);for(jr[2]=a,f=3;0===jr[f-1];)f-=1;return i=Ir(jr,Er,e,f),n<0?(r[0]=-Er[0],r[1]=-Er[1],-i):(r[0]=Er[0],r[1]=Er[1],i)},Lr=Gr,Wr=-.16666666666666632;function Mr(n,r,t){var e,o,f,u,i;return o=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(u=i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),f=i*r,n[0]=0===t?r+f*(Wr+i*o):r-(i*(.5*t-f*o)-t-f*Wr),o=i*(.0416666666666666+i*(2480158728947673e-20*i-.001388888888887411)),o+=u*u*(i*(2.087572321298175e-9+-11359647557788195e-27*i)-2.7557314351390663e-7),u=1-(e=.5*i),n[1]=u+(1-u-e+(i*o-r*t)),n}var xr=[0,0];function Pr(n,r){var t,e;if(t=en(r),(t&=2147483647)<=1072243195)return t<1044381696&&0==(0|r)&&(n[0]=r,n[1]=0),Mr(n,r,0);if(t>=2146435072)return n[0]=NaN,n[1]=NaN,n;switch(e=Lr(r,xr),Mr(n,xr[0],xr[1]),3&e){case 1:return t=n[1],n[1]=-n[0],n[0]=t,n;case 2:return n[0]*=-1,n[1]*=-1,n;case 3:return t=-n[1],n[1]=n[0],n[0]=t,n;default:return n}}return function(n,r){return 1===arguments.length?Pr([0,0],n):Pr(n,r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).sincos=r();
//# sourceMappingURL=browser.js.map
