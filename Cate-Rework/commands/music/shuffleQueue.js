module.exports = [{
name: "c-sf", 
code: `Created \`/shuffle_queue\` command.
$createApplicationCommand[$guildID;shuffle_queue;Shuffles the queue;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]
`
},	{
name: "shuffle_queue",
type: 'interaction', 
prototype: 'slash', 
$if: "v5",
code: `


$shuffleQueue
$interactionReply[$getVar[tick] Succesfully shuffled the queue;;;;;no]










$onlyif[$queueLength>=2;{
"content" : "\`⛔\` Queue must have 2 or more songs",
"ephemeral" : true,
"options": {
"interaction": true
}
}]

$onlyif[$voiceID[$authorID]==$voiceID[$clientID];{
"content" : "\`⛔\` You have to join the same voice channel as the bot",
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