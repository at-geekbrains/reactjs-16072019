class Human {
    constructor(name = null, age = 0, dateOfBirth = null) {        
        this.Name = {
            title: 'Имя: ',
            value: name
        }
        this.Age = {
            title: 'Возраст: ',
            value: age
        }
        this.DateOfBirth = {
            title: 'Дата рождения: ',
            value: dateOfBirth
        }
        this.HumanInfo = [
            this.Name.title + this.Name.value, 
            this.Age.title + this.Age.value, 
            this.DateOfBirth.title + this.DateOfBirth.value
        ];
    }

    displayInfo(){        
        return this.HumanInfo.join(';');
    }
}

class Employee extends Human {
    constructor(name = null, age = 0, dateOfBirth = null, department = null, salary = 0) {
        super(name, age, dateOfBirth);        
        this.Department = {
            title: 'Департамент: ',
            value: department
        }
        this.Salary = {
            title: 'Оклад: ',
            value: salary
        }
        this.EmployeeInfo = [           
            this.Department.title + this.Department.value,
            this.Salary.title + this.Salary.value
        ];
    }

    displayInfo(){
        return super.displayInfo() + ';' + this.EmployeeInfo.join(';');                                     
    }
}

class Developer extends Employee {
    constructor(name = null, age = 0, dateOfBirth = null, department = null, salary = 0) {
        super(name, age, dateOfBirth, department, salary);
        this.Position = {
            title: 'Должность: ',
            value: 'Разработчик'
        }
        this.Manager = {
            title: 'Руководитель: ',
            value: {}
        }
        this.DeveloperInfo = [
            this.Position.title + this.Position.value,
            this.Manager.title
        ]
    }
    changeManager(manager) {
        if(manager instanceof Manager) this.Manager.value = manager;
        this.DeveloperInfo[1] = this.Manager.title + this.Manager.value.Name.value;
    }
    displayInfo() {
        return super.displayInfo() + ';' + this.DeveloperInfo.join(';');
    }
}

class Manager extends Employee {
    constructor(name = null, age = 0, dateOfBirth = null, department = null, salary = 0) {
        super(name, age, dateOfBirth, department, salary);
        this.Position = {
            title: 'Должность: ',
            value: 'Менеджер'
        }
        this.Manager = {
            title: 'Руководитель: ',
            value: {}
        }
        this.ManagerInfo = [
            this.Position.title + this.Position.value,
            this.Manager.title + null
        ]
        this.Developers = []
    }
    changeManager(manager) {
        if(manager instanceof Manager) this.Manager.value = manager;
        this.ManagerInfo[1] = this.Manager.title + this.Manager.value.Name.value;
    }
    addDeveloper(developer) {
        if(developer instanceof Developer) this.Developers.push(developer);
    }
    removeDeveloper(developer) {
        if(developer instanceof Developer) this.Developers = this.Developers.filter(dev => dev !== developer);
    }
    displayInfo() {
        return super.displayInfo() + ';' + this.ManagerInfo.join(';');
    }
}
/* Тестирование */
const dev01 = new Developer('Вася',25,'23.04.1994','IT', 450000);
const dev02 = new Developer('Коля',27,'24.05.1992','IT', 470000);
const mgr01 = new Manager('СанСаныч',46,'25.06.1973','IT', 500000);

dev01.changeManager(mgr01);
dev02.changeManager(mgr01);

mgr01.addDeveloper(dev01);
mgr01.addDeveloper(dev02);

console.log(dev01.displayInfo());
console.log(dev02.displayInfo());
console.log(mgr01.displayInfo());
console.table(mgr01.Developers);


