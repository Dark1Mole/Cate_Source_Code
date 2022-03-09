module.exports = [{
name: "c-prev", 
code: `Created \`/skip\` command.
$createApplicationCommand[$guildID;playPrevious;Plays the previous track;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]`
},	{
name: "play_previous",
type: 'interaction', 
prototype: 'slash', 
$if: "v5",
code: `

$interactionReply[$getVar[tick] Now playing $songInfo[title];;;;;no]
$playPrevious



$onlyif[$voiceID[$authorID]==$voiceID[$clientID];{
"content" : "\`⛔\` You have to join the same voice channel as the bot",
"ephemeral" : true,
"options": {
"interaction": true
}
}]

$onlyif[$queueLength>=2;{
"content" : "\`⛔\` The queue must have 2 or more songs",
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