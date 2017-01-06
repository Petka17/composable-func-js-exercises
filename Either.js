const Right = x => ({
    ap: r2 => r2.map(x),
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

module.exports = {
    Right,
    Left,
    formNullable,
    tryCatch
};

module.exports.of = x => Right(x);
