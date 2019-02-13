const Box = require('./Box');
const { Right, Left} = require('./Either');
const Task = require('data.task');
const { Map, List} = require('immutable-ext');

const id = x => x;

// Law 1: fx.map(f).map(g) == fx.map(x => g(f(x)))
// Law 2: fx.map(id) == id(fx)

const res1 = Task.of('Test').map(s => s.length).map(n => n + 3);
const res2 = Task.of('Test').map(s => s.length + 3);

console.log(res1);
console.log(res2);

const res3 = List.of('Test').map(id);
const res4 = id(List.of('Test'));

console.log(res3);
console.log(res4);
