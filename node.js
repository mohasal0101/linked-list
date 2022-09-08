'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
    this.Node = Node;
  }
}

module.exports = Node;