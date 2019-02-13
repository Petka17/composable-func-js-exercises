const nextCharForNumberString = str => {
    const trimmed = str.trim();
    const number = parseInt(trimmed);
    const nextNumber = number + 1;
    return String.fromCharCode(nextNumber);
};

const nextCharForNumberString = str =>
    String.fromCharCode(
        parseInt(str.trim()) + 1
    );

const nextCharForNumberString = str =>
    [str].map(s => s.trim()).map()


const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
});

// Basic Composition f(g(x))
const nextCharForNumberString = str =>
    [str]
        .map(s => s.trim())
        .map(s => parseInt(s))
        .map(i => i + 1)
        .map(i => String.fromCharCode(i));

const res = nextCharForNumberString('  64  ');

console.log(res);

// map is not about iteration
// it's about composition in a context

module.exports = Box;

const compose = require('../../nodejs/folktale/src/core/lambda').compose.all;

const trim = s => s.trim();
const inc = i => i + 1;
const fromCharCode = i => String.fromCharCode(i);

const app = compose( String.fromCharCode,
                     inc,
                     parseInt,
                     trim
                    );

const util = require('util');

console.log(app(' 64  '));
