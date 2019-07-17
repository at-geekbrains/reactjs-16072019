
const FIGURE = {
    RECTANGLE:  {value: 1, name: 'Прямоугольник', code: 'R'},
    TRIANGLE:   {value: 2, name: 'Треугольник', code: 'T'},
    CIRCLE:     {value: 3, name: 'Окружность', code: 'C'}
}

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    Area() {
        return this.height * this.width;
    }
}
class Triangle {
    constructor(height, base) {
        this.height = height;
        this.base = base;
    }

    Area() {
        return this.height * this.base / 2;
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    Area() {
        return Math.PI * this.radius * this.radius;
    }
}
const calculateArea = (figure, param1, param2 = 0) => {
    const result = {
        area: 0,
        figure: 0,
        input: []
    };
    
    switch(figure){
        case FIGURE.RECTANGLE.value: 
            result.area = new Rectangle(param1, param2).Area();
            result.figure = figure;
            result.input.push(param1);
            result.input.push(param2);
            break;
        case FIGURE.TRIANGLE.value:
            result.area = new Triangle(param1, param2).Area();
            result.figure = figure;
            result.input.push(param1);
            result.input.push(param2);
            break;
        case FIGURE.CIRCLE.value:
            result.area = new Circle(param1).Area();
            result.figure = figure;
            result.input.push(param1);            
            break;
        default:
            break;

    }
    
    return result;
}

/*  Тестирование */

let figure01 = calculateArea(FIGURE.RECTANGLE.value, 3,5);
console.log("Фигура: %s; Параметры: %d, %d; Площадь: %d", FIGURE.RECTANGLE.name, figure01.input[0], figure01.input[1], figure01.area);

let figure02 = calculateArea(FIGURE.TRIANGLE.value, 3,5);
console.log("Фигура: %s; Параметры: %d, %d; Площадь: %f", FIGURE.TRIANGLE.name, figure02.input[0], figure02.input[1], figure02.area);

let figure03 = calculateArea(FIGURE.CIRCLE.value, 3);
console.log("Фигура: %s; Параметры: %d; Площадь: %f", FIGURE.CIRCLE.name, figure03.input[0], figure03.area);


