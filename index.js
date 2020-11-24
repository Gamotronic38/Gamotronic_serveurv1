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
        {
    "embed": {
      "title": "HELP",
      "description": " prefix : ```!G```",
      "color": 7564251,
      "thumbnail": {
        "url": "https://cdn.discordapp.com/icons/763447797143044126/3d302e3f66a94d02b1e14d822bb16dfd.png?size=128"
      },
      "image": {
        "url": "https://th.bing.com/th/id/OIP.uw3MABmuduKXuyseK_nGlQHaHa?pid=Api&rs=1"
      },
      "fields": [
                        {
          "name": "!G help en ",
          "value": "this page in english "
        },
        {
          "name": "wech bot",
          "value": "répond à ton message par une réaction alléatoire"
        },
        {
          "name": "!G registre [évènement_name]",
          "value": "te registre pour un évènement et a la place de [évènement_name] vous pouvez mettre [test] pour voir si le registre marche bien"
        },
  
        {
          "name": "!G INVITE",
          "value": "lien officiel d'invite du serveur",
          "inline": true
        },
        {
          "name": "!G YT",
          "value": "La chaine youtube du créateur",
          "inline": true
        }
      ]
    }
}
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
    if (message.content === 'test'){
        message.channel.send('1,2');
    }



});
