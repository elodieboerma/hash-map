class HashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
    }
}

function hash(key,capacity) {
    let hashCode = 0;
    
    let primeNumber  = 31;
    for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
        hashCode = hashCode % capacity;
    }

    return hashCode;
}
