module.exports = (client, message, args) => { 
  const Discord = require('discord.js') 
  let embed = new Discord.MessageEmbed()
  let ran = Math.floor(Math.random() * 100);
  let user = message.author
  let userm = message.mentions.users.first()
  let heard = ("");
if (ran < 20){
heard = " "
}else if (ran < 30){
heard = " "
}else if (ran < 40){
heard = " "
}else if (ran < 50){
heard = " "
}else if (ran < 60){
heard = " "
}else if (ran < 70){
heard = " "
}else if (ran < 80){
heard = " "
}else if (ran < 90){
heard = " "
 }else if (ran < 99){
heard = " "
}else if (ran < 100){
heard = "" 
}else if (ran < 101){
heard = ""}
let embed1 = new Discord.MessageEmbed()
  .setTitle("~:∙ɞCalculando <a:emoji_39:750752705483636916>ʚ~:∙")
  .setDescription("°:∙■□□□□ <:Simp:741664807417151568>°:∙")
  .setColor(0xff0000);
  
  let embed2 = new Discord.MessageEmbed()
  .setTitle("~:∙ɞCalculando <a:emoji_39:750752705483636916>ʚ~:∙")
  .setDescription("°:∙■■■□□ <:Simp:741664807417151568>°:∙")
  .setColor(0xffff00)
  
  let embed3 = new Discord.MessageEmbed()
  .setTitle("~:∙ɞCalculando <a:emoji_39:750752705483636916>ʚ~:∙")
  .setDescription("°:∙■■■■■ <:Simp:741664807417151568>°:∙")
  .setColor(0x00ff00)
      
  if(!userm){
    let embed = new Discord.MessageEmbed()
    .setTitle("┊Medidor de Simp <a:emoji_39:750752726480322600>┊")
    .setDescription("∙:° <a:PepeSimp:740822566825885698> **"+user.username+"** es un **"+ran+"%** Simp <a:emoji_38:750752683438375024>∙:°"+heard)
    .setColor(0xFFC7F5);
    
    message.channel.send(embed1)
    .then(m => {
      setTimeout(function(){m.edit(embed2)}, 950)
      setTimeout(function(){m.edit(embed3)}, 2100)
     setTimeout(function(){m.edit(embed)}, 3050)})
    
  }else{
    let embed = new Discord.MessageEmbed()
    .setTitle("┊Medidor de Simp <a:emoji_39:750752726480322600>┊")
    .setDescription("∙:° <a:PepeSimp:740822566825885698> **"+userm.username+"** es un **"+ran+"%** Simp <a:emoji_38:750752683438375024>∙:°"+heard)
    .setColor(0xFFC7F5)
   message.channel.send(embed1)
    .then(m => {
      setTimeout(function(){m.edit(embed2)}, 950)
      setTimeout(function(){m.edit(embed3)}, 2100)
     setTimeout(function(){m.edit(embed)}, 3050)})
  }
}
