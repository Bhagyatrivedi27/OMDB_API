const express = require('express');
const router = express.Router();




/* GET users listing. */
//req -> request (input)
//res -> response(output)
//next -> middleware part()
const axios = require('axios');
const apiKey = '53111f0e';

router.get('/search', function(req, res, next) {
const search = req.query.title
const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;
  axios.get(url)
    .then(function (response) {
        res.send(response.data)
    }) 
    .catch(function(error){
        console.log(error)
        res.send(error)
    })
})

router.get('/result/:imdbId', function(req, res, next)  {
  const imdbId = req.params.imdbId;
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}`;
  axios.get(url)
  .then(function (response) {
      res.send(response.data)
  }) 
  .catch(function(error){
      console.log(error)
      res.send(error)
  })
})

module.exports = router;