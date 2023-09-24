import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '╰⊱❗️⊱ *𝐿𝑂 𝑈𝑆𝑂́ 𝑀𝐴𝐿 | 𝑈𝑆𝐸𝐷 𝐼𝑇 𝑊𝑅𝑂𝑁𝐺* ⊱❗️⊱╮\n\n𝑅𝐸𝑆𝑃𝑂𝑁𝐹𝐸 𝐴𝐿 𝑆𝑇𝐼𝐶𝐾𝐸𝑅 𝑄𝑈𝐸 𝐷𝐸𝑆𝐸𝐴 𝐴𝐺𝑅𝐸𝐺𝐴𝑅 𝑈𝑁 𝑃𝐴𝑄𝑈𝐸𝑇𝐸 𝑌 𝑈𝑁 𝑁𝑂𝑀𝐵𝑅𝐸'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '╰⊱❗️⊱ *𝐿𝑂 𝑈𝑆𝑂́ 𝑀𝐴𝐿 | 𝑈𝑆𝐸𝐷 𝐼𝑇 𝑊𝑅𝑂𝑁𝐺* ⊱❗️⊱╮\n\n𝑅𝐸𝑆𝑃𝑂𝑁𝐹𝐸 𝐴𝐿 𝑆𝑇𝐼𝐶𝐾𝐸𝑅 𝑄𝑈𝐸 𝐷𝐸𝑆𝐸𝐴 𝐴𝐺𝑅𝐸𝐺𝐴𝑅 𝑈𝑁 𝑃𝐴𝑄𝑈𝐸𝑇𝐸 𝑌 𝑈𝑁 𝑁𝑂𝑀𝐵𝑅𝐸'
let img = await m.quoted.download()
if (!img) throw '╰⊱❗️⊱ *𝐿𝑂 𝑈𝑆𝑂 𝑀𝐴𝐿 | 𝑈𝑆𝐸𝐷 𝐼𝑇 𝑊𝑅𝑂𝑁𝐺* ⊱❗️⊱╮\n\n𝑅𝐸𝑆𝑃𝑂𝑁𝐷𝐸 𝐴𝐿 𝑆𝑇𝐼𝐶𝐾𝐸𝑅 𝑄𝑈𝐸 𝐷𝐸𝑆𝐸𝐴 𝐴𝐺𝑅𝐸𝐺𝐴 𝑈𝑁 𝑃𝐴𝑄𝑈𝐸𝑇𝐸 𝑌 𝑈𝑁 𝑁𝑂𝑀𝐵𝑅𝐸'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
else throw '╰⊱❗️⊱ *𝐿𝑂 𝑈𝑆𝑂 𝑀𝐴𝐿 | 𝑈𝑆𝐸𝐷 𝐼𝑇 𝑊𝑅𝑂𝑁𝐺* ⊱❗️⊱╮\n\n𝐸𝑅𝑅𝑂𝑅 𝐴𝐿𝐺𝑂 𝑆𝐴𝐿𝐼𝑂́ 𝑀𝐴𝐿, 𝑉𝑈𝐸𝐿𝑉𝐴 𝐴 𝐼𝑁𝑇𝐸𝑁𝑇𝐴𝑅𝐿𝑂 𝐷𝐸 𝑁𝑈𝐸𝑉𝑂\n𝐸𝑅𝑅𝑂𝑅 𝑆𝑂𝑀𝐸𝑇𝐻𝐼𝑁𝐺 𝑊𝐸𝑁𝑇 𝑊𝑅𝑂𝑁𝐺 𝑇𝑂 𝑇𝑅𝑌 𝐴𝐺𝐴𝐼𝑁'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^robar|wm$/i
export default handler
