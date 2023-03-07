import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"

interface NodeType {
    val: number,
    next: NodeType | null
}

class ListNode {
    next: NodeType | null
    val: number

    constructor(val: number, next: NodeType | null){
        this.val = val
        this.next = next 
    }
}


class LinkedList {
    head: NodeType | null
    tail: NodeType | null

    constructor(head: NodeType | null, tail: NodeType | null){
        this.head = head
        this.tail = tail
    }

}