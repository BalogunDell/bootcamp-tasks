function aritGeo(userInput){
    result = ''

    if(!Array.isArray(userInput)){
        result = 'This function expects an array';
    } 
    if(userInput ===[]){
        result = -1;
    }
    
    if(arit(userInput)){
        result = 'Arithmetic';
    }else if(Geo(userInput)){
        result = 'Geometric';
    }else{
        result = -1;
    }

    return result;
}


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