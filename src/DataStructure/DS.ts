// ! Stack Data Structure

export class Stack<T> {
  private stack: T[] = [];
  push(value: T) {
    this.stack.push(value);
  }

  pop() {
    this.stack.pop();
  }

  get length() {
    return this.stack.length;
  }

  get print(): T[] {
    return this.stack;
  }

  clear() {
    this.stack.length = 0;
  }
}

// ! Queue Data Strucutre

export class Queue<T> {
  private queue: T[] = [];

  enqueue = (value: T) => {
    this.queue.push(value);
  };

  dequeue = (): T | undefined => {
    return this.queue.shift();
  };

  get length(): number {
    return this.queue.length;
  }

  public get print(): T[] {
    return this.queue;
  }

  clear() {
    this.queue.length = 0;
  }
}

// ! Extending Set<T>() Data Structure

class HyperSet<T> extends Set<T> {
  // superSetOf
  // { 1 2 3 4 }  vs { 3 4 }
  isSuperSetOf(secondSet: Set<T>): boolean {
    for (const item of secondSet) {
      const c = this.has(item);
      if (c === false) return false;
    }
    return true;
  }

  isSubSet(secondSet: Set<T>): boolean {
    for (const item of this) {
      const c = secondSet.has(item);
      if (c === false) return false;
    }
    return true;
  }
  intersection(secondSet: Set<T>) {
    const interSet = new Set<T>();
    for (const itemTwo of secondSet) {
      for (const itemOne of this) {
        if (itemOne === itemTwo) {
          interSet.add(itemOne);
        }
      }
    }

    return interSet;
  }

  union(secondSet: Set<T>) {
    const unionSet = new Set<T>();
    secondSet.forEach((elem) => unionSet.add(elem));
    this.forEach((elem) => unionSet.add(elem));
    return unionSet;
  }
}

class PriorityQueue<T> {
  private queue: T[] = [];

  enqueue = (value: T) => {
    this.queue.push(value);
  };
  //  sorting the values to be popped off the Queue
  dequeue = (): T | undefined => {
    return this.queue.sort().shift();
  };

  get length(): number {
    return this.queue.length;
  }

  public get print(): T[] {
    return this.queue;
  }

  clear() {
    this.queue.length = 0;
  }
}

let PQ = new PriorityQueue<number>();
PQ.enqueue(1);
PQ.enqueue(3);
PQ.enqueue(6);
PQ.enqueue(4);
PQ.enqueue(4);
PQ.enqueue(1);

console.log(PQ.dequeue());
