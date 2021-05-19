import PriorityQueue from './priorityQueue'
let priorityQueue = new PriorityQueue()
console.log(priorityQueue)


// 入队 enqueue() 测试
priorityQueue.enqueue('A', 10);
priorityQueue.enqueue('B', 15);
priorityQueue.enqueue('C', 11);
priorityQueue.enqueue('D', 20);
priorityQueue.enqueue('E', 18);
console.log(priorityQueue.items)