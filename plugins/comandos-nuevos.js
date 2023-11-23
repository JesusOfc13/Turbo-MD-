let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'los siguiente comandos nuevos son\n\n*Comandos para jode🐶(Alado el @ de la persona)*\n\n🙊cachuda\n🙊cachudo\n🙊fea\n🙊feo\n🙊sinpoto\n🙊sintetas\n🙊sinpito\n🙊negro\n🙊negra\n🙊adoptada\n🙊adoptado\n🙊insultar\n\n*Encuentra a tu pareja ideal*\n\n❣️ship\nship2\n\n*Comandos especiales para tu grupo de sorteos*\n\n🚀ruleta\n🚀sorteo\n\n*Comandos free fire*\n\n*listas de versus\n\n🕹️vs8\n🕹️vs16\n🕹️vs18\n🕹️vs24\n\n*Mapas free fire*\n\n🗺️kalahari\n🗺️bermuda\n🗺️purgatorio\n🗺️alpes\n🗺️nexterra/'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^nuevo$/i
export default handler
