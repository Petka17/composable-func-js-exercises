const Sum = x => ({
    x,
    concat: ({x: y}) => Sum(x + y),
    inspect: () => `Sum(${x})`
});
console.log(Sum(1).concat(Sum(2)).concat(Sum(2)));

const All = x => ({
    x,
    concat: ({x: y}) => All(x && y),
    inspect: () => `All(${x})`
});
console.log(All(true).concat(All(true)));

const First = x => ({
    x,
    concat: _ => First(x),
    inspect: () => `First(${x})`
});
console.log(First("bla").concat(First("pla")).concat(First("da")));
