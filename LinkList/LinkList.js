function LinkList() {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    this.head = null;
    //记录链表中元素的个数
    this.length = 0;
    //1,链表尾部追加元素
    LinkList.prototype.append = function (data) {
        //创建新节点
        var newNode = new Node(data);
        //判断链表是不是为空
        if (this.length === 0) {
            //将头指针指向这个节点
            this.head = newNode;
        } else {
            //找到最后一个节点
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            //找到之后将最后一个节点的next指向新创建的节点
            current.next = newNode;
        }
        this.length++;
    }
    //2,遍历链表
    LinkList.prototype.toString = function () {
        //从头开始
        var current = this.head;
        var listString = ''
        while (current) {
            listString += current.data + ' '
            current = current.next

        }
        return listString
    }
    //3,指定位置插入元素
    LinkList.prototype.insert = function (position, data) {
        //判断位置是否合法
        if (position < 0 || position > this.length) return false
        //新建节点
        var newNode = new Node(data);
        //判断position是不是0
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            var current = this.head;
            var prev = null;
            var route = 0
            while (route++ < position) {
                prev = current;
                current = current.next
            }
            newNode.next = current;
            prev.next = newNode;
        }
        this.length++;
        return true
    }
    //4，返回对应位置元素的值
    LinkList.prototype.get = function (position) {
        //判断值是否有效
        if (position < 0 || position >= this.length) return null;
        var current = this.head;
        var index = 0;
        while (index++ !== position) {
            current = current.next;
        }
        return current.data
    }

    //5,返回元素所在链表的索引
    LinkList.prototype.indexOf = function (element) {
        var current = this.head;
        var index = 0;
        while (current) {
            if (element === current.data) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    //6,修改某个位置的元素
    LinkList.prototype.update = function (position, data) {
        if (position < 0 || position >= this.length) return null;
        var current = this.head;
        var index = 0;
        while (index++ !== position) {
            current = current.next;
        }
        current.data = data;
        return 1;

    }
    //7,removeAt方法删除指定位置的元素
    LinkList.prototype.removeAt = function (position) {
        if (position < 0 || position >= this.length) return null;

        if (position === 0) {
            this.head = this.head.next;
        } else {
            var current = this.head;
            var prev = null;
            var index = 0;
            while (index++ !== position) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
        }
        this.length--;
    }
    //8.删除指定元素
    LinkList.prototype.remove = function (data) {
        var position = this.indexOf(data);
        return this.removeAt(position);
        this.length--;
    }
    //9.
    LinkList.prototype.isEmpty = function () {
        return this.length == 0;
    }
    //10
    LinkList.prototype.size = function () {
        return this.length;
    }
}