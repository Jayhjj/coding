function Parent(value) {
    this.val = value
  }
  Parent.prototype.getValue = function() {
    console.log(this.val)
  }
  
  function Child(value) {
    Parent.call(this, value)
  }
  Child.prototype = Object.create(Parent.prototype
//     , {
//     constructor: {
//       value: Child,
//       enumerable: false,
//       writable: true,
//       configurable: true
//     }
//   }
  )
  
  const child = new Child(1)
  
  child.getValue() // 1
  child instanceof Parent // true
  