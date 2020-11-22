const Discord = require('discord.js')
const bot = new Discord.Client()
const conf = require("./conf.json")
const help = require("./")
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
      message.channel.send(YT);
    }
    if (message.content === (conf.prefix+' INVITE')){
      message.channel.send(INVITE)
    }
    if (message.content === 'wech bot'){
      message.channel.send(wech)
    }



});
