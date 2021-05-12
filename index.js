const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('ODQyMTAwNzgyMDM5NDMzMjc3.YJwZdw.-n9iV99q7J0CPrraRlqy6Cc-Bcg');