module.exports = [{
name: "c-stop", 
code: `Created \`/stop\` command.
$createApplicationCommand[$guildID;stop;Stops the music player;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]
`
},	{
name: "stop",
type: 'interaction', 
prototype: 'slash', 
$if: "v5",
code: `

$stop
$interactionReply[$getVar[tick] Succesfully stopped the player;;;;;no]






$onlyif[$queueLength>=1;{
"content" : "\`⛔\` Queue must have 1 or more songs",
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