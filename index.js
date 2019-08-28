const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', () => {
  console.log(`${bot.user.username} is online!`)
    var presences = new Array()

    //presences[1] = `firenode.xyz`
    presences[1] = `Use FN!Help For Help`

  setInterval(() => {

        var ry = Math.floor(Math.random() * presences.length)
        if (ry == 0)
            ry = 1
        bot.user.setActivity(`${presences[ry]}`, {

            type: `LISTENING`
        })
           }, 9000)
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}hello`){
    return message.channel.send("Hello!");
  }

});

bot.login(botconfig.token);
