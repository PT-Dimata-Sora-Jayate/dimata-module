let nullVariable = null;
console.log(nullVariable);

let undefinedVariable;
console.log(undefinedVariable);

let booleanVariable = true;
console.log(booleanVariable);

let numberVariable = 1;
console.log(numberVariable);

let bigIntVariable = BigInt(Number.MAX_SAFE_INTEGER);
console.log(bigIntVariable);

let numberVariable2 = bigIntVariable;
console.log(numberVariable2);

let stringVariable = 'Hello World';
console.log(stringVariable);

console.log('foo' + 1);

console.log(Number('11'));

//  truthy and falsy
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(' '));
