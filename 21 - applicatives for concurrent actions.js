const Task = require('data.task');

const Db = {
    find: (id) =>
        new Task((rej, res) =>
            setTimeout(() => res({
                id,
                name: `Project ${id}`
            }), 2000)
        )
};

const compareProjects = (p1, p2) => `${p1.name} <=> ${p2.name}`;

Task.of(p1 => p2 => compareProjects(p1, p2))
    .ap(Db.find(20))
    .ap(Db.find(8))
    .fork(
        console.error,
        console.log
    );

// Db.find(20).chain(p1 =>
//     Db.find(8).map(p2 =>
//         compareProjects(p1, p2)
//     )
// ).fork(
//     console.error,
//     console.log
// );
