class LRUCache{
  constructor(capacity){
    this.capacity = capacity
    this.size = 0
    this.cache = {}
    this.queue = new DoublyLinkedList()
  }
  getMostRecentKey(){
    const node = this.queue.head
    return node.key
  }
  getValue(key){
    const node = this.cache[key]
    if (!node) return null
    //update most recent by setting the head
    this.queue.setHead(node)
    return node.value
  }
  insert(key, value){
    if (key in this.cache){
      this.cache[key].value = value
    } else {
      if (this.size === this.capacity){
        const keyToRemove = this.queue.tail.key
        if (this.queue.head === this.queue.tail || this.size == 1){
          // const node = new Node(key, value)
          this.queue.head = null
          this.queue.tail = null
        } else {
          this.queue.tail = this.queue.tail.prev
          this.queue.tail.next = null
        }
        delete this.cache[keyToRemove]
      } else {
        this.size++
      }
      this.cache[key] = new Node(key, value)
    }
    this.queue.setHead(this.cache[key])
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
  }
  setHead(node){
    if (this.head === node) return
    if (this.head === null){
      this.head = node
      this.tail = node
    } else if (this.head === this.tail){
      this.tail.prev = node
      this.head = node
      this.head.next = this.tail
    } else {
      if (this.tail === node){
        this.tail = this.tail.prev
        this.tail.next = null
      }
      if (node.next) node.prev.next = node.next
      if (node.prev) node.next.prev = node.prev
      node.next = null
      node.prev = null
      //
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
  }
}

class Node{
  constructor(key, val){
    this.key = key
    this.value = val
    this.next = null
    this.prev = null
  }
}