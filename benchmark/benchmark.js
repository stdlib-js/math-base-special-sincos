/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var uniform = require( '@stdlib/random-array-uniform' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var sin = require( '@stdlib/math-base-special-sin' );
var cos = require( '@stdlib/math-base-special-cos' );
var pkg = require( './../package.json' ).name;
var sincos = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var i;

	x = uniform( 100, -10.0, 10.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = sincos( x[ i%x.length ] );
		if ( isnan( y[0] ) || isnan( y[1] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y[0] ) || isnan( y[1] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::separate-evaluation', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = uniform( 100, -10.0, 10.0 );
	y = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = [ sin( x[ i%x.length ] ), cos( x[ i%x.length ] ) ];
		if ( isnan( y[0] ) || isnan( y[1] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y[0] ) || isnan( y[1] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':assign', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = uniform( 100, -10.0, 10.0 );
	y = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		sincos.assign( x[ i%x.length ], y, 1, 0 );
		if ( isnan( y[0] ) || isnan( y[1] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y[0] ) || isnan( y[1] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::separate-evaluation,in-place', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = uniform( 100, -10.0, 10.0 );
	y = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y[0] = sin( x[ i%x.length ] );
		y[1] = cos( x[ i%x.length ] );
		if ( isnan( y[0] ) || isnan( y[1] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y[0] ) || isnan( y[1] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = uniform( 100, -10.0, 10.0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = [ Math.sin( x[ i%x.length ] ), Math.cos( x[ i%x.length ] ) ]; // eslint-disable-line stdlib/no-builtin-math
		if ( isnan( y[0] ) || isnan( y[1] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y[0] ) || isnan( y[1] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in,in-place', function benchmark( b ) {
	var x;
	var y;
	var i;

	x = uniform( 100, -10.0, 10.0 );
	y = [ 0.0, 0.0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y[0] = Math.sin( x[ i%x.length ] ); // eslint-disable-line stdlib/no-builtin-math
		y[1] = Math.cos( x[ i%x.length ] ); // eslint-disable-line stdlib/no-builtin-math
		if ( isnan( y[0] ) || isnan( y[1] ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( y[0] ) || isnan( y[1] ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
