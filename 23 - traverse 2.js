const fs = require('fs');
const Task = require('data.task');
const { List, Map } = require('immutable-ext');

const httpGet = (path) => Task.of(`${path} results`);

Map({
    home: ['/', '/home'],
    about: ['/abount-us']
}).traverse(
    Task.of,
    routes =>
        List(routes)
            .traverse(
                Task.of,
                route => httpGet(route)
            )
).fork(
    console.error,
    console.log
);
