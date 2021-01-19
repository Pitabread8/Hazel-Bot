const Discord = require('discord.js');
const { picture } = require('../config.json');

let letters = [
    '🇦',
    '🇧',
    '🇨',
    '🇩',
    '🇪',
    '🇫',
    '🇬',
    '🇭',
    '🇮',
    '🇯',
    '🇰',
    '🇱',
    '🇲',
    '🇳',
    '🇴',
    '🇵',
    '🇶',
    '🇷',
    '🇸',
    '🇹',
    '🇺',
    '🇻',
    '🇼',
    '🇽',
    '🇾',
    '🇿',
];

module.exports = {
	name: 'poll',
    description: 'Creates a poll.',
    usage: `\nMultiple Choice (1-26 options) Example: \`?poll the title|option 1|option 2\` \nYes/No/Other Example: \`?poll the title\``,
	async execute(message, args) {
        const allargs = args.join(" ");
        const ops = allargs.slice(0).split("|");
  
        if (ops.length === 1) {
            message.delete({ timeout: 500 })
            var title = allargs;
            message.channel.send(`📊 ${title}`).then(newmessage => {
                newmessage.react('👍')
                newmessage.react('👎')
                newmessage.react('🤷')
            });
        }

        if (ops.length > 1) {
            const quizEmbed = new Discord.MessageEmbed()
                .setColor('#ac74d4')
                .setTitle(`📊 ${ops[0]}`)
                .setFooter('Fun Bot', picture);
                for (i = 1; i < (ops.length); i++) {
                    let string = (ops[i])
                    let letter = (letters[i - 1])
                    quizEmbed.addField(letter, string)
                }
            message.channel.send({embed: quizEmbed}).then(embedMessage => {
            for (i = 0; i < (ops.length - 1); i++) {
                embedMessage.react(letters[i]);
            }
            message.delete({ timeout: 500 })
            });
        }
	},
};