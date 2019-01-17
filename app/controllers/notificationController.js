var express = require('express');
var router = express.Router();
exports.SendNotification = (req, res) => {
const accountSid = 'AC65dc580b792576468404855e33fe223f';
const authToken = '6ed5edcc53a074cc51ae94e4458c51cc';
const client = require('twilio')(accountSid, authToken);



client.messages
      .create({from: '+15017122661', body: 'body', to: '+15558675310'})
      .then(message => console.log(message.sid))
      .done();
};