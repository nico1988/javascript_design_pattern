/*
 *设计模式：揭示模块方式 revealing Module
 *其实就是返回一个匿名对象，匿名对象的属性名指向模块里边的函数
 *同时 暴露的函数调用私有函数
 */

var myRevealingModule = (function() {
    var privateCount = 10;

    function privateFunction() {
        privateCount++;
    }

    function publicFunction() {
        publicIncreament();
    }

    function publicIncreament() {
        privateFunction();
    }

    function publicGetCount() {
        return privateCount;
    }
    // 将暴露的共有指针指向到私有函数上
    return {
        start: publicFunction,
        increment: publicIncreament,
        count: publicGetCount
    }
}())
myRevealingModule.increment();
console.log(myRevealingModule.count());