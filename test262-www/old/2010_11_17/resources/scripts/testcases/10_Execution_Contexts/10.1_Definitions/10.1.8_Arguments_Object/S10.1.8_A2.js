// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.8_A2;
 * @section: 10.1.8;
 * @assertion: The value of the internal [[Prototype]] property of the 
 * created arguments object is the original Object prototype object, the one 
 * that is the initial value of Object.prototype;
 * @description: Checking arguments.constructor.prototype===Object.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.8_A2",

path: "10.1.8",

description: "Checking arguments.constructor.prototype===Object.prototype",

test: function testcase() {
   //CHECK#1
function f1(){
  return arguments.constructor.prototype;
}
try{
  if(f1() !== Object.prototype){
    $ERROR('#1: arguments.constructor.prototype === Object.prototype');
  }
}
catch(e){
  $ERROR("#1: arguments doesn't exists");
}

//CHECK#2
var f2 = function(){return arguments.constructor.prototype;};
try{
  if(f2() !== Object.prototype){
    $ERROR('#2: arguments.constructor.prototype === Object.prototype');
  }
}
catch(e){
  $ERROR("#2: arguments doesn't exists");
}

 }
});

