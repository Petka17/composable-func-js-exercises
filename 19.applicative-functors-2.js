const Either = require('./Either');

const liftA2 = (f, fx, fy) => fx.map(f).ap(fy);

const $ = selector =>
    Either.of({
        selector,
        height: 10
    });

const getScreenSize = screen => head => foot =>
    screen - (head.height + foot.height);

// const res =
//     $('header')
//         .chain(head =>
//             $('footer')
//                 .map(foot => getScreenSize(800)(head)(foot))
//         );

const res =
    Either.of(getScreenSize(800))
        .ap($('header'))
        .ap($('footer'));

// const res = liftA2(getScreenSize(800), $('header'), $('footer'));

console.log(res);
