class Node {
    constructor(val, next=null) {
        this.val = val
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    //insert first node
    insertFirstVal(val) {
        this.head = new Node(val, this.head)
        this.size++
    }

    //insert last node
    insertLastVal(val) {
        let lastNode = new Node(val)
        let current

        if (!this.head) {
         this.head = lastNode   
        } else {
            current = this.head

            while (current.next) {
                current = current.next
            }
            current.next = lastNode
        }
        this.size++
    }
    //insert at index
    insertAtIndex(val, idx) {
        let nodeToInsert = new Node(val)
        

        

    }
    //get at index

    //remove at index

    //clear value

    //print list
    printVal() {
        let current = this.head;
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }
}

const linkList = new LinkedList()

linkList.insertFirstVal(100)
linkList.insertFirstVal(2200)
linkList.insertLastVal(3000)
linkList.insertAtIndex(5)
linkList.printVal()

