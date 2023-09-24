"use strict";var N=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var s=N(function(V,p){
var l=-.16666666666666632,M=.00833333333332249,R=-.0001984126982985795,W=27557313707070068e-22,k=-25050760253406863e-24,m=158969099521155e-24,u=.0416666666666666,w=-.001388888888887411,z=2480158728947673e-20,D=-27557314351390663e-23,E=2087572321298175e-24,G=-11359647557788195e-27;function K(v,r,n,a,i){var S,q,C,c,e;return e=v*v,c=e*e,q=M+e*(R+e*W)+e*c*(k+e*m),C=e*v,r===0?n[i]=v+C*(l+e*q):n[i]=v-(e*(.5*r-C*q)-r-C*l),q=e*(u+e*(w+e*z)),q+=c*c*(D+e*(E+e*G)),S=.5*e,c=1-S,n[i+a]=c+(1-c-S+(e*q-v*r)),n}p.exports=K
});var g=N(function(Z,O){
var L=require('@stdlib/constants-float64-high-word-abs-mask/dist'),P=require('@stdlib/constants-float64-high-word-exponent-mask/dist'),b=require('@stdlib/number-float64-base-get-high-word/dist'),B=require('@stdlib/math-base-special-rempio2/dist'),H=s(),T=1072243195,X=1044381696,_=[0,0];function Y(v,r,n,a){var i,S;if(i=b(v),i&=L,i<=T)return i<X&&(v|0||(r[a]=v,r[a+n]=0)),H(v,0,r,n,a);if(i>=P)return r[a]=NaN,r[a+n]=NaN,r;switch(S=B(v,_),H(_[0],_[1],r,n,a),S&3){case 1:return i=r[a+n],r[a+n]=-r[a],r[a]=i,r;case 2:return r[a]*=-1,r[a+n]*=-1,r;case 3:return i=-r[a+n],r[a+n]=r[a],r[a]=i,r;default:return r}}O.exports=Y
});var h=N(function($,A){
var j=g();function F(v){return j(v,[0,0],1,0)}A.exports=F
});var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=h(),Q=g();J(I,"assign",Q);module.exports=I;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
