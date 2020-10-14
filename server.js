const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
// const {google} = require('googleapis');


const app = express();
const publicPath = path.resolve(__dirname,'public');
console.log(publicPath)
// const indexPath = path.join(__dirname,'/public','/index.html');

const port = process.env.PORT || 5000;
// app.use(express.static(publicPath))
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// const OAuth2 = google.auth.OAuth2;
// const myOAuth2Client = new OAuth2(
//  process.env.CLIENT_ID,
//  process.env.CLIENT_SECRET,
//  'https://developers.google.com/oauthplayground'
// );
// myOAuth2Client.setCredentials({
// 	refresh_token:process.env.REFRESH_TOKEN
// })
// const myAccessToken = myOAuth2Client.getAccessToken();
// const transport  = nodemailer.createTransport({
// 	service:'gmail',
// 	auth:{
// 		type:'OAuth2',
// 		user:process.env.SENDER_EMAIL,
// 		clientId:process.env.CLIENT_ID,
// 		clientSecret:process.env.CLIENT_SECRET,
// 		refreshToken:process.env.REFRESH_TOKEN,
// 		accessToken:myAccessToken,
// 	},

// })

app.get('/', (req,res) => {
	res.send('hellow')
})

// app.post('/sendmail', (req,res) => {
// 	const {sender_name,sender_email,message} = req.body;
// 	const mailOptions = {
// 		from:process.env.SENDER_EMAIL,
// 		to:process.env.RECEIVER_EMAIL,
// 		subject:'Message From Client',
// 		html:`
// 		<div style="background:#B0B3BA;padding-left: 20px;padding-right:20px;padding-top:15px;padding-bottom:15px;">
// 			<h1>Hello I am ${sender_name}</h1>
// 			<h4> My email: 
// 			<a href="${sender_email} target="_blank">${sender_email}</a> 
// 			</h4>
// 			<p style="font-size: 20px;">
// 			<b>My message</b><br>
// 			${message}
// 			</p>
// 		</div>
// 		`,
// 	}
// 	transport.sendMail(mailOptions, (err,result) => {
// 		if(err){
// 			res.status(404).send({error:err})
// 			return;
// 		}
// 		transport.close();
// 		res.status(200).send({message:'successfully send'});
// 	})
// })

app.listen(port,(err) => {
	if(err){
		console.log(err);
	}
	console.log('server running on port ' + port);
})