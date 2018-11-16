const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const commandHandler = require('./src/commandHandler.js')

client.on('ready', () => {
    console.log(`Hello world! ${client.guilds.size} servers`)
    client.user.setPresence({game: {name: `stories | -help`, type: 'PLAYING'}})
})

client.on('message', (message) => {
    if(message.author.bot || !message.content.startsWith(prefix)) return

    commandHandler.run(client,message,prefix)
})

client.login(config.token)