const fs = require('fs');

const Right = x => ({
    chain: g => g(x),
    map: g => Right(g(x)),
    fold: (f, g) => g(x),
    inspect: () => `Right(${x})`
});

const Left = x => ({
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f, g) => f(x),
    inspect: () => `Left(${x})`
});

const formNullable = x =>
    x != null ? Right (x) : Left(null);

const tryCatch = f => {
    try {
        return Right(f());
    } catch (e) {
        return Left(e)
    }
};

const getPort = (config) =>
    tryCatch(() => fs.readFileSync(config))
        .chain(c => tryCatch(() => JSON.parse(c)))
        .fold(
            e => 3000,
            j => j.port
        );

const res = getPort('config.json');
console.log(res);
