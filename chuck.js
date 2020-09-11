const axios = require("axios");

module.exports = {
	name: 'chuck',
    description: 'Sends Chuck Norris facts. All hail the almighty Chuck!',
    aliases: ['chucky'],
	async execute(message, args) {
	    let getJoke = async () => {
        let response = await axios.get(
        "http://api.icndb.com/jokes/random"
        );
        let joke = response.data
        return joke;
        };
        let jokeValue = await getJoke();
        message.channel.send(`${jokeValue.value.joke}`);
	},
};