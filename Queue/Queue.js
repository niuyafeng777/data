function Queue() {
    this.item = [];
    //将元素放入队尾
    Queue.prototype.enqueue = function (e) {
        this.item.push(e);
    }
    //删除队首的元素
    Queue.prototype.delqueue = function () {
        return this.item.shift();
    }
    //查看队首的元素
    Queue.prototype.front = function () {
        return this.item[0]
    }
    //查看队列是不是为空
    Queue.prototype.isEmpty = function () {
        return this.item.length == 0
    }
    //队列的长度
    Queue.prototype.size = function () {
        return this.item.length
    }
    //输出队列
    Queue.prototype.toString = function () {
        var res = '';
        for (var i = 0; i < this.item.length; i++) {
            res += this.item[i] + ' '
        }
        return res
    }
}