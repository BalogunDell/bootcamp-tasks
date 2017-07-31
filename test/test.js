//import needed  modules
const assert = require('chai').assert;
const aritGeo = require('../src/main.js');

describe('ArithGeo function', function(){
    
    // Test for Arithmetic input
    it('Arithmetic' , function(){
        assert.equal(aritGeo([2,4,6,8,10]), 'Arithmetic');
    });

    // Test for geomtric input
     it('Geometric' , function(){
        assert.equal(aritGeo([1,3,9,27,81]), 'Geometric');
    });

    // Test for neither geomtric nor arithmetic input
    describe('-1' , function(){
        assert.equal(aritGeo([1,24,57,3,0,43]), '-1');
    });
    
    // Test for empty input
     describe('0' , function(){
        assert.equal(aritGeo([]), true);
    });

    // Test for no input
     describe('You need to provide an input - an array' , function(){
        assert.equal(aritGeo(), true);
    });

});