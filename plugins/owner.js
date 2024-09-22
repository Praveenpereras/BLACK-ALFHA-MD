const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `⚡BLACK ALFHA-MD⚡

> 🌍𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 

⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: PD 𝚖𝚘𝚍𝚣ꪻ𝐏яανι𝚈αнꪶ🕊🍒* 
⚡ɴᴜᴍʙᴇʀ -: https://wa.me/+94762777919
⚡ʏᴏᴜᴛᴜʙᴇ -: https://youtube.com/@madushanboy?si=qv8sq2ngTObYtapi
⚡ᴡʜᴀᴛꜱᴀᴘᴘ bot group -: https://chat.whatsapp.com/LcYUwlY3p35E2pHKWKfaJb 

ρσɯҽԃ Ⴆყ PD 𝚖𝚘𝚍𝚣ꪻ𝐏яανι𝚈αнꪶ🕊🍒`
    
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/tLxNF4M/Whats-App-Image-2024-09-19-at-22-07-43-53e71399.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from, {
            audio: { url: 'https://github.com/KING-HANSA/VOICE-KING-HANSA/blob/main/Hello%20hello(tbg).mp3?raw=true' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
}catch(e){
console.log(e)
reply(`${e}`)
}
})
