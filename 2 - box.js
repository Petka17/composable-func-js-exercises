//
// const moneyToFloat = str =>
//     parseFloat(str.replace(/\$/g, ''));
//
// const persentTofloat = str => {
//     const replaced = str.replace(/\%/g, '');
//     const number = parseFloat(replaced);
//     return number * 0.01;
// };
//
// const applyDiscount = (price, discount) => {
//     const cost = moneyToFloat(price);
//     const savings = persentTofloat(discount);
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

const persentTofloat = str =>
    Box(str)
        .map(s => s.replace(/\%/g, ''))
        .map(s => parseFloat(s))
        .map(i => i * 0.01);

const applyDiscount = (price, discount) =>
    moneyToFloat(price)
        .fold(cost =>
            persentTofloat(discount)
                .fold(savings =>
                    cost - cost * savings));

const res = applyDiscount('$5.00', '20%');

console.log(res);
