const express = require('express');
const app = express();

app.listen(process.env.PORT || 3000);

const sendToNum = require('./send.ts');
// _______________________________________
// Add protection from mass abuse using google captcha
// _______________________________________
app.POST("/send", async (req, res) => {
    // abstract the send logic in another file
    // generate a captcha here too and then pass to the sendToNum function

    // capture how many times we want to send the message by allowing this endpoint to be a POST endpoint
    // extract p_num from there too

    await sendToNum();
})