const telegramBot = require("node-telegram-bot-api");

const bot = new telegramBot("5215622865:AAE118t9hmnZDWZG_tLVCt__XC5DJZONRHw", {
  polling: true,
});

bot.onText(/\/start/, (message) => {
  console.log(message);

  const chatId = message.chat.id;
  bot.sendMessage(
    chatId,
    `Salom ${message.from.first_name} "Abduhalim" yaratgan botga xush kelibsiz!`
  );
});
