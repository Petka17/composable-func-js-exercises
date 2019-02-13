// Monoids has netural element
// save to use in reduce

const Sum = x => ({
    x,
    concat: ({x: y}) => Sum(x + y),
    inspect: () => `Sum(${x})`
});
Sum.empty = () => Sum(0);

const Product = x => ({
    x,
    concat: ({x: y}) => Product(x * y),
    inspect: () => `Product(${x})`
});
Product.empty = () => Product(1);

const All = x => ({
    x,
    concat: ({x: y}) => All(x && y),
    inspect: () => `All(${x})`
});
All.empty = () => All(true);

const Any = x => ({
    x,
    concat: ({x: y}) => Any(x || y),
    inspect: () => `Any(${x})`
});
Any.empty = () => Any(false);

// Not a monoid
const First = x => ({
    x,
    concat: _ => First(x),
    inspect: () => `First(${x})`
});

module.exports = {
    Sum
};
