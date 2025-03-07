<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sincos

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Simultaneously compute the [sine][@stdlib/math/base/special/sin] and [cosine][@stdlib/math/base/special/cos] of a number.



<section class="usage">

## Usage

```javascript
import sincos from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincos@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { assign } from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincos@deno/mod.js';
```

#### sincos( x )

Simultaneously computes the [sine][@stdlib/math/base/special/sin] and [cosine][@stdlib/math/base/special/cos] of a `number` (in radians).

```javascript
var v = sincos( 0.0 );
// returns [ ~0.0, ~1.0 ]

v = sincos( 3.141592653589793/2.0 );
// returns [ ~1.0, ~0.0 ]

v = sincos( -3.141592653589793/6.0 );
// returns [ ~-0.5, ~0.866 ]
```

#### sincos.assign( x, out, stride, offset )

Simultaneously computes the [sine][@stdlib/math/base/special/sin] and [cosine][@stdlib/math/base/special/cos] of a `number` (in radians) and assigns results to a provided output array.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var out = new Float64Array( 2 );

var v = sincos.assign( 0.0, out, 1, 0 );
// returns <Float64Array>[ ~0.0, ~1.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@deno/mod.js';
import TWO_PI from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-two-pi@deno/mod.js';
import sincos from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincos@deno/mod.js';

var x = linspace( 0.0, TWO_PI, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( sincos( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/cos`][@stdlib/math/base/special/cos]</span><span class="delimiter">: </span><span class="description">compute the cosine of a number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/sin`][@stdlib/math/base/special/sin]</span><span class="delimiter">: </span><span class="description">compute the sine of a number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/sincospi`][@stdlib/math/base/special/sincospi]</span><span class="delimiter">: </span><span class="description">simultaneously compute the sine and cosine of a number times π.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-sincos.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-sincos

[test-image]: https://github.com/stdlib-js/math-base-special-sincos/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-sincos/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-sincos/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-sincos?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-sincos.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-sincos/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-sincos/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-sincos/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-sincos/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-sincos/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-sincos/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-sincos/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-sincos/blob/main/branches.md

<!-- <related-links> -->

[@stdlib/math/base/special/cos]: https://github.com/stdlib-js/math-base-special-cos/tree/deno

[@stdlib/math/base/special/sin]: https://github.com/stdlib-js/math-base-special-sin/tree/deno

[@stdlib/math/base/special/sincospi]: https://github.com/stdlib-js/math-base-special-sincospi/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
