import Stack from './stack'
let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log('栈push测试', stack.toString())
stack.pop()
stack.pop()
stack.pop()
console.log('栈pop测试', stack.toString())
console.log('栈peek测试', stack.peek())
console.log('栈isEmpty测试', stack.isEmpty())

