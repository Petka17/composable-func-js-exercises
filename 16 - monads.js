const Box = require('./Box');

// Either, Box, Task, List

const httpGet = path =>
    path === '/user'
        ? Box({
            id: 1,
            name: 'stas'
        })
        : Box(["comment1", "comment2"]);

const app =
    httpGet('/user')
        .chain(user => httpGet(`/comments/${user.id}`))
        .map(comments => comments[0]);

console.log(app);

const join = m => m.chain(x => x);

// Law 1: join(m.map(join)) == join(join(m))
const m = Box(Box(Box(3)));
const res1 = join(m.map(join));
const res2 = join((join(m)));
console.log(res1);
console.log(res2);

// Law 2: join(Box.of(m)) == join(m.map(Box.of))
const m2 = Box(4);
const res3 = join(Box.of(m2));
const res4 = join(m2.map(Box.of));
console.log(res3);
console.log(res4);
