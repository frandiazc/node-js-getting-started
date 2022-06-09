const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
//Usar express con la variable PORT
const app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT)
var nodemailer = require('nodemailer');

//Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nodemailerfrandiazc@gmail.com',
    pass: 'sblybknftgysiknv'
  }
});
var mensaje = "Esto es un mensaje de prueba";
var mailOptions = {
  from: 'nodemailerfrandiazc@gmail.com'
  , to: 'franciscodiazcenteno@gmail.com'
  , subject: 'Mensaje de prueba'
  , text: mensaje
};



  console.log('Hello World');

  const TelegramBot = require('node-telegram-bot-api');
const { brotliCompress } = require('zlib')

  // replace the value below with the Telegram token you receive from @BotFather
  const token = '5395818951:AAFIapyMNBhN1Tj6fLoGucqrOjxv2aEe4T8';
  
  // Create a bot that uses 'polling' to fetch new updates
  const bot = new TelegramBot(token, {polling: true});
  bot.onText(/ruca/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    const chatId = msg.chat.id;
  
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Mi polla con peluca');
  });
  // Matches "/echo [whatever]"
  bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
  
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"
  
    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
  });
  
  // Listen for any kind of message. There are different kinds of
  // messages.
  bot.on('message', (msg) => {
    if (msg.text === 'hi') {
      // send back "hi" to the chat
      bot.sendMessage(msg.chat.id, 'hi');
    }
    if (msg.text === 'bye') {
      // send a photo to the chat
      bot.sendPhoto(msg.chat.id, 'https://www.w3schools.com/css/img_forest.jpg');
    }

  });
  //Detect when user sends photo via telegram and store it in server
  bot.on('photo', (msg) => {
    const chatId = msg.chat.id;
    const photo = msg.photo[msg.photo.length - 1].file_id;
    bot.sendMessage(chatId, 'Photo received');
    bot.sendPhoto(chatId, photo);
    //send image received to email
msg.photo.forEach(function(photo) {
  bot.getFileLink(photo.file_id).then(function(url) {
    console.log(url);
    //send image received to email
    var mailOptions = { from: 'nodemailerfrandiazc@gmail.com'
      , to: 'franciscodiazcenteno@gmail.com'
      , subject: 'Imagen recibida'
      , text: 'Imagen recibida'
      , attachments: [{
        filename: 'image.jpg',
        path: url
      }]
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });



  });
});

