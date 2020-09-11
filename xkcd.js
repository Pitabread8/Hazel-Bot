const axios = require("axios");

module.exports = {
	name: 'xkcd',
    description: 'Sends a random xkcd.',
    aliases: ['comic'],
	async execute(message, args) {
	    let findtotal = async () => {
        let response = await axios.get(
        "https://xkcd.com/info.0.json"
        );
        let lastcomic = response.data
        return lastcomic;
        };
        let numdata = await findtotal();
        total = parseInt(numdata.num)

        comicnum = Math.floor( Math.random() * (numdata.num + 1) );

        let getcomic = async () => {
            let response = await axios.get(
            `https://xkcd.com/${comicnum}/info.0.json`
            );
            let comic = response.data
            return comic;
            };
            let data = await getcomic();
            message.channel.send(data.img)
	},
};