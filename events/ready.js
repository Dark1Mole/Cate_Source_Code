module.exports = (bot) => {
	bot.readyCommand({
		channel: "", 
		code: `
		$log[✅ $userTag[$clientID] is fully operational 
💻 Commands: $commandsCount
👥 Servers : $serverCount
📖 Members: $allMembersCount
💾 Database: MongoDB ]
		`
	});


 
  
}