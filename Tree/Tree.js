function BST() {
    function Node(key) {
        this.key = key
        this.left = null
        this.right = null
    }
    this.root = null
    //插入操作
    BST.prototype.insert = function (key) {
        let newNode = new Node(key)
        if (this.root == null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    BST.prototype.insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            node.left == null ? node.left = newNode : this.insertNode(node.left, newNode)
        } else {
            node.right == null ? node.right = newNode : this.insertNode(node.right, newNode)
        }
    }
    this.preOrderArr = []
    this.midOrderArr = []
    this.lastOrderArr = []
    //先序遍历
    BST.prototype.preOrder = function () {
        this.preOrderArr = []
        this.preOrderNode(this.root)
        return this.preOrderArr
    }
    BST.prototype.preOrderNode = function (node) {
        if (node != null) {
            this.preOrderArr.push(node.key)
            this.preOrderNode(node.left)
            this.preOrderNode(node.right)
        }
    }
    //中序遍历
    BST.prototype.midOrder = function () {
        this.midOrderArr = []
        this.midOrderNode(this.root)
        return this.midOrderArr
    }
    BST.prototype.midOrderNode = function (node) {
        if (node != null) {
            this.midOrderNode(node.left)
            this.midOrderArr.push(node.key)
            this.midOrderNode(node.right)
        }
    }

    //后序遍历
    BST.prototype.lastOrder = function () {
        this.lastOrderArr = []
        this.lastOrderNode(this.root)
        return this.lastOrderArr
    }
    BST.prototype.lastOrderNode = function (node) {
        if (node != null) {
            this.lastOrderNode(node.left)
            this.lastOrderNode(node.right)
            this.lastOrderArr.push(node.key)

        }
    }
    //层次遍历
    this.everyOrderArr = []
    BST.prototype.everyOrder = function () {
        this.everyOrderArr = []
        let queue = [this.root]
        let value = []
        let next = []
        let temp = null;
        while (queue.length > 0 || next.length > 0) {
            if (queue.length === 0) {
                this.everyOrderArr.push(value)
                queue = next;
                next = []
                value = []
            }
            temp = queue.shift()
            if (temp) {
                value.push(temp.key);
                next.push(temp.left)
                next.push(temp.right)
            }
        }
        return this.everyOrderArr.flat(Infinity)
    }

    //最小值
    BST.prototype.min = function () {
        let minNode = this.root;
        while (minNode.left !== null) {
            minNode = minNode.left
        }
        return minNode.key
    }
    //最大值
    BST.prototype.max = function () {
        let maxNode = this.root;
        while (maxNode.right !== null) {
            maxNode = maxNode.right
        }
        return maxNode.key
    }
}