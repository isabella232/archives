// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9.2_A1_T5;
 * @section: 7.9.2;
 * @assertion: Check examples for automatic semicolon insertion from the Standart;
 * @description: a=b \n ++c is a valid sentence in the ECMAScript grammar
 *  with automatic semicolon insertion, but a!==b++c;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9.2_A1_T5",

path: "7.9.2",

description: "a=b \\n ++c is a valid sentence in the ECMAScript grammar",

test: function testcase() {
   //CHECK#1
var a=1,b=2,c=3;
a=b
++c

if (a!==b) $ERROR('#1: Automatic semicolon insertion not work with ++');

 }
});

