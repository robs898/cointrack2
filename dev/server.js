var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/post',function(request,response){
  console.log(request.body) //you will get your data in this as object.
});
