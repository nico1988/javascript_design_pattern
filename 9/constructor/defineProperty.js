// 带有原型的constructor构造函数
function Car(brand, year, miles) {
    this.brand = brand;
    this.year = year;
    this.miles = miles;
}
Car.prototype.toString = function() {
    return this.brand + " has done " + this.miles + " miles";
}
var civic = new Car("civic", 2010, 20000);
var octovia = new Car("octovia", 2016, 100000);
var focus = new Car("focus", 2017, 5000);
console.info(civic);
console.info(octovia);
console.info(focus);
console.log(civic.toString())
console.log(octovia.toString())
console.log(focus.toString())