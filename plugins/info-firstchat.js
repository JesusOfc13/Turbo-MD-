import moment from 'moment-timezone'
  
export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`👋 Hola ${nombre}!!
 *${saludo}*

📅 Fecha: ${fecha}
⏰ Hora: ${tiempo}

⚠️ *Nota:* no uses a su privado 
🧃 Escriba *.recuerda que si deseas adquirir el bot puedes comunicarte con mi creador
  
📝 ¿te ha gustado el bot y deseas adquirirlo? envie un mensaje al siguiente número: 
*https://wa.me/522212009202*`) 
user.pc = new Date * 1
}
