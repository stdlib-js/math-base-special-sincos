// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-abs-mask@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-exponent-mask@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-rempio2@v0.1.0-esm/index.mjs";var i=-.16666666666666632;function a(e,t,s,r,n){var a,d,o,m,l;return d=.00833333333332249+(l=e*e)*(27557313707070068e-22*l-.0001984126982985795)+l*(m=l*l)*(1.58969099521155e-10*l-2.5050760253406863e-8),o=l*e,s[n]=0===t?e+o*(i+l*d):e-(l*(.5*t-o*d)-t-o*i),d=l*(.0416666666666666+l*(2480158728947673e-20*l-.001388888888887411)),d+=m*m*(l*(2.087572321298175e-9+-11359647557788195e-27*l)-2.7557314351390663e-7),m=1-(a=.5*l),s[n+r]=m+(1-m-a+(l*d-e*t)),s}var d=[0,0];function o(e,i,o,m){var l,h;if(l=r(e),(l&=t)<=1072243195)return l<1044381696&&0==(0|e)&&(i[m]=e,i[m+o]=0),a(e,0,i,o,m);if(l>=s)return i[m]=NaN,i[m+o]=NaN,i;switch(h=n(e,d),a(d[0],d[1],i,o,m),3&h){case 1:return l=i[m+o],i[m+o]=-i[m],i[m]=l,i;case 2:return i[m]*=-1,i[m+o]*=-1,i;case 3:return l=-i[m+o],i[m+o]=i[m],i[m]=l,i;default:return i}}function m(e){return o(e,[0,0],1,0)}e(m,"assign",o);export{o as assign,m as default};
//# sourceMappingURL=index.mjs.map
