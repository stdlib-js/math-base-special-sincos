// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-abs-mask@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-exponent-mask@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-rempio2@v0.3.0-esm/index.mjs";var i=-.16666666666666632,a=.00833333333332249,d=-.0001984126982985795,o=27557313707070068e-22,m=-2.5050760253406863e-8,l=1.58969099521155e-10,h=.0416666666666666,f=-.001388888888887411,p=2480158728947673e-20,u=-2.7557314351390663e-7,c=2.087572321298175e-9,j=-11359647557788195e-27;function v(e,t,s,r,n){var v,g,b,x,w;return g=a+(w=e*e)*(d+w*o)+w*(x=w*w)*(m+w*l),b=w*e,s[n]=0===t?e+b*(i+w*g):e-(w*(.5*t-b*g)-t-b*i),g=w*(h+w*(f+w*p)),g+=x*x*(u+w*(c+w*j)),x=1-(v=.5*w),s[n+r]=x+(1-x-v+(w*g-e*t)),s}var g=1072243195,b=1044381696,x=[0,0];function w(e,i,a,d){var o,m,l;if(m=r(e),(m&=t)<=g)return m<b&&0==(0|e)&&(i[d]=e,i[d+a]=0),v(e,0,i,a,d);if(m>=s)return i[d]=NaN,i[d+a]=NaN,i;switch(l=n(e,x),v(x[0],x[1],i,a,d),3&l){case 1:return o=i[d+a],i[d+a]=-i[d],i[d]=o,i;case 2:return i[d]*=-1,i[d+a]*=-1,i;case 3:return o=-i[d+a],i[d+a]=i[d],i[d]=o,i;default:return i}}function N(e){return w(e,[0,0],1,0)}e(N,"assign",w);export{w as assign,N as default};
//# sourceMappingURL=index.mjs.map
