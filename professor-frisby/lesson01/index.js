// const nextCharForNumberString = str => {
//   const trimmed = str.trim();
//   const number = parseInt(trimmed);
//   const nextNumber = number + 1;
//   return String.fromCharCode(nextNumber);
// };

// const result = nextCharForNumberString(' 64 ');
// console.log(result);

// ###########################

// const nextCharForNumberString = str => String.fromCharCode(parseInt(str.trim()) + 1);

// const result = nextCharForNumberString(' 64 ');
// console.log(result);

// ###########################

// const nextCharForNumberString = str =>
//   [str]
//   .map(s => s.trim())
//   .map(s => parseInt(s))
//   .map(i => i + 1)
//   .map(i => String.fromCharCode(i));

// const result = nextCharForNumberString(' 64 ');
// console.log(result);

// ###########################

// const Box = x =>
// ({
//   map: f => Box(f(x)),
//   inspect: () => `Box(${x})`,
//   lol: () => 42
// });

// const nextCharForNumberString = str =>
//   Box(str)
//   .map(s => s.trim())
//   .map(s => parseInt(s))
//   .map(i => i + 1)
//   .map(i => String.fromCharCode(i));

// const result = nextCharForNumberString(' 64 ');

// console.log(result);
// console.log(Box().lol());

// ###########################

const Box = x =>
({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
  // inspect() was a bit esoteric. The idea is that it is called implicitly
  // by Node's console.log() to give you a way to show your own data types.
  // It doesn't work in the browser though.
  // For that, I'd use toString() and call console.log(String(x))
});

const nextCharForNumberString = str =>
  Box(str)
  .map(s => s.trim())
  .map(r => new Number(r))
  .map(i => i + 1)
  .map(i => String.fromCharCode(i))
  .fold(c => c.toLowerCase()); // -> a
  //.map(c => c.toLowerCase()); // -> Box(a)

const result = nextCharForNumberString(' 64 ');

console.log(result);