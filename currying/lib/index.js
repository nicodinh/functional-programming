const R = require('ramda');

const x = a => b => c => console.log(a + b + c);

x(1)(2)(3);

const y = a => {
  return b => {
    return c => {
      return d => {
        console.log(a + b + c + d);
      }
    };
  };
};

const z = y(1)(2)(3);

z(-6);
z(6);


var greetDeeplyCurried = function(greeting) {
  return function(separator) {
    return function(emphasis) {
      return function(name) {
        console.log(greeting + separator + name + emphasis);
      };
    };
  };
};

const greetAwkwardly = greetDeeplyCurried('Hello')('...')('?');
greetAwkwardly('Heidi');
greetAwkwardly('Eddie');

const sum = (a, b, c) => console.log(a + b + c);

const curriedSum = R.curry(sum);
const m = curriedSum(1, 2);
curriedSum('Hello', ' ', 'world');
const n = m(3);
m();