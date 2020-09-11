const ytdl = require('ytdl-core');

module.exports = {
	name: 'play',
    description: 'Play a song with a youtube link.',
	async execute(message, args) {
    const vc = message.member.voice.channel;
    if(!vc) return message.channel.send("You need to be in a voice channel to play music!")

    let info = await ytdl.getInfo(args[0]);

    let connection = await vc.join();
    let dispatcher = await connection.play(ytdl(args[0], { filter: 'audioonly' }));

    message.channel.send(`Now playing **${info.videoDetails.title}**!`);

    dispatcher.on('finish', ()=> vc.leave())
    },
};