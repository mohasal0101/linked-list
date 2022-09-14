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


    describe('append to the end of the Linked list', () => {
        it('Add to an empty Linked list', () => {
            let list = new LinkedList();
            list.append(1);
            expect(list.head.value).toEqual(1);
            expect(list.head.next).toBeNull();
        });

        it('Add to a non-empty list', () => {
            let list = new LinkedList();
            list.append(1);
            list.append(2);
            list.append(3);
            expect(list.head.value).toEqual(1);
            expect(list.head.next.value).toEqual(2);
            expect(list.head.next.next.value).toEqual(3);
            expect(list.head.next.next.next).toBeNull();
        })
    })

    describe('Delete the middle element in the linked list', () => {
        it('Delete the middle element', () => {
            let list = new LinkedList();
            list.append(1);
            list.append(2);
            list.append(3);
            list.delete(2);
            expect(list.head.value).toEqual(1);
            expect(list.head.next.value).toEqual(3);
            expect(list.head.next.next).toBeNull();
        })
    })

    describe('Insert into specific index in the linked list', () => {
        it('Insert into specific index', () => {
            let list = new LinkedList();
            list.append(1);
            list.append(2);
            list.append(3);
            list.insertInto(2, 4);
            expect(list.head.value).toEqual(1);
            expect(list.head.next.value).toEqual(2);
            expect(list.head.next.next.value).toEqual(4);
            expect(list.head.next.next.next.value).toEqual(3);
            expect(list.head.next.next.next.next).toBeNull();

           
        })
    })

