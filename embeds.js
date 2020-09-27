
const welcome = new Discord.MessageEmbed()
	.setColor('#6a0dad')
	.setTitle('Welcome to the Idiot Kingdom!')
	.setDescription('We hope you brought pizza! Head on over to <#757746756040523886> and use the "-verify" command to verify there! Have a good time!')
    .setThumbnail('https://cdn.discordapp.com/attachments/752868926878122015/757760162487468062/a_better_gif.gif')
    .addFields(
		{ name: 'Info:', value: 'Use -help to get a list of commands that you can use. You can also receive the role commands to add yourself any roles you want.' },
	)
	.setTimestamp()
    .setFooter('Join date:');

const rules = new Discord.MessageEmbed()
    .setColor('#6a0dad')
    .setTitle('Rules of the Idiot Kingdom')
    .setDescription('Read the rules before you do anything in the server.')
    .addFields(
        { name: 'Information and general rules:', value: '<@&750175665768104026> and <@&750175798232743967> are the staff positions on the server. Ping or DM them for help.\n \n 1. You are allowed to swear within this server. \n \n 2. Harassment or hate speech will not be tolerated. Using slurs like the N word is not allowed. \n \n  3. NSFW content will not be tolerated.', inline: false },
        { name: 'Text channel rules: ', value: "1. Toxicity will result in a kick. \n \n 2. Sending harmful links such as viruses and IP grabbers will result in a permanent ban. \n \n 3. Refrain from harmful and sensitive topics like rape.\n \n 4. Spamming in <#750227922316689448> will result in a mute.\n \n 5. Making threats about things like DDoSing and hacking is not allowed. \n \n 6. Posting someone's personal information without permission will result in a permanent ban.\n \n 7.  Unnecessarily pinging staff with little reasoning will result in a kick. If repeated will lead to a ban.\n \n 8. Mass pinging/Spam pinging someone is NOT allowed.", inline: false },
        { name: 'Voice channel rules:', value: "1. Do not scream or play music in your mic. It's annoying.\n \n  2. Use the correct voice channel for your intended purposes.", inline: false },
        { name: 'If you are to break these rules, our staff will be able to mute/ban/kick you without warning.', value: 'React to this message to show that you understand these rules.', inline: false }
    )
    .setFooter('The Idiot Kingdom');

const help = new Discord.MessageEmbed()
    .setColor('#6a0dad')
    .setTitle('Commands list:')
    .setDescription('Here is a list of commands. The prefix is "-"')
    .addFields(
        { name: 'Basic commands:', value: '-help - Opens this menu right here \n -ping - Sends the latency of the bot. \n -dadjoke - A cool dadjoke that is incredibly funny \n -dogs - Cute dog pictures! \n -cats - Some cute cats pictures!  \n -info - Contains information about me and the bot. You can gain my discord tag there and suggest some features there.', inline: false },
        { name: 'Role Commands:', value: "-addrolebsm - Adds the 'BSM' role. By having the BSM role you show that you are in BSM. \n -addrolewelcomer - Adds the 'Welcomer' role. As a welcomer you will greet people who join the server. \n -addroleannouncement - Adds the 'Announcements' role. You will be pinged for smaller things like bot updates and such.", inline: false },
        { name: 'Staff Only Commands', value: "-poll (Question) - Makes a poll and autoreacts with thumbsup and thumbsdown. \n -purge (2-100) - Deletes an ammount of messages from 2 - 100. \n -say (Message) - Makes the bot say something. \n -kick (User) - Kicked the person you mention. \n -ban (User)- Bans the person you mention.", inline: false },
    )
    .setFooter('Taewoobot');

const dadjoke = new Discord.MessageEmbed()
    .setColor('#6a0dad')
    .setTitle('Dadjoke')
    .setDescription(`${repliesdadjoke[random]}`)
    .setFooter('Powered by Taewoobot');


