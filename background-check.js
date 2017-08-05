var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');
//var autoEmail = require('email.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 38748);

/*var email= require('nodemailer');
var transporter = email.createTransport({
        service : 'gmail',
        auth: {
                user: 'user@email.com',
                password: '****'
        }
});

var mailOptions = {
        from: 'dan.bradley444@gmail.com',
        to: 'dan.bradley444@gmail.com',
        subject: 'Testing out nodemailer',
        text: 'Success!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});*/


app.get('/',function(req,res){
  res.render('background-check');
});


/*app.get('/get-loopback-improved',function(req,res){
  var qParams = [];
  for (var p in req.query){
    qParams.push({'name':p,'value':req.query[p]})
  }
  var context = {};
  context.dataList = qParams;
  res.render('get-loopback-improved', context);
});


app.get*/
 
app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');

});
