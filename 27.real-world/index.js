const Task = require('data.task');
const { List } = require('immutable-ext');

const {
    findArtist,
    relatedArtists
} = require('./Spotify');

const Intersection = xs => ({
    xs,
    concat: ({ xs: ys }) =>
        Intersection(
            xs.filter(x => ys.some(y => y === x))
        ),
    inspect: () => `Intersection(${xs})`
});

const related = name =>
    findArtist(name)
        .map(artist => artist.id)
        .chain(relatedArtists);

const artistIntersection = rels =>
    List(rels).foldMap(Intersection).xs;

Task.of(process.argv)
    .map(args => args.slice(2))
    .chain(
        names =>
            List(names)
                .traverse(Task.of, related)
    )
    .map(artistIntersection)
    .fork(
        console.error,
        console.log
    );
