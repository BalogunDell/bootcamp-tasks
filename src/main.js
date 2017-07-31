function aritGeo(userInput){

  //@param = array
  //output:
  //       'Arithmetic':  if userArray is Arithmetic progression
  //      'Geometric':  if userArray is Geometric progression
   //     0: if userInput is empty.
   //     -1 if userInput is neither Arithmetic nor Geometric but not empty

    result = ''

    if(!Array.isArray(userInput)){
        result = 'undefined';
        return result;
    } 
    if(userInput.length === 0){
        result = 0;
        return result;
    }
    
    if(arit(userInput)){
        return 'Arithmetic';
    }else if(Geo(userInput)){
        return 'Geometric';
        
    }else{
        return -1;
    }
}

console.log(aritGeo() ===  'undefined');

// Check if array is Arithmetic
function arit(userArray){
    const d = userArray[0] - userArray[1];
    const r = userArray[1] / userArray[0];
    let result = '';
    let i =2;
    
    if(userArray.length === 0){
      result = 0;
    }
    
    for(; i<userArray.length-1; i++){
      
      if(userArray[i] - userArray[i+1] == d){
        //i++;
        result = true;
      }else{
        result = false;
      }
      
    }
    return result;
}

arit([1,2,3,4,5,6]);



// Check if array is geometric
function Geo(userArray){
    const r = userArray[1] / userArray[0];
    let result = '';
    let i =2;
    
    if(userArray.length === 0){
      result = 0;
    }
    
  for(; i<userArray.length; i++){
    if(userArray[i] == (userArray[i-1] * r)){
      result = true;
    }else{
      result = false;
    }
  }
   
  return result;
}

Geo([ 2, 6, 18, 54]);

module.exports= aritGeo;
