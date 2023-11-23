import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let bot = `*🚀 Hola usuario solicitaste ver los precios de Nightcore-Bot-MD*\n\n*En la venta tenemos lo siguiente:*\n\n*📌Bots permanentes\n📌Bots mensuales\n📌bots propios (instalancion apk)\n📌Bots propios (instalacion por pagina)\n\n*Si deseas ver información y precio de lo que deseas mandar lo soguiente:*\n*ejemplo 📝:*\n.botpermanente`
let vn = [imagen1, imagen2, imagen3, imagen4, img1].getRandom()
let chat = global.db.data.chats[m.chat]
if (/^bot$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)    
conn.sendFile(m.chat, vn, 'bot.jpg', bot, m, true, { type: 'conversation', ptt: true, sendEphemeral: true, quoted: estilo })}
return !0
}
export default handler
