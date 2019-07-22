import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {Developer, Manager} from './Developer';

ReactDom.render(<App />,document.querySelector('#app'));


/* Тестирование */
// Импортирован только класс Developer
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

