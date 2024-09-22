const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    react: "🗃️",
    alias: ["panel"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.menu',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let tex = `╭═══𝐁𝐋𝐀𝐂𝐊 𝐀𝐋𝐅𝐇𝐀-MD═══─●►
⚚╭─────────────┈
⚚│ Prefix : (  .  )
⚚│ User :👋 Hello ${pushname}
⚚│ Bot :𝙱𝙻𝙰𝙲𝙺 𝙰𝙻𝙵𝙷𝙰-MD
⚚│ Owner :PD 𝚖𝚘𝚍𝚣ꪻ𝐏яανι𝚈αнꪶ🕊🍒
⚚│ Version : New version
⚚ |   Contac .https://wa.me/+94762777919
⚚│ Ram : 235 MB/480 MB
⚚╰─────────────┈

┌ ✦ 📃 ＭＡＩＮ ＭＥＮＵ 📃✦*
│➣ .ᴍᴇɴᴜ
│➣ .ᴀʟʟᴍᴇɴᴜ
│➣ .ꜱᴄʀɪᴘᴛ
│➣ .ᴘɪɴɢ
│➣ .ꜱʏꜱᴛᴇᴍ
│➣ .ʀᴜɴᴛɪᴍᴇ
└ ➣ .ᴀʟɪᴠᴇ

┌ ✦👨🏻‍💻ＯＷＮＥＲ 👨‍💻✦
│➣ .ʙᴀɴᴄʜᴀᴛ
│➣ .ʙᴀɴ @ᴜsᴇʀ
│➣ .ʀᴇꜱᴛᴀʀᴛ
│➣ .ᴜɴʙᴀɴ
│➣ .ᴜɴʙᴀɴ @ᴜsᴇʀ
│➣ .ʙʟᴏᴄᴋ
│➣ .ᴜɴʙʟᴏᴄᴋ
│➣ .ᴊɪᴅ
│➣ .ɢᴊɪᴅꜱ
│➣ .ꜱʜᴜᴛᴅᴏᴡɴ
│➣ .ᴄʟᴇᴀʀᴄʜᴀᴛꜱ
│➣ .ʙʀᴏᴀᴅᴄᴀꜱᴛ
│➣ .sᴇᴛᴘᴘ <ʀᴇᴘʟʏ ᴡɪᴛʜ ᴘʜᴏᴛᴏ>
└ ➣ .sᴇᴛʙɪᴏ

┌ ✦ 🔎 S E A R C H 🔍✦.    
│➣ .ʏᴛꜱ1 <ᴛᴇxᴛ>
│➣ .ᴡɪᴋɪ <ᴛᴇxᴛ>
│➣ .ᴅᴏɢ
└ ➣ .ᴀɴɪᴍᴇɢɪʀʟ

┌ ✦📥 ＤＯＷＮＬＯＡＤＥＲ📥 ✦
│➣ .ғʙ <ᴜʀʟ>
│➣ .ɪɢ <ᴜʀʟ>
│➣ .ɢᴅʀɪᴠᴇ <ᴜʀʟ>
│➣ .ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>
│➣ .ᴛɪᴋᴛᴏᴋ <ᴜʀʟ>
│➣ .ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>
│➣ .ꜱᴏɴɢ <ϙᴜᴇʀʏ>
│➣ .ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>

┌ ✦ 👥 ＧＲＯＵＰ 👥✦
│➣ .ᴅᴇʟ <ʀᴇᴘʟʏ ᴛᴏ ᴛʜᴇ ᴍsɢ ᴜ ᴡᴀɴᴛ ᴛᴏ ᴅᴇʟᴇᴛᴇ>
│➣ .ᴀᴅᴅ
│➣ .sᴇᴛᴅᴇsᴄ <ᴛᴇxᴛ>
│➣ .ᴘʀᴏᴍᴏᴛᴇ
│➣ .ᴅᴇᴍᴏᴛᴇ
│➣ .ʜɪᴅᴇᴛᴀɢ
│➣ .ᴛᴀɢᴀʟʟ
│➣ .ᴛᴀɢᴀᴅᴍɪɴ
│➣ .ɪɴᴠɪᴛᴇ
│➣ .ᴋɪᴄᴋ
│➣ .ʟᴇᴀᴠᴇ
└ ➣ .ʟɪɴᴋ


┌ ✦🤹🏻‍♂ ＣＯＮＶＥＲＴＥＲ 🤹🏻‍♂✦
│➣ .ᴛᴏᴍᴘ3
│➣ .ᴛᴏᴜʀʟ
│◦➣ .ᴄᴏɴᴠᴇʀᴛ
└ ➣ .sᴛɪᴄᴋᴇʀ

┌ ✦ 🗃 O Ｔ H E Ｒ 🗃✦
│➣ .ᴊᴏᴋᴇ
│➣ .ꜱᴜᴘᴘᴏʀᴛ
│➣ .ꜰᴀᴄᴛ
│➣ .Qᴜᴏᴛᴇ
│➣ .ʜᴀᴄᴋ
│➣ .ᴅᴇꜰɪɴᴇ
│➣ .ᴀʙᴏᴜᴛ
│➣ .ᴏᴡɴᴇʀ
│➣ .ɴᴇᴡꜱ
│➣ .ᴡᴇᴀᴛʜᴇʀ
│➣ .ɢᴘᴀꜱꜱ
│➣ .ꜰᴀᴄᴛ
└ ➣ .ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ

┌ ✦ 🧠 ＡＩ 🧠✦
│➣  .ᴀɪ <ᴛᴇxᴛ>
│➣ .ɢᴘᴛ <ᴛᴇxᴛ>
│➣ .ʟᴀᴍᴅᴀ <ᴛᴇxᴛ>
│➣ .ʀᴇᴍɪɴɪ <ᴛᴇxᴛ>
└ ➣ .ʟᴀʟᴀʟᴀɴᴅ <ᴛᴇxᴛ>

ρσɯҽԃ Ⴆყ PD 𝚖𝚘𝚍𝚣ꪻ𝐏яανι𝚈αнꪶ🕊🍒`

await conn.sendMessage(from, {
            audio: { url: 'https://github.com/KING-HANSA/VOICE-KING-HANSA/blob/main/Hello%20hello(tbg).mp3?raw=true' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/tLxNF4M/Whats-App-Image-2024-09-19-at-22-07-43-53e71399.jpg`},caption: tex},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
