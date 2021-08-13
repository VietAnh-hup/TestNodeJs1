let express = require('express');
let db = require('./api/db')
let app = express();
let methodOverride = require('method-override')
let workController = require('./api/Controller/workController')
let port = process.env.PORT || 3000;
let bodyParser = require('body-parser')


app.use(bodyParser())
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.listen(port);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.post('/addWork', workController.addWork)

app.put('/updateWork' , workController.Update)
app.delete('/deleteWork' , workController.Delete)
app.get('/searchName' , workController.SearchName)
app.get('/searchStatus', workController.SearchStatus)

db.Connect();

console.log('RESTful API server started on: ' + port);