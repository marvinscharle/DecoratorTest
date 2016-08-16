import {TestClass} from './classes/test-class';

let x: TestClass = new TestClass('Test');
console.log(x.myProperty);
console.log(x.otherProperty);
x.myProperty = 'new Value';