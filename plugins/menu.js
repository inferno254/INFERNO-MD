const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚‍♀️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `
 ╭─────────────━┈⊷
│*🧚‍♀️ ʙᴏᴛ ɴᴀᴍᴇ*: INFERNO MD
│*👨‍💻 ᴏᴡɴᴇʀ*: Inferno    
│*👤 ɴᴜᴍʙᴇʀ*: 254115061381
│
│*🧬Version*: 1.0.0
│*💻 HOST* :  fv-az661-842
│*💫 ᴘʀᴇғɪx:* .
╰─────────────━┈⊷ 

╭━❮ 𝙰𝙸 ❯━╮
┃◆ .𝙰𝚒
╰━━━━━━━━━━━━━━━⪼
╭━◆ 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 ◆━╮
┃◆ .𝙼𝚎𝚗𝚞
┃◆ .𝙾𝚠𝚗𝚎𝚛
┃◆ .𝚁𝙴𝚂𝚃𝙰𝚁𝚃
┃◆ .𝙿𝚒𝚗𝚐
┃◆ .𝚅𝚒𝚍𝚎𝚘
┃◆ .𝙿𝙻𝙰𝚈
┃◆ .𝙼𝙸𝙺𝚄
┃◆ .𝙵𝙰𝙲𝚃
┃
╰━━━━━━━━━━━━━━━⪼


 > © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/oriknn.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
