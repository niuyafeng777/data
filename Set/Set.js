function Set() {
    this.item = {}
    //添加元素
    Set.prototype.add = function (value) {
        if (this.has(value)) {
            return false
        }
        this.item[value] = value;
        return true
    }
    //has
    Set.prototype.has = function (value) {
        return this.item.hasOwnProperty(value)
    }
    //remove
    Set.prototype.remove = function (value) {
        if (!this.has(value)) {
            return false
        }
        delete this.item[value];
        return true
    }
    //clear
    Set.prototype.clear = function () {
        this.item = {}
    }
    //size
    Set.prototype.size = function () {
        return Object.keys(this.item).length
    }
    //value
    Set.prototype.values = function () {
        return Object.keys(this.item)
    }
    //并集运算
    Set.prototype.union = function (otherSet) {
        var unionSet = new Set()
        var value = this.values();
        for (var i = 0; i < value.length; i++) {
            unionSet.add(value[i])
        }
        value = otherSet.values();
        for (var i = 0; i < value.length; i++) {
            unionSet.add(value[i])
        }
        return unionSet
    }
    //交集运算
    Set.prototype.intersection = function (otherSet) {
        var newSet = new Set();
        var value = this.values();
        for (var i = 0; i < value.length; i++) {
            otherSet.has(value[i]) && newSet.add(value[i])
        }
        return newSet
    }
    //差集运算
    Set.prototype.difference = function (otherSet) {
        var newSet = new Set();
        var value = this.values();
        for (var i = 0; i < value.length; i++) {
            otherSet.has(value[i]) || newSet.add(value[i])
        }
        return newSet
    }
    //判断是否是子集
    Set.prototype.subset = function (otherSet) {
        var value = otherSet.values();
        for (var i = 0; i < value.length; i++) {
            if (!this.has(value[i])) {
                return false
            }
        }
        return true
    }
}

