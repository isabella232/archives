// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.3.3_A3;
 * @section: 15.7.3.3;
 * @assertion: Number.MIN_VALUE is DontDelete;
 * @description: Checking if deleting Number.MIN_VALUE fails;
 * @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.3.3_A3",

path: "15.7.3.3",

description: "Checking if deleting Number.MIN_VALUE fails",

test: function testcase() {
   //CHECK#1
if (delete Number.MIN_VALUE !== false) {
  $ERROR('#1: delete Number.MIN_VALUE === false');
}

 }
});

