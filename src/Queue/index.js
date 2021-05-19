import Queue from './queue'
import passGame from './passGame';
let queue = new Queue()
queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')
queue.enqueue('d')
console.log(queue.items)
queue.dequeue()
console.log(queue.items)
console.log(queue.front())
console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue.toString())

// passGame() 测试
const names = ['lily', 'lucy', 'tom', 'tony', 'jack'];
const targetIndex = passGame(names, 4);
console.log('击鼓传花', names[targetIndex]); //--> lily