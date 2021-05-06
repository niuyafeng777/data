function PriorityQueue() {
    //封装一个新函数，里面有两个值：元素和属性
    function QueueElements(e, p) {
        this.e = e;
        this.p = p;
    }
    this.items = [];
    //插入元素之前进行判断
    PriorityQueue.prototype.enqueue = function (e, p) {
        var qe = new QueueElements(e, p);
        if (this.items.length == 0) {
            this.items.push(qe)
        } else {
            var add = false;
            for (var i = 0; i < this.items.length; i++) {
                if (qe.p < this.items[i].p) {
                    this.items.splice(i, 0, qe)
                    add = true;
                    break;
                }
            }
            if (!add) {
                this.items.push(qe);
            }
        }
    }
    PriorityQueue.prototype.delqueue = function () {
        return this.items.shift();
    }
    //查看队首的元素
    PriorityQueue.prototype.front = function () {
        return this.items[0]
    }
    //查看队列是不是为空
    PriorityQueue.prototype.isEmpty = function () {
        return this.items.length == 0
    }
    //队列的长度
    PriorityQueue.prototype.size = function () {
        return this.items.length
    }
    //输出队列
    PriorityQueue.prototype.toString = function () {
        var res = '';
        for (var i = 0; i < this.items.length; i++) {
            res += this.items[i].e + '-' + this.items[i].p + ' '
        }
        return res
    }
}
