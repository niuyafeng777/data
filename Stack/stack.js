function stack() {
    this.items = [];
    //1,将元素压入栈
    stack.prototype.push = function (e) {
        this.items.push(e);
    }
    //2,从栈中取出元素
    stack.prototype.pop = function () {
        return this.items.pop();
    }
    //3,查看栈顶元素
    stack.prototype.peek = function () {
        return this.items[this.items.length - 1]
    }
    //4,查看栈是否为空
    stack.prototype.isEmpty = function () {
        return this.items.length == 0
    }
    //5,查看栈中元素的个数
    stack.prototype.size = function () {
        return this.items.length
    }
    //6,获取栈
    stack.prototype.toString = function () {
        var res = '';
        for (var i = 0; i < this.items.length; i++) {
            res += this.items[i] + ''
        }
        return res
    }
}