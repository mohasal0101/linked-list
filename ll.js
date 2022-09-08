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
    delete(value) {
        if(!this.head) {
            return null;
        }
        if(this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while(current.next) {
            if(current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
    includes(value) {
        let current = this.head;
        while(current) {
            if(current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

module.exports = LinkedList;