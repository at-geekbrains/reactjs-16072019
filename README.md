# ReactJS-16.07.2019
Репозиторий по курсу ReactJS для домашних заданий

## Задание 1
Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0), 
callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback. 
Если функция не передана, то цикл не должен отрабатывать ни разу. Покажите применение этой 
функции.

## Задание 2
Написать функцию calculateArea, которая будет принимать параметры, для вычисления площади
(можете выбрать какую то конкретную фигуру, а можете, основываясь на переданных параметрах, 
выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры) и возвращать 
объект вида: { area, figure, input }, где area - вычисленная площадь, figure - название фигуры, 
для которой вычислялась площадь, input - входные параметры, по которым было произведено вычисление.

## Задание 3
Необходимо написать иерархию классов вида:
Human -> Employee -> Developer
Human -> Employee -> Manager
Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков),
 а также методы по удалению/добавлению разработчиков.
Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения 
менеджера (имеется ввиду возможность назначить другого менеджера).
У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth 
(строка или дата)
У класса Employee должны присутствовать параметры: salary (число), department (строка)
В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми
 параметрами экземпляра Human.
В классе Employee должен быть реализовать такой же метод (displayInfo), который вызывает 
базовый метод и дополняет его параметрами из экземпляра Employee
Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee 
написать: super.displayInfo(), это вызовет метод disaplyInfo класс Human и вернет строку с 
параметрами Human'a.

## Задание 4
Написать цикл, который создаёт массив промисов, внутри каждого промиса происходит 
обращение к ресурсу (https://jsonplaceholder.typicode.com/users/number), где вместо 
number подставляется число от 1 до 10, в итоге должно получиться 10 промисов. Следует 
дождаться выполнения загрузки всеми промисами и далее вывести массив загруженных данных.


