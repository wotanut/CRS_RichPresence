var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Cache, Big things planned",
assets : {
large_image : "cache",
large_text : "Invite Cache today!" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Join the Support Server" , url : "https://discord.gg/uNKfBdQHUx"},{label : "Invite Cache",url : "https://discord.com/api/oauth2/authorize?client_id=792899384017682473&permissions=8&scope=bot"}]
}
})
})
client.login({ clientId : "804740685025771572" }).catch(console.error);
