const Discord = require('discord.js');
const { picture } = require('../config.json');

module.exports = {
	name: 'feedback',
    description: 'Give Hazel feedback.',
    aliases: ['report', 'suggest'],
    usage: 'If you\'re seeing this, you have been selected for the elite Hazel bot testing crew! If you have any feedback or suggestions, good and bad, please use this command.',
	async execute(message, args) {

        const reportEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle(`Feedback Report`)
        .setAuthor('Fun Bot')
        .setThumbnail(picture)
        .addField(`Report Sent By:`, `${message.author}`, true)
        .setTimestamp()
        .setFooter('Your report has been submitted')

        message.channel.send('Please respond to the following prompts as applicable to your feedback report.');
        
        let msg;
        msg = await message.channel.send(`Overall review? \n👍 = Good \n👎 = Bad \n🤷 = Okay`);

        msg.react('👍').then(() => msg.react('👎')).then(() => msg.react('🤷'));

        const filter = (reaction, user) => {
            return ['👍', '👎', '🤷'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        msg.awaitReactions(filter, { max: 1, time: 10000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();

                if (reaction.emoji.name === '👍') {
                    var emoji = '👍'
                } if (reaction.emoji.name === '👎') {
                    var emoji = '👎'
                } if (reaction.emoji.name === '🤷') {
                    var emoji = '🤷'
                }

                reportEmbed.addField('General Rating', `${emoji}`, true)
            })

        function send1(){
            message.channel.send('Please reply to this message with any specific feedback or suggestions within 30 seconds. Please make sure each piece of your feedback is one message.');
        }

        setTimeout(send1, 5000);

        const filter2 = m => m.author.id === message.author.id;
        const collector2 = message.channel.createMessageCollector(filter2, { time: 60000 });
        collector2.on('collect', m => {
            reportEmbed.addField(`Specific Feedback`, `${m.content}`)
        });

        function send2(){
            message.channel.send(reportEmbed)
            me = message.guild.members.cache.get('693587727098314812');
            me.send(reportEmbed)
        }

        setTimeout(send2, 30000);
    },
};