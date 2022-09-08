'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

    insert(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    append(value) {
        const node = new Node(value);
        if(!this.head) {
            this.head = node;
        }else{
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
 
}

module.exports = LinkedList;