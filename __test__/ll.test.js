'use strict';


const LinkedList = require('../ll.js');

describe('Testing linked list class', () => {
    it('should create a new linked list', () => {
        let list = new LinkedList();
        expect(list).toBeInstanceOf(LinkedList);
        expect(list.head).toBeNull();
    })
    })

    describe('insert to the beginning of the Linked list', () => {
        it('Add to an empty Linked list', () => {
            let list = new LinkedList();
            list.insert(1);
            expect(list.head.value).toEqual(1);
            expect(list.head.next).toBeNull();
        });

        it('Add to a non-empty list', () => {
            let list = new LinkedList();
            list.insert(1);
            list.insert(2);
            expect(list.head.value).toEqual(2);
            expect(list.head.next.value).toEqual(1);
            expect(list.head.next.next).toBeNull();
        })
    })