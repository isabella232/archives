// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.2_A2.3_T2;
 * @section: 7.2, 7.8.4;
 * @assertion: FORM FEED (U+000C) may occur within strings;
 * @description: Use real FORM FEED;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.2_A2.3_T2",

path: "7.2, 7.8.4",

description: "Use real FORM FEED",

test: function testcase() {
   //CHECK#1
if ("string" !== "\u000Cstr\u000Cing\u000C") {
  $ERROR('#1: "string" === "\\u000Cstr\\u000Cing\\u000C"');
}

 }
});

