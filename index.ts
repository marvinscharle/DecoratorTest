import {TestClass} from './classes/test-class';

let x: TestClass = new TestClass('Test');
console.log("Initial Setting");
console.log(x.hash);
console.log(x.myProperty);
console.log(x.otherProperty);

x.myProperty = 'new Value';
console.log("Change of myProperty");
console.log(x.hash);
console.log(x.myProperty);

x.otherProperty = 'other Value';
console.log("Change of otherProperty");
console.log(x.hash);
console.log(x.otherProperty);