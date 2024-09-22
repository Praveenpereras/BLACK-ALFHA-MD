const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `> 👋 Hello ${pushname}

> 💗 Nice to meet you

╭───────────────◎◎▷
► HI I'M ALOVE NOW👾
╰───────────────◎◎▷

> 🔖We welcome the new arrivals of the digital world_►

👻I'm PD 𝚖𝚘𝚍𝚣ꪻ𝐏яανι𝚈αнꪶ🕊🍒

 BLACK ALFHA Is Online Now 👊

MULTIDEVICE WHATSAPP BOT🤖

> ❯ Welcome" BLACK ALFHA "whats app bot you can download video songs and various videos through this bot. Shado md owner is  " PD 𝚖𝚘𝚍𝚣 ꪻ𝐏яανι𝚈αнꪶ🕊🍒 " It also gives you the ability to solve the new revolution in technology and technology problems and there is great potential here. This  technology is also related to AI.

> Type To .menu Get Commands👾

🧬 My what's app bot gop

https://chat.whatsapp.com/LcYUwlY3p35E2pHKWKfaJb

🧬 My what's app status Hub gop

https://chat.whatsapp.com/L25dhRDgdo6240IesMbgpG

🧬 My what's app modz gop

https://chat.whatsapp.com/G8cos6PhZ0YEQmr50KbE2k

🔮MADE BY BLACK ALFHA🔮
╰───────────────◎◎▷`

await conn.sendMessage(from, {
            audio: { url: 'https://github.com/KING-HANSA/VOICE-KING-HANSA/blob/main/Hello%20hello(tbg).mp3?raw=true' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/tLxNF4M/Whats-App-Image-2024-09-19-at-22-07-43-53e71399.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
