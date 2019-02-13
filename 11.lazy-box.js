const LazyBox = g => ({
   fold: f => f(g()),
    map: f => LazyBox(() => f(g()))
});

const res = LazyBox(() => '  64  ')
    .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i));



//res.fold(c => c.toLowerCase());

//console.log(res);
