module.exports = [{
name: "c-disconnect", 
code: `Created \`/disconnect\` command.
$createApplicationCommand[$guildID;disconnect;The bot disconnectes from the voice channel that you are in;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]
`
},	{
name: "disconnect",
type: 'interaction', 
prototype: 'slash', 
$if: "v5",
code: `

$leaveVC
$interactionReply[$getVar[tick] Succesfully disconnected from <#$voiceID>;;;;;no]







$onlyif[$voiceId[$clientID]==$voiceID[$authorID];{
"content" : "\`⛔\` You have to join the same voice channel as the bot",
"ephemeral" : true,
"options": {
"interaction": true
}
}]


$onlyif[$voiceID[$clientID]!=;{
"content" : "\`⛔\` Bot is not connected to a voice channel",
"ephemeral" : true,
"options": {
"interaction": true
}
}]

$onlyif[$voiceID[$authorID]!=;{
"content" : "\`⛔\` You have to join a voice channel first",
"ephemeral" : true,
"options": {
"interaction": true
}
}]

$onlyPerms[mutemembers;deafenmembers;{
"content" : "\`⛔\` You require \`mutemembers,deafenmembers\` permission to perform this task",
"ephemeral" : true,
"options": {
"interaction": true
}
}]

`
}]