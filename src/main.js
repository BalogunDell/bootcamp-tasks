function aritGeo(userInput){

  //@param = array
  //output:
  //       'Arithmetic':  if userArray is Arithmetic progression
  //      'Geometric':  if userArray is Geometric progression
  //      0: if userInput is empty.
  //      -1 if userInput is neither Arithmetic nor Geometric but not empty
  //      undefined: if userInput is not an array.
  //      length of 1: if userInput length is 1

    if(!Array.isArray(userInput) || !userInput){
        return 'Invalid argument';
    } 

    if(!userInput.every(checkArrayElements)){
      return 'Array contains invalid characters';
    }

    if(userInput.length === 0){
        return 0;
    }
    
    if(userInput.length == 1){
      return -1;
    }
    if(CheckArithmetic(userInput)){
        return 'Arithmetic';
    }else if(CheckGeometric(userInput)){
        return 'Geometric';
        
    }else{
        return -1;
    }
}

  aritGeo([1.5, 3.5, 8.1]);
// Check if array is Arithmetic
function CheckArithmetic(userArray){
    const d = userArray[0] - userArray[1];
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

// Check if array is geometric
function CheckGeometric(userArray){
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

function checkArrayElements(arr){
  return typeof arr === 'number';
}

module.exports= aritGeo;
