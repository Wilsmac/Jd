import fetch from 'node-fetch' 
//import { areJidsSameUser } from '@adiwajshing/baileys'
let { areJidsSameUser } = (await import(global.baileys)).default
let handler = async (m, { conn, text, participants, groupMetadata }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 👾, body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '😻 𝑆𝑈𝑃𝐸𝑅 𝑀𝐴𝐾𝐸𝐵𝑂𝑇-𝑀𝐷 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
var number = text.split`@`[1]

if(!text && !m.quoted) return await conn.reply(m.chat, `${mg}𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝙊 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘿𝙀 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝙀 𝙌𝙐𝙀 𝙎𝙀𝘼 𝙎𝙐 𝙋𝘼𝙍𝙀𝙅𝘼\n\n𝙏𝘼𝙂 𝙊𝙍 𝙍𝙀𝙋𝙇𝙔 𝙏𝙊 𝙏𝙃𝙀 𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝙁𝙍𝙊𝙈 𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝘽𝙀 𝙔𝙊𝙐𝙍 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, fkontak, m)
//await conn.sendButton(m.chat, `${mg}𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝙊 𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼𝙇 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘿𝙀 𝙇𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝙀 𝙌𝙐𝙀 𝙎𝙀𝘼 𝙎𝙐 𝙋𝘼𝙍𝙀𝙅𝘼\n\n𝙏𝘼𝙂 𝙊𝙍 𝙍𝙀𝙋𝙇𝙔 𝙏𝙊 𝙏𝙃𝙀 𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝙁𝙍𝙊𝙈 𝙏𝙃𝙀 𝙋𝙀𝙍𝙎𝙊𝙉 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝘽𝙀 𝙔𝙊𝙐𝙍 𝙋𝘼𝙍𝙏𝙉𝙀𝙍`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
	
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
let yo = conn.getName(m.sender)
let tu = conn.getName(who)

if(!users) return await conn.reply(m.chat, `${fg}𝑁𝑂 𝑆𝐸 𝐸𝑁𝐶𝑂𝑁𝑇𝑅𝑂́ 𝐴𝐿𝐴 𝑃𝐸𝑅𝑆𝑂𝑁𝐴, 𝐷𝐸𝐵𝐸 𝐷𝐸 𝐸𝑆𝑇𝐴𝑅 𝐸𝑁 𝐸𝑆𝑇𝐸 𝐺𝑅𝑈𝑃𝑂`, fkontak, m)
//await conn.sendButton(m.chat, `${fg}𝑁𝑂 𝑆𝐸 𝐸𝑁𝐶𝑂𝑁𝑇𝑅𝑂́ 𝐴𝐿𝐴 𝑃𝐸𝑅𝑆𝑂𝑁𝐴, 𝐷𝐸𝐵𝐸 𝐷𝐸.𝐸𝑆𝑇𝐴𝑅 𝐸𝑁 𝐸𝑆𝑇𝐸 𝐺𝑅𝑈𝑃𝑂`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
if(user === m.sender) return  await conn.reply(m.chat, `${fg}𝑈𝑆𝑇𝐸𝐷 𝑀𝐼𝑆𝑀𝑂 𝑁𝑂 𝑃𝑈𝐸𝐷𝐸 𝑆𝐸𝑅 𝑃𝐴𝑅𝐸𝐽𝐴`, fkontak,  m)
//await conn.sendButton(m.chat, `${fg}𝑈𝑆𝑇𝐸𝐷 𝑀𝐼𝑆𝑀𝑂 𝑁𝑂 𝑃𝑈𝐸𝐷𝐸 𝑆𝐸𝑅 𝑃𝐴𝑅𝐸𝐽𝐴`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
	
if(user === conn.user.jid) return await conn.reply(m.chat, `${fg}𝑌𝑂 𝑁𝑂 𝑃𝑈𝐸𝐷𝑂 𝑆𝐸𝑅 𝑆𝑈 𝑃𝐴𝑅𝐸𝐽𝐴 😹`, fkontak, m)
//await conn.sendButton(m.chat, `${fg}𝑌𝑂 𝑁𝑂 𝑃𝑈𝐸𝐷𝑂 𝑆𝐸𝑅 𝑆𝑈 𝑃𝐴𝑅𝐸𝐽𝐴 😹\n\n𝙒𝙄𝙏𝙃 𝙈𝙀 𝙔𝙊𝙐 𝘾𝘼𝙉𝙉𝙊𝙏 𝘽𝙀 𝘼 𝘾𝙊𝙐𝙋𝙇𝙀`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
    
if(global.db.data.users[user].pasangan != m.sender){ 
return await conn.reply(m.chat, `𝑁𝑂 𝑃𝑈𝐸𝐷𝐸𝑆  𝐴𝐶𝐸𝑃𝑇𝐴𝑅 𝑆𝐼 𝑁𝐴𝐷𝐼𝐸 𝑆𝐸 𝐴𝐻 𝐷𝐸𝐶𝐿𝐴𝑅𝐴𝐷𝑂, 𝐷𝐸𝐶𝐿𝐴𝑅𝐴𝑇𝐸 𝐶𝑂𝑁 *${tu}* 𝑃𝐴𝑅𝐴 𝑄𝑈𝐸 𝑇𝐸 𝑆𝐼 𝑇𝐸 𝐴𝐶𝐸𝑃𝑇𝐴 𝑂 𝑇𝐸 𝑅𝐸𝐶𝐻𝐴𝑍𝐴`, fkontak, m, { contextInfo: { mentionedJid: [user, tu]}})	
//await conn.sendButton(m.chat, `𝑁𝑂 𝑃𝑈𝐸𝐷𝐸𝑆  𝐴𝐶𝐸𝑃𝑇𝐴𝑅 𝑆𝐼 𝑁𝐴𝐷𝐼𝐸 𝑆𝐸 𝐴𝐻 𝐷𝐸𝐶𝐿𝐴𝑅𝐴𝐷𝑂, 𝐷𝐸𝐶𝐿𝐴𝑅𝐴𝑇𝐸 𝐶𝑂𝑁 *${tu}* 𝑃𝐴𝑅𝐴 𝑄𝑈𝐸 𝑇𝐸 𝑆𝐼 𝑇𝐸 𝐴𝐶𝐸𝑃𝑇𝐴 𝑂 𝑇𝐸 𝑅𝐸𝐶𝐻𝐴𝑍𝐴`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m, { contextInfo: { mentionedJid: [user, tu]}})	
	
}else{
global.db.data.users[m.sender].pasangan = user
return await conn.reply(m.chat, `🥳😻 𝐹𝐸𝐿𝐼𝐶𝐼𝑇𝐴𝐶𝐼𝑂𝑁𝐸𝑆!!! *${tu}*\n✅ 𝐷𝐸 𝑀𝐴𝑁𝐸𝑅𝐴 𝑂𝐹𝐼𝐶𝐴𝐿 𝐸𝑆𝑇𝐴 𝐸𝑁 𝑈𝑁𝐴 𝑅𝐸𝐿𝐴𝐶𝐼𝑂𝑁\n\n𝑄𝑈𝐸 𝐷𝑈𝑅𝐸 𝑃𝑂𝑅 𝑆𝐼𝐸𝑀𝑃𝑅𝐸 𝑆𝑈 𝐴𝑀𝑂𝑅 𝑌 𝐹𝐸𝐿𝐼𝐶𝐼𝐷𝐴𝐷💖🥰\n\n💝 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇𝙇𝙔 𝙏𝙃𝙀𝙔 𝘼𝙍𝙀 𝙄𝙉 𝘼 𝙍𝙀𝙇𝘼𝙏𝙄𝙊𝙉𝙎𝙃𝙄𝙋\n\n*${tu} 💞 ${yo}*\n`, m, dos.getRandom(), { contextInfo: { mentionedJid: [user, tu, yo]}})	
//await conn.sendButton(m.chat, `🥳😻 𝐹𝐸𝐿𝐼𝐶𝐼𝑇𝐴𝐶𝐼𝑂𝑁𝐸𝑆!!! *${tu}*\n✅ 𝐷𝐸 𝑀𝐴𝑁𝐸𝑅𝐴 𝑂𝐹𝐼𝐶𝐴𝐿 𝐸𝑆𝑇𝐴 𝐸𝑁 𝑈𝑁𝐴 𝑅𝐸𝐿𝐴𝐶𝐼𝑂𝑁\n\n𝑄𝑈𝐸 𝐷𝑈𝑅𝐸 𝑃𝑂𝑅 𝑆𝐼𝐸𝑀𝑃𝑅𝐸 𝑆𝑈 𝐴𝑀𝑂𝑅 𝑌 𝐹𝐸𝐿𝐼𝐶𝐼𝐷𝐴𝐷💖🥰\n\n💝 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇𝙇𝙔 𝙏𝙃𝙀𝙔 𝘼𝙍𝙀 𝙄𝙉 𝘼 𝙍𝙀𝙇𝘼𝙏𝙄𝙊𝙉𝙎𝙃𝙄𝙋`, `*${tu} 💞 ${yo}*\n` + wm, img5, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, dos.getRandom(), { contextInfo: { mentionedJid: [user, tu, yo]}})	
}}}

handler.command = /^(aceptar|acepto|accept)$/i
handler.group = true
export default handler
