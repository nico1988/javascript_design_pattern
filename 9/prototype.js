/*
 *设计模式：原型模式 prototype
 * 克隆
 */
// Object.create 一个参数
var myCar = {
    name: 'Ford Escort',
    drive: function() {
        console.log("i am driving");
    },
    sayHi: function() {
        console.log("hi i am nico");
    }
}
var yourCar = Object.create(myCar);
console.log(yourCar.name);

// Object.create 两个参数
var vehicle = {
    getModel: function() {
        console.log('the model of this car is ' + this.model);
    }
}
var myCar = Object.create(vehicle, {
    "model": {
        value: "Ford Escort",
        enumerable: true
    }
})
console.log(myCar.getModel());

// 模拟Object.create
var vehiclePrototype = {
    init: function(carModle) {
        this.model = carModle;
    },
    getModel: function() {
        console.log('the model of this car is ' + this.model);
    }
}

function vehicle001(model) {
    function F() {};
    F.prototype = vehiclePrototype;
    var f = new F();
    f.init(model);
    return f;
}
var car = vehicle001("buick excel");
console.log(car.getModel());