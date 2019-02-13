const Box = require('./Box');
const Either = require('./Either');
const Task = require('data.task');

console.log(Either.of('Test'));
console.log(Box.of('Test'));

Task.of('Test').fork(
    e => console.log(e),
    x => console.log(x)
);
