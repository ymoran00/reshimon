
const request = require('request');

const v3Token = '5d552a45527e7bd6fce7185cad3e1b71';
const v4ReadToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDU1MmE0NTUyN2U3YmQ2ZmNlNzE4NWNhZDNlMWI3MSIsInN1YiI6IjU0ODlmNGJmOTI1MTQxNjFkYzAwMjExMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rbC50WHtPfr-3nN4BqvrqA1mN85Nhk-P3oceIthkT9E';
const tmdbUrl = 'https://api.themoviedb.org/';


var getMovieName = (text) => {
  var promise = new Promise((resolve, reject) => {
    request({
      url:`${tmdbUrl}search/movie?query=${text}&api_key=${v3Token}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject(error);
      } else if (response.statusCode === 200) {
        resolve(body);
      } else {
        reject (error);
      }
    });
  });
  return promise;
}

module.exports = {
  getMovieName
}
