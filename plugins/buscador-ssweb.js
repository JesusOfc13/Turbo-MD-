import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, args }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
if (!args[0]) throw `Ejemplos de uso: ${usedPrefix}${command} https://s.id phone on
*Dispositivo:*
desktop
tablet
phone

*Modo alargado:*
on
off
`
let caption = `Resultado: ${args[0]}`
let img = `https://hadi-api.herokuapp.com/api/ssweb?url=${args[0]}&device=${args[1]}&full=${args[2]}`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Siguiente', `${usedPrefix + command}`]
            ], m, fdoc)
}
handler.help = ['ss', 'ssf'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^ssweb2$/
export default handler
