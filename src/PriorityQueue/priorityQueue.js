//优先级队列
import Queue from '../Queue/queue'
class QueueElement {
  constructor (element, priority) {
    this.element = element;
    this.priority = priority;
  }
}
export default class PriorityQueue extends Queue {
  constructor () {
    super()
  }
  /* 
  *enqueue() 入队
  *element 元素
  *priority 优先级
  */
  enqueue (element, priority) {
    const queueElement = new QueueElement(element, priority)
    //如果队列的size为0 说明是第一次添加 直接push
    if (this.isEmpty()) {
      this.items.push(queueElement)
    } else {
      let added = false//是否添加过了
      for (let i = 0; i < this.items.length; i++) {
        //让插入的新元素的优先级与队列中的元素优先级与进行比较 如果小于 则插入
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      //遍历完队列 如果发现优先级都大于新插入的元素 则直接push到最后
      if (!added) {
        this.items.push(queueElement)
      }
    }

  }
  // dequeue() 出队，从队列中删除前端元素，返回删除的元素
  // 继承 Queue 类的 dequeue()
  dequeue () {
    return super.dequeue();
  }

  // front() 查看队列的前端元素
  // 继承 Queue 类的 front()
  front () {
    return super.front();
  }

  // isEmpty() 查看队列是否为空
  // 继承 Queue 类的 isEmpty()
  isEmpty () {
    return super.isEmpty();
  }

  // size() 查看队列中元素的个数
  // 继承 Queue 类的 size()
  size () {
    return super.size();
  }

  // toString() 将队列中元素以字符串形式返回
  // 重写 toString()
  toString () {
    let result = "";
    for (let item of this.items) {
      result += item.element + "-" + item.priority + " ";
    }
    return result;
  }
}
