/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@esm/index.d.ts"/>

import { Collection } from '@stdlib/types/object';

/**
* Simultaneously computes the sine and cosine of a number.
*
* @param out - destination array
* @param x - input value (in radians)
* @returns sine and cosine
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* var out = new Float64Array( 2 );
*
* var v = sincos( out, 0.0 );
* // return <Float64Array>[ ~0.0, ~1.0 ]
*
* var bool = ( v === out );
* // returns true
*/
declare function sincos( out: Collection, x: number ): Collection;

/**
* Simultaneously computes the sine and cosine of a number.
*
* @param x - input value (in radians)
* @returns sine and cosine
*
* @example
* var v = sincos( 0.0 );
* // returns [ ~0.0, ~1.0 ]
*
* @example
* var v = sincos( 3.141592653589793/2.0 );
* // returns [ ~1.0, ~0.0 ]
*
* @example
* var v = sincos( -3.141592653589793/6.0 );
* // returns [ ~-0.5, ~0.866 ]
*
* @example
* var v = sincos( NaN );
* // returns [ NaN, NaN ]
*/
declare function sincos( x: number ): Collection;


// EXPORTS //

export = sincos;