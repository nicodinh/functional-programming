// const Box = x =>
// ({
//   map: f => Box(f(x)),
//   fold: f => f(x),
//   inspect: () => `Box(${x})`
// });

// const moneyToFloat = str =>
//   parseFloat(str.replace(/\$/g, ''));

// const percentToFloat = str => {
//   const replaced = str.replace(/\%/g, '');
//   const number = parseFloat(replaced);
//   return number * 0.01;
// }

// const applyDiscount = (price, discount) => {
//   const cost = moneyToFloat(price);
//   const savings = percentToFloat(discount);
//   return cost - cost * savings;
// }

// const result = applyDiscount('$100', '20%');
// console.log(result);

// #########################################

// const Box = x =>
// ({
//   map: f => Box(f(x)),
//   fold: f => f(x),
//   inspect: () => `Box(${x})`
// });

// // const moneyToFloat = str =>
// //   parseFloat(str.replace(/\$/g, ''));

// // Better because its un-nested
// const moneyToFloat = str =>
//   // Box(str)
//   // .map(s => str.replace(/\$/g, ''))
//   Box(str.replace(/\$/g, ''))
//   .map(r => parseFloat(r));
//   // .fold(r => parseFloat(r)); // fold: to get out of the Box

// // const percentToFloat = str => {
// //   const replaced = str.replace(/\%/g, '');
// //   const number = parseFloat(replaced);
// //   return number * 0.01;
// // }

// const percentToFloat = str =>
//   Box(str.replace(/\%/g, ''))
//   .map(replaced => parseFloat(replaced))
//   .map(number => number * 0.01);
//   // .fold(number => number * 0.01);

// // const applyDiscount = (price, discount) => {
// //   const cost = moneyToFloat(price);
// //   const savings = percentToFloat(discount);
// //   return cost - cost * savings;
// // }

// const applyDiscount = (price, discount) =>
//   moneyToFloat(price)
//   .fold(cost =>
//     percentToFloat(discount) 
//     .fold(savings =>
//       cost - cost * savings));

// const result = applyDiscount('$100', '20%');
// console.log(result);

// ##### precedent au propre #####

const Box = x =>
({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
});

const moneyToFloat = str =>
  Box(str.replace(/\$/g, ''))
  .map(r => parseFloat(r));

const percentToFloat = str =>
  Box(str.replace(/\%/g, ''))
  .map(replaced => parseFloat(replaced))
  .map(number => number * 0.01);

const applyDiscount = (price, discount) =>
  moneyToFloat(price)
  .fold(cost =>
    percentToFloat(discount) 
    .fold(savings =>
      cost - cost * savings));

const result = applyDiscount('$100', '20%');
console.log(result);