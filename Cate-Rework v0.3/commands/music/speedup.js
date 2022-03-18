module.exports = [{
name: "c-sp", 
code: `Created \`/speedup\` command.
$createApplicationCommand[$guildID;speedup;Speeds up the song;true;slash]
$onlyForIDs[$botOwnerID;
	{
		"content":"No."
	}
]`
},	{
name: "speedup",
type: 'interaction', 
prototype: 'slash', 
$if: "v5",
code: `
$let[$addFilter[{"atempo" : "1.5"}]]

$interactionReply[$getVar[tick] Succesfully speed up the song to revert use \`/remove_filters\`]






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

$onlyPerms[mutemembers;deafenmembers;{
"content" : "\`⛔\` You require \`mutemembers,deafenmembers\` permission to perform this task",
"ephemeral" : true,
"options": {
"interaction": true
}
}]



`
}]