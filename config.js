const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/tLxNF4M/Whats-App-Image-2024-09-19-at-22-07-43-53e71399.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 HEY BLACK ALFHA-MD IS ONLINE NOW💻\n*💻OWENER* - BLACK ALFHA-MD\n\n*💻OWENER NUMBER* -94762777919",
SUDO_NB: process.env.SUDO_NB || "94766946854",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};
