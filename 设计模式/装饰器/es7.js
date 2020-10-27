// function classDecorator(target){
//     target.hasDecorator = true
//     return target
// }
// @classDecorator
// class Button {

// }
// console.log('Button是否被装饰了',Button.hasDecorator);

function classDecorator(target) {
    target.hasDecorator = true;
    return target;
  }
  
  var Button = function Button() {};
  
  console.log('Button是否被装饰了', Button.hasDecorator);