module.exports = [{
name: "c-skip", 
code: `Created \`/skip\` command.
$createApplicationCommand[$guildID;skip;Skip the current song;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]`
},	{
name: "skip",
type: 'interaction', 
prototype: 'slash', 
$if: "v5",
code: `

$interactionReply[$getVar[tick] Succesfully skipped the current song to add another one use \`play\`;;;;;no]
$skip





$onlyif[$voiceID[$authorID]==$voiceID[$clientID];{
"content" : "\`⛔\` You have to join the same voice channel as the bot",
"ephemeral" : true,
"options": {
"interaction": true
}
}]

$onlyif[$queueLength>=1;{
"content" : "\`⛔\` You have to **play** something first",
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



`
}]