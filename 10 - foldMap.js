const { Map, List } = require('immutable-ext');
const { Sum } = require('./8 - monoid');

const res1 =
    List.of(1, 2, 3)
        .map(Sum)
        .fold(Sum.empty());

const res2 =
    List.of(1, 2, 3)
        .foldMap(Sum, Sum.empty());

console.log(res1);
console.log(res2);

const res3 =
    Map({brain: 4, liza: 3})
        .map(Sum)
        .fold(Sum.empty());

const res4 =
    Map({brain: 4, liza: 3})
        .foldMap(Sum, Sum.empty());

console.log(res3);
console.log(res4);
