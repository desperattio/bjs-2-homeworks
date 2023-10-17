// задание 1
function parseCount(num) {
    let result = Number.parseFloat(num);
    if (Number.isNaN(result)) {
        throw new Error("Невалидное значение");
    } else {
        return result;
    }
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (err) {
        return err;
    }
}

// задание 2
class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        let sumWithoutC = this.sideA + this.sideB;
        let sumWithoutB = this.sideA + this.sideC;
        let sumWithoutA = this.sideB + this.sideC;
        if (this.sideA > sumWithoutA || this.sideB > sumWithoutB || this.sideC > sumWithoutC) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    get area() {
        let p = this.perimeter * 0.5;
        let areaNum = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3);
        return Number(areaNum); 
    }

}

function getTriangle(num1, num2, num3) {
    try {
        return new Triangle(num1, num2, num3);
    } catch (err) {
        return {
            get perimeter() {
              return "Ошибка! Треугольник не существует";
            },

            get area() {
              return "Ошибка! Треугольник не существует";
            } 
        }
    }
}