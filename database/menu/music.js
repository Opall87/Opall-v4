const music = (prefix, ownerBot, botName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerBot}
   
     *ABOUT*  
   ${prefix}info
   ${prefix}blocklist
   ${prefix}chatlist
   ${prefix}ping
   ${prefix}bugreport
──────────────────
     *MÚSICA*
   ${prefix}play
   ${prefix}joox
   ${prefix}lirik
   ${prefix}chord`
}
exports.music = music
