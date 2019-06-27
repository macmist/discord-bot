const Discord = require('discord.js');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

const client = new Discord.Client();
dotenv.config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.includes('ping')) {
    msg.reply('pong');
  }
  if (msg.content.includes('rip')) {
    // Create the attachment using Attachment
    const attachment = new Discord.Attachment('https://i.imgur.com/w3duR07.png');
    // Send the attachment in the msg channel
    msg.channel.send(attachment);
  }
  if (msg.content.includes("glomebag")) {
    const embed = new Discord.RichEmbed()
    // Set the title of the field
      .setTitle('Glomebag breaking news')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('Hello, this is a slick embed!');
    embed.setAuthor("@Glomebag");
    embed.setThumbnail("https://pbs.twimg.com/profile_images/558619074150670339/h526_Npk_400x400.jpeg");
    // Send the embed to the same channel as the message
    fetch('http://51.254.203.46:4242/').then(res => res.json()).then(body => {
      embed.setDescription(body.result || "Deso y'a un bug loule");
      msg.channel.send(embed);
    })
  }
});

client.login(process.env.TOKEN);