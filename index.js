const Discord = require('discord.js')
const bot = new Discord.Client()
const conf = require("./conf.json")
const help = require("./!G help.json")
const help_en = require("./!G help en.json")
const YT = require("./!G YT.json")
const INVITE = require("./!G invite.json")
const wech = require("./!G yo.json")

bot.login(process.env.BOT_TOKEN)

bot.on("ready", async () =>{
    console.log("c'est parti")
    bot.user.setStatus("STREAMING")
    bot.user.setActivity("!G help ", {type : 'STREAMING'})
    bot.on('debug', console.log)
})

bot.on('message', message => {

    if (message.content ===  (conf.prefix)+' help'){
        message.channel.send(help);

    }
    if (message.content === (conf.prefix)+' help en'){
      message.channel.send(help_en);
    }
    if (message.content === (conf.prefix+' YT')){
      message.channel.send("https://www.youtube.com/channel/UC15PGaSHgHzKvBTGSg368dg");
      message.channel.send(YT);
    }
    if (message.content === (conf.prefix+' INVITE')){
      message.channel.send(INVITE)
    }
    if (message.content === 'wech bot'){
      message.channel.send(wech)
    }
    if (message.content === 'test'){
        message.channel.send('1,2');
    }
    if (message.content === ('le boss')){
        message.channel.send('https://cdn.discordapp.com/avatars/689037504183009339/9a135a5ddcef87ee7d9e9df9aa6a8024.png?size=512');
        message.channl.send('le boss est <@689037504183009339>');
    }



});
