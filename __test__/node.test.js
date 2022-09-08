'use strict';

const Node = require('../node.js');

describe('should add a new node to the beginning of the linked list', () => {
  it('should add a new node to the beginning of the linked list', () => {
    let node = new Node(1);
    expect(node.value).toEqual(1);
    expect(node.next).toBeNull();
  });
})
