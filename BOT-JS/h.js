module.exports = (client, message, args) => {  
const Discord = require('discord.js') 
const embed = new Discord.MessageEmbed()//Defines el embed principal
.setTitle('<a:emoji_65:764718307529588786> โ๏ธ โก ๐๐๐๐ โก๏ธ โ๏ธ๏ธ <a:emoji_65:764718307529588786>', 'Embed Modificable ')
.addField('โหหหหComandos Aหหหหโโโโโโโโโ ยท ยทโงโ<a:emoji_62:764718151920255007>', 'โ`hug` `cuddle` `Kiss` `kill` `kick` `flushed` `pat` `poke` `slap` โ`feed` `lick` `punch` `claps` `dance` `sad` `confused` `happy` โ`smug` `hi` `flushed` `sleep` `think` `bored` `baka` `tickle` โฐโโโโโโโโโโโโโโโโ ยท ยทโงโ <:emoji_56:764717887725371423>')
.setFooter("หหหโฐ"+client.user.username+"โฎหหห")
.setColor(0xFFC7F5)
const dosembed = new Discord.MessageEmbed()//Defines el embed del 1ยบ emoji
.setTitle('<a:emoji_65:764718307529588786> โ๏ธ โก ๐๐๐๐ โก๏ธ โ๏ธ๏ธ <a:emoji_65:764718307529588786>','Embed modificable')
.addField('โหหหหComandos Bหหหหโโโโโโโโโโ ยท ยทโงโ<a:emoji_62:764718151920255007>', 'โ`8Ball`  `otaku`  `gay` `waifu`  `virgen` `mongol` `yegua` โ`viagra`  `simp` `wiki` `yt` `av` `neko` `cat` `lizard` `fox` `holo` โ`woof` `wallpaper` `goose` `waifuw` `joto` `fiel` โฐโโโโโโโโโโโโโโโโ ยท ยทโงโ <:emoji_56:764717887725371423>')
  .setFooter("หหหโฐ"+client.user.username+"โฎหหห")
.setColor(0xFFC7F5)
const tresembed = new Discord.MessageEmbed()//Defines el embed del 2ยบ emoji
.setTitle('<a:emoji_65:764718307529588786> โ๏ธ โก ๐๐๐๐ โก๏ธ โ๏ธ๏ธ <a:emoji_65:764718307529588786>', 'Embed modificable')
.addField('โหหหหInvitacรญonหหหหโโโโ ยท ยทโงโ', "<a:emoji_59:764718027101962247> โกยฐโ[๏ผInvitame!๏ผ](https://discordapp.com/oauth2/authorize?client_id=728300414361010267&scope=bot&permissions=806364350)โยฐโก<a:emoji_62:764718151920255007>")
.setColor(0xFFC7F5)
message.channel.send(embed).then(msg => { //Las reacciones
    msg.react('1๏ธโฃ') 
    msg.react('2๏ธโฃ')
    msg.react('3๏ธโฃ') 
    msg.awaitReactions((reaction, user) => { //Lo que hara el primer emoji afectara al primer embed
        if (message.author.id !== user.id) return; 
        if (reaction.emoji.name === '1๏ธโฃ') { 
            msg.edit(embed)
        }
        if (reaction.emoji.name === '2๏ธโฃ') { //Lo que hara el segundo emoji afectara al segundo embed
            msg.edit(dosembed)
        }
    if (reaction.emoji.name === '3๏ธโฃ') {//El tercer emoji afectara al tercer embed
      msg.edit(tresembed)
}

    })
});

}