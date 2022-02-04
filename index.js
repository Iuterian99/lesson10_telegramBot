const telegramBot = require("node-telegram-bot-api");
const fs = require("fs");
const path = require("path");

const bot = new telegramBot("5173334455:AAF2gZChStHU2aYoJJakH-NHt1UCZDxQq6I", {
  polling: true,
});

bot.onText(/\/start/, (message) => {
  const chatId = message.chat.id;
  bot.sendMessage(
    chatId,
    `Salom ${message.from.first_name} "Oтличнo" o'quv markazi botiga xush kelibsiz!`,
    {
      reply_markup: JSON.stringify({
        keyboard: [
          //! alohida alohida arrayni ichida yozsak pastma past chiqaradi agar bitta arrayni ichiga yozsak yonma yon chiqaradi
          [
            {
              text: "📚 Kurs haqida ma`lumot",
            },
            {
              text: "👨‍🎓 kursga yozilish",
            },
          ],
        ],
        resize_keyboard: true, //--> bu chiqarvotgan buttonni xajmini ixchamlashtiradi
      }),
    }
  );
});

// bot.on("message", (msg) => {
//   const chatId = msg.chat.id;
//   if (msg.text == "📚 Kurs haqida ma`lumot") {
//     reply_markup: JSON.stringify({
//       keyboard: [
//         [
//           {
//             text: "O`quv markazimizdagi Kurslarimiz faqat Rus tiliga yo`naltirilgan bo`lib Buning qulayliklari: \n 1: Ayollar uchun alohida kurslarimiz, \n 2: Bolalar uchun alohida kurslarimiz, \n 3: Kattalar uchun alohida kurslarimiz, \n 4: Online xolatda xam kurslarimiz mavjud",
//           },
//         ],
//       ],
//     });
//   }
// });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  if (msg.text == "📚 Kurs haqida ma`lumot") {
    bot.sendPhoto(
      chatId,
      fs.readFileSync(path.resolve(__dirname, "./images/kurs.jpg")),
      {
        parse_mode: "HTML",
        caption: `
                <strong>
                  O'quv markazimizdagi Kurslarimiz faqat Rus tiliga yo'naltirilgan bo'lib Buning qulayliklari: \n 1: Ayollar uchun alohida kurslarimiz, \n 2: Bolalar uchun alohida kurslarimiz, \n 3: Kattalar uchun alohida kurslarimiz, \n 4: Online xolatda xam kurslarimiz mavjud
                </strong>\n<a href="https://sendpulse.com/support/glossary/social-media-marketing">Media havola SMM</a>
            `,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Kursga yozilish",
                callback_data: "smm_course_register",
              },
            ],
          ],
        },
      }
    );
  }
});
