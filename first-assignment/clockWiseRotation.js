var array = [1, 2, 3, 4, 5]
var popElement = array.pop(array.length-1)
array.splice(0, 0, popElement)
console.log(array)
