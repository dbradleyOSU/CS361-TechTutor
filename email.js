var email= require('nodemailer');
var transporter = nodemailer.createTransport({
	service : 'gmail',
	auth: {
		user: 'user@email.com',
		password: '****'
	}
})};

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
});

module.export.pool = transporter;
