let feelings = [
    'Could be better. Boss just died yesterday.',
    'I\'m great, but I was malfunctioning a bit some time ago...'
];

module.exports = {
	name: 'howareyou',
    description: 'Tells you how it\'s feeling.',
    aliases: ['feelings', 'emotions', 'today'],
	execute(message, args) {
        var num = Math.floor( Math.random() * (feelings.length) );
        message.channel.send(feelings[num])
	},
};