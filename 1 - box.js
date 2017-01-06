// const nextCharForNumberString = str => {
//     const trimmed = str.trim();
//     const number = parseInt(trimmed);
//     const nextNumber = number + 1;
//     return String.fromCharCode(nextNumber);
// };

// const nextCharForNumberString = str =>
//     String.fromCharCode(
//         parseInt(str.trim()) + 1
//     );

const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
});

// Basic Composition f(g(x))
const nextCharForNumberString = str =>
    Box(str)
        .map(s => s.trim())
        .map(s => parseInt(s))
        .map(i => i + 1)
        .fold(i => String.fromCharCode(i));

const res = nextCharForNumberString('  64  ');

console.log(res);

// map is not about iteration
// it's about composition in a context

module.exports = Box;
