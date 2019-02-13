const fs = require('fs');
const Task = require('data.task');

// const app = () =>
//     fs.readFile('config.json', 'utf-8', (err, content) => {
//         if (err) throw('Read Error: ' + err);
//
//         const newContent = content.replace(/8/g, '6');
//
//         fs.writeFile('config1.json', newContent, (err) => {
//             if (err) throw('Write Error: ' + err);
//
//             console.log('Success!');
//         })
//     });
//
// app();

const tryCatch = (f, err) =>
    new Task((rej, res) => {
        try {
            res(f());
        } catch (e) {
            err ? rej(err) : rej(e)
        }
    });

const readFile = (filename, encoding) =>
    new Task((rej, res) =>
        fs.readFile(filename, encoding, (err, content) =>
            err ? rej(err) : res(content)
        )
    );

const writeFile = (filename, content) =>
    new Task((rej, res) =>
        fs.writeFile(filename, content, (err) =>
            err ? rej(err) : res(null)
        )
    );

const app =
    readFile('config.json', 'utf-8')
        .chain(content =>
            tryCatch(
                () => JSON.parse(content),
                'Error Json Parse'
            )
        )
        .map(j => j.port)
        .chain(content => writeFile('config2.json', content));

app.fork(
    e => console.log(e),
    x => console.log('Success')
);
