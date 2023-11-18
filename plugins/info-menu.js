var handler = async (m) => {

let tqto = `*▸ - - - —「 HAS SOLICITADO EL MENU」— - - - ◂*
*Hola @user solicitaste mi menu*
*si deseas ver mi menu manda el*
*si siguiente comando .menucompleto*
*Gracias por seguir prefiriendo Turbo*
*▸ - - - —「 By gael dios 」— - - - ◂*`

conn.reply(m.chat, tqto, fkontak, m)


}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(menu|)$/i

export default handler
