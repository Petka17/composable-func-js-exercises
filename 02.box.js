//
// const moneyToFloat = str =>
//     parseFloat(str.replace(/\$/g, ''));
//
// const percentToFloat = str => {
//     const replaced = str.replace(/\%/g, '');
//     const number = parseFloat(replaced);
//     return number * 0.01;
// };
//
// const applyDiscount = (price, discount) => {
//     const cost = moneyToFloat(price);
//     const savings = percentToFloat(discount);
//
//     return cost - cost * savings
// };

const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
});

const moneyToFloat = str =>
    Box(str)
        .map(s => s.replace(/\$/g, ''))
        .map(s => parseFloat(s));

const percentToFloat = str =>
    Box(str)
        .map(s => s.replace(/\%/g, ''))
        .map(s => parseFloat(s))
        .map(i => i * 0.01);

const applyDiscount = (price, discount) =>
    moneyToFloat(price)
        .fold(cost => percentToFloat(discount)
                .fold(savings =>
                    cost - cost * savings));

const res = applyDiscount('$5.00', '20%');

console.log(res);


// const compose = require('../../nodejs/folktale/src/core/lambda').compose;
//
// const replace = r => s => s.replace(r, '');
// const replaceDollarSign = replace(/\$/g);
// const replacePercentSign = replace(/\%/g);
// const getPercent = i => i * 0.01;
//
// const moneyToFloat2 = compose(parseFloat, replaceDollarSign);
// const percentToFloat2 = compose(getPercent, parseFloat, replacePercentSign);
//
// console.log(moneyToFloat2('$5.00'));
// console.log(percentToFloat2('20%'));