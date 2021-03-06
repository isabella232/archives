// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.3_A11.1_T1;
* @section: 12.6.3;
* @assertion: If (Evaluate Statement).type is "continue" and (Evaluate Statement).target is in the current label set, iteration of labeled "var-loop" breaks;
* @description: Using "continue" in order to continue a loop;
*/

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.3_A11.1_T1",

path: "12.6.3",

description: "Using \"continue\" in order to continue a loop",

test: function testcase() {
   __str=""

for(var index=0; index<10; index+=1) {
	if (index<5)continue;
	__str+=index;
}

if (__str!=="56789") {
	$ERROR('#1: __str === "56789". Actual:  __str ==='+ __str  );
}

 }
});

