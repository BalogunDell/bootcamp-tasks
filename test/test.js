//import needed  modules
const assert = require('chai').assert;
const app = require('../src/main.js');

describe('ArithGeo function', function(){
    
    // Test for Arithmetic input
    describe('Arithmetic' , function(){
        assert.equal(AritGeo([2,4,6,8,10]), true);
    });

    // Test for geomtric input
     describe('Geometric' , function(){
        assert.equal(AritGeo([1,3,9,27,81]), true);
    });

    // Test for neither geomtric nor arithmetic input
    describe('-1' , function(){
        assert.equal(AritGeo([1,24,57,3,0,43]), true);
    });
    
    // Test for empty input
     describe('0' , function(){
        assert.equal(AritGeo([]), true);
    });

    // Test for no input
     describe('You need to provide an input - an array' , function(){
        assert.equal(AritGeo(), true);
    });

});