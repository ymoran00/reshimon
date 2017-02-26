const express = require('express');
const tmdb = require('./api/tmdb');

const port = process.env.PORT || 11235;

var app = express();

app.use(express.static(__dirname + '/public', {
  extensions: ['html', 'htm'],
}));

app.get()

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
