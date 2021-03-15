var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Play CRS",
assets : {
    large_image : "crs",
    large_text : "Play Today!",
    small_image: "roblox"
},
buttons : [{label : "Join the Discord Server" , url : "https://discord.gg/ujXp4yq"},{label : "Play The Game",url : "https://www.roblox.com/games/6078379078/Coastial-Railway-Simulator"}]
}
})
})
client.login({ clientId : "818219879986888755" }).catch(console.error);

