const Discord = require('discord.js');
const db = require("quick.db")
const ms = require('ms');
exports.run = async (award, message, args) => {


   
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("You don't have permission to use this command.");
            return;
          }
    
    let gweep = args[0];
    let kazanan = args[1];
    let odul = args[2];
    let zaman = args[3];
    if(!gweep) return message.channel.send("Please specify a valid message ID! (Usage: <MessageID> <WinnersAmount> <Prize> <TimeValue>)")
    if(!kazanan) return message.channel.send("You didn't provide a valid amount of winners! (Usage: <MessageID> <WinnersAmount> <Prize> <TimeValue>)")
    if(!odul) return message.channel.send("You didn't specify a prize! (Usage: <MessageID> <WinnersAmount> <Prize> <TimeValue>)")
    if(!ms(zaman) && zaman) return message.channel.send("You didn't use a valid time format! (Usage: <MessageID> <WinnersAmount> <Prize> <TimeValue>)")
            award.giveawaysManager.edit(gweep, {
                newWinnerCount: kazanan,
                newPrize: odul,
                addTime: ms(zaman)
            }).then(() => {
                message.channel.send("Success! Giveaway edited!");
            }).catch((err) => {
                message.channel.send("I couldn't find that giveaway.");
            });
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'edit',
  description: '',
  usage: ''
};