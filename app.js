const Discord = require('discord.js');
const bot = new Discord.Client();
let prefix = "";
const settings = ('settings.json');
const colors = require('colors.json');

bot.login(settings.token);
