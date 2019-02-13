const Future = require('ramda-fantasy').Future;


const req1 = new Future((rej, res) => setTimeout(() => res(1), 1000));
const req2 = new Future((rej, res) => setTimeout(() => res(3), 1000));
const add = x => y => x + y;

const result =
    Future.of(add)
        .ap(req1)
        .ap(req2);

console.log('start');

result.fork(
    console.error,
    console.log
);

console.log('stop');