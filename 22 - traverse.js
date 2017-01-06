const fs = require('fs');
const Task = require('data.task');
const futurize = require('futurize').futurize(Task);
const { List } = require('immutable-ext');

const readFile = futurize(fs.readFile);

const files = List.of('box.js', 'Either.js');

files.traverse(Task.of, fn => readFile(fn))
    .fork(
        console.error,
        console.log
    );
