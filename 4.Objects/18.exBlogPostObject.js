// create a post object with the given properties
// title
// body
// author
// views
// comments
//      (author, body)
// isLive

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        { author: 'aa', body: 'bb' },
        { author: 'cc', body: 'dd' },
    ],
    isLive: true
};

console.log(post)