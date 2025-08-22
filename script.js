

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.node = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.node = newNode;
            this.tail = newNode;
        }
        else {
            this.node.nextNode = newNode;
            this.node = newNode;
            this.tail = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    size(value = this.head) {
        if (!value) {
            return 0
        }

        return 1 + this.size(value.nextNode);
        
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        let head = this.head;
        for (let i = 0; i < index; i++) {
            head = head.nextNode;
        }
        return head;
    }

    pop(value = this.head) {
        let current = value;
        if (!this.head) {
            return null;
        }
        else if (!this.head.nextNode) {
            this.head = null;
        }
        while(current.nextNode.nextNode !== null) {
            current = current.nextNode;

        }
        current.nextNode = null;
    }

    contains(value) {
        let current = this.head;
        if (!this.head) {
            return null;
        }
        else if (current.value === value) {
            return true;
        }
        else if (this.tail.value === value) {
            return true;
        }
        while (current.nextNode !== null) {
            current = current.nextNode;
            if (current.value === value) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    find(value) {
        let head = this.head;
        let index = 0;
        while (head !== null) {
            
            if (head.value === value) {
                return index;
            }
            else {
                head = head.nextNode;
                index++;
            }
        }
        return null;
        
    }

    toString() {
        let head = this.head;
        let string = ``;
        while (head !== null) {
            let value = `( ${head.value} ) -> `;
            string += value;
            head = head.nextNode;
        }
        return string += null;
    }

    insertAt(value, index) {
        const node = this.at(index);
        node.value = value;
    }

    removeAt(index) {
        if (index === 0) {
            this.head = this.head.nextNode;
        }
        const previousNode = this.at(index - 1);
        const nextNode = this.at(index + 1);
        previousNode.nextNode = nextNode;
    }
}


const list = new LinkedList();

list.append("shark");
list.append("crocodile");
list.append("fish");


list.prepend("lion");


console.log(list.find("fish"));
console.log(list.toString());
console.log(list.at(3));
list.insertAt("dinosaur", 3);
console.log(list.at(3));
list.removeAt(0);
console.log(list.toString());