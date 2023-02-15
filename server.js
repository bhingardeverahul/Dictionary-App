const express = require('express')
var axios = require("axios")
var Path = require("path")
const app = express()
const port=3001
app.get('/', (req, res) => {
  console.log(Path.join(__dirname,'index.html'))
  return res.sendFile('index.html',{root:__dirname})
})
app.get('/searchword', (req, res) => {
 
  console.log(req.query.word)
 

  var options = {
    method: 'GET',
    url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
    params: {word:req.query.word},
    headers: {
      'X-RapidAPI-Key': '69230b2beamshb4110590de97f12p17d047jsnb9a0e5fba146',
       'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
  };
  
axios.request(options).then(function (response) {
  // console.log(response.data);
  res.send(response.data)
}).catch(function (error) {
  console.error(error);
});
  
  // let response={}
  // response.data={
    
  //     definition: 'Having the qualities which constitute beauty; pleasing to the sight or the mind. A circle is more beautiful than a square; a square is more beautiful than a parallelogram. Lord Kames. Syn. -- Handsome; elegant; lovely; fair; charming; graceful; pretty; delightful. See Fine. -- Beau"ti*ful*ly, adv. -- Beau"ti*ful*ness, n.',
  //     word: 'beautiful',
  //     valid: true
    
  // }
  // console.log(response.data)
  // res.send(response.data)
})

app.listen( port ,() => {
  console.log(`Example app listening on port -http://localhost:3001`)
})