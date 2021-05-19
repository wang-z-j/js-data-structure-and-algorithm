import Queue from './queue.js';

// 利用队列结构的特点实现击鼓传花游戏求解方法的封装
export default function passGame (nameList, number) {
  let queue = new Queue()
  //将nameList所有元素入队
  for (const name of nameList) {
    queue.enqueue(name)
  }
  // 1、开始数数 剩一个停止
  while (queue.size() > 1) {
    for (let i = 0; i < number - 1; i++) {
      //将指定number之前的元素都删除 并重新添加队尾
      queue.enqueue(queue.dequeue())
    }
    //指定number的元素就在队头
    queue.dequeue()
  }
  //2、返回最后剩下的name
  const endName = queue.front()
  // 3、返回这个人在原数组中对应的索引
  return nameList.indexOf(endName);
}