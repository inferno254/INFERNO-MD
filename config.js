const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "8OcBECLL#RGExAjfGku84ClZVBA1vrfQ_CoTcGw8X7yjNHyRxOls",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qgvnvg.jpg",
SUDO_NB: process.env.SUDO_NB || "254115061381",
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: "true"
};
