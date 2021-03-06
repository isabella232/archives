// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.5_A11_T1;
 * @section: 8.5, 7.8.3;
 * @assertion: The integer 0 has two representations, +0 and -0;
 * @description: Check 1.0/p_zero !== 1.0/n_zero;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.5_A11_T1",

path: "8.5, 7.8.3",

description: "Check 1.0/p_zero !== 1.0/n_zero",

test: function testcase() {
   var p_zero=+0;
var n_zero=-0;

if (1.0/p_zero === 1.0/n_zero){
  $ERROR('#1: var p_zero=+0; var n_zero=-0; 1.0/p_zero !== 1.0/n_zero');
}

 }
});

