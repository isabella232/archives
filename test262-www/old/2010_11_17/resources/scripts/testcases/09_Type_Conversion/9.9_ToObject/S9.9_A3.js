// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.9_A3;
 * @section: 9.9;
 * @assertion: ToObject conversion from Boolean: create a new Boolean object 
 * whose [[value]] property is set to the value of the boolean;
 * @description: Trying to convert from Boolean to Object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.9_A3",

path: "9.9",

description: "Trying to convert from Boolean to Object",

test: function testcase() {
   // CHECK#1
if (Object(true).valueOf() !== true){
  $ERROR('#1: Object(true).valueOf() === true. Actual: ' + (Object(true).valueOf()));
}

// CHECK#2
if (typeof Object(true) !== "object"){
  $ERROR('#2: typeof Object(true) === "object". Actual: ' + (typeof Object(true)));
}

// CHECK#3
if (Object(true).constructor.prototype !== Boolean.prototype){
  $ERROR('#3: Object(true).constructor.prototype === Boolean.prototype. Actual: ' + (Object(true).constructor.prototype));
}

// CHECK#4
if (Object(false).valueOf() !== false){
  $ERROR('#4: Object(false).valueOf() === false. Actual: ' + (Object(false).valueOf()));
}

// CHECK#5
if (typeof Object(false) !== "object"){
  $ERROR('#5: typeof Object(false) === "object". Actual: ' + (typeof Object(false)));
}

// CHECK#6
if (Object(false).constructor.prototype !== Boolean.prototype){
  $ERROR('#6: Object(false).constructor.prototype === Boolean.prototype. Actual: ' + (Object(false).constructor.prototype));
}

 }
});

