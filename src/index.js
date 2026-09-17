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
        
    }
}
