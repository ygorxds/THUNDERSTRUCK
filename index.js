const express = require ('express');
const app = express();
const port = 3000
telegramReciverMensage = require('./src/telegramConnect/reciveMensage');


console.log(`SERVIDOR ONLINE ${port}`);


app.get('/',(req,res)=>{
    res.send("NESSA ROTA VAI EXIBIR TODAS AS MENSAGENS");
});



app.post('/',(req,res)=>{
    req.body ({ msg : `${telegramReciverMensage.msg}`});

    //rota para receber a mensagem e enviar a mensagem para blitz
});

app.post('/sendSinal', (req,res)=>{
    req.body();
})



app.listen(port);