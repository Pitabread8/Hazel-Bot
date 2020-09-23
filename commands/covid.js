// Contrary to popular opinion, this file does not give you nor your computer Covid-19.

const Discord = require('discord.js');
const axios = require("axios");

module.exports = {
	name: 'covid',
    description: 'Get coronavirus...information.',
    usage: '?covid [state code]',
	async execute(message, args) {
	    let getVirus = async () => {
            let response = await axios.get(`https://api.covidtracking.com/v1/states/${args[0]}/current.json`);
            let virus = response.data
            return virus;
        };

        let virusValue = await getVirus();

        newdate = (`${virusValue.date}`).substring(4,6) + '/' + (`${virusValue.date}`).substring(6,9) + '/' + (`${virusValue.date}`).substring(0,4)

        const covidEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Covid-19 Information')
            .setURL('https://covidtracking.com')
            .setAuthor('Stay safe!')
            .setThumbnail('https://mediad.publicbroadcasting.net/p/nhpr/files/styles/x_large/public/202003/coronavirus_2_cdc.jpg')
            .addFields(
                { name: 'Cases', value: `${virusValue.positive}` },
                { name: 'Deaths', value: `${virusValue.death}` }
            )
            .setFooter(newdate);
            
        message.channel.send(covidEmbed); 
	},
};
