const Discord = require('discord.js');

module.exports = {
	name: 'clear',
    description: 'Deletes a number of messages.',
    aliases: ['delete'],
	async execute(message, args) {
        const number = args.join(' ');
        var amount = (parseInt(number) + 1);
        if (!amount) return message.reply('You haven\'t given an amount of messages which should be deleted!');
        if (isNaN(amount)) return message.reply('The amount parameter isn\'t a number!');
        if (number > 50) return message.reply('You can`t delete more than 50 messages at once!');
        if (number < 1) return message.reply('You have to delete at least 1 message!');
        await message.channel.messages.fetch({ limit: amount }).then(messages => {
            message.channel.bulkDelete(messages
        )});
        
        message.guild.channels.cache.find(ch => ch.name === 'logs').send(`${number} messages were deleted in ${message.channel}`); 
	},
};