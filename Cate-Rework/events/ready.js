module.exports = (bot) => {
	bot.readyCommand({
		channel: "", 
		code: `
		$log[ $userTag[$clientID] is ready !]
		`
	});


 
  
}