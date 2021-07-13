"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = exports.Stack = void 0;
class Stack {
    constructor() {
        this.stack = [];
    }
    push(value) {
        this.stack.push(value);
    }
    pop() {
        this.stack.pop();
    }
    get length() {
        return this.stack.length;
    }
    get print() {
        return this.stack;
    }
}
exports.Stack = Stack;
class Queue {
    constructor() {
        this.queue = [];
        this.enqueue = (value) => {
            this.queue.push(value);
        };
        this.dequeue = () => {
            this.queue.shift();
        };
    }
    get length() {
        return this.queue.length;
    }
    get print() {
        return this.queue;
    }
}
exports.Queue = Queue;
class HyperSet extends Set {
    isSuperSetOf(secondSet) {
        for (const item of secondSet) {
            const c = this.has(item);
            if (c === false)
                return false;
        }
        return true;
    }
    isSubSet(secondSet) {
        for (const item of this) {
            const c = secondSet.has(item);
            if (c === false)
                return false;
        }
        return true;
    }
    intersection(secondSet) {
        const interSet = new Set();
        for (const itemTwo of secondSet) {
            for (const itemOne of this) {
                if (itemOne === itemTwo) {
                    interSet.add(itemOne);
                }
            }
        }
        return interSet;
    }
    union(secondSet) {
        const unionSet = new Set();
        secondSet.forEach((elem) => unionSet.add(elem));
        this.forEach((elem) => unionSet.add(elem));
        return unionSet;
    }
}
//# sourceMappingURL=DS.js.map