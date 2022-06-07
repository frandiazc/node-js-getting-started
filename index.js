const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
//Usar express con la variable PORT
express()
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT)


  console.log('Hello World');

  const TelegramBot = require('node-telegram-bot-api');

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
