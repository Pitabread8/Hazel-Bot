let facts = [
    "The first manmade object in space was a missile created by the Nazis, and launched in 1942.",
    "An apple seed has at most 0.24 milligrams of cyanide, while a cherry seed (inside the pit) has about 0.17 grams of cyanide. If you've eaten either of these fruits, you could die.",
    "The most bestselling video game is Minecraft, followed by Tetris. They are superior to all games, after all.",
    "The word “set” has most amount of definitions for a single word: \"A set set of sets are set upon a tea set offered to Set as the sun set.\"",
    "\"Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo\" is gramatically correct. Use this to annoy people. You're welcome.",
    "Laser, Scuba, and Taser are all acronyms.",
    "You don't actually bite down. You bite up because of your lower jaw.",
    "Tear ducts drain tears, they don't produce them.",
    "Percentages are reversible. 8% of 25 is the same as 25% of 8 and one of them is much easier to do in your head. Don't thank me now. Thank me when you graduate from MIT.",
    `There are a lot of places and things that have names that are repetitive.\n"Sahara desert" is "desert desert". \n"Soviet union" is "union union".  \n"DC comics" is "Detective comics comics". \n"ATM Machine" is "Automated Teller Machine machine". \n"SAT Test" is "Standard Aptitude Test test".`,
    `There are a lot of places and things that have names that are repetitive. \n"Koala bear" is "bear bear". \n"Vermont mountain, Vermont" is "Green mountain mountain, green mountain". \n"UPC Code" is "Universal Product Code code". \n"Mount Fuji" is "Mount Mount" or "Mountain mountain". "\nLAN Network" is "Local Area Network Network". \n"PDF Format" is "Portable Document Format format"`,
    "The hundred years war lasted 116 years, people just can't count time. ",
    "If your parents didn't have children, you're unlikely to have children either.",
    "If there were no laws, there would be no crime. Please help bring this to the government's attention.",
    "Everyone who drinks water dies. If you're reading this, you might die.",
    "Attention! Dihydrogen Monoxide is a deadly chemical that can kill you in many ways. It's effects are largely overlooked. Visit www.dhmo.org to learn more about this molecule made up of two hydrogen atoms and one oxygen atom.",
    "All deaths are caused by body failure. Avoid body failure at all costs.",
    "Most out-of-town trips require travelling.",
    "The #1 cause of divorce is marriage. Don't get married, then.",
    "Marriages that don't end in divorce end in death. Do not get married!",
    'The movie that has made the most money, after being adjusted for inflation, is Gone With the Wind, released in 1940. Haha, Marvel fans. Your movie made *500 million* less dollars.',
    'History classes are only going to get longer and harder as time goes on.',
    'If the oldest person on earth is 116 years old, then 117 years ago, there was a completely different set of human beings on earth.',
    'We rescue homeless animals and shun homeless people.',
    'The reason "cheaters never win" is because the cheaters that did win didn\'t get caught.',
    'Aliens invaded the Moon on July 20th, 1969.',
    'Technically, it\'s impossible to skip breakfast. The first time you eat during a day is when you "break your fast."',
    'Most people can eat the same breakfast weeks in a row, without complaint. But the same dinner for weeks? Now, that\'s just insanity.',
    'My entire life has led up to this moment" is always true.',
    'I will be the last person to die in my lifetime.',
    'I wonder if I am closer to my death or my birth right now.',
    'In order to fall asleep, you have to pretend to be asleep.',
    '"Squawks" said backwards still sounds the same even though it\'s not a palindrome',
    'If people on a planet 65 million light years away look at earth, they see dinosaurs.',
    'If you did something like a boss, you\'d probably just pay someone else to do it.',
    'All our pets might have stockholm syndrome.',
    'Mars... Is populated entirely by robots!',
    'If two people on opposite sides of the world each drop a piece of bread, the earth briefly becomes a sandwich.',
    'The war on drugs probably has more POWs than any actual war.',
    'When you drink alcohol, you are just borrowing happiness from tomorrow.',
    'Your stomach thinks all potato is mashed.',
    '"slang" is a colloquial word for "colloquial word."',
    'Technically speaking, wouldn\'t your best friend be your worst enemy?',
    'Kevin spacey gets paid more to pretend to be a politician than real ones get paid to run the country.',
    'Wake up earlier on weekends. Now you get to sleep in for 5 days a week instead of two.',
    'Teach a man to fish he\'ll pay you once, sell a man a fish and he\'ll pay you for a lifetime.',
    'Saying "I\'ve lost the stylus for my tablet" would have also made sense 2000 years ago.',
    'The object of golf is to play the least amount of golf.',
    'Babysitters are teenagers who behave like grown-ups so that grown-ups can go out and behave like teenagers.',
    'People are so amazed by the fact that every snowflake is different, but nobody cares that every potato is unique',
    'Monopoly would be more realistic if the person with the most money got to change the rules whenever they liked',
    'The number 14322321 describes itself. It has one 4, three 2\'s, two 3\'s, and two 1\'s.',
    'The brain technically named itself',
    'Of all the spiderman universes you could have been born in, you were born in the one where he is a fictional character.'
];

module.exports = {
	name: 'fact',
	description: 'Sends interesting, important, mostly unknown, somewhat sarcastic facts.',
	execute(message, args) {
        var num = Math.floor( Math.random() * (facts.length) );
        message.channel.send(facts[num])
        // console.log(num);
        // var color = Math.floor( Math.random() * (colors.length + 1) );
        // // inside a command, event listener, etc.
        // const factEmbed = new Discord.MessageEmbed()
        //     .setColor(colors[color])
        //     .setTitle(facts[num])
        //     // .setTitle(facts[facts.length - 1])
        //     .setFooter('Fun Bot', picture);
        // message.channel.send(factEmbed);
	},
};
  