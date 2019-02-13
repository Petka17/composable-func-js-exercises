const { Right, Left} = require('./Either');
const Task = require('data.task');

const fake = (id) => ({
    id,
    name: `Name ${id}`,
    best_friend_id: id - 1
});

const Db = {
    find: (id, type) =>
        new Task((rej,res) =>
            res(id > 2 ? Right(fake(id)) : Left(`${type} not found`))
        )
};

const eitherToTask = e => e.fold(Task.rejected, Task.of);

Db.find(3, 'user')
    .chain(eitherToTask)
    .chain(user =>
        Db.find(user.best_friend_id, 'friend')
            .chain(eitherToTask)
    )
    .fork(
        console.error,
        console.log
    );
