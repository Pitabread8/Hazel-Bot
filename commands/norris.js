const fetch = require("node-fetch");

module.exports = {
	name: 'norris',
	description: 'Sends more Chuck Norris facts, because you can never have enough.',
	async execute(message, args) {
	    const response = await fetch("https://api.chucknorris.io/jokes/random");
        const fact = await response.json();
        let r = fact.value;
        message.channel.send(r)
	},
};
