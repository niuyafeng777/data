function hashTable() {
    this.storage = [];
    this.count = 0;
    this.limit = 7;
    hashTable.prototype.hashFunc = function (str, size) {
        var hashCode = 0;
        for (var i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i)
        }
        var index = hashCode % size;
        return index;
    }
    //添加操作
    hashTable.prototype.put = function (key, value) {
        var index = this.hashFunc(key, this.limit)
        var bucket = this.storage[index]
        if (bucket == null) {
            bucket = []
            this.storage[index] = bucket
        }
        for (var i = 0; i < bucket.length; i++) {
            if (bucket[i][0] == key) {
                bucket[i][1] = value
                return
            }
        }
        bucket.push([key, value])
        this.count++;
        if (this.count > this.limit * 0.75) {
            var newsize = this.limit * 2
            newsize = this.getPrime(newsize)
            this.resize(newsize)
        }
    }
    //获取操作
    hashTable.prototype.get = function (key) {
        var index = this.hashFunc(key, this.limit);
        var bucket = this.storage[index]
        if (bucket == null) return null

        for (var i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1]
            }
        }
        return null
    }
    //删除
    hashTable.prototype.remove = function (key) {
        var index = this.hashFunc(key, this.limit);
        var bucket = this.storage[index]
        if (bucket == null) return false

        for (var i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                var temp = bucket.splice(i, 1)[1]
                this.count--;
                if (this.limit > 7 && this.count < this.limit * 0.25) {
                    var newsize = parseInt(this.limit / 2)
                    newsize = this.getPrime(newsize)
                    this.resize(newsize)
                }
                return temp
            }
        }
        return false
    }
    //是否为空
    hashTable.prototype.isEmpty = function () {
        return this.count === 0
    }
    //哈希表扩容
    hashTable.prototype.resize = function (newLimit) {
        console.log(newLimit);
        let oldstorage = this.storage;
        this.storage = [];
        this.count = 0;
        this.limit = newLimit
        for (let i = 0; i < oldstorage.length; i++) {
            var bucket = oldstorage[i]
            if (bucket == null) {
                continue
            }
            for (let j = 0; j < bucket.length; j++) {
                const tuple = bucket[j];
                this.put(tuple[0], tuple[1])
            }
        }
    }
    hashTable.prototype.isPrime = function (num) {
        var temp = parseInt(Math.sqrt(num))
        for (var i = 2; i < temp; i++) {
            if (num % i === 0) {
                return false
            }
            return true
        }
    }
    hashTable.prototype.getPrime = function (num) {
        while (!this.isPrime(num)) {
            num++
        }
        return num
    }


}
function isPrime(num) {
    var temp = parseInt(Math.sqrt(num))
    for (var i = 2; i < temp; i++) {
        if (num % i === 0) {
            return false
        }
        return true
    }
}