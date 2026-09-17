class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      var current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}


class HashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
    }

    hash(key) {
        let hashCode = 0;
    
        let primeNumber  = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {
        let index = this.hash(key);
        let bucket = this.at[index];
        if (this.capacity * this.loadFactor >= this.size) {
            this.capacity *= 2;
        }
        if (bucket == undefined) {
            bucket = new LinkedList();
        }
        bucket.append(new Node(value));
    }
}
