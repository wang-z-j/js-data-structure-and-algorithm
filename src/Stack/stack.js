/* 
栈常见的操作
push()添加一个新元素到栈顶
pop()从栈顶删除一个元素
peek()返回栈顶的元素
isEmpty() 是否为空
toString() 转为字符串
*/

export default class Stack {
  constructor () {
    this.items = []
  }
  // push(item) 压栈操作，往栈里面添加元素
  push (item) {
    this.items.push(item)
  }
  // pop() 出栈操作，从栈中取出元素，并返回取出的那个元素
  pop (item) {
    return this.items.pop(item)
  }
  //peek () 返回栈顶的元素
  peek () {
    return this.items[this.items.length - 1]
  }
  isEmpty () {
    return this.items.length === 0
  }
  //toString () 转为字符串
  toString () {
    let res = ''
    for (let item of this.items) {
      res += item + ' '
    }
    return res
  }
}