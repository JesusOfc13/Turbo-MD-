let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*HOLA USUARIO ESTOS SON LOS COMANDOS RECIÉN AGREGADOS 🤯*\n\n*Comandos para joder🐶(El @ de la persona que deseas joder)*\n\n🙊cachuda\n🙊cachudo\n🙊fea\n🙊feo\n🙊sinpoto\n🙊sintetas\n🙊sinpito\n🙊negro\n🙊negra\n🙊adoptada\n🙊adoptado\n🙊insultar\n🙊odio\n🙊formartrios\n\n*Encuentra a tu pareja ideal 👩‍❤️‍👨*\n\n❣️ship\n❣️ship2\n❣️ship5\n❣️zodiac\n❣️\n❣️minovi@*Comandos especiales para tu grupo de sorteos ✨*\n\n🚀ruleta\n🚀sorteo\n🚀mute\n🚀cuando\n🚀abrazo\n\n*Comandos free fire 🥷*\n\n*listas de versus 📑*\n\n🕹️vs8\n🕹️vs16\n🕹️vs18\n🕹️vs24\n\n*Mapas free fire 🏷️*\n\n🗺️kalahari\n🗺️bermuda\n🗺️purgatorio\n🗺️alpes\n🗺️nexterra\n\n*Nota📝:*\n*si te gusto el bot , comunícate con unos de los admin para comprarlo*/'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^nuevo|comandos|comandosnuevos$/i
export default handler
