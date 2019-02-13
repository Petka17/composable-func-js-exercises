const { List } = require('immutable-ext');



const merch = () =>
    List.of(x => y => z => `${x} - ${y} - ${z}`)
        .ap(List.of('T-shirt', 'Paints'))
        .ap(List.of('Small', 'Meduim'))
        .ap(List.of('Black', 'Blue'));

console.log(merch());
