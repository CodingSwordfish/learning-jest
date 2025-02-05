// function add(a, b) {
//     return a + b;
//   }

  // function subtract(a, b) {
  //   return a - b;
  // }
  
  function calculateAreaOfRectangle (length, width){

 if(length <= 0 ||  width <= 0){
  throw new Error('Width and height must be positive numbers.');
}

return length * width;
  }


  module.exports = calculateAreaOfRectangle;