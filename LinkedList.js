function LinkedList() {
  function Node(element) {
    this.element = element
    this.next = null
  }
  var length = 0
  var head = null

  this.append = function (element) {
    var node = new Node(element)
    if (head == null) {
      head = node
    } else {
      let current = head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    length++
  }

  this.removeAt = function (position) {
    if (position<0 || position>length-1) return null
    var current = head,index=0,deleted
    if (position == 0) {
      deleted = head
      head = current.next
    } else {
      while ( index++ < position - 1) {
        current = current.next
      }
      deleted = current.next
      current.next = current.next.next
    }
    length--
    return deleted.element
  }

  this.insert = function (position,element) {
    if(position < 0) return false
    if(position > length) position = length
    var node = new Node(element),
        index = 0,
        current = head
    if (position == 0) {
      node.next = head
      head = node
    } else {
      while (index++ < position - 1) {
        current = current.next
      }
      node.next = current.next
      current.next = node
    }
    length++
    return true
  }

  this.toString = function () {
    var str = []
    var current = head
    for (var i = 0; i < length;i++) {
      str.push(current.element)
      current = current.next
    }
    return str
  }

  this.indexOf = function (element) {
    var current = head
    for (var i = 0; i < length; i++) {
      if (current.element == element) {
        return i
      }
      current = current.next
    }
    return -1
  }

  this.remove = function (element) {
    return this.removeAt(this.indexOf(element))
  }

  this.isEmpty = function () {
    return length == 0
  }

  this.size = function () {
    return length
  }

  this.getHead = function () {
    return head
  }
}
var list = new LinkedList()
export default list
