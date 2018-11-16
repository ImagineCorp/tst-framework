module.exports.run = (client,message,prefix) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    try {
        require(`./commands/${cmd}.js`).run(client,message,args)
    } catch (err) {}
}