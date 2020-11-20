const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const çekiliş = new Discord.MessageEmbed()
                .setColor('GOLD')
        .setFooter(`${msg.author.username} Başarıyla Çekiliş Komutunu Kullandı!`, msg.author.avatarURL)
        .setAuthor('Friday Bot Çekiliş Menüsü')
        .setThumbnail('https://cdn.discordapp.com/attachments/724274249774137355/757553069738295346/f-logo1-min.png')
        .setDescription('<a:saklan:752896867683270778> Botu Davet Etmek İçin `-davet` yazabilirisiniz.',false)
        .addField('**__Çekliş Başlat__**','<a:kon:750586556418490469> `-çekiliş-başlat #kanal süre kazanan_sayısı Ödül` \nBelirtilen Kanalda Çekiliş Başlatırsınız',false )
        .addField('**__Çekiliş Yenile__**','<a:sguad:720578780422340628>  `-çekiliş-yenile mesaj_id` \n Belirtilen İd deki Çekilişi Yeniler',true)
        .addField('**__Çekiliş Liste__**','<a:sguad:720578780422340628> `-çekiliş-liste` \nSunucudaki Aktif Çekilişleri Listeler',true)
        .addField('**__Çekiliş Bitir__**', '<a:yldzlar:761479712743620608> `-çekiliş-bitir mesaj_id` \nBelirtilen İd deki Çekilişi Sonlandırır.',false)
        .addField('**__Bilgilendirme__**', '<a:sar_partner:753157108861501441>  `-davet` | Botu Sununuya Davet Edersiniz \n<a:sar_partner:753157108861501441> `-botbilgi` | Botun İslatistiklerini Görürsünüz \n <a:sar_partner:753157108861501441> `-sunucu` | Sunucuya Özel Komutlar',true)
  
msg.channel.send(çekiliş)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['çekiliş', 'giveawey'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'çekiliş',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'çekiliş'
};