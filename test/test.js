//import needed  modules
const assert = require('chai').assert;
const aritGeo = require('../src/main');

describe('ArithGeo function', function(){
    
    // Test for Arithmetic input
    it('Arithmetic' , function(){
        assert.equal(aritGeo([2,4,6,8,10]), 'Arithmetic');
    });


    // Test for Arithmetic input
    it('Arithmetic' , function(){
        assert.equal(aritGeo([10,8,6,4,2]), 'Arithmetic');
    });

    // Test for geomtric input
     it('Geometric' , function(){
        assert.equal(aritGeo([1,3,9,27,81]), 'Geometric');
    });

    // Test for neither geomtric nor arithmetic input
     it('Geometric' , function(){
        assert.equal(aritGeo([1.5, 3.5, 8.1]), -1);
    });

    // Test for neither geomtric nor arithmetic input
    it('neither geomtric nor arithmetic' , function(){
        assert.equal(aritGeo([1,24,57,3,0,43]), -1);
    });
    
    // Test for empty input
     it('empty input' , function(){
        assert.equal(aritGeo([]), 0);
    });

    // Test for no input
     it('should return -1 for single element array' , function(){
        assert.equal(aritGeo([1]), -1);
    });


    // Test for no input
     it('should return undefined when no argument is passed' , function(){
        assert.equal(aritGeo(), 'Invalid argument');
    });

    //Test if its an invalid array
    it('should return ivalid argument if its not an array' , function(){
        assert.equal(aritGeo([1,2,3,'44',4,'ab']), 'Array contains invalid characters');
    });

    // Test for mixed characters
     it('should return Array contains invalid characters if array contains strings' , function(){
        assert.equal(aritGeo([1,2,3,'44',4,'ab']), 'Array contains invalid characters');
    });

    

    
   
});
