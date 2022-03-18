module.exports = (bot) => {

	bot.status({
		text: "$userTag[$clientID] PTB $getVar[botv]",
		type: "LISTENING", 
		status: "online", 
		time: 6
	}) 
}