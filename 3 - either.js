const Right = x => ({
    map: g => Right(g(x)),
    fold: (f, g) => g(x),
    inspect: () => `Right(${x})`
});

const Left = x => ({
    map: f => Left(x),
    fold: (f, g) => f(x),
    inspect: () => `Left(${x})`
});

const formNullable = x =>
    x != null ? Right (x) : Left(null);

const findColor = (name) =>
    formNullable({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name]);

const res =
    findColor('blue')
        .map(s => s.slice(1))
        .fold(
            e => 'no color',
            s => s.toUpperCase()
        );

console.log(res);
