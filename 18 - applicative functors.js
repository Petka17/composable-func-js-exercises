const Box = require('./Box');

const add = x => y => x + y;

// F(f).ap(F(x)) == F(x).map(f)

const liftA2 = (f, fx, fy) =>
    //F(f).ap(fx).ap(fy)
    fx.map(f).ap(fy);

const res = liftA2(add, Box(3), Box(2));

console.log(res);
