const Discord = require('discord.js');
const { picture } = require('../config.json');

module.exports = {
	name: 'pollhelp',
	description: 'Get help with polls.',
	execute(message) {
		const pollhelpEmbed = new Discord.MessageEmbed()
            .setColor('#ac74d4')
            .setTitle('Fun Bot Poll Usage')
            .setThumbnail(picture)
            .addFields(
                { name: 'Multiple Choice (1-26)', value: `Example: \`?poll |title|option 1|option 2\``},
                { name: 'Yes/No/Other', value: `Example: \`?poll |the title\``}
            )
            .setFooter('Fun Bot');
        message.channel.send(pollhelpEmbed);
	},
};