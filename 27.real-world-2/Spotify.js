const request = require("request");
const Future = require("ramda-fantasy").Future;
const Either = require("ramda-fantasy").Either;

const eitherToFuture = e => Either.either(Future.reject, Future.of, e);

const tryCatch = f => (...args) => {
  try {
    return Either.Right(f(args));
  } catch (e) {
    return Either.Left(e);
  }
};

const fromNullable = x => (x != null ? Either.Right(x) : Either.Left(null));

const parse = tryCatch(JSON.parse);

const first = xs => fromNullable(xs[0]);

const httpGet = url =>
  new Future((rej, res) =>
    request(url, (error, response, body) => (error ? rej(error) : res(body)))
  );

const getJSON = url =>
  httpGet(url)
    .map(parse)
    .chain(eitherToFuture);

const findArtist = name =>
  getJSON(`https://api.spotify.com/v1/search?q=${name}&type=artist`)
    .map(res => {
      console.log(res);
      return res;
    })
    .map(result => result.artists.items)
    .map(first)
    .chain(eitherToFuture);

const relatedArtists = id =>
  getJSON(`https://api.spotify.com/v1/artists/${id}/related-artists`)
    .map(result => result.artists)
    .map(xs => xs.map(a => a.name));

module.exports = {
  findArtist,
  relatedArtists
};
