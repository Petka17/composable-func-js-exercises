const { Right, Left} = require('./Either');
const Box = require('./Box');
const Task = require('data.task');

// nt(x).map(f) = nt(x.map(f))

const boxToEither = b => b.fold(Right);

const eitherToTask = e =>
    e.fold(
        Task.rejected,
        Task.of
    );

eitherToTask(Left(100))
.fork(console.error, console.log);
