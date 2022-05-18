const TelegramBot = require( `node-telegram-bot-api` );
const TOKEN = "SEU_TOKEN_AQUI"
const bot = new TelegramBot( TOKEN, { polling: true } ); // não apaga esse parametro polling pois ele vai deixar a API escutando os eventos.


bot.on('message',(msg)=>{
    //lista de ações vou por como teste para escrever no console.
    console.log(msg);
});

module.exports;