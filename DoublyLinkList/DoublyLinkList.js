function DoublyLinkList() {
    //构造节点
    function DoublyNode(data) {

        this.data = data;
        this.next = null;
        this.prev = null;
    }
    //头指针
    this.head = null;
    //尾指针
    this.tail = null;
    //长度
    this.length = 0;
    //1，尾部插入操作
    DoublyLinkList.prototype.append = function (element) {
        //创建新节点
        var newNode = new DoublyNode(element);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
    //2，toString
    DoublyLinkList.prototype.toString = function () {
        return this.backwardString();
    }
    //2.1向前遍历
    DoublyLinkList.prototype.forwardString = function () {
        var str = ''
        var current = this.tail;
        while (current) {
            str += current.data + ' ';
            current = current.prev;
        }
        return str;
    }
    //2.2向后遍历
    DoublyLinkList.prototype.backwardString = function () {

        var str = ''
        var current = this.head;
        while (current) {
            str += current.data + ' ';
            current = current.next;
        }
        return str;
    }
    //3，插入操作
    DoublyLinkList.prototype.insert = function (position, data) {
        if (position < 0 || position > this.length) return false
        var newNode = new DoublyNode(data)
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            //插入节点再头部
            if (position == 0) {
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode
                //插入节点在尾部
            } else if (position == this.length) {
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
                //插入节点在中间
            } else {
                var index = 0;
                var current = this.head;
                while (index != position) {
                    current = current.next
                    index++;
                }
                newNode.next = current;
                newNode.prev = current.prev;
                current.prev.next = newNode;
                current.prev = newNode;
            }
            this.length++;
        }
    }
    //4,get方法
    DoublyLinkList.prototype.get = function (position) {
        if (position < 0 || position >= this.length) {
            return null
        }

        if (position >= this.length / 2) {
            //如果位置大于长度二分之一
            var current = this.tail
            var index = this.length - 1;
            while (index-- !== position) {
                current = current.prev
            }
            return current.data
        } else {
            //如果位置小于长度二分之一
            var current = this.head
            var index = 0;
            while (index++ !== position) {
                current = current.next
            }
            return current.data
        }

    }
    //5，update方法
    DoublyLinkList.prototype.update = function (position, data) {
        if (position < 0 || position >= this.length) {
            return null
        }
        var current = this.head
        var index = 0;
        while (index++ !== position) {
            current = current.next
        }
        current.data = data
        return true
    }
    //6,removeAt()删除指定位置元素
    DoublyLinkList.prototype.removeAt = function (position) {
        if (position < 0 || position >= this.length) {
            return null
        }
        var current = this.head
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            if (position == 0) {
                this.head.next.prev = null;
                this.head = this.head.next
            } else if (position == this.length - 1) {
                this.tail.prev.next = null;
                this.tail = this.tail.prev
            } else {
                var index = 0;

                while (index++ !== position) {
                    current = current.next
                }
                current.prev.next = current.next;
                current.next.prev = current.prev;

            }
        }
        this.length--;
        return current.data
    }
    // 7,查询指定元素的位置 indexOf()
    DoublyLinkList.prototype.indexOf = function (el) {
        var index = 0;
        var current = this.head;
        while (current) {
            if (current.data === el) {
                return index;
            }
            current = current.next;
            index++
        }
        return -1
    }
    //8,删除指定元素
    DoublyLinkList.prototype.remove = function (el) {
        var re = this.indexOf(el)
        return this.removeAt(re);
    }
}