"use strict";var C=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var s=C(function(V,l){
var g=-.16666666666666632,I=.00833333333332249,M=-.0001984126982985795,R=27557313707070068e-22,W=-25050760253406863e-24,k=158969099521155e-24,u=.0416666666666666,w=-.001388888888887411,z=2480158728947673e-20,D=-27557314351390663e-23,E=2087572321298175e-24,G=-11359647557788195e-27;function K(v,r,n,a,S){var i,c,p,q,e;return e=v*v,q=e*e,c=I+e*(M+e*R)+e*q*(W+e*k),p=e*v,r===0?n[S]=v+p*(g+e*c):n[S]=v-(e*(.5*r-p*c)-r-p*g),c=e*(u+e*(w+e*z)),c+=q*q*(D+e*(E+e*G)),i=.5*e,q=1-i,n[S+a]=q+(1-q-i+(e*c-v*r)),n}l.exports=K
});var _=C(function(Z,O){
var L=require('@stdlib/constants-float64-high-word-abs-mask/dist'),P=require('@stdlib/constants-float64-high-word-exponent-mask/dist'),b=require('@stdlib/number-float64-base-get-high-word/dist'),B=require('@stdlib/math-base-special-rempio2/dist'),H=s(),T=1072243195,X=1044381696,N=[0,0];function Y(v,r,n,a){var S,i,c;if(i=b(v),i&=L,i<=T)return i<X&&(v|0||(r[a]=v,r[a+n]=0)),H(v,0,r,n,a);if(i>=P)return r[a]=NaN,r[a+n]=NaN,r;switch(c=B(v,N),H(N[0],N[1],r,n,a),c&3){case 1:return S=r[a+n],r[a+n]=-r[a],r[a]=S,r;case 2:return r[a]*=-1,r[a+n]*=-1,r;case 3:return S=-r[a+n],r[a+n]=r[a],r[a]=S,r;default:return r}}O.exports=Y
});var h=C(function($,A){
var j=_();function F(v){return j(v,[0,0],1,0)}A.exports=F
});var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=h(),Q=_();J(m,"assign",Q);module.exports=m;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
