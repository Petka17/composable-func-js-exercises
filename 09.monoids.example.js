const { List } = require('immutable-ext');
const { Sum } = require('./8 - monoid');

const Right = x => ({
    map: g => Right(g(x)),
    fold: (f, g) => g(x),
    concat: o => o.fold(e => Left(e), r => Right(x.concat(r))),
    inspect: () => `Right(${x})`
});

const Left = x => ({
    map: f => Left(x),
    fold: (f, g) => f(x),
    concat: o => Left(x),
    inspect: () => `Left(${x})`
});

const formNullable = x =>
    x != null ? Right (x) : Left(null);

const stats = List.of({
    page: 'Home',
    views: 40,
}, {
    page: 'About',
    views: 10,
}, {
    page: 'Blog',
    views: 4,
});

const res = stats.foldMap(
    ({ views }) => formNullable(views).map(Sum),
    Right(Sum(0))
);

console.log(
    res,
    res.fold(
        e => 'error',
        s => s.x
    )
);
