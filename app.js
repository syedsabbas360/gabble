const express= require('express');
const mustache = require('mustache-express');
const app = express();
const main = require('./routes/routes')

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use(express.static('public'))


app.listen(3000, function(){
  console.log('Ready to go!')
})


app.use('/', main)
