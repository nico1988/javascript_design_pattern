/*
 *设计模式：单例模式 sigleton Module
 *只返回一次实例对象
 */
var mySingleton = (function() {
    var instance;
    // 实例保存了sigleton的一个引用
    function init() {
        // 私有方法和变量
        function privateMethod() {
            console.log("i am private");
        }
        var privateVariable = "i am private variable";
        var privateRandomNumber = Math.random();
        return {
            // 公共方法和变量
            publicMethod: function() {
                console.log("the public can see me");
            },
            publicProperty: "im also public",
            getRandomNumber: function() {
                return privateRandomNumber;
            }
        }
    };
    return {
        getInstance: function() {
            if (!instance) { // 判断是否实例化了对象
                instance = init();
            }
            return instance;
        }
    }
})()

/*
 *非单例模式 
 *
 */
var myBadSingleton = (function() {
        var instance;

        function init() {
            var privateRandomNumber = Math.random();
            return {
                // 公共方法和变量
                getRandomNumber: function() {
                    return privateRandomNumber;
                }
            }
        };
        return {
            //每次都创建新的实例
            getInstance: function() {
                instance = init();
                return instance;
            }
        }
    })()
    // 单例模式
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singleA.getRandomNumber());
console.log(singleB.getRandomNumber());
// 非单例模式
var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log(badSingleA.getRandomNumber());
console.log(badSingleB.getRandomNumber()); // badSingleA  != badSingleB