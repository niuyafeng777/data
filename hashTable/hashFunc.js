
//封装哈希化函数
function hashFunc(str, size) {
    var hashCode = 0;
    for (var i = 0; i < str.length; i++) {
        hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    var index = hashCode % size;
    return index;
}
console.log(hashFunc('aaaa', 10));