class Stack {
    constructor() {
    this.resultStack = [];
    }
    push(val) {
        this.resultStack.push(val);
    }
    pop() {
        this.resultStack.pop();
    }
    peek() {
        var bottom = this.resultStack[this.resultStack.length - 1]; //?
        if (bottom === undefined) {
            console.log('Empty Array');
        } else {
        console.log(bottom);
        }
    }
    isEmpty() {
        if (this.resultStack[0] === undefined) {
            return true;
        } 
        return false;
    }
}

// let firstStack = new Stack();

// firstStack.push(7);
// firstStack.push(5);

// firstStack.peek();

// console.log(firstStack.isEmpty()); 


class Que {
    constructor() {
    this.resultQue = [];    
    }
    enqueue(val) {
        this.resultQue.unshift(val);
    }
    dequeue() {
        this.resultQue.shift();
    }
    front() {
        let top = this.resultQue[0];
        if (top === undefined) {
            console.log("Empty Array");
        } else {
            console.log(top);
        }
    }
    isEmpty() {
        if (this.resultQue.length > 0) {
            return false;
        }
            return true;
        
    
}
}

// let firstQue = new Que();

// firstQue.enqueue(4);
// firstQue.enqueue(6);

// firstQue.front();

// console.log(firstQue.isEmpty()); //?

